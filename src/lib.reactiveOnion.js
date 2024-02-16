const componentIdent     =     (tag, id, cls) =>
              makeElementHandle(tag, id, cls) ||
      Symbol( makeElementHandle(tag, id, cls) );

export class JSonionComponent extends Object {
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
 
class reactiveDOMTreeNode  extends Array {
  ENUM_EXPR_EVAL = (3);
  ENUM_COMPONENT = (4);
  ENUM_COMPONENT_EXPR_SMPL = (5);
  ENUM_COMPONENT_EXPR_EVAL = (6);

    ///////////////////////////////////////
   // reactive node schema and instances
  /* … abstract syntax tree to create instances

     storing schema as object props or in array
  ///                                         */
  constructor (parentNode=null,
               pathToNode=null,

                component=null,
                 template=null) {
    if (arguments[0] === undefined)
       {      return super();     }
    else
    if (!reactiveDOMTree.inArray
    || !!reactiveDOMTree.inArray) {
         super();
         Object.assign(this, {
              parent: parentNode,
              pathTo: pathToNode,
                   ///
           component,
            template,
         },{
            instance: null, key: null,
             element: null,
         },{
            mapAttrs: new TrieOfArrayUnique(/*
            component state to attribute mappings
                                           */),
          childNodes: new Array(/*
           TEXT_EXPR, NOT_CREATED_ELEMENT,
       VARIABLE_EXPR, NOT_CREATED_COMPONENT */),
                meta: { modifyTpl: {},
                        ratioPropsTrie: void 0.7,
         /* varPaths,
            passVars,
            lessVars,
            includes: { context, props, state,
                        classVars, arbitrary } */
  }})}
  }

   ////////////////////////
  //  connected DOM node
  runtimeComponent ({ instance, element, key,
                    parentNode, pathToNode }) {
    if (typeof instance !== "object"
    ||  typeof  element !== "object")
      { return }

    var node;
    var isConnected
      = (     !this.isRuntimeNode          &&
        typeof this.instance  === "object" &&
        typeof this.component === "function");

    if (isConnected)
        node = this;
    else {
      if (this.component) {
      if (                   instance
      &&  this.component !== instance)
               { return }
    }
    else {
      if (typeof instance !== "object"
      ||        !instance
                 instanceof reactiveComponent)
                {  return  }
          else
          this.component = instance.constructor;
    }     node
        = Object.assign(new reactiveDOMTreeNode(),
                                             this);
    }
           //////////////////////////////
             node.isRuntimeNode = true;
    if (instance) node.instance = instance;
    if ( element) node.element  = element;
    if (     key) node.key      = key;

    if (parentNode) node.parentNode = parentNode;
    if (pathToNode) node.pathToNode = pathToNode;
   ////
    if  (typeof arguments[1] === "object")
    for (let [key, val]
          of Object.entries(arguments[1])) {
     if (reactiveDOMTreeNode.runtimeVars
                            .indexOf(key) >= 0)
         node[key] = val;
    }
  }

  appendText (text) {
    if (typeof text === "string"
    &&         text.length)
    this.childNodes.push(text);
  }

  appendVar (varPath) {
    if (varPath instanceof Array
    &&  varPath.at(-1) !== "...")
   this.childNodes.push(varPath);
  }

  appendNode
 (tplComponentXOR, componentVarPath=null,
                          condition=true,
                           propsMap=null) {}
}

function getTemplate (candidate, __ANY=(false)) {
  let metadata = [tag, id, classNames, element,
                                      container]
               =     getElementHandle(candidate),

       nsBound = element.ownerDocument;

  switch (!!metadata[0]) {
   case   !!__ANY:
   case  tag  ===  "template"
    ||   tag  ===      "defs":
    if  (element)
         getElementAncestors(element,
                        isInTemplate);
                               break

   case  (false):
   case   element
    &&   !getElementAncestors(element,
                         isInTemplate):
          default:     { return false }
  }

  switch   (typeof candidate) {
   ////     element
   case    "object":
            return {

            element,
            container,

            tag,    id,
            classNames: cls,
            identifier:
    componentIdent(tag, id, cls),
          
            NodeList:       element
                           .childNodes,

            HTMLCollection: element
                           .childNodes,
   };
   case    "string":
   ////     literal
    if     (template[0] === "<")
            return {

            tag,    id,
            classNames: cls,
            identifier:
    componentIdent(tag, id, cls),

            xmlLiteral: candidate,
             strLength: candidate.length,
   };
   else
   ////     query selector
            return {

            tag,   id,
            classNames: cls,
            identifier: arguments[0],
   };

  function isInTemplate (node) {
    if (node === nsBound)
             return false;

    if (node.tagName === "template"
    ||  node.tagName === "defs")  {
             template = node;
             return 1;
}}}}

class componentOnion {
      constructor
         (cfg)       {
 Object.assign(this, {
 variableTplRenderOutput:true,
   expectTplRenderOutput:true,
    returnTplFnComponent:'__requestStaticTpl',
                       ///
               component: null,
              hasContext: false,
           componentList: void new Map(),
                    name: void null || "",
                       ///
                    type: void 0, key: void 0,
               templates: void [],
               tplRender: void {
                    identifier: "",
                  asInstanceKey: false,
                  asFnReturnStatic: false,
                    reactiveDOMTree: void {},
                    stats: void { instance:false,
                                  inRender:1.0 },
},
                setState: void null,
                   state: void {},
                   props: void {},
                          propTypes: void {},
                          defaultProps: void {},
                 context: void {},
              setContext: void null,
              subscribe:  void null,
            unsubscribe:  void null,
                       /// 
        addEventListener: void null,
     removeEventListener: void null,
     onComponentDidMount: void null,
  onComponentWillUnmount: void null,
                       ///
                   stats: void {
               createdAt: 0,
               mountedAt: 0,
             refreshedAt: 0,
             unmountedAt: 0,
                       ///
            mountedCount: 0,
            refreshCount: 0,
                       ///
            sameTemplate: 0,
}})}}

class reactiveComponentAsync extends
      reactiveComponentOnion {
constructor (path, rootComponent) {
  try {
  import(path).then((Component) => {
    super()
    this.Component = Component(props);
/// this.loadRes = Component.__loadResAsync;
  });
  } catch (e) {
    throw `${this.e.NOT_FOUND_ASYNC_COMPONENT}: ${e}`;
  }
}}
