<?php
// admin/create.php
require_once "auth.php";
require_once "config.php";

$title = $slug = $meta_title = $meta_description = $category = $author = $image_alt = $excerpt = $content = "";
$error = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $title = trim($_POST["title"]);
    $slug = trim($_POST["slug"]);
    $meta_title = trim($_POST["meta_title"]);
    $meta_description = trim($_POST["meta_description"]);
    $category = trim($_POST["category"]) ?: "Mental Wellness";
    $author = trim($_POST["author"]) ?: "Monika Arora";
    $image_alt = trim($_POST["image_alt"]);
    $excerpt = trim($_POST["excerpt"]);
    $content = trim($_POST["content"]);

    if(empty($title) || empty($content)){
        $error = "Please enter a title and content.";
    }
    
    if(empty($slug) && !empty($title)) {
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
    }

    $image_path = null;
    if(isset($_FILES["image"]) && $_FILES["image"]["error"] == 0){
        $filename = $_FILES["image"]["name"];
        $upload_dir = "uploads/";
        if (!is_dir($upload_dir)) mkdir($upload_dir, 0777, true);
        $new_filename = uniqid() . "_" . preg_replace("/[^a-zA-Z0-9.-]/", "_", $filename);
        if(move_uploaded_file($_FILES["image"]["tmp_name"], $upload_dir . $new_filename)){
            $image_path = $upload_dir . $new_filename;
        } else {
            $error = "Error uploading file.";
        }
    }

    if(empty($error)){
        $sql = "INSERT INTO blog_posts (title, slug, meta_title, meta_description, category, author, image_alt, excerpt, content, image_path) 
                VALUES (:title, :slug, :meta_title, :meta_description, :category, :author, :image_alt, :excerpt, :content, :image_path)";
         
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
                ":image_path" => $image_path
            ]);
            header("location: index.php");
            exit();
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create Post</title>
    <style>
        body { font-family: sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
        .wrapper { background: #fff; padding: 30px; border-radius: 8px; max-width: 900px; margin: 0 auto; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .section-title { font-size: 1.2em; font-weight: bold; margin: 30px 0 15px; padding-bottom: 5px; border-bottom: 2px solid #eee; }
        .form-group { margin-bottom: 20px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; color: #333; }
        input[type="text"], textarea { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; font-family: sans-serif;}
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .btn { padding: 10px 15px; background: #28a745; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
        .btn-secondary { background: #6c757d; color: #fff; text-decoration: none; padding: 10px 15px; border-radius: 4px; margin-left: 10px; }
        .error { color: red; margin-bottom: 15px; }
        .note { font-size: 0.85em; color: #666; margin-top: 4px; display: block; }
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
        <h2>Create New Blog Post</h2>
        <?php if($error) echo "<div class='error'>$error</div>"; ?>
        
        <form action="create.php" method="post" enctype="multipart/form-data">
            
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

            <div class="section-title">3. Content</div>
            <div class="form-group">
                <label>Intro / Excerpt</label>
                <textarea name="excerpt" rows="3" placeholder="Brief summary to hook the reader..."><?php echo htmlspecialchars($excerpt); ?></textarea>
            </div>
            
            <div class="form-group">
                <label>Main Blog Content *</label>
                <span class="note" style="margin-bottom: 8px;">Use the toolbar to add Headings, Bullet Lists, and Quotes.</span>
                <textarea id="content-editor" name="content"><?php echo htmlspecialchars($content); ?></textarea>
            </div>
            
            <div class="form-group" style="margin-top: 30px;">
                <input type="submit" class="btn" value="Publish Post">
                <a href="index.php" class="btn-secondary">Cancel</a>
            </div>
        </form>
    </div>
</body>
</html>
