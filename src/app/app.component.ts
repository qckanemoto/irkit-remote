import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    private viewContainerRef: ViewContainerRef;

    constructor(viewContainerRef: ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        // see https://valor-software.com/ng2-bootstrap/#/modals
        this.viewContainerRef = viewContainerRef;
    }
}
