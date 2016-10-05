import { Component, OnInit, Input } from '@angular/core';

import { Device } from '../classes/device';

@Component({
    selector: 'app-navbar-bottom',
    templateUrl: './navbar-bottom.component.html',
    styleUrls: ['./navbar-bottom.component.scss']
})
export class NavbarBottomComponent implements OnInit {

    @Input() device: Device;

    constructor() {
    }

    ngOnInit() {
    }
}
