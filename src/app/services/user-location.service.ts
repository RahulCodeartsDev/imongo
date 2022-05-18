import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLocationService {

  constructor() { }
  getLocationService():Promise<any>{
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resp => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude })
          reject("failed to get user location")
        })
      })
  }
}
