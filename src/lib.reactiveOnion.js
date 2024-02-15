class reactiveComponentOnion extends Object {
  #terminatorSymbol = "\\$";

  constructor (props=null) {
    if (typeof props === "object" && props)
               Object.assign(this, { props });
  }

  static sourced = new Map(/*^^*/);
__modifyState (STATE_, path=[""], _MERGE=null) {
    if  (this.formatInput(STATE_, path))
                         [STATE_, path] =
         this.formatInput(STATE_, path);
         else throw (";");
        /****       (()))
*///////
  return this.traverseTree(
         this.state, path, STATE_, _MERGE);
  }

  static
__formatInput=[];
  formatInput (propObj,
               propObjPath) {

    const {  __formatInput      }
      =   reactiveComponentOnion;

             if
            (__formatInput[0]
     ===       propObj[ 1 ]  ) return (
               formatInput[1]
                             );
   ////////////*************/

    if (typeof propObj     != "object"
    ||  typeof propObjPath != "string"
    &&        !propObjPath instanceof Array)
        return false;

    if (typeof propObjPath    === "string")
        switch
       (       propObjPath[0]) {
         case 
         "\\": propObjPath =
               propObjPath
                .substring(1).split("\\."); break
         case 
         "\.": propObjPath =
               propObjPath
                .substring(1).split("\.");  break

               default:
               propObjPath =
              [propObjPath];

    } ////////************/

             __formatInput.splice(0, 3,
               propObj, 
               propObjPath);

      return  [propObj,
               propObjPath];
  }

  static traverseTree (propObject,  propObjPath,
                            value, _MERGE=false) {

    const {  __formatInput      }
      =   reactiveComponentOnion;

             if
            (__formatInput[2]    &&
             __formatInput[0]
     ===       propObject[ 1 ]) return (
                                 true
                              );
   /////////////*************/

    if  (this.formatInput(propObject, subkey))
                         [propObject, subkey] =
         this.formatInput(propObject, subkey);
         else return;

    let _propObject = (propObject);
    if  (propObjPath.length  >  1) {
    var  key;
   /////
    for (key
     of  propObjPath.slice(0, -1)) {
     if (propObject[key] === undefined)
         propObject       =
        (propObject[key]  =  {});
    else
     if (typeof
         propObject[key] === "object")
         propObject       =   propObject[key];
    else throw ";";
    }}             (key)  =   propObjPath.at(-1);
    
    if (_MERGE
    &&   propObject[key] instanceof Array)
         propObject[key]
      =           (value instanceof Array) 
      ?  propObject[key].concat(value)
      :  propObject[key].push(value);
    else propObject[key] = (value);

       __formatInput[2]
            = (true);
    return    (true);
  }

  assignState (propObj,
               propObjPath, ...TYPE) {
    var
    keyNames,   defaultVal,    FUNC____;

    if (this.formatInput(propObject, propObjPath)) {
                        [propObject, propObjPath]
      = this.formatInput(propObject, propObjPath);
    }   else throw (";");
 

   /////////////                    /////////////
  /*****       [  case performant  ]
        
       typeof (this.props.fieldColor) === "object"
    &&  assignState.call( fieldNames,
                              ...     -1:  FUNC__?
  */////
    var FUNC____;
    var keyNames, defaultVal;
    if (this === null
    ||  this === false
    ||  this instanceof Array)/********/{


        keyNames
     = (this);


    if (typeof TYPE.at(-1) === "function")
    FUNC____ = TYPE.pop();

    if (typeof TYPE.at(-1) !== "function")
    defaultVal=TYPE.pop();       
    

    }

   ///////////////                 ///////////////
  /*****         [  case default  ]
   
    ...: assignState(this.props,   `fieldColor`,
                     ("string"), (hexagonColors),
                              ...[  fieldNames ])
  */////
    if  (      !keynames
    &&   typeof TYPE.at(-2) !== "string"
    &&   typeof TYPE.at(-1) === "object") {
       keyNames=TYPE.pop();
     defaultVal=TYPE.pop();
    }
    else
    if  (     !FUNC____  )
    for (let i=TYPE.length-1; i>=0; i --)
     switch  
    (TYPE[i]) {
     case "string": case "function":
     case "number": case "boolean":
     case "object": case "symbol":
    if 
    (TYPE.length-1  !==  i)
    [   defaultVal,
          keyNames   ]
                     =   TYPE.splice(i, 
                         TYPE.length-i);
          { i=-1 }            break;
    }


   /////********/   /////////////////////////////
    var  STATE_
     =   ({ }), key
     =          propObjPath.at(-1);

    if   (!keyNames
    ||    !keyNames.length)
   {STATE_[key]  =  {[this.#terminatorSymbol]:
                    
                    propObj[key] ||
                    (defaultVal)

                 }; return  (
                      this.__modifyState(STATE_, 
                                        [ key ]))
                 }
   /*****////////
    else
    var iterate;
    if (propObj instanceof Array)
        iterate = propObj.values();

    var  defaultArr
     = (!defaultVal instanceof Array ) && null;

    var  defaultObj
     = (!defaultVal instanceof Object) && null;

    var  val, bfr;
    for (let [i, name] of keyNames.entries()) {
     switch
     (true) {
      case   FUNC____         /////////**********
       &&   (bfr          =
             FUNC____(         (val
                          =     getVal(name))),

             bfr !== (undefined)
       &&    bfr !== (  true   ) 
                         &&    (   val=bfr  )
                         ||            val  ):
                              
      case  !FUNC____         /////////**********
       &&   (val          
                          =    (getVal(name)))
       &&   !TYPE.length             
       ||    TYPE.indexOf(  typeof val  ) >= 0:
             STATE_[
                        name
                                ]=val;

                              /////////**********
                                        continue;
      case  (defaultArr  ===  (false)): continue;
      case  (defaultArr):
       if   (defaultArr.length <= (i))
             defaultArr
             =  (false);

      else       STATE_[name]   =   defaultArr
                                         [ i ];

                              /////////**********
                                        continue;
      case  (defaultObj  ===  (false)): continue;
      case  (defaultObj):
       if   ( undefined  !==       (defaultVal
                                =   defaultObj
                                    [  name  ]))
                STATE_[name]    =   defaultVal

                              /////////**********
                                        continue;
    /**********///\/\/\/\/\///
      default: 
         if   (undefined      !== (defaultVal))
                STATE_[name]   =   defaultVal;

    }    if    (typeof
                STATE_[name] === ("function")
         &&    
        !isBind(STATE_[name]))
                STATE_[name].bind(   this   );
    }

    return this.__modifyState(
                STATE_,      propObjPath);

  /*/\/\/\/\/\/\/\/ \ / \  /\/\/\/\/\/ \ / \/\/*/

    function getVal (key=("")) {
        if   (iterate !== undefined)
      { if   (iterate)
      return (val = (iterate.next().value)) && val
        ||          (iterate   =   (false),
                           undefined)    }
       else
      return props
            [ key ]}

    function isBind (fn) {
      return fn.name.startsWith("bound ");
    }
  }

  formatState (propObject, subkey,
               defaultVal, ...val) {
   ///////////                    ///////////
  /*****     [  case performant  ]
        
       formatState(this.props, `fieldClass`,
                   fieldNames, (""));
  */////
    if (this.formatInput(propObject, subkey)) {
                        [propObject, subkey] =
        this.formatInput(propObject, subkey);
    }   else throw (";");

    if (val.length)
       this.traverseTree(propObject,
                             subkey, val, false);
 //////******


    return this.assignState
     .call(null, propObject, (subkey),
                 defaultVal);

 //////******

      let as=(props = this.props)  =>
      typeof (props[`fieldClass`]) == "object"
  &&  assignState.call(fieldNames,
                props,`fieldClass`,
 (__) => (/^[a-z0-9\- ]+$/.test(__)), (""));
         ///\/\ /  \/\///       **     **
  }

  renderStyle (styleObject, key=(""))  {
   const rxUpperC
     =  /[A-Z]/;

    var        stylePropVal  =  ("");
    if  (typeof styleObject === "object")
    for (
   [key,val] of styleObject 
              = styleObject.entries())  {
  /*****/
    if  (rxUpperC.test(key))
    key=(key.replace(rxUpperC, chr =>
                      ("-") + (chr
                          .toLowerCase())

    ))  ////////*************/


                stylePropVal
           += `${key}: ${val};`;
   

        ////////*************/

  }      return stylePropVal;
  }
}


const rxHandleNameRandom = Object.assign(
    function (string, rx = this) {
          if (rx[0].test(string))
           {  return (!false)   }

          var match;  rx[1].lastIndex=0;
          if (match = rx[1].exec(string))
          if (match[ 

                 rx.singleCaps
               
                                 ]
          &&     match.index     !== 0
          &&     rx[1].lastIndex !== 0
          &&     rx[1].lastIndex !== string
                                    .length)
           {     return (!false)     }


          if (match = rx[2].exec(string.match))
          if (rx[2].test(string)
          && !match[ 

                 rx.endRegular  
            
                                    ])
           {     return (!false)     }
                   
                  else
                 return (
                 !true
           );  //////////**********/
  },[
                                new RegExp(
          "^"       +
  "(?:" + "([0-9])" +
   "|"  + "([a-z]"  + "[A-Z0-9])" +
   "|"  + "(-)"     + ")",          'g'),

                                new RegExp(
  "(?:" + "([^a-zA-Z0-9\-_])"     +
   "|"  + "(--)"                  +
   "|"  + "(___)"                 +
   "|"  + "([A-Z][0-9])"          + ")",
                                    'g'),

                                new RegExp(
  "(?:" + "([\-_])"        +
   "|"  + "([0-9]+[A-Z]?)" +
   "|"  + "([A-Z]?[0-9]+)" +
   "|"  + "   ([a-zA-Z])"  + ")$",  'g'),

  ],{   startNumeric: 1,
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

function mapUniqueHandles (elem) {
 var cls;
 var res
  = [elem.tagName,
     elem.getAttribute("id"),
    /*****          */,
 ...(
 cls  =  [[  ], [ ],[]]
        )
        ], str, bfr;

 if  (elem.classList.length)               {
 for (let  className  of  elem.classList ) {
  if (rxHandleNameRandom(   className   ))
             cls[0].push(   className   );
      else   cls[1].push(   className   );
                break;
  }

  switch (true) {
   ////  try unique classes
   case  cls[2].length
    &&
    isUniqueRes(cls, 1): return res;

    function
    isUniqueRes(cls, i) {
         bfr = (
        document.querySelectorAll(
         str = (
        elem.tagName + "." + cls.slice(0, i+1)
                                 .flatten( )
                                  .join( '.' ))))
    if  (bfr[0] === elem) {
         res[2]  =  str;
    if (!bfr[1])
         res.splice(3,3,
       ...cls.slice(0,(  i+1  )).flatten());

       return true;
    }}
  }}

  if    (res[1])
  return res.slice(0, 2);
  return false;
}

function mapUniquePath (elem) {
   let   res = [  ,     ,    ], 
               cur, prev, next;
   let  _MAP
    =  this;
   
   if (cur = mapUniqueHandles(elem)) {
   if ( id = bfr[1]) return (
  _MAP.push([bfr]), undefined);

   else
   res[0.] = bfr;
   }

 //////******

   if (prev = mapUniqueHandles(elem
            .previousElementSibling))
   if ( id = bfr[1]) {
   res[1.] = bfr;
   return (
  _MAP.push( res ), undefined)}

 //////******

   if (prev = mapUniqueHandles(elem
            .nextElementSibling))
   if ( id = bfr[1]) {
   res[1.] = bfr;
   return (
  _MAP.push( res ), undefined)}

 //////******

   return (  res  );
}

function getElementAncestors (elem, execFn) {
  if (!elem   instanceof Element
  ||  !execFn instanceof Function)
       return false;

  var _MAP=[],_STOP;

  if (typeof execFn === "string")
      var qSelector  =  execFn,
             execFn  =  (elem) =>
                         elem.matches(qSelector)
                                      ||   null;

      do { elem = elem.parentElement;
     try {
  switch ( elem                       &&
         (_STOP = execFn.call(_MAP, elem))) {
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
}

export default reactiveComponentOnion;
export { rxHandleNameUnique, mapUniqueHandles };
