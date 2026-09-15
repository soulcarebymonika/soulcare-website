<?php
$pdo = new PDO("sqlite:" . __DIR__ . "/database.sqlite");
$hash = password_hash('password123', PASSWORD_DEFAULT);
$pdo->exec("UPDATE admin_users SET password = '$hash' WHERE username = 'admin'");
echo "Password reset to password123!";
?>
