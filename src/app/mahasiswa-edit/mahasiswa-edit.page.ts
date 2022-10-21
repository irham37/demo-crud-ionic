import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";


@Component({
  selector: 'app-mahasiswa-edit',
  templateUrl: './mahasiswa-edit.page.html',
  styleUrls: ['./mahasiswa-edit.page.scss'],
})
export class MahasiswaEditPage implements OnInit {
  nim: any;
  nama: any;
  alamat: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.nim = param.nim;
      console.log(this.nim);
      this.ambilMahasiswa(this.nim);
    })
  }

  ngOnInit() {
  }


  ambilMahasiswa(nim) {
    this._apiService.ambilMahasiswa(nim).subscribe((res: any) => {
      console.log('sukses', res);
      let mahasiswa = res;
      //console.log(mahasiswa);
      this.nama = mahasiswa.nama;
      this.alamat = mahasiswa.alamat;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }


  editMahasiswa() {
    let url = this._apiService.apiURL() + "/edit.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        nim: this.nim,
        nama: this.nama,
        alamat: this.alamat,
      },
    }).then((data) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Edit Data Mahasiswa',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/mahasiswa');
    }, (err) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Edit Data Mahasiswa',
        buttons: ['OK']
      }).then(res => {
        res.present()
      });
    })
  }

}
