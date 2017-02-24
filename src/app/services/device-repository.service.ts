import { Injectable } from '@angular/core';

import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import { Device } from '../classes/device';

@Injectable()
export class DeviceRepositoryService {

    constructor(private af: AngularFire) {
    }

    getDevices(): FirebaseListObservable<Device[]> {
        return this.af.database.list('/devices');
    }

    getDevice(id: string): FirebaseObjectObservable<Device> {
        return this.af.database.object('/devices/' + id);
    }

}
