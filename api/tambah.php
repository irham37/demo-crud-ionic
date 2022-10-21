<?php 
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$nim = trim($data['nim']);
$nama = trim($data['nama']);
$alamat = trim($data['alamat']);

if ($nim != '' and $nama != '' and $alamat != '') {
	$query = mysqli_query($koneksi,"insert into mahasiswa(nim,nama,alamat) values('$nim','$nama','$alamat')");

}else{
	$query = mysqli_query($koneksi,"delete from mahasiswa where nim='$nim'");
}


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