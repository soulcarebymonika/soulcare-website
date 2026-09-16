<?php
// admin/api.php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once "config.php";

if (isset($_GET['slug'])) {
    $slug = $_GET['slug'];
    $sql = "SELECT * FROM blog_posts WHERE slug = :slug";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':slug' => $slug]);
    $post = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($post) {
        // Prepend the localhost URL to the image path if it's not empty
        if ($post['image_path']) {
            $post['image_path'] = 'http://localhost:8000/admin/' . $post['image_path'];
        }
        echo json_encode(["status" => "success", "data" => $post]);
    } else {
        echo json_encode(["status" => "error", "message" => "Post not found"]);
    }
} else {
    $sql = "SELECT * FROM blog_posts ORDER BY created_at DESC";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($posts as &$post) {
        if ($post['image_path']) {
            $post['image_path'] = 'http://localhost:8000/admin/' . $post['image_path'];
        }
    }

    echo json_encode(["status" => "success", "data" => $posts]);
}
?>
