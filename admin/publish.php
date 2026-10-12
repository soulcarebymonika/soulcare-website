<?php
// admin/publish.php
require_once "auth.php";
require_once "config.php";
require_once "webhook.php";

if (isset($_GET["id"]) && !empty(trim($_GET["id"]))) {
    $id = trim($_GET["id"]);
    $action = isset($_GET["action"]) && $_GET["action"] === "unpublish" ? "draft" : "published";

    $sql = "UPDATE blog_posts SET status = :status WHERE id = :id";
    if ($stmt = $pdo->prepare($sql)) {
        $stmt->execute([
            ":status" => $action,
            ":id" => $id
        ]);

        // Always trigger Vercel deploy because site content changed (published or unpublished)
        trigger_vercel_deploy();

        $msg = ($action === "published") ? "published" : "draft_saved";
        header("location: index.php?msg=" . $msg);
        exit();
    }
}

header("location: index.php");
exit();
?>
