function createCheckBox(CheckBoxWrapper,CheckBoxArray) {                              //创建选项组
    var checkAll = "<input type='checkbox' checkbox-type='all' \/>" + "全选" ; 
    var checktxt="";
    if(CheckBoxArray instanceof Array){                                                //判断传入的是否为数组
    for(let i=0,len=CheckBoxArray.length;i<len;i++) {                                  //遍历数组，创建checkbox
        checktxt += "<input type='checkbox' value = "+ CheckBoxArray[i]["value"] +" checkbox-type='childselect' \/>" + CheckBoxArray[i]["text"];
    }
    CheckBoxWrapper.innerHTML = checkAll + checktxt;                                                          
    var checkboxChild = CheckBoxWrapper.querySelectorAll("input[checkbox-type='childselect']");     //获取当前的子选项input
    
    var checkboxAll = CheckBoxWrapper.querySelector("input[checkbox-type='all']");                  //获取当前的全选input      
    
    CheckBoxWrapper.addEventListener("click",checkLogic,false);
    function checkLogic(event) {                                                                    //选项组容器的事件委托                                                        
           var checkboxType = event.target.getAttribute("checkbox-type");                           //用自定义属性判断复选框是否为全选
           if(checkboxType==="all"){
               if(event.target.checked === true){                                                     //全选被点击时，若是选中，则把子选项全部选中
               for(let i=0,len=checkboxChild.length;i<len;i++){
                checkboxChild[i].checked = true;
                }
               }
           }
           else{                                                                                    //用数组的一个k属性保存子选项被选中的数量，当它为0时
               CheckBoxArray.k = 0;                                                                    //无法取消当前选中项，当它为3时，把全选勾上
               for(let i=0,len=checkboxChild.length;i<len;i++){
                   if(checkboxChild[i].checked===true){
                    CheckBoxArray.k++;
                    }
                }
               if(CheckBoxArray.k===0){event.target.checked = true;}
               if(CheckBoxArray.k===3){checkboxAll.checked=true;}
               else{checkboxAll.checked=false;}                  
               }          
        }     
    }
}
        
    
    function handlerEvent(){                                                    //每次修改选项都重新加载表格
        var num
        var regiondata=[],
        productdata=[];
        selectNumber(regionWrapper,regiondata);
        selectNumber(productWrapper,productdata);
        console.log(regiondata,productdata);
        createTable(regiondata,productdata);  
        
        function selectNumber(CheckBoxWrapper,data){
        var childSelect = CheckBoxWrapper.querySelectorAll("input[checkbox-type='childselect']");
        for(let i=0,len=childSelect.length;i<len;i++){
        if(childSelect[i].checked===true){
            data.push(childSelect[i].value);
            }
        }
    }  
        }
    function createTable(regiondata,productdata) {    
        console.log(regiondata);  
        console.log(productdata);                               
    var tableData = document.createElement("table");
    tableData.setAttribute("class","table");            //创建表格及表头
    tableData.innerHTML = "<thead><th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></thead>";    
    var tbodytxt = ""; 
    var reglen = regiondata.length
    var prolen = productdata.length
   if(prolen==1&&reglen>1){
    for(let i=0,len=reglen;i<len;i++ ){
                for(let k=0,len=sourceData.length;k<len;k++ ){
                    if(sourceData[k]['product']===productdata[0]&&sourceData[k]['region']===regiondata[i]){
                        var saleData=sourceData[k]["sale"];
                        var txt = "";
                        for(let l=0,len=saleData.length;l<len;l++){
                        txt += "<td>" +saleData[l]+"</td>";
                        }
                    if(i==0){                  
                    txt = "<tr>"+"<td rowspan="+reglen+">"+productdata[0]+"</td>"+"<td>"+regiondata[i]+"</td>"+txt+"</tr>";} 
                    else{txt = "<tr></td>"+"<td>"+regiondata[i]+"</td>"+txt+"</tr>";}    
                    tbodytxt += txt;
                    }
                }
            
        }
        if(tableWrapper.childNodes.length>0)
    {tableWrapper.removeChild(tableWrapper.firstChild);}
        tableData.innerHTML += "<tbody>"+tbodytxt+"</tbody>";
        tableWrapper.appendChild(tableData);
    }   
    
   if(reglen==1&&prolen>1){
        for(let i=0,len=prolen;i<len;i++ ){
                for(let k=0,len=sourceData.length;k<len;k++ ){
                    if(sourceData[k]['product']===productdata[i]&&sourceData[k]['region']===regiondata[0]){
                        var saleData=sourceData[k]["sale"];
                        var txt = "";
                        for(let l=0,len=saleData.length;l<len;l++){
                        txt += "<td>" +saleData[l]+"</td>";
                        }
                    if(i==0){                  
                    txt = "<tr>"+"<td rowspan="+prolen+">"+regiondata[0]+"</td>"+"<td>"+productdata[i]+"</td>"+txt+"</tr>";} 
                    else{txt = "<tr><td>"+productdata[i]+"</td>"+txt+"</tr>";}    
                    tbodytxt += txt;
                    }
            }
        }
        if(tableWrapper.childNodes.length>0)
    {tableWrapper.removeChild(tableWrapper.firstChild);}
        tableData.innerHTML += "<tbody>"+tbodytxt+"</tbody>";
        tableWrapper.appendChild(tableData);
}

   if(reglen>1&&prolen>1){
    for(let i=0;i<prolen;i++ ){
        for(let j=0;j<reglen;j++){
                for(let k=0,len=sourceData.length;k<len;k++ ){
                    if(sourceData[k]['product']===productdata[i]&&sourceData[k]['region']===regiondata[j]){
                        var saleData=sourceData[k]["sale"];
                        var txt = "";
                        for(let l=0,len=saleData.length;l<len;l++){
                        txt += "<td>" +saleData[l]+"</td>";
                        }
                    if(j==0){                  
                    txt = "<tr>"+"<td rowspan="+reglen+">"+productdata[i]+"</td>"+"<td>"+regiondata[j]+"</td>"+txt+"</tr>";} 
                    else{txt = "<tr></td>"+"<td>"+regiondata[j]+"</td>"+txt+"</tr>";}    
                    tbodytxt += txt;
                    }
                }
            }
        }
        if(tableWrapper.childNodes.length>0)
    {tableWrapper.removeChild(tableWrapper.firstChild);}
        tableData.innerHTML += "<tbody>"+tbodytxt+"</tbody>";
        tableWrapper.appendChild(tableData);
}

   if(reglen==1&&prolen==1){
        for(let k=0,len=sourceData.length;k<len;k++ ){
            if(sourceData[k]['product']===productdata[0]&&sourceData[k]['region']===regiondata[0]){
            var saleData=sourceData[k]["sale"];
            var txt = "";
            for(let l=0,len=saleData.length;l<len;l++){
                txt += "<td>" +saleData[l]+"</td>";
            }                
            txt = "<tr><td>"+productdata[0]+"</td>"+"<td>"+regiondata[0]+"</td>"+txt+"</tr>"; 
            tbodytxt += txt;
            if(tableWrapper.childNodes.length>0)
    {tableWrapper.removeChild(tableWrapper.firstChild);}
            tableData.innerHTML += "<tbody>"+tbodytxt+"</tbody>";
            tableWrapper.appendChild(tableData);  
        }
        }
    }
}