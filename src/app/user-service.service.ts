import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { AboutUs } from './about-us';

@Injectable()
export class UserService {

  private usersUrl: string;
  private aboutUsUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
    this.aboutUsUrl = 'http://localhost:8080/about';
   }

   public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public getAboutUs(): Observable<AboutUs> {
    return this.http.get<AboutUs>(this.aboutUsUrl);
  }

  public saveAboutUs(aboutUs: AboutUs) {
    return this.http.post<AboutUs>(this.aboutUsUrl, aboutUs);
}
}
