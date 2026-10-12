<?php
// admin/index.php
require_once "auth.php";
require_once "config.php";

// Auto-ensure status column exists
try {
    $pdo->exec("ALTER TABLE blog_posts ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'published'");
} catch (Exception $e) {}
try {
    $pdo->exec("UPDATE blog_posts SET status = 'published' WHERE status IS NULL OR status = ''");
} catch (Exception $e) {}

// Post counts
$count_all = 0;
$count_published = 0;
$count_drafts = 0;
try {
    $count_all = (int)$pdo->query("SELECT COUNT(*) FROM blog_posts")->fetchColumn();
    $count_published = (int)$pdo->query("SELECT COUNT(*) FROM blog_posts WHERE status = 'published' OR status IS NULL OR status = ''")->fetchColumn();
    $count_drafts = (int)$pdo->query("SELECT COUNT(*) FROM blog_posts WHERE status = 'draft'")->fetchColumn();
} catch (Exception $e) {}

// Filtering
$filter = $_GET['filter'] ?? 'all';
if ($filter === 'draft') {
    $sql = "SELECT * FROM blog_posts WHERE status = 'draft' ORDER BY created_at DESC";
} elseif ($filter === 'published') {
    $sql = "SELECT * FROM blog_posts WHERE status = 'published' OR status IS NULL OR status = '' ORDER BY created_at DESC";
} else {
    $sql = "SELECT * FROM blog_posts ORDER BY created_at DESC";
}
$stmt = $pdo->prepare($sql);
$stmt->execute();
$posts = $stmt->fetchAll();

// Count pending reviews needing verification
$pending_count = 0;
try {
    $pending_count = (int)$pdo->query("SELECT COUNT(*) FROM reviews WHERE approved = 0")->fetchColumn();
} catch (Exception $e) {}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dashboard - Soulcare Admin</title>
    <style>
        body { font-family: sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
        .header { background: #2E4C63; color: #fff; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; }
        .header a.logout { color: #fff; text-decoration: none; background: #9C4719; padding: 8px 12px; border-radius: 4px; }
        .container { padding: 20px; max-width: 1050px; margin: 0 auto; }
        .top-actions { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; }
        .btn-create { display: inline-flex; align-items: center; background: #28a745; color: #fff !important; padding: 10px 16px; text-decoration: none !important; border-radius: 4px; font-weight: bold; cursor: pointer; transition: opacity 0.2s; }
        .btn-create:hover { opacity: 0.9; }
        .btn-reviews { display: inline-flex; align-items: center; gap: 6px; background: #2E4C63; color: #fff !important; padding: 10px 16px; text-decoration: none !important; border-radius: 4px; font-weight: bold; cursor: pointer; transition: opacity 0.2s; }
        .btn-reviews:hover { opacity: 0.9; }
        .badge-count { background: #9C4719; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px; margin-left: 4px; pointer-events: none; }
        
        .filter-tabs { display: flex; gap: 10px; margin-bottom: 15px; }
        .filter-tab { padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 13px; font-weight: 600; color: #495057; background: #e9ecef; transition: all 0.2s; display: inline-flex; align-items: center; gap: 6px; }
        .filter-tab:hover { background: #dee2e6; }
        .filter-tab.active { background: #2E4C63; color: #fff; }
        .tab-counter { background: rgba(0,0,0,0.1); border-radius: 10px; padding: 1px 7px; font-size: 11px; }
        .filter-tab.active .tab-counter { background: rgba(255,255,255,0.25); color: #fff; }

        .alert-banner { padding: 12px 16px; border-radius: 4px; margin-bottom: 20px; font-weight: 500; font-size: 14px; }
        .alert-success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .alert-info { background: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb; }

        table { width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; }
        th, td { padding: 14px 12px; text-align: left; border-bottom: 1px solid #eee; }
        th { background: #f8f9fa; font-weight: 600; color: #495057; }
        
        .badge-status { display: inline-block; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
        .badge-published { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .badge-draft { background: #fff3cd; color: #856404; border: 1px solid #ffeeba; }

        .action-links a { margin-right: 12px; text-decoration: none; color: #007bff; font-weight: 500; font-size: 13px; }
        .action-links a.publish { color: #28a745; font-weight: bold; }
        .action-links a.unpublish { color: #856404; }
        .action-links a.delete { color: #dc3545; }
    </style>
</head>
<body>
    <div class="header">
        <h2>Soulcare Admin Dashboard</h2>
        <div>
            <span>Welcome, <?php echo htmlspecialchars($_SESSION["username"]); ?>!</span>
            <a href="logout.php" class="logout" style="margin-left: 15px;">Logout</a>
        </div>
    </div>
    
    <div class="container">
        <?php if (isset($_GET['msg'])): ?>
            <?php if ($_GET['msg'] === 'published'): ?>
                <div class="alert-banner alert-success">
                    ✓ Post published successfully! Rebuilding website so it appears live.
                </div>
            <?php elseif ($_GET['msg'] === 'draft_saved'): ?>
                <div class="alert-banner alert-info">
                    ✓ Draft saved! This post is stored safely and remains hidden from the live website.
                </div>
            <?php endif; ?>
        <?php endif; ?>

        <div class="top-actions">
            <div>
                <a href="create.php" class="btn-create">+ Create New Post</a>
                <a href="reviews.php" class="btn-reviews">
                    ★ Manage Reviews
                    <?php if ($pending_count > 0): ?>
                        <span class="badge-count"><?= $pending_count ?> PENDING</span>
                    <?php endif; ?>
                </a>
            </div>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-tabs">
            <a href="index.php?filter=all" class="filter-tab <?= ($filter === 'all') ? 'active' : '' ?>">
                All Posts <span class="tab-counter"><?= $count_all ?></span>
            </a>
            <a href="index.php?filter=published" class="filter-tab <?= ($filter === 'published') ? 'active' : '' ?>">
                Published <span class="tab-counter"><?= $count_published ?></span>
            </a>
            <a href="index.php?filter=draft" class="filter-tab <?= ($filter === 'draft') ? 'active' : '' ?>">
                Drafts <span class="tab-counter"><?= $count_drafts ?></span>
            </a>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th style="width: 50px;">ID</th>
                    <th style="width: 70px;">Image</th>
                    <th>Title</th>
                    <th style="width: 120px;">Status</th>
                    <th style="width: 140px;">Created At</th>
                    <th style="width: 190px;">Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php if($posts): ?>
                    <?php foreach($posts as $post): ?>
                        <?php $is_draft = (isset($post['status']) && $post['status'] === 'draft'); ?>
                        <tr>
                            <td><?php echo $post['id']; ?></td>
                            <td>
                                <?php if($post['image_path']): ?>
                                    <img src="<?php echo htmlspecialchars($post['image_path']); ?>" width="50" height="35" style="object-fit: cover; border-radius: 3px;" alt="Image">
                                <?php else: ?>
                                    <span style="color: #999; font-size: 11px;">No Image</span>
                                <?php endif; ?>
                            </td>
                            <td>
                                <strong><?php echo htmlspecialchars($post['title']); ?></strong>
                                <?php if($is_draft): ?>
                                    <div style="font-size: 11px; color: #856404; margin-top: 2px;">Hidden from live website</div>
                                <?php endif; ?>
                            </td>
                            <td>
                                <?php if($is_draft): ?>
                                    <span class="badge-status badge-draft">🟡 Draft</span>
                                <?php else: ?>
                                    <span class="badge-status badge-published">🟢 Published</span>
                                <?php endif; ?>
                            </td>
                            <td><?php echo date('M d, Y', strtotime($post['created_at'])); ?></td>
                            <td class="action-links">
                                <?php if($is_draft): ?>
                                    <a href="publish.php?id=<?php echo $post['id']; ?>&action=publish" class="publish" onclick="return confirm('Publish this draft to the live site now?');">Publish</a>
                                <?php else: ?>
                                    <a href="publish.php?id=<?php echo $post['id']; ?>&action=unpublish" class="unpublish" onclick="return confirm('Convert this post to draft? It will be hidden from the live website.');">Unpublish</a>
                                <?php endif; ?>
                                <a href="edit.php?id=<?php echo $post['id']; ?>">Edit</a>
                                <a href="delete.php?id=<?php echo $post['id']; ?>" class="delete" onclick="return confirm('Are you sure you want to delete this post?');">Delete</a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="6" style="text-align: center; padding: 30px; color: #777;">
                            <?php if ($filter === 'draft'): ?>
                                No draft posts found. You can save any post as a draft when creating or editing it!
                            <?php elseif ($filter === 'published'): ?>
                                No published posts found.
                            <?php else: ?>
                                No blog posts found.
                            <?php endif; ?>
                        </td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</body>
</html>
