import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  constructor(private http: HttpClient) {
  }

  get(id?): Observable<any> {
    let url = 'api/themes';
    if (id) {
      url = 'api/themes/' + id;
    }
    return this.http.get(url);
  }

  post(body): Observable<any> {
    return this.http.post('api/themes', body);
  }

  count(): Observable<any> {
    return this.http.get('api/themes/count');
  }

  put(id, body): Observable<any> {
    return this.http.put('api/themes/' + id, body);
  }

  save(body, id?): Observable<any> {
    if (id) {
      return this.put(id, body);
    } else {
      return this.post(body);
    }
  }

  delete(id): Observable<any> {
    return this.http.delete('api/themes/' + id);
  }
}
