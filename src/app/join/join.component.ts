import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StateService, User } from '../state.service';

declare const feather: any;

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
})
export class JoinComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private stateService: StateService,
    private router: Router
  ) {}
  submitDisabled = false;
  username = '';
  buttonText = 'Enter';

  async onSubmit() {
    if (this.username) {
      this.submitDisabled = true;
      this.buttonText = 'Submitting...';

      const user: User = (await this.join(this.username).toPromise()) as User;
      this.stateService.user = user;

      this.router.navigate(['']);
    }
  }

  public join(username: string): Observable<{}> {
    return this.http.post('http://localhost:8000/join', { username });
  }

  ngOnInit(): void {
    feather.replace();
  }
}
