import { Injectable } from '@angular/core';

import Web3 from 'web3';
import Swal from 'sweetalert2';

// This function detects most providers injected at window.ethereum.
// import detectEthereumProvider from '@metamask/detect-provider';

declare let window: any;

@Injectable({
  providedIn: 'root',
})

/* Service class that handles metamask connection */
/* Doc reference: https://docs.metamask.io/wallet/how-to/connect/ */

export class MetamaskService {

  web3: any = null;
  get web3Instance() { return this.web3; }

  constructor() {
    if (typeof window.ethereum !== 'undefined') {
      this.web3 = new Web3(window.ethereum);
      window.ethereum.enable(); // get permission to access accounts
      this.setupMetamaskListeners();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No tienes instalado MetaMask!'
      });
    }
  }

  public connect() {
    window.ethereum.request({ method: 'eth_requestAccounts' }).then((accounts: string[]) => {
      console.log('ACCOUNTS CONNECT: '+accounts[0]);
      if(accounts.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al conectar Metamask!'
        });
      } else {
        this.setWallet(accounts[0]);
        window.ethereum.request({ method: 'eth_chainId' }).then((chainId: string) => {
          this.setChainId(chainId);
        });
      }
    });
  }

  public getWallet() {
    return sessionStorage.getItem('WALLET');
  }

  public setWallet(address: string) {
    sessionStorage.setItem('WALLET', address);
  }

  public getChainId() {
    return sessionStorage.getItem('CHAIN_ID');
  }

  public setChainId(chainId: string) {
    sessionStorage.setItem('CHAIN_ID', chainId);
  }

  // private async handleAccountsChanged() {
  //   const accounts: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //   window.ethereum.on('accountsChanged', (accounts: string[]) => {
  //     if(accounts.length === 0) {
  //       this.logout();
  //     } else {
  //       this.setWallet(accounts[0]);
        
  //     }
  //   });
  // }

  // Setup listeners for account or network change
  private setupMetamaskListeners() {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', async (accounts: string[]) => {
        console.log('ACCOUNTS EVENT: '+accounts);
        if (accounts.length === 0) {
          // Handle disconnected account
          this.logout();
        } else {
          // Handle account change
          const newAddress = accounts[0];
          this.setWallet(newAddress);
        }
      });
  
      window.ethereum.on('chainChanged', (chainId: string) => {
        // Handle network change
        this.setChainId(chainId);
      });
    }
  }

  logout() {
    sessionStorage.removeItem('WALLET');
    sessionStorage.removeItem('CHAIN_ID');
  }
}