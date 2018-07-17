import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatCheckboxModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatCheckboxModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule
  ],
  exports: [ MatButtonModule,
             MatMenuModule,
             MatToolbarModule,
             MatIconModule,
             MatCardModule,
             MatGridListModule, 
             MatCheckboxModule,
             MatTabsModule,
             MatProgressSpinnerModule,
             MatRadioModule,
             MatSelectModule,
             MatTableModule
             ],
  declarations: []
})
export class CustomMaterialModule { }
