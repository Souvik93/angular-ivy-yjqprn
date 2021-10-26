import { Component, OnInit, VERSION } from '@angular/core';

import { CountryAndStates } from './CountryAndState.interface';

import { AppService } from './app.services';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  countryDetails: CountryAndStates[];

  selectedCountry: CountryAndStates = new CountryAndStates();

  selectedStates: string[] = new Array();

  state: string;

  constructor(private readonly appService: AppService) {}

  ngOnInit() {
    this.countryDetails = this.appService.getCountryAndStatesDetails();
  }

  onCountrySelect(country: any) {
    console.log('Hey There!! ');
    console.log(country);

    console.log(this.selectedCountry);

    this.selectedStates = this.selectedCountry.states;
  }
}
