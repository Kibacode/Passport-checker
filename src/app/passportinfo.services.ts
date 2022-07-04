import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ResponseData } from 'src/dto/responsedata';

@Injectable()
export class PassportInfoServices implements OnInit {
  urlWS: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  ngOnInit() {

  }

  getPassportInfo(origin: string, destination: string) {
    return this.http.get<ResponseData>(this.urlWS+'passportinformation/'+`${origin}/${destination}`);
  }

  callGetCountriesWS(){
    return this.http
      .get<ResponseData>(this.urlWS + 'getCountries');
  }
}
