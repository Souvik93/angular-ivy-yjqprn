import { Injectable } from '@angular/core';
import { CountryAndStates } from './CountryAndState.interface';

@Injectable()
export class AppService {
  countryStates: CountryAndStates[];

  constructor() {
    this.initializeCountryStates();
  }

  public getCountryAndStatesDetails(): CountryAndStates[] {
    return this.countryStates;
  }

  private initializeCountryStates() {
    this.countryStates = [
      {
        id: "2",
        country: 'US',
        states: ['Texas'],
      },
      {
        id:"1",
        country: 'India',
        states: ['Karnataka', 'West Bengal'],
      },
    ];
  }
}
