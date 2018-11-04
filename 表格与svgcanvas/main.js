var sourceData = [{                                                 //定义原始数组
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}];
    var regionData = [{                                                 //定义选项组地区数组
    value: "华东",
    text: "华东"
}, {
    value: "华北",
    text: "华北"
},{
    value:"华南",
    text:"华南"
}]
    var productData = [{                                                //定义选项组产品数组
    value: "手机",
    text: "手机"
}, {
    value: "笔记本",
    text: "笔记本"
},{
    value: "智能音箱",
    text: "智能音箱"
}]
    var regionWrapper = document.getElementById("region-radio-wrapper");        //获取地区选项组容器
    var productWrapper = document.getElementById("product-radio-wrapper");      //获取产品选项组的容器
    var formbox = document.getElementById("formbox");                           //获取两个选项组的容器，用于委托事件
    var tableWrapper = document.getElementById("table-wrapper");                //获取表格容器
    var saveselectData=[];                                                      //用于保存被选择的数据的数组
    createCheckBox(regionWrapper,regionData);                       //创建选项组
    createCheckBox(productWrapper,productData); 
    formbox.addEventListener("change",handlerEvent);                //给表单添加事件处理程序，只要表单改变就重新加载表格

