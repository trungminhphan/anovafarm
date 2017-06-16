<?php
require_once('header_none.php');
$donggoirauqua = new DongGoiRauQua();
$s = $donggoirauqua->search("cải ngọt");

foreach ($s as $key => $value) {
	var_dump($value);
}
?>