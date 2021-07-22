
<?php

require 'database.php';

header("Access-Control-Allow-Origin: *");

$postdata = file_get_contents("php://input");

$customer_id = $_GET['customer_id'];

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    print_r($request);
    // $customer_id = $request->customer_id;
    $customer_name = $request->customer_name;
    $customer_age = $request->customer_age;
    $customer_email = $request->customer_email;
    $customer_gender = $request->customer_gender;
    $customer_dob = $request->customer_dob;
    $customer_address = $request->customer_address;

    echo $customer_name;

    $sql = "UPDATE customer SET customer_name ='{$customer_name}', customer_age='{$customer_age}', customer_email='{$customer_email}', 
            customer_gender='{$customer_gender}', customer_dob='{$customer_dob}', customer_address='{$customer_address}' 
            WHERE customer_id='{$customer_id}'";
    
    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
    }
    else{
        http_response_code(422);
    }

}
?>