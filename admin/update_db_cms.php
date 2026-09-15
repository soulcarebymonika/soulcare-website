<?php
require_once "config.php";

$columns = [
    "meta_title" => "TEXT",
    "meta_description" => "TEXT",
    "category" => "TEXT DEFAULT 'Mental Wellness'",
    "author" => "TEXT DEFAULT 'Monika Arora'",
    "image_alt" => "TEXT",
    "excerpt" => "TEXT"
];

foreach ($columns as $column => $type) {
    try {
        $pdo->exec("ALTER TABLE blog_posts ADD COLUMN $column $type");
        echo "Added column $column\n";
    } catch (Exception $e) {
        echo "Notice (may already exist): $column - " . $e->getMessage() . "\n";
    }
}
echo "Database update complete.\n";
?>
