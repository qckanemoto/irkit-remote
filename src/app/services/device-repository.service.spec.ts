/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeviceRepositoryService } from './device-repository.service';

describe('Service: DeviceRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceRepositoryService]
    });
  });

  it('should ...', inject([DeviceRepositoryService], (service: DeviceRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
