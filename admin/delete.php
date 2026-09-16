<?php
// admin/delete.php
require_once "auth.php";
require_once "config.php";
require_once "webhook.php";

if(isset($_GET["id"]) && !empty(trim($_GET["id"]))){
    $id = trim($_GET["id"]);
    
    // First, get the image path so we can delete the image file
    $sql_select = "SELECT image_path FROM blog_posts WHERE id = :id";
    if($stmt_select = $pdo->prepare($sql_select)){
        $stmt_select->bindParam(":id", $param_id);
        $param_id = $id;
        if($stmt_select->execute()){
            if($row = $stmt_select->fetch()){
                $image_path = $row["image_path"];
                if(!empty($image_path) && file_exists($image_path)){
                    unlink($image_path); // Delete the image file
                }
            }
        }
        unset($stmt_select);
    }

    // Now delete the record from database
    $sql = "DELETE FROM blog_posts WHERE id = :id";
    if($stmt = $pdo->prepare($sql)){
        $stmt->bindParam(":id", $param_id);
        $param_id = $id;
        
        if($stmt->execute()){
            // Trigger Vercel rebuild
            trigger_vercel_deploy();
            
            header("location: index.php");
            exit();
        } else{
            echo "Oops! Something went wrong. Please try again later.";
        }
        unset($stmt);
    }
    unset($pdo);
} else {
    header("location: index.php");
    exit();
}
?>
