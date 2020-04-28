import { Injectable } from '@angular/core';

export declare interface User {
  token: string;
  apiKey: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor() {}
  private _user: User;

  get user(): User {
    return this._user;
  }
  set user(user: User) {
    this._user = user;
  }
}
