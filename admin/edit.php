<?php
// admin/edit.php
require_once "auth.php";
require_once "config.php";
require_once "webhook.php";

// Auto-ensure status column exists
try {
    $pdo->exec("ALTER TABLE blog_posts ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'published'");
} catch (Exception $e) {}

$title = $slug = $meta_title = $meta_description = $category = $author = $image_alt = $excerpt = $content = $existing_image = "";
$status = "published";
$error = "";
$id = "";

if(isset($_GET["id"]) && !empty(trim($_GET["id"]))){
    $id = trim($_GET["id"]);
    $sql = "SELECT * FROM blog_posts WHERE id = :id";
    if($stmt = $pdo->prepare($sql)){
        $stmt->bindParam(":id", $param_id);
        $param_id = $id;
        if($stmt->execute()){
            if($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                $title = $row["title"];
                $slug = $row["slug"];
                $meta_title = $row["meta_title"];
                $meta_description = $row["meta_description"];
                $category = $row["category"];
                $author = $row["author"];
                $image_alt = $row["image_alt"];
                $excerpt = $row["excerpt"];
                $content = $row["content"];
                $existing_image = $row["image_path"];
                $status = !empty($row["status"]) ? $row["status"] : "published";
            } else {
                header("location: index.php");
                exit();
            }
        }
    }
} elseif($_SERVER["REQUEST_METHOD"] != "POST"){
    header("location: index.php");
    exit();
}

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $id = $_POST["id"];
    $existing_image = $_POST["existing_image"];
    $prev_status = $_POST["prev_status"] ?? "published";
    
    $title = trim($_POST["title"] ?? "");
    $slug = trim($_POST["slug"] ?? "");
    $meta_title = trim($_POST["meta_title"] ?? "");
    $meta_description = trim($_POST["meta_description"] ?? "");
    $category = trim($_POST["category"] ?? "") ?: "Mental Wellness";
    $author = trim($_POST["author"] ?? "") ?: "Monika Arora";
    $image_alt = trim($_POST["image_alt"] ?? "");
    $excerpt = trim($_POST["excerpt"] ?? "");
    $content = trim($_POST["content"] ?? "");

    // Determine target status
    if (isset($_POST["submit_action"]) && in_array($_POST["submit_action"], ["published", "draft"])) {
        $status = $_POST["submit_action"];
    } elseif (isset($_POST["status"]) && in_array($_POST["status"], ["published", "draft"])) {
        $status = $_POST["status"];
    } else {
        $status = "published";
    }

    if (empty($title)) {
        $error = "Please enter a post title.";
    } elseif ($status === "published" && empty($content)) {
        $error = "Please enter post content before publishing, or save as draft.";
    }
    
    if (empty($slug) && !empty($title)) {
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
    }

    $image_path = $existing_image;
    if(isset($_FILES["image"]) && $_FILES["image"]["error"] == 0){
        $filename = $_FILES["image"]["name"];
        $upload_dir = "uploads/";
        if (!is_dir($upload_dir)) mkdir($upload_dir, 0777, true);
        $new_filename = uniqid() . "_" . preg_replace("/[^a-zA-Z0-9.-]/", "_", $filename);
        if(move_uploaded_file($_FILES["image"]["tmp_name"], $upload_dir . $new_filename)){
            $image_path = $upload_dir . $new_filename;
            if(!empty($existing_image) && file_exists($existing_image)){
                unlink($existing_image);
            }
        } else {
            $error = "Error uploading file.";
        }
    }

    if(empty($error)){
        $sql = "UPDATE blog_posts SET title=:title, slug=:slug, meta_title=:meta_title, meta_description=:meta_description, 
                category=:category, author=:author, image_alt=:image_alt, excerpt=:excerpt, content=:content, image_path=:image_path, status=:status WHERE id=:id";
         
        if($stmt = $pdo->prepare($sql)){
            $stmt->execute([
                ":title" => $title,
                ":slug" => $slug,
                ":meta_title" => $meta_title,
                ":meta_description" => $meta_description,
                ":category" => $category,
                ":author" => $author,
                ":image_alt" => $image_alt,
                ":excerpt" => $excerpt,
                ":content" => $content,
                ":image_path" => $image_path,
                ":status" => $status,
                ":id" => $id
            ]);
            
            // Trigger Vercel rebuild if post is published or was previously published (to unpublish)
            if ($status === 'published' || $prev_status === 'published') {
                trigger_vercel_deploy();
            }
            
            $msg = ($status === 'published') ? 'published' : 'draft_saved';
            header("location: index.php?msg=" . $msg);
            exit();
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Edit Post - Soulcare Admin</title>
    <style>
        body { font-family: sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
        .wrapper { background: #fff; padding: 30px; border-radius: 8px; max-width: 900px; margin: 0 auto; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .section-title { font-size: 1.2em; font-weight: bold; margin: 30px 0 15px; padding-bottom: 5px; border-bottom: 2px solid #eee; }
        .form-group { margin-bottom: 20px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; color: #333; }
        input[type="text"], select, textarea { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; font-family: sans-serif;}
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .btn-publish { padding: 12px 22px; background: #28a745; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 15px; font-weight: bold; transition: opacity 0.2s; }
        .btn-publish:hover { opacity: 0.9; }
        .btn-draft { padding: 12px 22px; background: #5a6268; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 15px; font-weight: bold; transition: opacity 0.2s; }
        .btn-draft:hover { opacity: 0.9; }
        .btn-unpublish { padding: 12px 22px; background: #e0a800; color: #212529; border: none; border-radius: 4px; cursor: pointer; font-size: 15px; font-weight: bold; transition: opacity 0.2s; }
        .btn-unpublish:hover { opacity: 0.9; }
        .btn-secondary { background: #e2e6ea; color: #333; text-decoration: none; padding: 12px 20px; border-radius: 4px; font-weight: bold; display: inline-block; }
        .error { color: #721c24; background-color: #f8d7da; border: 1px solid #f5c6cb; padding: 12px; border-radius: 4px; margin-bottom: 20px; }
        .note { font-size: 0.85em; color: #666; margin-top: 4px; display: block; }
        .current-image { margin-top: 10px; }
        .status-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 6px; padding: 15px; margin-bottom: 25px; }
        .status-options { display: flex; gap: 20px; margin-top: 8px; }
        .status-option { display: flex; align-items: center; gap: 6px; cursor: pointer; font-weight: normal; }
        .badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 12px; font-weight: bold; }
        .badge-published { background: #d4edda; color: #155724; }
        .badge-draft { background: #fff3cd; color: #856404; }
    </style>
    <!-- TinyMCE Rich Text Editor -->
    <script src="https://cdn.tiny.cloud/1/ga1gwyazohtg9irxh55gbsrzgcnouxc1nb4ruto5d98edue9/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
    <script>
      tinymce.init({
        selector: '#content-editor',
        plugins: 'lists link image preview code',
        toolbar: 'blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | blockquote | link image | code',
        block_formats: 'Paragraph=p; Heading 2=h2; Heading 3=h3; Quote=blockquote',
        min_height: 400
      });
    </script>
</head>
<body>
    <div class="wrapper">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2>Edit Blog Post</h2>
            <div>
                <?php if ($status === 'draft'): ?>
                    <span class="badge badge-draft" style="font-size: 14px; padding: 6px 12px;">🟡 Current Status: DRAFT</span>
                <?php else: ?>
                    <span class="badge badge-published" style="font-size: 14px; padding: 6px 12px;">🟢 Current Status: PUBLISHED</span>
                <?php endif; ?>
            </div>
        </div>
        
        <?php if($error) echo "<div class='error'>$error</div>"; ?>
        
        <form action="<?php echo htmlspecialchars(basename($_SERVER['REQUEST_URI'])); ?>" method="post" enctype="multipart/form-data">
            
            <div class="status-box">
                <label style="margin-bottom: 4px;">Change Status</label>
                <div class="status-options">
                    <label class="status-option">
                        <input type="radio" name="status" value="published" <?php echo ($status === 'published') ? 'checked' : ''; ?>>
                        <span class="badge badge-published">Published</span> &mdash; Live on soulcarebymonika.com
                    </label>
                    <label class="status-option">
                        <input type="radio" name="status" value="draft" <?php echo ($status === 'draft') ? 'checked' : ''; ?>>
                        <span class="badge badge-draft">Draft</span> &mdash; Hidden from public
                    </label>
                </div>
            </div>

            <div class="section-title">1. Basic Info & SEO</div>
            <div class="form-group">
                <label>Post Title *</label>
                <input type="text" name="title" value="<?php echo htmlspecialchars($title); ?>" required>
            </div>
            
            <div class="grid-2">
                <div class="form-group">
                    <label>URL Slug</label>
                    <input type="text" name="slug" value="<?php echo htmlspecialchars($slug); ?>" placeholder="Auto-generates if left blank">
                    <span class="note">e.g. why-your-brain-reacts-to-stress</span>
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <input type="text" name="category" value="<?php echo htmlspecialchars($category); ?>" placeholder="Mental Wellness">
                </div>
            </div>

            <div class="grid-2">
                <div class="form-group">
                    <label>Meta Title</label>
                    <input type="text" name="meta_title" value="<?php echo htmlspecialchars($meta_title); ?>">
                    <span class="note">Title for search engines</span>
                </div>
                <div class="form-group">
                    <label>Meta Description</label>
                    <input type="text" name="meta_description" value="<?php echo htmlspecialchars($meta_description); ?>">
                </div>
            </div>
            
            <div class="form-group">
                <label>Author</label>
                <input type="text" name="author" value="<?php echo htmlspecialchars($author); ?>" placeholder="Monika Arora">
            </div>

            <div class="section-title">2. Hero Image</div>
            <div class="grid-2">
                <div class="form-group">
                    <label>Featured Image</label>
                    <input type="file" name="image" accept="image/*">
                </div>
                <div class="form-group">
                    <label>Image Alt Text</label>
                    <input type="text" name="image_alt" value="<?php echo htmlspecialchars($image_alt); ?>">
                    <span class="note">Important for SEO and accessibility</span>
                </div>
            </div>
            
            <?php if(!empty($existing_image)): ?>
                <div class="current-image" style="margin-bottom: 20px;">
                    <img src="<?php echo htmlspecialchars($existing_image); ?>" width="150" alt="Current Image" style="border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.2);"><br>
                    <small style="color: #666;">Current Image</small>
                </div>
            <?php endif; ?>

            <div class="section-title">3. Content</div>
            <div class="form-group">
                <label>Intro / Excerpt</label>
                <textarea name="excerpt" rows="3" placeholder="Brief summary to hook the reader..."><?php echo htmlspecialchars($excerpt); ?></textarea>
            </div>
            
            <div class="form-group">
                <label>Main Blog Content</label>
                <span class="note" style="margin-bottom: 8px;">Use the toolbar to add Headings, Bullet Lists, and Quotes.</span>
                <textarea id="content-editor" name="content"><?php echo htmlspecialchars($content); ?></textarea>
            </div>
            
            <input type="hidden" name="id" value="<?php echo $id; ?>"/>
            <input type="hidden" name="existing_image" value="<?php echo htmlspecialchars($existing_image); ?>"/>
            <input type="hidden" name="prev_status" value="<?php echo htmlspecialchars($status); ?>"/>
            
            <div class="form-group" style="margin-top: 30px; display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                <?php if ($status === 'draft'): ?>
                    <button type="submit" name="submit_action" value="published" class="btn-publish">
                        🚀 Publish Now
                    </button>
                    <button type="submit" name="submit_action" value="draft" class="btn-draft">
                        💾 Save Draft
                    </button>
                <?php else: ?>
                    <button type="submit" name="submit_action" value="published" class="btn-publish">
                        💾 Update Post
                    </button>
                    <button type="submit" name="submit_action" value="draft" class="btn-unpublish" onclick="return confirm('Convert this post to draft? It will be hidden from the live website.');">
                        ↩ Revert to Draft (Unpublish)
                    </button>
                <?php endif; ?>
                
                <a href="index.php" class="btn-secondary">Cancel</a>
            </div>
        </form>
    </div>
</body>
</html>
