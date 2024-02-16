class jsonionReactiveCtl {
             mountpoints=[];
           componentList=[];
               templates=[];

                #context={};
            #contextSubs={};
                 context={   subscribe:null,
                           unsubscribe:null  };
 ///////////////////////

            static types=null;

                  config={};
           static config={
              hasContext:true,
            ComponentCls:['reactiveComponent','Object'],
       ComponentAsyncCls:['reactiveComponentAsync'],
     ComponentWrapperCls:['reactiveComponentOnion',
                          'reactiveComponentAsync'],
      cloneComponentKeys:['onComponentDidMount',
                          'onComponentWillUnmount',
                                       'tplRender'],
     assertComponentName:true,
   expectTplRenderOutput:true,
 variableTplRenderOutput:true,
    renderTplImmediately:2,
    returnTplFnComponent:'__requestTpl',
      allowTplComponents:false,
       identTplComponent:(tag,id,cls) =>
            tag +  (id) ? `#${id}`  : ""
                + (cls) ? `.${cls}` : "",
               tplKeymap:{
                instance:['__tpl','__template','tpl','template'],
                  render:['tpl','template','__tpl','__template']
},
      __mapToCtlInstance:['identTplComponent'],
                    pick: !null || void (jsonion.pick),
};
                    enum={
          COMPONENT_TYPE:{
                      CLS:1, FN:2, OBJ:3, TPL:4,
                CLS_ASYNC:-1,
                 FN_ASYNC:-2,
                TPL_ASYNC:-3
          },
                 MUTATION:{
                  CONTEXT:0, PROPS:1,
                    STATE:2, CLASS:3,
          },
                   MUTATE:{
                   MODIFY:0, APPEND:1, REMOVE:-1
}};
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
