<?php
    session_start();
    $regno = json_decode($_REQUEST["regno"]);
    $studentName = $_REQUEST["studentName"];
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
        $_SESSION["studentName"] = $studentName; 
        echo $_SESSION["regno"];
        echo $_SESSION["studentName"];
    }
    $conn->close();
?>