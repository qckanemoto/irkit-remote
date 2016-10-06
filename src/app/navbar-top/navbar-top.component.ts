import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-navbar-top',
    templateUrl: './navbar-top.component.html',
    styleUrls: ['./navbar-top.component.scss'],
})
export class NavbarTopComponent implements OnInit {

    @Input() heading: string;
    @Input() icon: string;

    constructor() {
    }

    ngOnInit() {
    }

}
