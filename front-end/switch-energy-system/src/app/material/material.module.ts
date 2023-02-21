import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const materialComponents = [
  MatFormFieldModule,
  MatSelectModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  FormsModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatIconModule,
  NgxPaginationModule,
  ReactiveFormsModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[materialComponents]
})
export class MaterialModule { }
