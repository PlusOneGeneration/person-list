import {Injectable, NgZone} from '@angular/core';

@Injectable()
export class ZoneService {

  constructor(private zone: NgZone) {
  }

  run(fn: Function): Promise<any> {
    return new Promise((resolve, reject) => {
      this.zone.runOutsideAngular(() => {
        const result = fn();

        this.zone.run(() => {
          Promise.resolve()
            .then(() => result)
            .then((result) => {
              this.zone.run(() => null);
              return result;
            })
            .catch((error) => {
              this.zone.run(() => null);
              return Promise.reject(error);
            })
            .then(resolve, reject);
        });
      });
    });
  }

}
