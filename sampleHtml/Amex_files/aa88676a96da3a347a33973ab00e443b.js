Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var hostName=window.location.hostname;var doct=encodeURIComponent(document.title);var docu=encodeURIComponent(document.URL);var docr=encodeURIComponent(document.referrer);if(hostName.indexOf("www")===0){function readCookie(name){var nameEQ=name+"\x3d";var ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" ")c=c.substring(1,c.length);
if(c.indexOf(nameEQ)===0)return c.substring(nameEQ.length,c.length)}return null}if(window.location.protocol==="https:"){var bpb=readCookie("blueboxpublic");if(bpb!==null)Bootstrapper.imageRequest("//stags.bluekai.com/site/14519?phint\x3d__bk_l%3D"+docu+"\x26phint\x3d__bk_t%3D"+doct+"\x26phint\x3d__bk_pr%3D"+docr+"\x26phint\x3dGUID%3D"+bpb);else Bootstrapper.imageRequest("//stags.bluekai.com/site/14519?phint\x3d__bk_l%3D"+docu+"\x26phint\x3d__bk_t%3D"+doct+"\x26phint\x3d__bk_pr%3D"+docr+"\x26phint\x3dGUID%3DNULL")}else Bootstrapper.imageRequest("//tags.bluekai.com/site/14519?phint\x3d__bk_l%3D"+
docu+"\x26phint\x3d__bk_t%3D"+doct+"\x26phint\x3d__bk_pr%3D"+docr)}},1481035,141185);