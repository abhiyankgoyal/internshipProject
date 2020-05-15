<?php
    $user = json_decode($_REQUEST["user"]);
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'STUDENTS_REGISTRATION';
    
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else{
        $sql = "SELECT * FROM users";
        $result = $conn->query($sql);
        //echo $user->name;
        if($result->num_rows == 0){
            $insertUser = "INSERT INTO users (name, username, email, password) VALUES ('$user->name', '$user->username', '$user->email', '$user->pass')";
            if($conn->query($insertUser) === true){
                echo "3"; // 3 = data inserted successfully
            }
            else{
                echo "data cannot be entered". $conn->error;
            }
        }
        else{
            //$insertUser = "INSERT INTO users (name, username, email, password) VALUES ('$user->name', '$user->username', '$user->email', '$user->pass')";
            $foundUsername = 0;
            $foundEmail = 0;
            while($row = $result->fetch_assoc()){

                if($row["username"] == $user->username){
                    //echo "username already exists";
                    $foundUsername = 1;
                }
                if($row["email"] == $user->email){
                    //echo "email already exists";
                    $foundEmail = 1;
                }
            }
            if($foundUsername == 0 && $foundEmail == 0){
                $insertUser = "INSERT INTO users (name, username, email, password) VALUES ('$user->name', '$user->username', '$user->email', '$user->pass')";
                if($conn->query($insertUser) === true){
                    echo "3"; // 3 = data inserted successfully
                }
                else{
                    echo "data cannot be entered". $conn->error;
                }
            }
            elseif($foundUsername == 1 && $foundEmail == 0){
                echo "0"; // 0 = username already exists
            }
            elseif($foundUsername == 0 && $foundEmail == 1){
                echo "1"; // 1 = email already exists 
            }
            elseif($foundUsername == 1 && $foundEmail == 1){
                echo "2"; // 2 = username and email already exists
            }

        }
    //     $str = "";
    //     for ($x = 0; $x <= count($users); $x++) {
    //         $str = $users[$x]->name;
    //         break;
    //       }
    //    echo $str;
    }
    $conn->close();

?>