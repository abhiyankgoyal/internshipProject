<?php

    session_start();
    $loginUserName = json_decode($_REQUEST["loginUserName"]);
    $loginPassword = json_decode($_REQUEST["loginPassword"]);
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'STUDENTS_REGISTRATION';
    
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else{
        $sql = "SELECT name, username, password FROM users";
        $result = $conn->query($sql);
        $count = 0;
        if($result->num_rows == 0){
            echo "0"; // 0 = there is no user in the table;
        }
        else{
            while($row = $result->fetch_assoc()){
                if($row["username"] == $loginUserName && $row["password"] == $loginPassword){
                    $_SESSION["name"] = $row["name"];
                    echo "1"; // 1 = user matched
                    $count++;
                }
            }
            if($count == 0){
                echo "0"; // 0 = username or password does not match;
            }
        }
    }
    $conn->close();
?>
