var fs=require("fs")

module.exports.resume={
 name:"resume",
 compile:(url_in,file_out)=>{
     fs.readFile(url_in, 'utf8', (err, data) => {
         if (err) throw err;
        var doc=JSON.parse(data);
        var htmlnodes=compileResume(doc);
        var finallHtml=htmlWrapper(htmlnodes)
        //console.log(doc);
        fs.writeFile(file_out,finallHtml)
});
 }
}

function compileResume(data){
    //for array
    var finalldata="";
        if(Object.prototype.toString.call(data).slice(8,-1).toLowerCase()==="object"){
           
            for(var arrayitem in data){
                 var stack=new Array();
                 stack.push(item);
                 var value=data[arrayitem]
                  if(Object.prototype.toString.call(value).slice(8,-1).toLowerCase()==="string"){
                    finalldata+=`<div class='row'>\r\n\t<div class='title col-xs-4'>${arrayitem}</div><div class='value col-xs-8'>${value}</div>\r\n</div>\r\n`;
                  }else{
                       finalldata+=`<div class='row'>\r\n<div class='big-title col-xs-12'>${arrayitem}</div><div class='col-xs-12'>${compileResume(value)}</div>\r\n</div>\r\n`;
                  }
                 stack.pop(item)
            }
        }
        if(Object.prototype.toString.call(data).slice(8,-1).toLowerCase()==="array"){
            for(var item in data){
                 var stack=new Array();
                stack.push(item);
                var value=data[item];


                if(Object.prototype.toString.call(value).slice(8,-1).toLowerCase()==="string"){
                   finalldata+=`<div class='li'>${value}</div>\r\n`;
                  }else{
                      finalldata+=`<div class='array-row'>${compileResume(value)}</div>\r\n`;
                  }
                stack.pop(item)
            };
        }
    return finalldata;
}

function htmlWrapper(nodes){
var html=`
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
   <link href="site.css" rel="stylesheet">
     <title>Resume</title>
</head>
<body>
<div class=container>
${nodes}
</div>
</body>
</html>
`;
return html;
}
function compileResume2(data){
    var stack=new Array();
   for(var item in data){
        stack.push(item);
        var value=data[item];
        if(Object.prototype.toString.call(value).slice(8,-1).toLowerCase()==="object"){
             compileResume(value)
             return;
        }
        if(Object.prototype.toString.call(value).slice(8,-1).toLowerCase()==="array"){
            for(var arrayitem in value){
                var x=value[arrayitem]
                compileResume(x)
            }
        }
       // stack.pop(item)
       
    };
    
    return data;
}



function test(obj){
console.dir(obj)
var template = `
<ul>
  <% for(var i=0; i < data.supplies.length; i++) { %>
    <li>${obj.name}</li>
  <% } %>
</ul>
`;

console.warn(template);


var templates=require("./template.js");
templates.SaferHTML`<div>${"ssjjh"}</div>`;


}

function test2(){
    var sender="wahaha";
    var u="sujianhui";
    var message =
         SaferHTML`<p>${sender} has sent you a ${u} message.</p>`;

    function SaferHTML(templateData) {
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);

    // Escape special characters in the substitution.
        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
        s += templateData[i];
  }
  return s;
}

}