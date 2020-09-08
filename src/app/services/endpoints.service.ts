import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Election } from '../model/interface';

interface MyData {
  data: `object`;
}

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private http: HttpClient) { }
  getElection(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.get<MyData>('https://upltest.com.ng/election/public/api/v1/elections', {headers: httpHeaders});
  }
  login(loginDetails): Observable<any> {
    return this.http.post('https://upltest.com.ng/election/public/api/v1/auth/login', loginDetails);
  }
  specificElection(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.get(`https://upltest.com.ng/election/public/api/v1/contestant/${id}`, {headers: httpHeaders});
  }
  getAllContestants(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.get<any>('https://upltest.com.ng/election/public/api/v1/contestants', {headers: httpHeaders});
  }
  vote(id: number, value: {}): Observable<any> {

    const httpHeaders = new HttpHeaders({
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.post<any>('https://upltest.com.ng/election/public/api/v1/vote/submit_array/1', value, {headers: httpHeaders});
  }
  result(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.get<any>(`https://upltest.com.ng/election/public/api/v1/votes/viewall/${id}`, {headers: httpHeaders});
  }
  create(value: object): Observable<any> {
    const httpHeaders = new HttpHeaders({
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.post<any>('https://upltest.com.ng/election/public/api/v1/contestants', value, {headers: httpHeaders});
  }
}
