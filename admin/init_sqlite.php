<?php
// admin/init_sqlite.php
try {
    $pdo = new PDO("sqlite:" . __DIR__ . "/database.sqlite");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create admin_users table
    $pdo->exec("CREATE TABLE IF NOT EXISTS admin_users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )");

    // Insert default admin user if not exists
    $stmt = $pdo->query("SELECT COUNT(*) FROM admin_users WHERE username = 'admin'");
    if ($stmt->fetchColumn() == 0) {
        $hash = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'; // password123
        $pdo->exec("INSERT INTO admin_users (username, password) VALUES ('admin', '$hash')");
    }

    // Create blog_posts table
    $pdo->exec("CREATE TABLE IF NOT EXISTS blog_posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        image_path TEXT DEFAULT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");

    echo "SQLite database initialized successfully.";
} catch(PDOException $e) {
    die("ERROR: Could not create tables. " . $e->getMessage());
}
?>
