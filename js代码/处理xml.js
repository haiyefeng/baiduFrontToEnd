 function createDocument(){
     if(typeof arguments.callee.activeXString!="string"){
         var versions = ["MSXML2.0.DOMDocument.6.0","MSXML2.0.DOMDocument.3.0","MSXML2.0.DOMDocument"],i,len;   //创建一个拥有三个版本号的数组顺序按照适用性从高到低
         for(i=0,len=versions.length;i<len;i++){                                                                //用数组的版本号创建AcriveX对象，若没有出错，则保存版本号
             try{
                 new ActiveXObject(versions[i]);
                 arguments.callee.activeXString = versions[i];
                 break;
            }
            catch(ex){};
         }
     }
     return new ActiveXObject(arguments.callee.activeXString);                                                  //用最新的版本号创建一个对象
 };

 function parseXml(xml){
     var xmldom = null;                                                         //初始化DOM对象
    if(typeof DOMParser!="undefined"){                                          //if语句判断，创建什么对象处理xml字符串
        var parser = new DOMParser();                                           
        xmldom = parser.parseFromString(xml,"text/xml");
        var error = xmldom.getElementsByTagName("parsererror");
        if(error.length>0){                 //判断是否有错误产生，长度大于0则有，并抛出错误
            throw new Error("XML parsing error:"+"errors[0].textContent");
        }
    }
    else if(typeof ActiveXObject!="undefined"){                                 //ie处理
        xmldom = createDocument();                                              //创建xmldom
        xmldom.loadXML(xml);                                                    //加载xml文件，并转化为dom
        if(xmldom.parseError!=0){                                               //返回错误编码值，没有发生错误时，为0
            throw new Error("XML parsing error: "+xmldom.parseError.reason);
        }
    }else{
        throw new Error("No XML parser available.");
    }
    return xmldom;
 };

 function serializeXml(xmldom){                                                 //xml序列化
     if(typeof XMLSerializer!="undefined"){                                     
        return (new XMLSerializer()).serializeToString(xmldom);
     }else if(typeof xmldom.xml!="undefined"){
        return xmldom.xml;
     }else{
         throw Error("Could not serialize XML DOM.")
     }
 };
