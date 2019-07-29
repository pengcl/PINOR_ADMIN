import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {formatQuery} from '@shared/utils/utils';

@Injectable({providedIn: 'root'})
export class ArticleService {
  constructor(private http: HttpClient) {
  }

  item(id): Observable<any> {
    return this.http.get('api/articles/' + id);
  }

  list(query): Observable<any> {
    return this.http.get('api/articles' + formatQuery(query));
  }

  post(body): Observable<any> {
    return this.http.post('api/articles', body);
  }

  count(): Observable<any> {
    return this.http.get('api/articles/count');
  }

  put(id, body): Observable<any> {
    return this.http.put('api/articles/' + id, body);
  }

  delete(id): Observable<any> {
    return this.http.delete('api/articles/' + id);
  }

  save(body, id?): Observable<any> {
    if (id) {
      return this.put(id, body);
    } else {
      return this.post(body);
    }
  }
}
