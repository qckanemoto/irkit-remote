import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Device } from '../classes/device';
import { Tab } from '../classes/tab';

@Component({
    selector: 'app-remote',
    templateUrl: './remote.component.html',
    styleUrls: ['./remote.component.scss'],
})
export class RemoteComponent implements OnInit {

    device: Device;
    isEditing: boolean;
    tabs: Tab[];
    index: number;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let deviceId: string = params['deviceId'];
            this.device = {
                id: deviceId,
                name: 'device ' + deviceId,
                clientkey: 'clientkey',
                deviceid: 'deviceid'
            };

            this.index = +params['index'];
        });

        this.route.data.forEach(data => {
            this.isEditing = data['isEditing'] || false;
        });

        // todo
        this.tabs = this.getMockTabs();
    }

    private getMockTabs(): Tab[] {
        return [
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
                ],
            },
            {
                name: 'Tab2',
                buttons: [],
            },
            {
                name: 'Tab3',
                buttons: [],
            }
        ];
    }

}
