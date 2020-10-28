using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp.Models
{
    public class Music
    {
        public string Artist { get; set; }
        public string Song { get; set; }
        //public Song Song { get; set; }
        public string  Genre { get; set; }

        public string Language { get; set; }

        public List<string> SongList { get; set; }
    }
}
