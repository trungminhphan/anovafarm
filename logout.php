<?php
require_once "vendor/autoload.php";
use \Models\Users;
use \Models\SessionManager;
require_once('inc/functions.inc.php');
$session = new SessionManager();
$users = new Users();
$users->push_logs_out();
$users->logout();
transfers_to('./login.html');
exit;

?>
