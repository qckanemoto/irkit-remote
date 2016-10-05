import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Device } from '../classes/device';

@Component({
    selector: 'app-navbar-top',
    templateUrl: './navbar-top.component.html',
    styleUrls: ['./navbar-top.component.scss'],
})
export class NavbarTopComponent implements OnInit {

    @Input() device: Device;
    @Input() isEditing: boolean;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    toggleEditing() {
        let link = ['remote', this.device.id];
        if (!this.isEditing) {
            link.push('edit');
        }
        this.router.navigate(link);
    }

}
