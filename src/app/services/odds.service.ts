import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import matches from './matches.json';

@Injectable({
  providedIn: 'root'
})
export class OddsService {

  private url: string = 'https://v3.football.api-sports.io/odds/live';

  private httpOptions: any = {
    headers: new HttpHeaders({ 'x-apisports-key': '9f402e282bf4a8c4f5fb9b6ad5c83d24' })
  };

  constructor(private http: HttpClient) { }

  getOdds(): Observable<any> {
    return of(matches);
    /*return this.http.get<any>(this.url, this.httpOptions).pipe(
      tap((_: HttpEvent<string>) => console.log(`get odds`)),
      catchError(this.handleError<any>('error'))
    );*/
  }

  private handleError<T>(operation: string = 'operation') {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return error;
    };
  }

}
