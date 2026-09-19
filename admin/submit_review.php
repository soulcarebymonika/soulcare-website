<?php
// admin/submit_review.php
// Accepts POST JSON: { name, rating, review }
// Stores into `reviews` table. Requires manual approval before going live.

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
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
    exit;
}

require_once "config.php";

// Parse JSON body
$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid JSON."]);
    exit;
}

// Sanitize & validate
$name   = trim(strip_tags($input['name']   ?? ''));
$rating = intval($input['rating']          ?? 0);
$review = trim(strip_tags($input['review'] ?? ''));

if (empty($name) || empty($review)) {
    http_response_code(422);
    echo json_encode(["status" => "error", "message" => "Name and review are required."]);
    exit;
}

if ($rating < 1 || $rating > 5) {
    http_response_code(422);
    echo json_encode(["status" => "error", "message" => "Rating must be between 1 and 5."]);
    exit;
}

if (strlen($review) < 20) {
    http_response_code(422);
    echo json_encode(["status" => "error", "message" => "Review is too short (minimum 20 characters)."]);
    exit;
}

// Insert into database (approved = 0 by default — requires admin approval)
try {
    $sql = "INSERT INTO reviews (name, rating, review, approved, created_at)
            VALUES (:name, :rating, :review, 0, NOW())";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':name'   => $name,
        ':rating' => $rating,
        ':review' => $review,
    ]);

    echo json_encode(["status" => "success", "message" => "Review submitted successfully."]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
}
?>
