import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Device } from '../classes/device';

@Component({
    selector: 'app-remote',
    templateUrl: './remote.component.html',
    styleUrls: ['./remote.component.scss']
})
export class RemoteComponent implements OnInit {

    device: Device;
    isEditing: boolean;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.forEach(data => {
            this.isEditing = data['isEditing'] || false;
        });

        this.route.params.forEach((params: Params) => {
            let deviceId: string = params['deviceId'];
            this.device = {
                id: deviceId,
                name: 'device ' + deviceId,
                clientkey: 'clientkey',
                deviceid: 'deviceid'
            };
        });
    }

}
