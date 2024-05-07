import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  shouldDisplayHeader: boolean = true;

  constructor() { }
}
