import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bet-link-dapp';

  isLoggedIn?: boolean;

  ngOnInit() {
    this.isLoggedIn = sessionStorage.getItem('WALLET') != null;
  }

  getAccount(event: boolean) {
    this.isLoggedIn = event;
  }
}
