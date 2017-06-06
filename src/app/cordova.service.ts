import {Injectable} from '@angular/core';

declare let navigator: any;
declare let ContactFindOptions: any;

@Injectable()
export class CordovaService {

  deviceReady: boolean = false;

  addEventListener() {
    return new Promise((resolve, reject) => {
      document.addEventListener("deviceready", function (success) {
        resolve(success);
      }, false);
    })
  }

  isDeviceReady() {
    if (!this.deviceReady) {
      return this.addEventListener()
        .then(() => {
          this.deviceReady = true;
          return Promise.resolve();
        })
        .catch((err) => {
          return Promise.reject(err);
        })
    }
    return Promise.resolve();

  }

  findContact(fields: any, options: any) {
    return this.isDeviceReady()
      .then(() => {
        return new Promise((resolve, reject) => {
          navigator.contacts.find(fields, function (success) {
            resolve(success);
          }, function (error) {
            reject(error)
          }, options);

        });
      });
  }

  removeContacts(contact): Promise<any> {
    return new Promise((resolve, reject) => {

      contact.remove(function (success) {
        resolve(success);
      }, function (error) {
        reject(error);
      });
    })
  }

  saveContact(item: any) {
    return new Promise((resolve, reject) => {

      let myContact = navigator.contacts.create(item);

      myContact.save(function (success) {
          resolve(success);
        },
        function (error) {
          reject(error);
        })
    });
  }



}
