import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoteComponent } from './remote/remote.component';
import { RemoteButtonEditorComponent } from "./remote-button-editor/remote-button-editor.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/remote/1',
        pathMatch: 'full'
    },
    {
        path: 'remote/:deviceId',
        component: RemoteComponent
    },
    {
        path: 'remote/:deviceId/edit/:buttonId',
        component: RemoteButtonEditorComponent
    },
    {
        path: 'remote/:deviceId/add',
        component: RemoteButtonEditorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class IRKitxRoutingModule { }
