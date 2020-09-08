import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EndpointsService } from '../services/endpoints.service';
import { LoginInterface } from '../model/interface';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
declare let $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean  = false;
  errorMessage: string;
loginDetails: LoginInterface;
  constructor(private endpointsService: EndpointsService, private auth: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
  }
  onSubmit(SearchForm: NgForm) {
    this.loading = true;
    this.loginDetails = new LoginInterface();
    this.loginDetails.email = SearchForm.value.email;
    this.loginDetails.password = SearchForm.value.password;
    this.login(this.loginDetails);

  }
  login(loginDetails) {
    this.endpointsService.login(loginDetails).subscribe(data => {
      console.log(data);


      if (data.status === true) {
        localStorage.setItem('status', 'true');
        this.router.navigate(['/']);
        this.auth.setLoggedIn(true);
      }
      localStorage.setItem('token', data.access_token);


    }, error => {
      this.errorMessage = error;
      this.loading = false;
    });
  }
}
