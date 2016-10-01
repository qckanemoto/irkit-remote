import { Component, OnInit } from '@angular/core';

import { Tab } from '../classes/tab';

@Component({
    selector: 'app-remote-tabs',
    templateUrl: './remote-tabs.component.html',
    styleUrls: ['./remote-tabs.component.scss']
})
export class RemoteTabsComponent implements OnInit {

    tabs: Tab[] = [
        {
            name: 'Tab1',
            buttons: [
                {
                    icon: 'power-off',
                    label: 'label1'
                },
                {
                    icon: 'music',
                    label: 'label2'
                },
                {
                    icon: 'rocket',
                    label: 'label3'
                }
            ]
        },
        {
            name: 'Tab2',
            buttons: []
        },
        {
            name: 'Tab3',
            buttons: []
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
