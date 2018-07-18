var girls = ["上官凝雪",
    "欧阳飘舞",
    "长孙慕颖",
    "慕容怡萱",
    "令狐离月",
    "欧阳潇影",
    "苏安希",
    "沐晴羽",
    "伊涵诺",
    "冷夕颜",
    "安梓离",
    "舒惜墨",
    "蓝落歆",
    "言书雅",
    "紫慕语",
    "夏唯安",
    "陌倾城",
    "林若璃",
    "夏晗沫",
    "安若影",
    "安叶倩",
    "蓝冰黎",
    "凌思雪",
    "欧瑜岚",
    "黎夕岚",
    "寒夜堇",
    "莫千雪",
    "杨熙朵",
    "夏微希",
    "石筱娅",
    "任若璃",
    "慕欣夜",
    "泠紫潇",
    "欧鹭霏",
    "邵洛橙",
    "韩熙雅",
    "乔羽颜",
    "厉唯雅",
    "凌冰颖",
    "沈佩安",
    "芦笛雨",
    "辛易墨",
    "欧阳雪",
    "欧阳若",
    "欧阳然",
    "欧阳苒",
    "欧阳希",
    "欧阳梓",
    "欧阳璃",
    "欧阳诗",
];
var boys = [
    "冷元勋",
    "方静言",
    "韩玉韬",
    "乔羽书",
    "尹玉枫",
    "江圣凌",
    "姜云霆",
    "陈少煊",
    "伊沁雪",
    "段无洛",
    "邱少泽",
    "夜子修",
    "风皙宇",
    "楚云谦",
    "楚天煦",
    "南御云",
    "秋子翼",
    "段临轩",
    "玉柳容",
    "项少枫",
    "司雪荆",
    "司雪篱",
    "蓝笔然",
    "蓝栤司",
    "蓝寒揶",
    "令狐昭邦",
    "司马流云",
    "独孤拓拔",
    "长孙正德",
    "诸葛云廷",
    "慕容圣卓",
    "上官耀然",
    "上官未明",
    "欧阳元修",
    "轩辕明熙",
    "南宫玉枫",
    "皇甫星辰",
    "东方宸浩",
    "令狐昭邦",
    "司马流云",
    "独孤拓拔",
    "长孙正德",
    "诸葛云廷",
    "公孙南弦",
    "端木玉麟",
    "司徒展宸",
    "夏侯瑞雪",
    "尉迟玉坤",
    "完颜澈幕",
    "赫连珏枫"
]

//定义获取id函数
function my$(element) {
    return document.getElementById(element);
};
//获取所有的名字列表
var nameList = girls.concat(boys);
var names = "<ul>";
for (var i = 0; i < nameList.length; i++) {
    names += "<li>" + nameList[i] + "</li>";
}
names += "</ul>";

my$("names").innerHTML = names;

var liObj = my$("names").getElementsByTagName("li");

my$("randomOne").onclick = function () {
    clearInterval(timeId1);
    var timeId1 = setInterval(function () {
        var num = parseInt(Math.random()*100);
        for(var i = 0;i<liObj.length;i++){
            if (i == num) {
                liObj[i].className = "red";
            } else {
                liObj[i].className = "";
            }
        }
    },1);
    my$("end").onclick = function () {
        clearInterval(timeId1);
    }
};
my$("randomTwo").onclick = function () {
    var timeId2 = setInterval(function () {
        var num1 = parseInt(Math.random()*100);
        var num2 = parseInt(Math.random()*100);
        for(var i = 0;i<liObj.length;i++){
            if (i == num1||i==num2) {
                liObj[i].className = "red";
            } else {
                liObj[i].className = "";
            }
        }
    },1)
    my$("end").onclick = function () {
        clearInterval(timeId2);
    }
};


my$("randomThree").onclick = function () {
    var timeId3 = setInterval(function () {
        var num1 = parseInt(Math.random()*100);
        var num2 = parseInt(Math.random()*100);
        var num3 = parseInt(Math.random()*100);
        for(var i = 0;i<liObj.length;i++){
            if (i == num1||i==num2||i==num3) {
                liObj[i].className = "red";
            } else {
                liObj[i].className = "";
            }
        }
    },1)
    my$("end").onclick = function () {
        clearInterval(timeId3);
    }
};