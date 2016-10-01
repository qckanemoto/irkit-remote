import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IRKitxRoutingModule } from './app-routing.module';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { RemoteComponent } from './remote/remote.component';
import { RemoteTabsComponent } from './remote-tabs/remote-tabs.component';
import { RemoteTabContentComponent } from './remote-tab-content/remote-tab-content.component';
import { RemoteButtonEditorComponent } from './remote-button-editor/remote-button-editor.component';

@NgModule({
    declarations: [
        AppComponent,
        RemoteComponent,
        RemoteTabsComponent,
        RemoteTabContentComponent,
        RemoteButtonEditorComponent,
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
