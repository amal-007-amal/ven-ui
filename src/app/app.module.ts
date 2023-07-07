import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { UserFormComponent } from './source/user-form/user-form.component';
import { UserTableComponent } from './source/user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
