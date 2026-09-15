<?php
require_once "config.php";
$stmt = $pdo->query("SELECT * FROM admin_users");
$users = $stmt->fetchAll();
print_r($users);
?>
