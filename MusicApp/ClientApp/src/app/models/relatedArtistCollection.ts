import { Artist } from './artist';

export class RelatedArtistCollection{
   
     items: Artist[]; 
     limit:number; 
     next: object; 
     offset: number; 
     previous: object; 
     total: number; 
}