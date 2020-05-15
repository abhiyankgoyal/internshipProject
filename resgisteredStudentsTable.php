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
        $sql = "CREATE TABLE registeredStudents(
            registrationNo INT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            category VARCHAR(255),
            division VARCHAR(255),
            name VARCHAR(255),
            dob DATE,
            gender VARCHAR(255),
            admissionDate DATE,
            admissionType VARCHAR(255),
            feeCategory VARCHAR(255),
            busService VARCHAR(255),
            hostel VARCHAR(255),
            contactNo INT(10),
            address VARCHAR(255),
            landmark VARCHAR(255),
            place VARCHAR(255),
            district VARCHAR(255),
            state VARCHAR(255),
            pincode INT(10),
            photo VARCHAR(255),
            registrationFees INT(10),
            fatherName VARCHAR(255),
            fatherContactNo INT(10),
            fatherPhoto VARCHAR(255),
            motherName VARCHAR(255),
            motherContactNo INT(10),
            motherPhoto VARCHAR(255),
            parentAddress VARCHAR(255),
            parentLandmark VARCHAR(255),
            parentPlace VARCHAR(255),
            parentDistrict VARCHAR(255),
            parentState VARCHAR(255),
            parentPincode INT(10)
            )";
        if ($conn->query($sql) === TRUE) {
            echo "Table registeredStudents created successfully";
          } else {
            echo "Error creating table: " . $conn->error;
          }
    }
    $conn->close();
?>