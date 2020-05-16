<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'STUDENTS_REGISTRATION';
    
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else{
        $sql = "SELECT * FROM registeredStudents";
        $result = $conn->query($sql);
        $registeredStudents = array();
        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                array_push($registeredStudents, $row);
            }
            echo json_encode($registeredStudents);
        }
    }
?>