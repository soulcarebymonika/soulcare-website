<?php
require_once "config.php";
$username = 'admin';
$password = 'password123';

$sql = "SELECT id, username, password FROM admin_users WHERE username = :username";
if($stmt = $pdo->prepare($sql)){
    $stmt->bindParam(":username", $param_username, PDO::PARAM_STR);
    $param_username = $username;
    
    if($stmt->execute()){
        if($stmt->rowCount() == 1){
            echo "rowCount is 1\n";
        } else {
            echo "rowCount is " . $stmt->rowCount() . "\n";
            // In SQLite, rowCount() might return 0 for SELECT statements!
            $row = $stmt->fetch();
            if ($row) {
                echo "But fetch() returned a row!\n";
                if(password_verify($password, $row['password'])) {
                    echo "Password matches!\n";
                } else {
                    echo "Password does NOT match.\n";
                }
            } else {
                echo "Fetch returned false.\n";
            }
        }
    }
}
?>
