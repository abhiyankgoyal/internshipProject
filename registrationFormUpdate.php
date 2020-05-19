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
        $sql = "SELECT * FROM registeredStudents where registrationNo = $regno";
        $result = $conn->query($sql);
        $row = $result->fetch_assoc(); // fetching student with registrationNo = $regno
        echo json_encode($row); //sending object as a string
    }
    $conn->close();
?>