import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule,MatSliderModule,
  MatButtonToggle
} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, MatCheckboxModule,
    MatAutocompleteModule, MatInputModule, MatFormFieldModule,
    FormsModule,MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
