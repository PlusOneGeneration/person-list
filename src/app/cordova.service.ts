import {Injectable} from '@angular/core';

declare let navigator: any;
declare let ContactFindOptions: any;

@Injectable()
export class CordovaService {

  constructor() {
  }

  findContact(fields: any, options: any) {
    return new Promise((resolve, reject) => {

      navigator.contacts.find(fields, function (success) {
        resolve(success);
      }, function (error) {
        reject(error)
      }, options);

    });
  }

  removeContacts(contact):Promise<any> {
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

  addEventListener() {
    return new Promise((resolve, reject) => {
      document.addEventListener("deviceready", function (success) {
        resolve(success);
      }, false);
    })
  }



}
