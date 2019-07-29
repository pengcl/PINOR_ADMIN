import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of as observableOf} from 'rxjs';
import {mergeMap as observableMargeMap} from 'rxjs/operators';
import {getIndex} from '@shared/utils/utils';

@Injectable({providedIn: 'root'})
export class CatalogService {
  constructor(private http: HttpClient) {
  }

  get(id?): Observable<any> {
    if (id) {
      return this.http.get('api/catalogs/' + id);
    } else {
      return this.http.get('api/catalogs').pipe(observableMargeMap(res => {
        const list = [];

        function getCatalogs(catalogs) {
          const _list = [];
          catalogs.forEach(catalog => {
            catalog.title = catalog.name;
            if (catalog.children && catalog.children.length > 0) {
              catalog.children = getCatalogs(catalog.children);
            } else {
              catalog.isLeaf = true;
            }
            _list.push(res[getIndex(res, 'id', catalog.id)]);
          });
          return _list;
        }

        getCatalogs(res).forEach(item => {
          if (!item.parent) {
            list.push(item);
          }
        });
        return observableOf(list);
      }));
    }
  }

  post(body): Observable<any> {
    return this.http.post('api/catalogs', body);
  }

  count(): Observable<any> {
    return this.http.get('api/catalogs/count');
  }

  put(id, body): Observable<any> {
    return this.http.put('api/catalogs/' + id, body);
  }

  delete(id): Observable<any> {
    return this.http.delete('api/catalogs/' + id);
  }

  save(body, id?): Observable<any> {
    if (id) {
      return this.put(id, body);
    } else {
      return this.post(body);
    }
  }
}
