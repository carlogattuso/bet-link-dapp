import { Injectable } from '@angular/core';

import { MetaMaskSDK } from '@metamask/sdk';

// This function detects most providers injected at window.ethereum.
import detectEthereumProvider from '@metamask/detect-provider';

@Injectable({
  providedIn: 'root',
})

/* Service class that handles metamask connection */
/* Doc reference: https://docs.metamask.io/wallet/how-to/connect/ */

export class MetamaskService {

  //Service constructor
  constructor() {
    this.setupMetamaskListeners(); // Set up a listener for changes in connection status
  }

  public getWallet() {
    localStorage.getItem('WALLET');
  }

  public connectWallet() {
    if(window.ethereum !== undefined) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then((accounts: any) => {
        const account = accounts[0];
        localStorage.setItem('WALLET', account);
      })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });
    }
  }

  // Setup listeners for account or network change
  private setupMetamaskListeners() {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', function(accounts: any) {
        if (accounts.length === 0) {
          // Handle disconnected account
          localStorage.setItem('WALLET', '');
        } else {
          // Handle account change
          const newAddress = accounts[0];
          localStorage.setItem('WALLET', newAddress);
        }
      });
    }
  }

  //Check Metamask provider in device
  // private async checkMetamaskProvider() {
  //   // This returns the provider, or null if it wasn't detected.
  //   const provider = await detectEthereumProvider();

  //   if (provider) {
  //     // From now on, this should always be true: provider === window.ethereum
  //     // If the provider returned by detectEthereumProvider isn't the same as
  //     // window.ethereum, something is overwriting it – perhaps another wallet.
  //     if (provider !== window.ethereum) {
  //       console.error('Do you have multiple wallets installed?');
  //     }

  //     return true;
  //   } else {
  //     console.log('Please install MetaMask!');
  //     return false;
  //   }
  // }
}