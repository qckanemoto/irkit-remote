import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IRKitxRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarBottomComponent } from './navbar-bottom/navbar-bottom.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { RemoteComponent } from './remote/remote.component';
import { RemoteTabContentComponent } from './remote-tab-content/remote-tab-content.component';
import { RemoteButtonEditorComponent } from './remote-button-editor/remote-button-editor.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarBottomComponent,
        NavbarTopComponent,
        RemoteComponent,
        RemoteTabContentComponent,
        RemoteButtonEditorComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        IRKitxRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
