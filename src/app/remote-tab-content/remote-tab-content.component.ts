import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
    }

    onClickButton(button: Button) {
        if (this.isEditing) {
            console.log(this.route.params);
            this.route.params.forEach((params: Params) => {
                console.log(params);
                let deviceId = params['deviceId'];
                this.router.navigate(['remote', deviceId, 'edit', button.id]);
            });
        } else {
            this.sendSignal(button);
        }
    }

    sendSignal(button: Button) {
        console.log(button.id, button.signal);
    }

}
