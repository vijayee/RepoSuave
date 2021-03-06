/*
created by Vijayee Kulkaa
*/


define('./repo-collection',function(Collection){
  'use strict';
  var repositories, defaultOptions;
  repositories={};
  defaultOptions={
    repoName: null
  };
  var Repo= function(locator,options){
    var key;
    if(!options)
      options=defaultOptions;
    if(locator){
      //handle rest endpoints
      if(isUrl(locator))
      {
        key= options.repoName || locator;
        repositories[key]=[];
        return repositories[key]
      }
      //handle already retrieved repository
      else if(repositories[locator]){
        return null;
      }
      //handle new repository
      else{
        repositories[locator]=[]
        return null;
      }
    }
  };
  /**
    Taken from https://github.com/segmentio/is-url
    all credit belongs to original author
   * Loosely validate a URL `string`.
   *
   * @param {String} string
   * @return {Boolean}
  */
  var matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
  function isUrl(string){
    return matcher.test(string);
  }
  return Repo;
}
)();
