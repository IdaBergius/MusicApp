import { ExternalUrls } from './externalUrls';
import { Image } from './image';
export class Artist {
     externalUrls: ExternalUrls; 

     genres: object[]; 

     href: string; 

     id: string;

     images: Image[]; 

     name: string;

     popularity: number; 

     type: string; 

     uri: string; 

}