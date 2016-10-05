import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Device } from '../classes/device';

@Component({
    selector: 'app-navbar-top',
    templateUrl: './navbar-top.component.html',
    styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {

    @Input() device: Device;
    isEditing: boolean;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.data.forEach(data => {
            this.isEditing = data['isEditing'] || false;
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
