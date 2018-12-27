<?php
require_once "../vendor/autoload.php";
use \Models\Users;
use \Models\SessionManager;
$session = new SessionManager();
$users = new Users();
require_once('../inc/functions.inc.php');
require_once('../inc/config.inc.php');
if(!$users->isLoggedIn()){ transfers_to('../login.html'); }
$id_user = $users->get_userid();
$id_congty = $users->get_id_congty();
?>
