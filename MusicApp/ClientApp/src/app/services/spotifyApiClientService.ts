import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchArtistResponse } from '../models/searchArtistResponse';
import { Artist } from '../models/artist';
@Injectable()
export class SpotifyApiClientService{
private baseUrl = '/spotifyApiClient';

constructor(private readonly http: HttpClient) {}

SearchAsync(type: string, name: string): Observable<any>{

    console.log("In service!", type);
   return this.http.get<any>(`${this.baseUrl}/${type}/${name}`);
    }                
} 