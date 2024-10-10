angular
  .module('linksPageApp', [])
  .controller('linksController', [
    function() {
      var i = this;
      
      i.links = [
        {
          Url: 'http://www.google.com',
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
          Url: 'http://www.google.com/calendar',
          Text: 'Google Calendar'
        },
        {
          Url: 'http://keep.google.com/',
          Text: 'Google Keep'
        },
        {
          Url: 'http://photos.google.com',
          Text: 'Google Photos'
        },
        {
          Url: 'http://maps.google.com',
          Text: 'Google Maps'
        },
        {
          Url: 'http://www.reddit.com',
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
          Url: 'http://boards.straightdope.com',
          Text: 'SDMB'
        },
        {
          Url: 'https://pncpoints.pnc.com',
          Text: 'PNC Points'
        },
        {
          Url: 'http://xkcd.com',
          Text: 'XKCD'
        },
        {
          Url: 'http://www.youtube.com',
          Text: 'YouTube'
        },
        {
          Url: 'http://en.wikipedia.org',
          Text: 'Wikipedia'
        },
        {
          Url: 'http://www.imdb.com',
          Text: 'Internet Movie Database'
        },
        {
          Url: 'http://www.barnesandnoble.com',
          Text: 'Barnes & Noble'
        },
        {
          Url: 'http://www.amazon.com',
          Text: 'Amazon'
        },
        {
          Url: 'http://www.ancestry.com',
          Text: 'Ancestry'
        },
        {
          Url: 'http://10.0.0.1',
          Text: 'Router Login'
        },
        {
          Url: 'http://10.0.0.2',
          Text: 'Print Server'
        },
        {
          Url: 'http://10.0.0.3:5000',
          Text: 'NAS Server'
        },
        {
          Url: 'https://office365.cmich.edu',
          Text: 'Central E-mail'
        },
        {
          Url: 'http://centrallink.cmich.edu',
          Text: 'CentralLink'
        },
        {
          Url: 'http://blackboard.cmich.edu',
          Text: 'Blackboard'
        }
      ];
    }
  ]);