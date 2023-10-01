import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetamaskService } from 'src/app/services/metamask.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() isLoggedIn?: boolean;

  @Output() accountConnected = new EventEmitter<boolean>();

  currentAccount = new FormControl('');

  constructor(private metamask: MetamaskService) {

  }

  ngOnInit(): void {
    const wallet: string | null = sessionStorage.getItem('WALLET');
    if (wallet) {
      this.currentAccount.setValue(this.getWalletTruncated(wallet));
    }
  }

  connectMetamask() {
    this.metamask.connect().then((account: string) => {
      this.currentAccount.setValue(this.getWalletTruncated(account));
      this.accountConnected.emit(true);
    }).catch(() => {
      this.accountConnected.emit(false);
      console.log('There is an error with Metamask');
    });
  }

  getWalletTruncated(wallet: string) {
    const start = wallet.substring(0, 9);
    const end = wallet.substring(wallet.length - 9, wallet.length);
    return start + '...' + end;
  }

}
