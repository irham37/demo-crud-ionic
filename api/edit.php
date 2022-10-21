<?php 
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$nama = $data['nama'];
$alamat = $data['alamat'];
$nim = $data['nim'];

$query = mysqli_query($koneksi,"update mahasiswa set nama='$nama',alamat='$alamat' where nim='$nim'");
// if ($query) {
// 	http_response_code(201);
// 	$pesan['status'] = 'sukses';
// }else{
// 	http_response_code(422);
// 	$pesan['status'] = 'gagal';

// }

echo json_encode($pesan);
echo mysqli_error($koneksi);


?>