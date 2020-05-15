<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    
    $conn = new mysqli($servername, $username, $password);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else{
        echo "connection sucessful";
    }
    $sql = "CREATE DATABASE STUDENTS_REGISTRATION";

    if($conn->query($sql) === True){
        echo "Database created successfully";
    }
    else{
        echo "error creating Database" .$conn->error;
    }
?>