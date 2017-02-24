import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthProviders, AuthMethods } from 'angularfire2';

import { Device } from '../classes/device';
import { Tab } from '../classes/tab';

import { DeviceRepositoryService } from '../services/device-repository.service';

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
    devices: FirebaseListObservable<Device[]>;

    constructor(private route: ActivatedRoute, private router: Router, private deviceRepository: DeviceRepositoryService, private af: AngularFire) {
    }

    ngOnInit() {
        this.af.auth.login(
            {
                email: 'kanemoto.takashi@gmail.com',
                password: 'Knmttks0218',
            },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            }
        );
        this.devices = this.deviceRepository.getDevices();

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

    toggleEditing() {
        let link = ['remote', this.device.id];
        if (!this.isEditing) {
            link.push('edit');
        }
        this.router.navigate(link);
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
