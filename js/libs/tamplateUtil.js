define([],function(){
   var TamplateUtil = function() {
       this.initedTemplate = {};

       this.init = function(id,userWidgetTmpl){
           var script = document.createElement("script");
           script.type = "text/html";
           script.id = id;
           script.innerHTML = userWidgetTmpl;
           document.body.appendChild(script);

       };
   };
   return new TamplateUtil();
});