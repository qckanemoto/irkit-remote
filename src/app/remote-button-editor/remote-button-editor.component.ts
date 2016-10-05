import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from "@angular/common";

import { Device } from '../classes/device';
import { Button } from '../classes/button';

@Component({
    selector: 'app-remote-button-editor',
    templateUrl: './remote-button-editor.component.html',
    styleUrls: ['./remote-button-editor.component.scss']
})
export class RemoteButtonEditorComponent implements OnInit {

    device: Device;
    button: Button;

    constructor(private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let deviceId: string = params['deviceId'];
            let buttonId: string = params['buttonId'];

            this.device = {
                id: deviceId,
                name: 'sample device',
                clientkey: 'sample clientkey',
                deviceid: 'sample deviceid'
            };
            this.button = {
                id: buttonId,
                icon: 'power-off',
                label: 'sample button',
                signal: 'sample signal'
            };
        });
    }

    goBack() {
        this.location.back();
    }

}
