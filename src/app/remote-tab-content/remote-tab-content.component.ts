import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router }  from '@angular/router';

import { Button } from '../classes/button';
import { Device } from '../classes/device';

@Component({
    selector: 'app-remote-tab-content',
    templateUrl: './remote-tab-content.component.html',
    styleUrls: ['./remote-tab-content.component.scss']
})
export class RemoteTabContentComponent implements OnInit {

    @Input() isEditing: boolean;
    @Input() buttons: Button[];
    @Input() device: Device;

    constructor(private router: Router) {
    }

    ngOnInit() {
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
