<?php
require 'database.php';
header("Access-Control-Allow-Origin: *");

error_reporting(E_ERROR);
$customer=[];
$sql="SELECT * FROM customer";

if($result = mysqli_query($con,$sql))
{
    $cr=0;
    while($row = mysqli_fetch_assoc($result))
    {
        $customer[$cr]['customer_id'] = $row['customer_id'];
        $customer[$cr]['customer_name'] = $row['customer_name'];
        $customer[$cr]['customer_age'] = $row['customer_age'];
        $customer[$cr]['customer_email'] = $row['customer_email'];
        $customer[$cr]['customer_gender'] = $row['customer_gender'];
        $customer[$cr]['customer_dob'] = $row['customer_dob'];
        $customer[$cr]['customer_address'] = $row['customer_address'];
        $cr++;
    }

    echo json_encode($customer);
}
else{
    http_response_code(404);
}

// //require headers
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");

// //include database and object files
// include_once("../config/database.php");
// include_once("../objects/customer.php");

// //instantiate database and product object
// $database = new Database;
// $db = $database->getConnection();
// $customer = new Customer($db);

// //query products
// $stmt = $customer->view();
// $num = $stmt->rowCount();

// //check if more than 0 records found
// if ($num > 0) {

//     //creating products array
//     $customers_arr = array();
//     $customers_arr['records'] = array();

//     //retrieve our table contents
//     //fetch() is faster than fetchAll()
//     // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
//     while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
//         //extract row
//         //this will make $row['name'] to
//         //just $name only
//         extract($row);

//         $customer_item = array(
//             "customer_id" => $customer_id,
//             "customer_name" => $customer_name,
//             "customer_age" => $customer_age,
//             "customer_email" => $customer_email,
//             "customer_gender" => $customer_gender,
//             "customer_dob" => $customer_dob,
//             "customer_address" => $customer_address
//         );

//         array_push($customers_arr["records"], $customer_item);
//     }
//     echo json_encode($customers_arr);
// } else {
//     echo json_encode(
//         array("message"=>"No Products Found.")
//     );
// }
?>