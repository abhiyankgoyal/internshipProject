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
        $sql = "DELETE FROM registeredStudents WHERE registrationNo = $regno";
        if($conn->query($sql) === true){
            echo "1";
        }
        else{
            echo $conn->error;
        }
    }
    $conn->close();
?>