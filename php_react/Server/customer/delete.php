<?php

require 'database.php';

header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$customer_id = $_GET['customer_id'];

$sql = "DELETE FROM customer WHERE customer_id =".$customer_id;

if(mysqli_query($con,$sql))
{
    http_response_code(204);
}
else
{
    return http_response_code(422);
}
// $result = mysqli_query($con,$sql);
// $row = mysqli_fetch_assoc($result);

// echo $json = json_encode($row);

// exit;

?>