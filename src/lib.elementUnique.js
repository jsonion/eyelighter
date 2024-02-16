{ let bfr=[];
 
 var  rxHandleNameUnique;
const rxHandleNameRandom =
      rxHandleNameUnique = Object.assign(
    function (string,
              strict
           = (false), rx = this) {
          if (strict) {
          if (string.length === 1)
           {  return (false)     }
               else
              strict=[     ];
          }

          var match;
          if (match = rx[0].test(string)) {
          if                   (!strict)
                      { return (!false) }
          if (strict
          &&  match[  rx.startNumeric  ]
          &&  match[  rx.startNumeric  ]
                        .length  >  1  )
              strict
               .push( rx.startNumeric_ );
          }

          var match;  rx[1].lastIndex=0;
          if (match = rx[1].exec(string))
          if (match[ 

                 rx.singleCaps
                                 ]
          &&     match.index     !== 0
          &&     rx[1].lastIndex !== 0
          &&     rx[1].lastIndex !== string
                                    .length)
           {     return (match)     }


          var match;
          if (match = rx[2].exec(string.match))
          if (rx[2].test(string)
          && !match[ 

                 rx.endRegular  
                                    ])
           {     return (match)     }
                   
                  else
                 return (
                 !true
           );  //////////**********/
  },[
                                new RegExp(
          "^"        +
  "(?:" + "([0-9]+)" +
   "|"  + "([a-z]"   + "[A-Z0-9])" +
   "|"  + "(-)"      + ")",          'g'),

                                new RegExp(
  "(?:" + "([^a-zA-Z0-9\-_])"      +
   "|"  + "(--)"                   +
   "|"  + "(___)"                  +
   "|"  + "([A-Z][0-9])"           + ")",
                                     'g'),

                                new RegExp(
  "(?:" + "([\-_])"        +
   "|"  + "([0-9]+[A-Z]?)" +
   "|"  + "([A-Z]?[0-9]+)" +
   "|"  + "   ([a-zA-Z])"  + ")$",   'g'),

  ],{   startNumeric: 1, startNumeric_: 1,
        startNonCaps: 2,
        startDash:    3,

              symbol: 1,
          doubleDash: 2,
          underscore: 3,
          singleCaps: 4,

             endDash: 1, endRegular:  4,
                         endNumeric1: 3, 
                         endNumericB: 2,
});

class elementUnique   {
static eval (pathObj) {}

constructor (elem) {
 const { CLSNAME_QSELECTOR_UNIQUE_CAT }
   =     elementUnique;

 const qSelector=[[],[]];

  var      id="", key, cls, __qGroupUnique={},
  tag, isUniq=1.00001;

  var  result
  = [  elem,
   key=elem.getAttribute("key") || isUnique,
  /*/\/\/\/\/*/
   tag=elem.tagName,                           // 2
    id=elem.getAttribute("id") || isUnique    //  3
                                 (isUnique), //   4

     ...(
  (! CLSNAME_QSELECTOR_UNIQUE_CAT )      //////////
   ?    [    qSelector[0],  null  ]     /* 5, 6 */
   :    [    qSelector[0],             /*  5   */
             qSelector[1]         ]), /*   6  */

           __qGroupUnique,      /////      7
     ...(
     cls = [ [  ], [ ],[]]      /////   8, 9, 10
          )                    
                               ];
  /*/\/\/ /\ /  \/ / /\/\/\/\/*/
   return (    result    );
}

static map (elem, isFinalNode
                      = (null)) {
 if    (!this instanceof Array) return;
 const { STOP_AT_RANDOM_ID,
         STOP_AT_QSELECTOR_SINGLE_RES,
         CLSNAME_QSELECTOR_UNIQUE_CAT,
         EVALNOW_QSELECTOR }
   =     elementUnique;

 const qSelector=[[],[]];

  var      id="", key, cls, __qGroupUnique={},
  tag, isUniq=1.00001;

 /////                        /////*********      *
  if  (isFinalNode  ===  true
  &&  arguments[0] instanceof Array) {
  var prev  =  [ ];          console.time(";")
              /////*******               (()))
  if  ( EVALNOW_QSELECTOR )
      return (
      arguments[0].filter().map()
      
    )}
  else { } /////////////********************      *

  if (id && STOP_AT_RANDOM_ID
  &&  rxHandleNameRandom(  id  ))
    {( EVALNOW_QSELECTOR ) && (res[0] = null);

              (qSelector[0] =
               qGroup(tag, "#", id, t()))


                           
    //////*****************/
           this.push(res);
           return   ( 1 );
      }

  if  (elem.classList.length)               {
  for (let  className  of  elem.classList ) {
  if  (     CLSNAME_QSELECTOR_UNIQUE_CAT  )
  if (!EVALNOW_QSELECTOR )
      {
  if  (rxHandleNameUnique(   className   )) {
             cls[   0   ][   className   ]
                    =    [   0, (null)   ]; 
             cls[1.].push(   className   );
     } else
  if (!rxHandleNameUnique(   className   )) {
             cls[   0   ][   className   ]
                    =    [   1, (null)   ];
             cls[2.].push(   className   );
     }
     } else
  if ( EVALNOW_QSELECTOR )
     { isUnique("",  "", className) ||
       isUnique(tag, "", className)
     }
     } isUniqueClsGroups(cls, 0, 2);
     }

  function t () {}
  function qGroup
             () {}
  function isUnique (tagName="", id="", cls=("")) {}
  function isUniqueClsGroups (cls=null, i, j) {}
}

  static STOP_AT_RANDOM_ID = (false);
  static STOP_AT_QSELECTOR_SINGLE_RES=1;
  static CLSNAME_QSELECTOR_UNIQUE_CAT=1;
  static EVALNOW_QSELECTOR = (true);

} 

function makeQuerySelector (uniquePath) {}
function getElementAncestors (elem, execFn, qSelector=null) {
  if (!elem   instanceof Element
  ||  !execFn instanceof Function)
       return false;

  if  (qSelector !== null
  &&  !qSelector instanceof String)
       qSelector  = null;
  else qSelector +=  " ";

  var _MAP=[qSelector],
     _STOP;

  if (typeof execFn === "string")
      var qSelector  =  execFn,
             execFn  =  (elem) =>
                         elem.matches(qSelector)
                                      ||   null;

      do { elem = elem.parentElement;
     try {
  switch ( elem                       &&
         (_STOP = execFn.call(_MAP, elem,
                  arguments[0] === (elem)))) {
    case (undefined):
          continue;

    case  true:
         _MAP.push(elem);
          break;

    case  false:
          return false;

    case  1:
         _MAP.push(elem);

    case  1: default:
          return _MAP.length && _MAP
                             || false;
  }}
  catch ( ee ){ throw "Invalid query selector" }}
  while (true)

  if     (qSelector)_MAP[0]    = 
  makeQuerySelector(_MAP.slice(1));
  else              _MAP.unshift();

  return _MAP;
}

function mapUniquePath (elem) {
   let   res = [  ,     ,    ], 
               cur, prev, next;
   let  _MAP
    =  this;
   
   if (cur = elementUnique.map(elem)) {
   if ( id = bfr[1]) return (
  _MAP.push([bfr]), undefined);

   else
   res[0.] = bfr;
   }

 //////******

   if (prev = elementUnique.map(elem
             .previousElementSibling))
   if ( id = bfr[1]) {
   res[1.] = bfr;
   return (
  _MAP.push( res ), undefined)}

 //////******

   if (prev = elementUnique(elem
             .nextElementSibling))
   if ( id = bfr[1]) {
   res[1.] = bfr;
   return (
  _MAP.push( res ), undefined)}

 //////******

   return (  res  );
}

export { elementUnique, getElementAncestors
    rxHandleNameRandom, mapUniquePath,
    rxHandleNameUnique };
