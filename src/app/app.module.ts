import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule,MatSliderModule,
  MatButtonToggle,
  MatNativeDateModule,
  MatListModule,
  MatSidenavModule
} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AlterarSenha} from './pages/alterar-senha/alterar-senha';
import { CadastroCliente } from
 './pages/cadastro-cliente/cadastro-cliente';
 import { MatExpansionModule } from '@angular/material/expansion';
import { Menu } from './componentes/menu/menu';
import { AppRoute } from './app-router';

@NgModule({
  declarations: [
    AppComponent,
    CadastroCliente,
    AlterarSenha,
    Menu
  ],
  imports: [
    MatExpansionModule,
    MatListModule,
    MatSidenavModule,
    AppRoute,
    BrowserModule,BrowserAnimationsModule,
    MatDatepickerModule,   MatNativeDateModule ,
    MatButtonModule, MatCheckboxModule, MatSelectModule,
    MatAutocompleteModule, MatInputModule, MatFormFieldModule,
    FormsModule,MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
