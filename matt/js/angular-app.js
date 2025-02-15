angular
  .module('linksPageApp', [])
  .controller('linksController', [
    function() {
      var i = this;
      
      i.links = [
        {
          Url: 'https://www.google.com',
          Text: 'Google'
        }, 
        {
          Url: 'https://www.gocomics.com/mycomics/1626339',
          Text: 'GoComics'
        }, 
        {
          Url: 'https://www.wunderground.com/weather/us/mi/clare/48617',
          Text: 'Weather Underground'
        },
        {
          Url: 'https://www.google.com/calendar',
          Text: 'Google Calendar'
        },
        {
          Url: 'https://keep.google.com/',
          Text: 'Google Keep'
        },
        {
          Url: 'https://photos.google.com',
          Text: 'Google Photos'
        },
        {
          Url: 'https://maps.google.com',
          Text: 'Google Maps'
        },
        {
          Url: 'https://www.reddit.com',
          Text: 'Reddit'
        },
        {
          Url: 'https://translate.google.com',
          Text: 'Google Translate'
        },
        {
          Url: 'https://accounts.isabellabank.com/login',
          Text: 'Isabella Bank'
        }, 
        {
          Url: 'https://www.pnc.com/',
          Text: 'PNC Bank'
        },
        {
          Url: 'https://www.discover.com',
          Text: 'Discover'
        },
        {
          Url: 'https://boards.straightdope.com',
          Text: 'SDMB'
        },
        {
          Url: 'https://pncpoints.pnc.com',
          Text: 'PNC Points'
        },
        {
          Url: 'https://xkcd.com',
          Text: 'XKCD'
        },
        {
          Url: 'https://www.youtube.com',
          Text: 'YouTube'
        },
        {
          Url: 'https://en.wikipedia.org',
          Text: 'Wikipedia'
        },
        {
          Url: 'https://www.imdb.com',
          Text: 'Internet Movie Database'
        },
        {
          Url: 'https://www.barnesandnoble.com',
          Text: 'Barnes & Noble'
        },
        {
          Url: 'https://www.amazon.com',
          Text: 'Amazon'
        },
        {
          Url: 'https://linkedin.com/games',
          Text: 'LinkedIn Games'
        },
        {
          Url: 'http://10.0.0.1',
          Text: 'Router Login'
        },
        {
          Url: 'https://cdr.voiply.com/index/375b44f7-5024-4043-a7fb-137193c00800',
          Text: 'Voiply Call History'
        },
        {
          Url: 'http://10.0.0.3:5000',
          Text: 'NAS Server'
        }
      ];
    }
  ]);