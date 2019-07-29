import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(body): Observable<any> {
    return this.http.post('api/auth/local?_allow_anonymous=true', body);
  }

  register(body): Observable<any> {
    return this.http.post('api/auth/local?_allow_anonymous=true', body);
  }
}
