using System;
using System.Net.Http;

using System.Threading.Tasks;
//using CodingAssignment.Spotify.ApiClient.Models;
using MusicApp.Models;
using Flurl;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

namespace MusicApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SpotifyApiClientController : ControllerBase
    {
        private const string ClientId = "996d0037680544c987287a9b0470fdbb";
        private const string ClientSecret = "5a3c92099a324b8f9e45d77e919fec13";

        protected const string BaseUrl = "https://api.spotify.com/";
        private HttpClient GetDefaultClient()
        {
            var authHandler = new SpotifyAuthClientCredentialsHttpMessageHandler(
                ClientId,
                ClientSecret,
                new HttpClientHandler());

            var client = new HttpClient(authHandler)
            {
                BaseAddress = new Uri(BaseUrl)
            };

            return client;
        }

        [HttpGet("{type}/{name}")]
        public async Task<object> SearchAsync(string type, string name, int? limit = null, int? offset = null)
        {
            var client = GetDefaultClient();

            var url = new Url("/v1/search");
            url = url.SetQueryParam("q", name);
            url = url.SetQueryParam("type", type);

            if (limit != null)
                 url = url.SetQueryParam("limit", limit);

            if (offset != null)
                url = url.SetQueryParam("offset", offset);


            switch (type)
            {
                case "artist":
                    {
                        var response = await client.GetStringAsync(url);

                        var artistResponse = JsonConvert.DeserializeObject<SearchArtistResponse>(response);

                        var related = await GetRelatedArtists(artistResponse.Artists.Items[0].Id);

                        return related;
                    }

                case "album":
                    {
                        //TODO Implement logic to get related albums
                        // var album = await GetRelatedAlbums("");

                        return new SearchAlbumResponse() { Name = "The best Album" };
                    }

                case "track":
                    {
                        //TODO Implement logic to get related tracks
                        // var track = await GetRelatedTracks("");
                        return new SearchTracksResponse() { Name = "The best track" };
                    }

                case "playlist":
                    {
                        //TODO Implement logic to get related platlists
                        // var album = await GetRelatedAl("");}

                        return new SearchPlaylistsResponse() { Name = "The best playlist" };
                    }
            }

            return new object();
        }


        public async Task<RelatedArtistResponse> GetRelatedArtists(string artistId)
        {
            var client = GetDefaultClient();

            var url = new Url($"/v1/artists/{artistId}/related-artists");

            var response = await client.GetStringAsync(url);
            var relatedArtists = JsonConvert.DeserializeObject<RelatedArtistResponse>(response);
            return relatedArtists;
        }

        public async Task<SearchAlbumResponse> GetRelatedAlbums(string albumId)
        {
            var client = GetDefaultClient();
            //Hardcoded id, TODO implement GetRelatedAlbums
            //albumId = "4iJ8dp0xkEhpy7aox8icUd";
            var url = new Url($"/v1/albums/{albumId}");

            var response = await client.GetStringAsync(url);

            var albumResponse = JsonConvert.DeserializeObject<SearchAlbumResponse>(response);

            return albumResponse;
        }

        public async Task<SearchTracksResponse> GetRelatedTracks(string trackId)
        {
            var client = GetDefaultClient();

            var url = new Url($"/v1/tracks/{trackId}");

            var response = await client.GetStringAsync(url);

             var tracksResponse = JsonConvert.DeserializeObject<SearchTracksResponse>(response);
          
            return tracksResponse;
        }

        public async Task<SearchPlaylistsResponse> GetRelatedPlaylists(string playlistId)
        {
            var client = GetDefaultClient();

            var url = new Url($"/v1/playlists/{playlistId}");

            var response = await client.GetStringAsync(url);

            var playlistResponse = JsonConvert.DeserializeObject<SearchPlaylistsResponse>(response);

            return playlistResponse;
        }
    }
}
