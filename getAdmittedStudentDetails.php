<?php
    session_start();
    $regno = $_SESSION["regno"];
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'STUDENTS_REGISTRATION';
    
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else{
        $sql = "SELECT * FROM admittedStudents where registrationNo = $regno";
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();
        //$student = array($row); //this is to put the object in the rray but we dont require this rather we will just sen the fetched object
        echo json_encode($row);
    }
?>