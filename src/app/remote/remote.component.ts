import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, UrlSegment, Router } from '@angular/router';
import { Device } from '../classes/device';

@Component({
    selector: 'app-remote',
    templateUrl: './remote.component.html',
    styleUrls: ['./remote.component.scss']
})
export class RemoteComponent implements OnInit {

    @Input() device: Device;
    isEditing: boolean;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        // judge isEditing.
        this.route.url.forEach((urls: UrlSegment[]) => {
            if (urls.pop().path === 'edit') {
                this.isEditing = true;
            }
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

    toggleEditing() {
        let link = ['remote', this.device.id];
        if (!this.isEditing) {
            link.push('edit');
        }
        this.router.navigate(link);
    }
}
