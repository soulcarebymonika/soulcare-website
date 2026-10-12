<?php
// admin/update_db_draft.php
require_once "config.php";

echo "<h2>Database Update: Blog Post Status (Draft / Published)</h2>";

try {
    // Add status column if it doesn't exist
    $pdo->exec("ALTER TABLE blog_posts ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'published'");
    echo "<p style='color:green;'>✓ Added 'status' column to blog_posts successfully.</p>";
} catch (Exception $e) {
    echo "<p style='color:#666;'>Notice (may already exist): " . htmlspecialchars($e->getMessage()) . "</p>";
}

try {
    // Make sure existing posts without a status have 'published'
    $count = $pdo->exec("UPDATE blog_posts SET status = 'published' WHERE status IS NULL OR status = ''");
    echo "<p style='color:green;'>✓ Verified existing posts ($count updated to published).</p>";
} catch (Exception $e) {
    echo "<p style='color:red;'>Error updating statuses: " . htmlspecialchars($e->getMessage()) . "</p>";
}

echo "<p><a href='index.php'>Back to Admin Dashboard</a></p>";
?>
