import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoteComponent } from './remote/remote.component';
import { RemoteButtonEditorComponent } from './remote-button-editor/remote-button-editor.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'remote/1/tab/0',
        pathMatch: 'full',
    },
    {
        path: 'remote/:deviceId',
        redirectTo: 'remote/:deviceId/tab/0',
        pathMatch: 'full',
    },
    {
        path: 'remote/:deviceId/tab/:index',
        component: RemoteComponent,
    },
    {
        path: 'remote/:deviceId/edit',
        redirectTo: 'remote/:deviceId/edit/tab/0',
        pathMatch: 'full',
    },
    {
        path: 'remote/:deviceId/edit/tab/:index',
        component: RemoteComponent,
        data: { isEditing: true },
    },
    {
        path: 'remote/:deviceId/edit/:buttonId',
        component: RemoteButtonEditorComponent,
    },
    {
        path: 'remote/:deviceId/add/tab/:index',
        component: RemoteButtonEditorComponent,
    },
    // {
    //     path: 'device',  // device list
    //     component: null,
    // },
    // {
    //     path: 'device/edit', // device list in editing mode
    //     component: null,
    // },
    // {
    //     path: 'device/edit/:deviceId',   // device edit
    //     component: null,
    // },
    // {
    //     path: 'device/add',  // device add
    //     component: null,
    // },
    // {
    //     path: 'config',  // config user and sign-out
    //     component: null,
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class IRKitxRoutingModule { }
