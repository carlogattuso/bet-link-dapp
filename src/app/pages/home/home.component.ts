import { Component } from '@angular/core';
import { MetamaskService } from 'src/app/services/metamask.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private metamask: MetamaskService) { }

  connectMetamask() {
    this.metamask.connectWallet();
    console.log('CONNECTED WALLET: ', localStorage.getItem('WALLET'));
  }
}
