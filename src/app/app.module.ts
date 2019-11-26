import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PesquisaBolsaFamiliaComponent } from './components/pesquisa-bolsa-familia/pesquisa-bolsa-familia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { GoogleChartsModule } from 'angular-google-charts';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
    declarations: [
        AppComponent,
        PesquisaBolsaFamiliaComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        GoogleChartsModule.forRoot(),
        TypeaheadModule.forRoot(),
        TooltipModule.forRoot(),
        PopoverModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
