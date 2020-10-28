using Microsoft.AspNetCore.Mvc;
using MusicApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using Flurl;
using Newtonsoft.Json;


namespace MusicApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MusicController : ControllerBase
    {

        //Todo
        //skicka felmeddelandet till Frontend

        public void Get(string artistName, int? limit = null, int? offset = null)
        {

            var test = "TEST";


        }
    }
}
