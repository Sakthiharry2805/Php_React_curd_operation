 <?php
define('DB_HOST' , 'localhost');
define('DB_USER' , 'root');
define('DB_PASS' , '');
define('DB_NAME' , 'sales');
// $username = "root";
// $password = "";
// $dbname = "sales";

// Create connection
function connect(){
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

        // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    // echo "Connected successfully";
    return $conn;
}
$con = connect();

/**
*
*/
// class Database
// {

//     //Database Credentials
//     private $host = "localhost";
//     private $db_name = "sales";
//     private $username = "root";
//     private $password = ""; // If you're using xampp keep it blank
//     private $conn;

//     public function getConnection() {
//         $this->conn = null;

//         try {
//             $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
//             $this->conn->exec("set names utf8");
//             //echo "Connected Successfully";
//         } catch(PDOException $exception) {
//             echo "Connection Error : ". $exception->getMessage();
//         }

//         return $this->conn;
//     }

// }


?>