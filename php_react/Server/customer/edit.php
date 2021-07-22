<?php

require 'database.php';
header("Access-Control-Allow-Origin: *");

// $customer=[];

$customer_id = $_GET['customer_id'];

$sql = "SELECT * FROM customer WHERE customer_id =".$customer_id;

$result = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($result);
    $customer['customer_id'] = $row['customer_id'];
    $customer['customer_name'] = $row['customer_name'];
    $customer['customer_age'] = $row['customer_age'];
    $customer['customer_email'] = $row['customer_email'];
    $customer['customer_gender'] = $row['customer_gender'];
    $customer['customer_dob'] = $row['customer_dob'];
    $customer['customer_address'] = $row['customer_address'];

echo $json = json_encode($customer);

exit;

?>