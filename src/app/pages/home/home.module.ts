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
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';

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
    CardModule,
    DialogModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    InputNumberModule
  ],
  providers: [
    OddsService
  ]
})
export class HomeModule { }
