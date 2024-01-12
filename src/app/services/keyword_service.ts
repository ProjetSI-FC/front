import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
@Injectable({
    providedIn: 'root'
})
export class KeywordService {
    private keywordUrl = 'http://localhost:4200/browser'; // Replace with your Java API URL

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    getAllKeywords(): Observable<string[]> {
        const url = `${this.keywordUrl}/keywords`;
        return this.http.get<string[]>(url).pipe(
            tap(_ => this.log(`List of keywords sucessfully received`)),
            catchError(this.handleError<string[]>(`Error when trying to get list of keywords`))
          );
      ;
    }

    /** Log a ArticleService message with the MessageService */
    private log(message: string) {
        console.log('ArticleService: ' + message);
    }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

        console.error(error); // log to console instead

        this.log(`${operation} failed: ${error.message}`);

        return of(result as T);
        };
  }

}
