<?php
// admin/index.php
require_once "auth.php";
require_once "config.php";

$sql = "SELECT * FROM blog_posts ORDER BY created_at DESC";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$posts = $stmt->fetchAll();

// Count pending reviews needing verification
$pending_count = 0;
try {
    $pending_count = (int)$pdo->query("SELECT COUNT(*) FROM reviews WHERE approved = 0")->fetchColumn();
} catch (Exception $e) {
    // Table might not exist yet before SQL setup
}
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
        .container { padding: 20px; max-width: 1000px; margin: 0 auto; }
        .btn-create { display: inline-block; background: #28a745; color: #fff; padding: 10px 15px; text-decoration: none; border-radius: 4px; margin-bottom: 20px; font-weight: bold; }
        .btn-reviews { display: inline-block; background: #2E4C63; color: #fff; padding: 10px 15px; text-decoration: none; border-radius: 4px; margin-left: 10px; margin-bottom: 20px; font-weight: bold; }
        .badge-count { background: #9C4719; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px; margin-left: 6px; }
        table { width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #f8f9fa; }
        .action-links a { margin-right: 10px; text-decoration: none; color: #007bff; }
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
        <a href="create.php" class="btn-create">+ Create New Post</a>
        <a href="reviews.php" class="btn-reviews">
            ★ Manage Reviews
            <?php if ($pending_count > 0): ?>
                <span class="badge-count"><?= $pending_count ?> PENDING</span>
            <?php endif; ?>
        </a>
        
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php if($posts): ?>
                    <?php foreach($posts as $post): ?>
                        <tr>
                            <td><?php echo $post['id']; ?></td>
                            <td>
                                <?php if($post['image_path']): ?>
                                    <img src="<?php echo htmlspecialchars($post['image_path']); ?>" width="50" alt="Image">
                                <?php else: ?>
                                    No Image
                                <?php endif; ?>
                            </td>
                            <td><?php echo htmlspecialchars($post['title']); ?></td>
                            <td><?php echo date('M d, Y H:i', strtotime($post['created_at'])); ?></td>
                            <td class="action-links">
                                <a href="edit.php?id=<?php echo $post['id']; ?>">Edit</a>
                                <a href="delete.php?id=<?php echo $post['id']; ?>" class="delete" onclick="return confirm('Are you sure you want to delete this post?');">Delete</a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="5" style="text-align: center;">No blog posts found.</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</body>
</html>
