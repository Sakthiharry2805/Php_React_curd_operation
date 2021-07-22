<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sales";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql = "INSERT INTO customer (customer_name, customer_age, customer_email, customer_gender, customer_dob, customer_address)
VALUES ('John', '21', 'john@example.com','male', '28-04-1993', 'villupuram')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// if ($conn->query($dbname) === TRUE) {
//     echo "Database created successfully";
//   } else {
//     echo "Error creating database: " . $conn->error;
//   }

?>