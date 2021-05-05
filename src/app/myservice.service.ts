import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  getData(date,district){
    return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?Accept-Language=en_US&district_id=${district}&date=${date}`)
  }
}
