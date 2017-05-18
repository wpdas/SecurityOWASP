import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

//Native Storage
import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  selector: 'page-m2-unsafe-data',
  templateUrl: 'm2-unsafe-data.html',
})
export class M2UnsafeDataPage {

  public email: string;
  public password: string;
  private readEmail: String = 'Deve Rodar num Device/Simulador';

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private nativeStorage: NativeStorage) { }

  /**
   * Recomendado
   */
  public sigin(): void {

    this.nativeStorage.setItem('userData', { email: this.email, password: this.password })
      .then(
      () => console.log('Item Salvo!'),
      error => {console.error('Erro ao salvar item', error); this.showAlert(this.readEmail);}
      );

    this.nativeStorage.getItem('userData')
      .then(
      data => { this.readEmail = data.email; this.showAlert(this.readEmail); },
      error => { console.error('Erro ao ler dados'); }
      );
  }

  private showAlert(alertText: String) {

    let alert = this.alertCtrl.create({
      title: 'Dados Salvos e Lidos',
      subTitle: 'Nome: ' + alertText,
      buttons: ['OK']
    });
    alert.present();
  }


  /**
   * Não recomendado
   */
  /*public sign(): void {
     localStorage.setItem('email', this.email);
     localStorage.setItem('password', this.password);
  }*/



}
