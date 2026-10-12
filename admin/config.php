<?php
// admin/config.php

define('DB_SERVER', 'localhost'); // Hostinger uses 'localhost'
define('DB_USERNAME', 'u652950911_monika_admin');
define('DB_PASSWORD', 'K$SG|D@6!9z'); // <-- ENTER YOUR PASSWORD HERE
define('DB_NAME', 'u652950911_blogs');

// Vercel Deploy Hook URL
// PASTE YOUR URL BELOW BETWEEN THE QUOTES
define('VERCEL_DEPLOY_HOOK_URL', 'https://api.vercel.com/v1/integrations/deploy/prj_yJVhxtwSNMLDfltviFmbAB3coTQT/i9ZfTIK1s9');


try {
    $pdo = new PDO("mysql:host=" . DB_SERVER . ";dbname=" . DB_NAME, DB_USERNAME, DB_PASSWORD);
    // Set PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Set default fetch mode to associative array
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch(PDOException $e) {
    // If MySQL connection fails (e.g., local preview/development), fall back to local SQLite
    $sqlite_file = __DIR__ . "/database.sqlite";
    if (file_exists($sqlite_file)) {
        $pdo = new PDO("sqlite:" . $sqlite_file);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    } else {
        die("ERROR: Could not connect. " . $e->getMessage());
    }
}
?>
