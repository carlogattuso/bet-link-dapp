import { Component, OnInit } from '@angular/core';
import { OddsService } from 'src/app/services/odds.service';
import { MetamaskService } from 'src/app/services/metamask.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fixtures: any;

  constructor(private oddsService: OddsService) {

  }

  ngOnInit(): void {
    this.oddsService.getOdds().subscribe({
      next: (data): void => {
        this.fixtures = data;
      },
      error: (): void => {
        console.log('error');
      }
    });
  }

}
