import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class HttpAbstract {
  private api = environment.API;

  constructor(protected http: HttpClient) {}

  get(url: string): Observable<any> {
    if (url.includes('undefined')) return new Observable<any>();
    console.log(this.api + url);

    return this.http.get(`${this.api}${url}`);
  }

  post(url: string, body: any): Observable<any> {
    if (url.includes('undefined')) return new Observable<any>();
    return this.http.post(this.api + url, body);
  }

  put(url: string, body: any): Observable<any> {
    if (url.includes('undefined')) return new Observable<any>();
    return this.http.put(this.api + url, body);
  }

  delete(url: string): Observable<any> {
    if (url.includes('undefined')) return new Observable<any>();
    return this.http.delete(this.api + url);
  }
}
