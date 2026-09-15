<?php
// admin/config.php

define('DB_SERVER', 'localhost'); // Hostinger uses 'localhost'
define('DB_USERNAME', 'u652950911_monika_admin');
define('DB_PASSWORD', 'K$SG|D@6!9z'); // <-- ENTER YOUR PASSWORD HERE
define('DB_NAME', 'u652950911_blogs');

try {
    $pdo = new PDO("mysql:host=" . DB_SERVER . ";dbname=" . DB_NAME, DB_USERNAME, DB_PASSWORD);
    // Set PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Set default fetch mode to associative array
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch(PDOException $e) {
    die("ERROR: Could not connect. " . $e->getMessage());
}
?>
