import {Component, OnInit, Input } from '@angular/core';

import { Button } from '../classes/button';

@Component({
    selector: 'app-remote-tab-content',
    templateUrl: './remote-tab-content.component.html',
    styleUrls: ['./remote-tab-content.component.scss']
})
export class RemoteTabContentComponent implements OnInit {

    @Input()
    buttons: Button[];

    constructor() {
    }

    ngOnInit() {
    }

}
