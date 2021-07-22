<?php
require 'database.php';

header("Access-Control-Allow-Origin: *");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    print_r($request);

    $customer_name = $request->customer_name;
    $customer_age = $request->customer_age;
    $customer_email = $request->customer_email;
    $customer_gender = $request->customer_gender;
    $customer_dob = $request->customer_dob;
    $customer_address = $request->customer_address;

    $sql = "INSERT INTO customer (customer_name, customer_age, customer_email, customer_gender, customer_dob, customer_address)
    VALUES ('{$customer_name}', '{$customer_age}', '{$customer_email}','{$customer_gender}', '{$customer_dob}', '{$customer_address}')";

    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
    }
    else{
        http_response_code(422);
    }
}




// //required headers
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// date_default_timezone_set("Asia/Kolkata");

// //get database connection and product object
// include_once("../config/database.php");
// include_once("../objects/customer.php");

// //instantiate new objects
// $database = new Database();
// $db = $database->getConnection();
// $product = new Product($db);

// //get posted data
// $data = json_decode(file_get_contents("php://input"));

// //set product property values
// $customer->customer_name = $data->name;
// $customer->customer_age = $data->age;
// $customer->customer_gender = $data->gender;
// $customer->customer_email = $data->email;
// $customer->customer_dob = $date->dob;
// $customer->customer_address = $data->address;

// //lets create product now
// if($customer->create()) {
//     echo json_encode(
//         array("message"=>"Product was created.")
//     );
// } else { // if unable to create product, notify user
//     echo json_encode(
//         array("message"=>"Unable to create product.")
//     );
// }

?>