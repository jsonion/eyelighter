{
var bfr=[];
let _localStorage = (typeof window !== 'undefined' && window.localStorage !== 'undefined') && window
    .localStorage;

let _____jsonionInMemoryData
 = {    "urlLocations":{}||[]    };

const jsonionDB = new d_b(localStorage || inMemory);
 ///    (()))
class JSonionDB { }
function d_b (adapter)  {
  return new (adapter({}));
}

         var urlLocations = jsonionDB
.collection("urlLocations", {}),  url;


chrome.extension.onMessage.addListener(
function (request, sender, sendResponse) {
  switch (request[`type`]) {
   case  "getHighlights":
         var highlights
          =  getHighlights();

         var url
          =  getReducedURL(request[`url`]);

         if (!highlights[url]) highlights[url]=[];
         return sendResponse(  highlights[url]  );

function  getReducedURL (url)  {
          bfr.length=0;
          bfr.length=2;
          if (   bfr[1]   =
             (   bfr[0]   =
              jsonionDB.collection("urlLocations",
          {} ))[ url ]) return bfr[1];

                 bfr[1]
               = reduceURL(request[`url`])
                   .filter(part => part.length)
                   .flatten(                 );

          jsonionDB.setCollection("urlLocations",
             Object.assign(bfr[0], 
                        {[ bfr[1] ]: url})
          );

          return bfr[1]; 
}

   case  "storeHighlight":
         var {str, pathObj,
            L_str,
            R_str}=request;

         storeHighlight



function  getHighlights (collection
                      = "highlights") {
         if (JSonionDB [`highlights`])
     return  JSonionDB [`highlights`]; 

         var highlights
          =  jsonionDB.collection("highlights");
          
         if (highlights === undefined)
             highlights
          =  jsonionDB.collection("highlights",
         { });

       ////////

     return (JSonionDB [`highlights`] 
                       = highlights ); 
}

function  storeHighlight ({  str, i
                           L_str, 
                           R_str, pathObj }) {
          if  (pathObj[0] instanceof String
          &&   ) {
          var highlights
           =  getHighlights();

          if (!highlights[url]) 
               highlights[url] = new Object();

          if (!highlights[url][pathObj[0]])
               highlights[url][pathObj[0]]
                               = new Array();

          if (!highlights[url][pathObj[0]]
                    .find(highlightObj => 
                  i  ===  highlightObj[  `i`  ] &&
                str  ===  highlightObj[ `str` ] ||
                str  ===  highlightObj[ `str` ] &&
              L_str  ===  highlightObj.L_str    ||
              R_str  ===  highlightObj.R_str    ))
             {
              
               highlights[url][pathObj[0]]
         .push(arguments[0])

             }
  /******////

          return true;                    
}}


   case  "removeHighlight":
          sendResponse();

   ////   chrome.pageAction.show(sender.tab.id);
  }
});

const rxUrlLocation = Object.assign((bfr=[],
 [   /^(.*):/,

 (bfr[0]=(
 {   strip: 1,
 subdomain: 2,
    domain: 3 }),
     /\/\/(?:(www[\d]*)\.|([a-z0-9]+)\.)(.*\.(?:[a-z]))/),

 (bfr[1]=(
 {   route: 1,
     param: 2,
      hash: 3 }),
     /\/([^/])([?#])?/g),

 (bfr[2]=(
 {   param: 2,
      hash: 3 }),
  new RegExp("(([?&]" + "[^=#&]+"
                      +
 "(?:"   +   "="      + "[^#&]+"
         +   ")?"     + "))"
                      + "([?#])?",  'g'))
]), ...bfr);


 ///////////////////////////////////////////////
/*

 ((d(b)))  Adapters: inMemory, localStorage, ...


*/// -------------------------------------------

function inMemory (d_b = {
/*  collections, source, readOnly,
    auth, authTokenRefresh,
    find, findOne, subscribe,
    update, append, remove,
    listActions, test, export  *////////
}) {

     d_b.setCollection = (k, v) =>  
   (_____jsonionInMemoryData[k] = v);

     d_b.getCollection = (k, v) =>
   (_____jsonionInMemoryData[k]);

     d_b.removeCollection = (k) => { delete (
    _____jsonionInMemoryData[k]    )        };

     d_b.clear = () => 
  (_____jsonionInMemoryData = {});
    
     d_b.collection    =    (k,   v=undefined) =>
    _____jsonionInMemoryData[k] !== undefined  &&
   (_____jsonionInMemoryData[k]              ) ||
                            (v) !== undefined  &&
   (_____jsonionInMemoryData[k] = v          ); 

  return d_b;
}

function localStorage (d_b) {
  if  (!_localStorage)
         return false;

  d_b.collection = (key, value=undefined) => {
  try {
  var  res = _localStorage.getItem(key);
   if (res  !==  undefined)
       return JSON.parse(res);

   if (value !== undefined)
       return (

       value  =  JSON.stringify((value)),
      _localStorage.setItem(key, value)
      
       ) && value;

  else return null;
     } catch (err) {
       return err;
     }
  };

  d_b.setCollection = (key, value) => {
  try {
   if (value !== undefined)
       return (

       value  =  JSON.stringify((value)),
      _localStorage.setItem(key, value)
      
       ) && value;
     } catch (err) {
       return err;
     }
  };

  d_b.getCollection = (key) => {
  try {
  var  res = _localStorage.getItem(key);
   if (res  !==  undefined)
       return JSON.parse(res);

  else return null;
     } catch (err) {
       return err;
     }
  };

  d_b.removeCollection = (key) => {
  try {
        window.localStorage.removeItem(key);
        return true;
      } catch (error) {
        return error;
      }
  };

  d_b.clear = () => {
  try {
        window.localStorage.clear();
        return true;
      } catch (error) {
        return error;
      }
  };

  return d_b;
}

function reduceURL (url, removeRoutes=[],
                         removeParams=[],
                         removeHashes=[]) {
 if (url instanceof String === false) {{ return }}
 const rx
   =   rxUrlLocation;
 
 /////
  var  removeRoutesObj;
  if ( removeRoutes instanceof Object)
       removeRoutesObj = removeRoutes;
  if (!removeRoutes instanceof Array )
       removeRoutes    = (   false   );

  var  removeParamsObj;
  if ( removeParams instanceof Object)
       removeParamsObj = removeParams;
  if (!removeParams instanceof Array )
       removeParams    = (   false   );

  var  removeHashesObj;
  if ( removeHashes instanceof Object)
       removeHashesObj = removeHashes;
  if (!removeHashes instanceof Array )
       removeHashes    = (   false   );

 /////
  var match  =  rx[0].exec(url);
  if (match == (false)) return ( false );


      rx[1].lastIndex
    = rx[0].lastIndex;


 /////
  var match  =  rx[1].exec(url);
  if (match == (false)) return (( false ));
  var
  [  domain,
  subdomain] = [match[  rx.domain   ],
                match[  rx.subdomain]];

      rx[2].lastIndex
    = rx[1].lastIndex;


 /////
  var routes=[], params=[], hash=[], step;
   rxParams(url, routes, rx.route, step = (2),
           removeRoutes, removeRoutesObj);

                               if (step == 3)
   rxParams(url, params, rx.param, step = (3),
           removeParams, removeParamsObj);

                               if (step == 4)
   rxParams(url,   hash, rx.hash,  step = (4),
           removeHashes, removeHashesObj);

   return [subdomain, domain, routes, params, hash];
 ///////// ********* /

 function rxParams (result, rx, rx_param, rxStep,
                   removeParams, removeParamsObj) {
    while (match = rx.exec(url)) {
       if (removeParams
       &&  excludeRule(match[  rx_param  ],
           removeParams))      continue;
                                 else
       if (removeParamsObj
       &&  removeParamsObj  [   domain   ]
       &&  excludeRule(match[  rx_param  ],
           removeParamsObj  [   domain   ]))
           continue;


           result
     .push(match[ rx.param ]); /************ ///
                                  ((())))  *///

   if     (rxStep)
   switch (rxStep) {
    case  2:
     if   (match[ rx_param ])
   return (       rx[3].lastIndex
                = rx[  `lastIndex`  ]-1, step++);
    case  3:
     if   (match[ rx.param ])
   return (       rx[4].lastIndex
                = rx[  `lastIndex`  ]-1, step++);

 }}}

 function excludeRule (str, ruleset) {
 for (let pattern of ruleset)
      if (pattern instanceof RegExp
      &&  pattern.test(str))
          return true;
 else if (pattern === str)
          return true;
}}
