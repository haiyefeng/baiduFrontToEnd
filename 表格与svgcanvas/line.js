tableWrapper.addEventListener("mouseover",reflectForm,false);
    
function reflectForm(event) {
   var tdata = [];
   if(event.target.id!="table-wrapper"){
   var tr = event.target.parentNode;
   var td = tr.querySelectorAll("td");
   console.log(tr);
   for(let i=0,len=td.length;i<len;i++){
       var datanum = parseInt(td[i].firstChild.nodeValue);
       if(datanum){
           tdata.push(datanum);
       }
   }
}  
console.log(tdata);
   createLine(tdata);
}



function createLine(data) {
    var canvas = document.getElementById('canvas');
    if(canvas.getContext){
        var line = canvas.getContext('2d');
        canvas.setAttribute("height","500");
        canvas.setAttribute("width","500");
        line.lineWith = 5;                         //定义坐标轴
        line.beginPath();
        line.translate(100,400);
        line.moveTo(0,0);
        line.lineTo(0,-300);
        line.moveTo(0,0);
        line.lineTo(300,0);
        line.stroke();
        var point = {                              //point对象用于保存数据点的描述
            radial:"3",                            //定义好每一个数据点的直径，颜色，线的颜色，宽度               
            fillColor:"blue",
            strokeColor:"black",
            strokeWith:"3",
            distance:"20",                         //定义好每两个数据点之间的横向间隔距离
        }
        var datamax = 0;
        data.forEach(function(item,index,array){            //拿到折线图中的最大值Max
            if(!datamax){
            datamax = item;
            }
            else{datamax = datamax>item?datamax:item;}        
        });

        var scale = 300/datamax;
        var lastx = 0,
        lasty = 0;
        for(let i=0,len=data.length;i<len;i++){
        var pointx = point.distance*i; 
        var pointy = -data[i]*scale;
        line.beginPath();
        line.moveTo(lastx,lasty);
        line.fillStyle = point.fillColor;
        line.strokeStyle = point.strokeColor;
        line.lineWith = point.strokeWith;
        if(i){
            line.lineTo(pointx,pointy);
            line.stroke();
            line.closePath();
            line.beginPath();
            line.arc(pointx,pointy,point.radial,0,2*Math.PI,false);
            line.fill();           
        }else{
            line.arc(pointx,pointy,point.radial,0,2*Math.PI,false);
            line.fill();
            }
            lastx = pointx;
            lasty = pointy;
        }
    } 
    }



    

