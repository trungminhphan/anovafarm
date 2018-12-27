<?php
require_once "../vendor/autoload.php";
use \Models\Users;
use \Models\SessionManager;
$session = new SessionManager();
$users = new Users();
require_once('../inc/functions.inc.php');
require_once('../inc/config.inc.php');
if(!$users->isLoggedIn()){
	transfers_to('../login.html');
}
$id = $_GET['id']; $fs = new GridFS();
//query the file object
$fs->id = $id; $object = $fs->get_one_file();
 //set content-type header, output in browser
header('Content-type: '.$object->file['filetype']);
echo $object->getBytes();
?>
