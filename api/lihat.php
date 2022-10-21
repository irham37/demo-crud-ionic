<?php 
require 'koneksi.php';
$data = [];
$nim = $_GET['nim'];
$query = mysqli_query($koneksi,"select * from mahasiswa where nim ='$nim'");
$jumlah = mysqli_num_rows($query);
if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
echo mysqli_error($koneksi);

 ?>