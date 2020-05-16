<?php
    session_start();
    if(isset($_SESSION["name"])){
        session_destroy();
        echo "0";
    }    
    else{
        echo "1";
    }
?>