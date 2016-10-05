import { Component, OnInit, Input } from '@angular/core';

import { Device } from '../classes/device';
import { Tab } from '../classes/tab';

@Component({
    selector: 'app-remote-tabs',
    templateUrl: './remote-tabs.component.html',
    styleUrls: ['./remote-tabs.component.scss']
})
export class RemoteTabsComponent implements OnInit {

    @Input() device: Device;
    @Input() isEditing: boolean;

    tabs: Tab[] = [
        {
            name: 'Tab1',
            buttons: [
                {
                    id: '1',
                    icon: 'power-off',
                    label: 'label1',
                    signal: 'signal1'
                },
                {
                    id: '2',
                    icon: 'music',
                    label: 'label2',
                    signal: 'signal2'
                },
                {
                    id: '3',
                    icon: 'rocket',
                    label: 'label3',
                    signal: 'signal3'
                },
                {
                    id: '4',
                    icon: 'rocket',
                    label: 'label3',
                    signal: 'signal3'
                },
                {
                    id: '5',
                    icon: 'rocket',
                    label: 'label3',
                    signal: 'signal3'
                },
                {
                    id: '6',
                    icon: 'rocket',
                    label: 'label3',
                    signal: 'signal3'
                },
                {
                    id: '7',
                    icon: 'rocket',
                    label: 'label3',
                    signal: 'signal3'
                },
                {
                    id: '8',
                    icon: 'rocket',
                    label: 'label3',
                    signal: 'signal3'
                },
                {
                    id: '9',
                    icon: 'rocket',
                    label: 'label3',
                    signal: 'signal3'
                },
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

    constructor() {
    }

    ngOnInit() {
    }

}
