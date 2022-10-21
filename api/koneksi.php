<?php 
//header untuk menangani cors policy
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, HEAD, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json; charset=utf-8');
//membuat variable koneksi ke mysql
$koneksi = mysqli_connect('localhost','root','','belajarcrud') or die ('koneksi gagal');


?>