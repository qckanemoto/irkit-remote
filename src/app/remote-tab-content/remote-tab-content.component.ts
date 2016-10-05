import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params }  from '@angular/router';

import { Button } from '../classes/button';
import { Device } from '../classes/device';

@Component({
    selector: 'app-remote-tab-content',
    templateUrl: './remote-tab-content.component.html',
    styleUrls: ['./remote-tab-content.component.scss'],
})
export class RemoteTabContentComponent implements OnInit {

    @Input() isEditing: boolean;
    @Input() buttons: Button[];
    @Input() device: Device;
    tabIndex: number;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.tabIndex = params['index'];
        });
    }

    onClickButton(button: Button) {
        if (this.isEditing) {
            this.router.navigate(['remote', this.device.id, 'edit', button.id]);
        } else {
            this.sendSignal(button);
        }
    }

    sendSignal(button: Button) {
        console.log(button.id, button.signal);
    }

}
