<?php
require_once "config.php";

try {
    // Add slug column
    $pdo->exec("ALTER TABLE blog_posts ADD COLUMN slug TEXT");
    
    // Generate slugs for existing posts
    $stmt = $pdo->query("SELECT id, title FROM blog_posts");
    $posts = $stmt->fetchAll();
    foreach ($posts as $post) {
        // Simple slugify
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $post['title'])));
        $update = $pdo->prepare("UPDATE blog_posts SET slug = ? WHERE id = ?");
        $update->execute([$slug, $post['id']]);
    }
    echo "Database updated successfully.\n";
} catch (Exception $e) {
    echo "Notice (may already exist): " . $e->getMessage() . "\n";
}
?>
