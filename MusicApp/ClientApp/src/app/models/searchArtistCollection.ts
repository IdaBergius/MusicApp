import { Artist } from './artist';

export class SearchArtistCollection{
   
    href: string; 
     items: Artist[]; 
     limit:number; 
     next: object; 
     offset: number; 
     previous: object; 
     total: number; 
}