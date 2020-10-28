import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '../../services/searchService';
import { SpotifyApiClientService } from '../../services/spotifyApiClientService';
import { SearchArtistResponse } from '../../models/searchArtistResponse';
import { Artist } from '../../models/artist';

@Component({
    selector: 'app-search-music',
    templateUrl: './search-music.component.html'
  })
export class SearchMusicComponent implements OnInit{
    test: SearchArtistResponse;
    artist: Artist;
    searchMusicForm: FormGroup;
    resultForm: FormGroup;
    result: boolean;
ngOnInit(){
this.result = false;
  
}
    constructor(private readonly searchService: SearchService, 
                private readonly spotifyApiClientService: SpotifyApiClientService,
                private formBuilder: FormBuilder){
                    this.createForm();
                    this.createResultForm();
                }

    onSubmit(musicSearch: any){

        console.log(musicSearch);

        this.spotifyApiClientService.SearchAsync(musicSearch.type, musicSearch.searchWord).subscribe( x =>{
 
            console.log(x);
            if (this.searchMusicForm.get("type").value != 'artist')
            {
                console.log("in if");
                this.resultForm.setValue({ name : x.name, type: this.searchMusicForm.get("type").value})
                this.result = true;
                return;
            }
            var randomIndex = this.getRandomArtist(x.artists.length);
           this.resultForm.setValue({ name: x.artists[randomIndex].name, type: this.searchMusicForm.get("type").value} )
            this.result = true;  
            console.log(this.resultForm.value);  
         });         
    }            
      
    getRandomArtist(length: number): number{
       return Math.floor(Math.random() * length);
    }
        
    createForm(){
        const form = this.formBuilder.group({
            artist: '',
            searchWord: '',
            type: ''
        });             
                    
        this.searchMusicForm = form;
    }

    createResultForm()
    {
        const form = this.formBuilder.group({
            name: '',
            type: ''
        });

        this.resultForm = form;
    }
}
