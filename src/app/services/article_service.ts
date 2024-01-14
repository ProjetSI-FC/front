import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    

    private keywordUrl = 'http://localhost:8080/browser'; // Replace with your Java API URL

    constructor(private http: HttpClient) { }

    getResults(selected_keywords: string[]): Observable<string[]> {
        const url = `${this.keywordUrl}/search`;
        let queryParams = new HttpParams();
        selected_keywords.forEach(keyword => {
            queryParams = queryParams.append("keywords", keyword);
        });
        return this.http.get<string[]>(url, {params: queryParams}).pipe(
            tap(_ => this.log(`Results articles successfully received`)),
            catchError(this.handleError<string[]>(`Error when trying to get list of articles`))
        );
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
