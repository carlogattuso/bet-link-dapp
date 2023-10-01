import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OddsService } from 'src/app/services/odds.service';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    HomeRoutingModule,
    ButtonModule,
    RippleModule,
    TableModule,
    CardModule
  ],
  providers: [
    OddsService
  ]
})
export class HomeModule { }
