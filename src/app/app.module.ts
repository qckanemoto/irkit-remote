import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IRKitxRoutingModule } from './app-routing.module';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        IRKitxRoutingModule,
        Ng2BootstrapModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
