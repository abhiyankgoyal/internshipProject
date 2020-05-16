<?php
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
        $sql = "SELECT * FROM registeredStudents where registrationNo = $regno";
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();
        $student = array($row);
        echo json_encode($student);
    }
    $conn->close();
?>