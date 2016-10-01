import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoteComponent } from './remote/remote.component';
import { RemoteButtonEditorComponent } from "./remote-button-editor/remote-button-editor.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/remote',
        pathMatch: 'full'
    },
    {
        path: 'remote',
        component: RemoteComponent
    },
    {
        path: 'remote/edit/:buttonId',
        component: RemoteButtonEditorComponent
    },
    {
        path: 'remote/add',
        component: RemoteButtonEditorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class IRKitxRoutingModule { }
