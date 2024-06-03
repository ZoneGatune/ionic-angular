import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { GridPage } from '../grid/grid.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;


  constructor( private loadingCtrl: LoadingController,
    private router: Router,
   ) { }

  ngOnInit() {
  }

  mostrarLoading() {
    this.presentLoading('Hola Mundo');

    setTimeout(() => {
      this.loading.dismiss();
      this.router.navigate(['/grid']);
    }, 2000);
  }

  async presentLoading( message: string) {

    this.loading = await this.loadingCtrl.create({
      message,
      spinner: 'dots'
    });

    await this.loading.present();

  }

}
