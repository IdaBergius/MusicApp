import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'console';
import { Observable } from 'rxjs';
import { Song } from '../models/song';

@Injectable()
export class SearchService{
private baseUrl = '/music';

constructor(private readonly http: HttpClient) {}

// getMusicSuggestionsByArtist(id: string): Observable<Song[]>{


//     return this.http.get<Song[]>(`${this.baseUrl}/${id}`);


// }

get(): Observable<string>{

    console.log("In service!")
   return this.http.get<string>(this.baseUrl);
}




}