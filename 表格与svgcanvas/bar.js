

function bargraph(data) {
    var svgns = "http://www.w3.org/2000/svg";
    var chart = document.createElementNS(svgns,"svg:svg");
    chart.setAttribute("width","1200");
    chart.setAttribute("height","1200");
    chart.setAttribute("viewbox","0 0 400 300"); //定义好柱状图绘制区域的高度，宽度，轴的高度，宽度
    var barwidth = 20,barspace = 10;        //定义好每一个柱子的宽度及柱子的间隔宽度
    var barfill = "#60acfc";              //定义好柱子颜色，轴的颜色
    var axialstroke = "black";
    var datamax = 0;
    data.forEach(function(item,index,array){            //遍历数组拿到柱状图中的最大值Max
            if(!datamax){
            datamax = item;
            }
            else{datamax = datamax>item?datamax:item;}        
    });
    console.log(datamax);
    var scale = 200/datamax;            //根据Max和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例
    var gsection = document.createElementNS(svgns,"g");
    gsection.setAttribute("fill",barfill);
    gsection.setAttribute("stroke",axialstroke);
    gsection.setAttribute("stroke-width","1");
    var xaxis = document.createElementNS(svgns,"line");
    xaxis.setAttribute("x1","200");         //绘制横轴及纵轴
    xaxis.setAttribute("x2","600");
    xaxis.setAttribute("y1","450");
    xaxis.setAttribute("y2","450");
    var yaxis = document.createElementNS(svgns,"line");
    yaxis.setAttribute("x1","200");         
    yaxis.setAttribute("x2","200");
    yaxis.setAttribute("y1","200");
    yaxis.setAttribute("y2","450");
    gsection.appendChild(xaxis);
    gsection.appendChild(yaxis);
    
    data.forEach(function(item,index){               
        var barx = 225+index*(barspace+barwidth);         // 计算将要绘制柱子的高度和位置 ,绘制每一个柱子        
        var barheight = item*scale; 
        var bary = 450-barheight;
        var text = document.createElementNS(svgns,"text");
        text.innerHTML = index + 1 + "月";
        text.setAttribute("x",barx-5);
        text.setAttribute("y","470");
        text.setAttribute("font-size","14");
        var bar = document.createElementNS(svgns,"rect");
        bar.setAttribute("x",barx);
        bar.setAttribute("y",bary);
        bar.setAttribute("height",barheight);
        bar.setAttribute("width",barwidth);
        gsection.appendChild(bar);
        gsection.appendChild(text);
    });
    chart.appendChild(gsection);
    document.body.appendChild(chart);
}
