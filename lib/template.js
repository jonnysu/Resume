module.exports={
  //html:'<html>${a}</div>',
  //div:'<div>${a}</div>'
  node:(stringArr, ...values)=>{
      var output = "";
      for (var index = 0; index < values.length; index++) {
         output += stringArr[index] + values[index];
      }

      output += stringArr[index]
      return output;
  },
  SaferHTML:(templateData)=>{
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