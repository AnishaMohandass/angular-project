import { Injectable } from '@angular/core';
import { College } from './college';
import { LIST } from './mock-college';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  getNames() : College [] {
    return LIST;
  }

  constructor() { }
}
