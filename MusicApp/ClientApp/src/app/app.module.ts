import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { YourMusicComponent  } from './music/your-music/your-music.component';
import { SearchMusicComponent } from './music/search-music/search-music.component';
import { SearchService } from './services/searchService';
import { SpotifyApiClientService } from './services/spotifyApiClientService';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    YourMusicComponent,
    SearchMusicComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'search-music', component: SearchMusicComponent },
      { path: 'your-music', component: YourMusicComponent },
    ])
  ],
  providers: [SearchService, SpotifyApiClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
