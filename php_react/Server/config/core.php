<?php
//show error reporting
ini_set('display_errors','1');
error_reporting(E_ALL);

//home page url
$home_url = "http://localhost/php_projects_training/php_react/";

//page given in url parameter, default page is one
$page = isset($_GET['page']) ? $_GET['page'] : 1;

//set number of records per page
$records_per_page = 5;

//calculate for the query LIMIT
$from_record_num = ($records_per_page * $page) - $records_per_page;

?>