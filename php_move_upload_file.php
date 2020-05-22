<?php
// print var_dump($_FILES);
//$str = "";
session_start();
$studentRegNo = $_SESSION["regno"];
$response = 0;

if(!is_dir('Documents/'.$studentRegNo)){
   mkdir('Documents/'.$studentRegNo);
}
if(count($_FILES) > 0){
   foreach ($_FILES as $key => $val) {

      if(isset($_FILES[$key]['name'])){
      // file name
      $filename = $_FILES[$key]['name'];

      // create folder
      //mkdir('Documents/newFolder');
      //location
      $location = 'Documents/'.$studentRegNo.'/'.$filename;

      // file extension
      $file_extension = pathinfo($location, PATHINFO_EXTENSION);
      $file_extension = strtolower($file_extension);

      // Valid image extensions
      $valid_ext = array("pdf","doc","docx","jpg","png","jpeg");
      if(in_array($file_extension,$valid_ext)){
         // Upload file
         if(move_uploaded_file($_FILES[$key]['tmp_name'],$location)){
            $response = 1;
         } 
      }
   }
}
  
}
echo $response;
   exit;
// if(isset($_FILES['file1']['name'])){
//    // file name
//    $filename = $_FILES['file1']['name'];

//    // Location
//    $location = 'MyFiles/'.$filename;

//    // file extension
//    $file_extension = pathinfo($location, PATHINFO_EXTENSION);
//    $file_extension = strtolower($file_extension);

//    // Valid image extensions
//    $valid_ext = array("pdf","doc","docx","jpg","png","jpeg");

//    $response = 0;
//    if(in_array($file_extension,$valid_ext)){
//       // Upload file
//       if(move_uploaded_file($_FILES['file1']['tmp_name'],$location)){
//          $response = 1;
//       } 
//    }

//    echo $response;
//    exit;
// }
?>