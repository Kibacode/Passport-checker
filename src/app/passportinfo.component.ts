import { Component } from '@angular/core';
import { PassportData } from 'src/dto/passportdata';
import { PassportInfoServices } from './passportinfo.services';


@Component({
  selector: 'app-passport-info',
  templateUrl: './passportinfo.component.html',
  styleUrls: [],
})
export class PassportInfoComponent {
  countries: string[] = [];

  selectedOrigin: string = '';
  selectedDestination: string = '';

  valueReturn: string = '';

  constructor(private passportinfoservices: PassportInfoServices) {}

  ngOnInit() {
    this.passportinfoservices.callGetCountriesWS().subscribe(res => this.countries = res.data as string[]);
  }

  onChangeOrigin() {
      this.selectedDestination = '';
      this.valueReturn = '';
  }

  onChangeDestination() {
    this.passportinfoservices.getPassportInfo(
      this.selectedOrigin,
      this.selectedDestination
    ).subscribe(res => {
        let data:PassportData = res.data as PassportData
        if(res.code === 400){
          this.valueReturn = `There's no coincidences for the data sent to service. Please select other options.`
        }else{
          if(isNaN(+data.requirements)){
            switch(data.requirements){
              case"visa free":
                this.valueReturn = `The passport ${data.origin} is visa free for traveling to ${data.destiny}  \n  `;
                break;
              case"visa on arrival":
                this.valueReturn = `The passport ${data.origin} requires ${data.requirements} to ${data.destiny}  \n  `;
                break;
              case"e-visa":
                this.valueReturn = `The passport ${data.origin} requires ${data.requirements} for traveling to ${data.destiny}  \n  `;
                break;
              case"visa required":
                this.valueReturn = `The passport ${data.origin} requires visa for traveling to ${data.destiny}  \n  `;
                break;
              case"no admission":
                this.valueReturn = `There's not admission to travel from ${data.origin} to ${data.destiny}  \n  `;
                break;
              case"covid ban":
                this.valueReturn = `There's not admission to travel from ${data.origin} to ${data.destiny} due to covid ban \n  `;
                break;
            }
          }else{
            if(Number(data.requirements)  === -1 ){
              this.valueReturn = `The origin and destination is the same.`
            }else{
              this.valueReturn = `The passport ${data.origin} is ${data.requirements} visa free for traveling to ${data.destiny}  \n  `
            }
          }
        }

    });
  }

  resetControls() {
    this.selectedOrigin = '';
    this.selectedDestination = '';
  }
}
