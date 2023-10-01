import { Component, OnInit } from '@angular/core';
import { OddsService } from 'src/app/services/odds.service';
import { ApiResponse, Match } from 'src/app/models/fixture.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fixtures!: Match[];

  selectedMatch!: Match;

  visible: boolean = false;

  value1: number = 0;

  value2: number = 0;

  constructor(private oddsService: OddsService) {

  }

  ngOnInit(): void {
    this.oddsService.getOdds().subscribe({
      next: (data: Match[]): void => {
        this.fixtures = data;
      },
      error: (): void => {
        console.log('error');
      }
    });
  }

  showDialog() {
    this.visible = true;
  }

}
