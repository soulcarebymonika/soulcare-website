<?php
// admin/get_reviews.php
// Returns JSON array of approved reviews, newest first.

$allowed_origins = [
    "https://soulcarebymonika.com",
    "https://www.soulcarebymonika.com",
    "http://localhost:3000",
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: " . $origin);
} else {
    header("Access-Control-Allow-Origin: https://soulcarebymonika.com");
}
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once "config.php";

try {
    $stmt = $pdo->query("SELECT id, name, rating, review, created_at FROM reviews WHERE approved = 1 ORDER BY created_at DESC, id DESC");
    $reviews = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["status" => "success", "data" => $reviews]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
}
?>
