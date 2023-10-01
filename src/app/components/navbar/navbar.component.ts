import { Component } from '@angular/core';
import { MetamaskService } from 'src/app/services/metamask.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private metamask: MetamaskService) {
    
  }

  connectMetamask() {
    this.metamask.connect();
  }
  
}
