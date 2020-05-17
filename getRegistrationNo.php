<?php
    session_start();
    $regno = json_decode($_REQUEST["regno"]);
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'STUDENTS_REGISTRATION';
    
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else{
        $_SESSION["regno"] = $regno;
        echo $_SESSION["regno"];
    }
    $conn->close();
?>