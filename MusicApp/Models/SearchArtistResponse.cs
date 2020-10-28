using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp.Models
{
    public class SearchArtistResponse
    {
            [JsonProperty("artists")]
            public SearchArtistCollection Artists { get; set; }
    }
}
