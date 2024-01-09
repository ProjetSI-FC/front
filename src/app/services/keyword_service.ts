import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class KeywordService {
    private apiUrl = 'http://your-java-api-url'; // Replace with your Java API URL

    constructor(private http: HttpClient) { }

    putKeywordSelected(keyword: string): Promise<any> {
        const url = `${this.apiUrl}/keywords`;
        const body = { keyword };

        return this.http.post(url, body).toPromise();
    }

    getAllKeywords(): Promise<string[] | undefined> {
        const url = `${this.apiUrl}/keywords`;

        return this.http.get<string[]>(url).toPromise();
    }
}
