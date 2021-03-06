/*
 * @Author: hsq
 * @Date: 2021-03-16 20:49:31
 * @LastEditors: hsq
 * @LastEditTime: 2021-04-09 09:10:24
 * @Description: file content
 */

let areaList = {
    province_list: {
        110000: '余姚市'
    },
    city_list: {
        110100: '凤山街道',
        110200: '阳明街道',
        110300: '梨洲街道',
        110400: '兰江街道',
        110500: '朗霞街道',
        110600: '低塘街道',
        110700: '临山镇',
        110800: '泗门镇',
        110900: '马渚镇',
        111000: '牟山镇',
        111100: '丈亭镇',
        111200: '梁弄镇',
        111300: '陆埠镇',
        111400: '大隐镇',
        111500: '大岚镇',
        111600: '河姆渡镇',
        111700: '四明山镇',
        111800: '小曹娥镇',
        111900: '黄家埠镇',
        112000: '三七市镇',
        112100: '鹿亭乡'
    },
    county_list: {
        110101: '五星村',
        110102: '永丰村',
        110103: '胜一村',
        110104: '皇山桥村',
        110105: '剑江村',
        110106: '九垒山村',
        110107: '同光村',
        110108: '蜀山村',
        110109: '阳明东路居委',
        110110: '凤山社区',
        110111: '酱园街社区',
        110112: '宪卿第社区',
        110113: '季卫桥社区',
        110114: '子陵社区',
        110115: '东江社区',
        110201: '庙弄村',
        110202: '丰山前村',
        110203: '康山村',
        110204: '二高村',
        110205: '丰南村',
        110206: '群立村',
        110207: '梁堰村',
        110208: '旗山村',
        110209: '潘巷村',
        110210: '畈周村',
        110211: '北郊村',
        110212: '新桥芝山村',
        110213: '丰乐村',
        110214: '方桥村',
        110215: '西街村',
        110216: '姚驾桥村',
        110217: '阳明社区',
        110218: '龙泉社区',
        110219: '富巷社区',
        110220: '新城市社区',
        110221: '长安社区',
        110222: '舜水社区',
        110223: '老方桥社区',
        110224: '胜山社区',
        110301: '最良村',
        110302: '白山头村',
        110303: '古路头村',
        110304: '双桥村',
        110305: '黄箭山村',
        110306: '陈洪村',
        110307: '姜家渡村',
        110308: '竹山村',
        110309: '明伟村',
        110310: '新墅村',
        110311: '南庙村',
        110312: '苏家园村',
        110313: '三溪村',
        110314: '雁湖村',
        110315: '金冠村',
        110316: '章雅山村',
        110317: '长田村',
        110318: '茭湖村',
        110319: '上王岗村',
        110320: '燕窝村',
        110321: '东朝街社区',
        110322: '三江口社区',
        110323: '学弄社区',
        110324: '南雷里社区',
        110325: '白云社区',
        110326: '花园社区',
        110401: '西郊村',
        110402: '潭家岭村',
        110403: '磨刀桥村',
        110404: '凤亭村',
        110405: '石婆桥村',
        110406: '丰杨河村',
        110407: '三凤桥村',
        110408: '夏巷村',
        110409: '郭相桥村',
        110410: '兰墅桥村',
        110411: '筀竹村',
        110412: '沈湾村',
        110413: '冯村',
        110414: '舜南社区',
        110415: '江南新城社区',
        110416: '四明社区',
        110417: '蕙兰社区',
        110418: '下菱新村',
        110501: '新南王村',
        110502: '赵家村',
        110503: '新新村',
        110504: '熊家街村',
        110505: '干家路村',
        110506: '朗霞村',
        110507: '杨家村',
        110508: '天华村',
        110509: '天中村',
        110510: '镇西村',
        110511: '邵巷村',
        110512: '西墟村',
        110513: '龙王堂村',
        110514: '朗霞社区',
        110601: '洋山村',
        110602: '历山村',
        110603: '黄湖村',
        110604: '黄清堰村',
        110605: '芦城村',
        110606: '低塘村',
        110607: '汤家闸村',
        110608: '姆湖村',
        110609: '镆剑山村',
        110610: '郑巷村',
        110611: '西郑巷村',
        110612: '直河路社区',
        110613: '郑巷社区',
        110614: '历山社区',
        110701: '临山村',
        110702: '临城村',
        110703: '湖堤村',
        110704: '临浦村',
        110705: '兰海村',
        110706: '临南村',
        110707: '临海村',
        110708: '梅园村',
        110709: '汝东村',
        110710: '邵家丘村',
        110711: '凤麟社区',
        110801: '东蒲村',
        110802: '镇南村',
        110803: '上新屋村',
        110804: '海南村',
        110805: '镇北村',
        110806: '泗北村',
        110807: '陶家路村',
        110808: '万圣村',
        110809: '相公潭村',
        110810: '谢家路村',
        110811: '夹塘村',
        110812: '小路下村',
        110813: '湖北村',
        110814: '楝树下村',
        110815: '大庙周村',
        110816: '水阁周村',
        110817: '西大街社区',
        110818: '汝湖社区',
        110819: '后塘河社区',
        110820: '东大街社区',
        110901: '马漕头村',
        110902: '斗门村',
        110903: '瑶街弄村',
        110904: '长泠江村',
        110905: '开元村',
        110906: '全佳桥村',
        110907: '沿山村',
        110908: '下沙畈村',
        110909: '大将桥村',
        110910: '渚北村',
        110911: '大施巷村',
        110912: '姚家村',
        110913: '渚山村',
        110914: '乐安湖村',
        110915: '四联村',
        110916: '云楼村',
        110917: '庙前村',
        110918: '菁江渡村',
        110919: '中奕社区',
        110920: '金马社区',
        110921: '东一社区',
        110922: '下叶社区',
        111001: '牟山村',
        111002: '魏家村',
        111003: '新东吴村',
        111004: '青港村',
        111005: '狮山村',
        111006: '牟山湖村',
        111007: '湖山村',
        111008: '牟山居委会',
        111101: '丈亭村',
        111102: '胡界村',
        111103: '渔溪村',
        111104: '寺前王村',
        111105: '半岙村',
        111106: '凤东村',
        111107: '汇龙村',
        111108: '龙丰村',
        111109: '龙南村',
        111110: '梅溪村',
        111111: '三江社区',
        111201: '东溪村',
        111202: '梁冯村',
        111203: '五桂村',
        111204: '后陈村',
        111205: '让贤村',
        111206: '白水冲村',
        111207: '横坎头村',
        111208: '岭头村',
        111209: '甘宣村',
        111210: '汪巷村',
        111211: '东山村',
        111212: '贺溪村',
        111213: '横路村',
        111214: '明湖村',
        111215: '雅贤村',
        111216: '湖东村',
        111217: '高南村',
        111218: '正蒙社区',
        111301: '官路沿村',
        111302: '沿江村',
        111303: '沿溪村',
        111304: '五马村',
        111305: '郭姆村',
        111306: '江南村',
        111307: '南雷村',
        111308: '兰溪村',
        111309: '干溪村',
        111310: '兰山村',
        111311: '石门村',
        111312: '袁马村',
        111313: '杜徐岙村',
        111314: '余鲍陈村',
        111315: '蒋岙村',
        111316: '翁岙村',
        111317: '石笋村',
        111318: '孔岙村',
        111319: '裘岙村',
        111320: '洪山村',
        111321: '下街居委会',
        111322: '上街居委会',
        111401: '芝林村',
        111402: '章山村',
        111403: '云旱村',
        111404: '学士桥村',
        111405: '大隐村',
        111406: '大隐镇居委会',
        111501: '戴糜村',
        111502: '大岚村',
        111503: '雅庄村',
        111504: '丁家畈村',
        111505: '大路下村',
        111506: '黄家庄村',
        111507: '阴地龙潭村',
        111508: '华山村',
        111509: '大俞村',
        111510: '新岚村',
        111511: '南岚村',
        111512: '后朱村',
        111513: '柿林村',
        111514: '上马村',
        111515: '大岚居委会',
        111601: '翁方村',
        111602: '江中村',
        111603: '小泾浦村',
        111604: '罗江村',
        111605: '芦山寺村',
        111606: '河姆渡村',
        111607: '车厩村',
        111608: '五联村',
        111609: '东澄村',
        111610: '河姆渡社区',
        111701: '茶培村',
        111702: '杨湖村',
        111703: '平莲村',
        111704: '棠溪村',
        111705: '唐田村',
        111706: '梨洲村',
        111707: '宓家山村',
        111708: '北溪村',
        111709: '芦田村',
        111710: '悬岩村',
        111711: '溪山村',
        111712: '大山村',
        111713: '四明山镇社区',
        111801: '后中灶村',
        111802: '全灶村',
        111803: '曹丁村',
        111804: '农场村',
        111805: '永江村',
        111806: '三发村',
        111807: '曹娥村',
        111808: '全义村',
        111809: '曹二村',
        111810: '曹一村',
        111811: '方家路村',
        111812: '周洪六丘村',
        111813: '人和丘村',
        111814: '周洪丘村',
        111815: '华丁路村',
        111816: '南新庵村',
        111817: '朗海村',
        111818: '符丁村',
        111819: '杨丁村',
        111820: '杨家路村',
        111821: '徐家路村',
        111822: '海塘南村',
        111901: '杏山村',
        111902: '华家村',
        111903: '回龙村',
        111904: '五车堰村',
        111905: '黄家埠村',
        111906: '高桥村',
        111907: '韩夏村',
        111908: '上塘村',
        111909: '横塘村',
        111910: '十六户村',
        111911: '回龙居委',
        111912: '黄家埠居委',
        112001: '唐李村',
        112002: '相岙村',
        112003: '二六市村',
        112004: '云山村',
        112005: '魏家桥村',
        112006: '三七市村',
        112007: '幸福村',
        112008: '石步村',
        112009: '姚东村',
        112010: '祝家渡村',
        112011: '胜利村',
        112012: '大霖山村',
        112013: '二六市社区',
        112014: '三七市社区'
    }
}

String.prototype.trim = function() {

    return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '').replace(//g,'');
  
}
const fs = require('fs');
var tool = {
    Interface:{
        GM:"GM",
        Register:"Register",
    },

    mkDir(dirPath) {
        fs.mkdir(dirPath, {
            recursive: true  //是否递归,默认false
            }, (err) => {
            if(err){
                console.log(err);
                return;
            }
        });
    },
    remove(url) {
        
        // 如果原路径是文件
        if (fs.existsSync(url)) {
            //删除原文件
            fs.unlinkSync(url);
        } 
    },
    moveFile(file,tagFile) {
        try {
            tool.remove(tagFile);
            fs.copyFileSync(file,tagFile);
            tool.remove(file);
        } catch (error) {
            
        }
        
    },
    // 根据code查name
    getNameByCode (code) {
        const lastFourCode = code.slice(-4)
        const lastTwoCode = code.slice(-2)
        if (lastFourCode === '0000') {
            return areaList.province_list[code]
        }
        if (lastTwoCode === '00') {
            return areaList.city_list[code]
        }
        return areaList.county_list[code]
    },
    // 根据name查code
    getCodeByName (name) {
        for (var key in areaList.city_list) {
            var val = areaList.city_list[key];
            if (val == name) {
                return key;
            }
            
        }

        for (var key in areaList.county_list) {
            var val = areaList.county_list[key];
            if (val == name) {
                return key;
            }
            
        }
        
        return name;
    },
    
    keysIsNull: function(object, list) {
        for (var key in list) {
            if (typeof(list[key]) == "undefined" || typeof(list[key]) == "null") {
                return true;
            }
        }
        return false;
    },
    isNull:function(object) {
        if (typeof(object) == "undefined" || typeof(object) == "null") {
            return true;
        } else if (typeof(object) == "array" && object.length == 0) {
            return true;
        }
        return false;
    },
    
    getJurisdictionNameByType: function(str) {
        var nameStr = "编辑人员";
        switch (str) {
            case "1":
                nameStr = "超级管理员";
                break;
            case "2":
                nameStr = "编辑人员";
                break;
        
            case "3":
                nameStr = "游客";
                break;
        
            default:
                break;
        }
        return nameStr;
    },

    disposePath: function(pathStr,delStr = "") {
        pathStr = pathStr.replace(delStr,"");
        return pathStr.replace(/\\/g, "/");
    },

    getJurisdictionTypeByName: function(str) {
        var typeStr = "2";
        switch (str) {
            case "超级管理员":
                typeStr = "1";
                break;
            case "编辑人员":
                typeStr = "2";
                break;
            case "游客":
                typeStr = "3";
                break;
            default:
                break;
        }
        return typeStr;
    },

    getPortByType: function(type,interface,wORr) {
        var bl = false;
        if (type == "1") {
            bl = true;
        } else if (type == "2") {
            if (interface == tool.Interface.Register) {
                bl = true;
            }
        } else if (type == "3") {
            if (interface == tool.Interface.Register && wORr == "r") {
                bl = true;
            } 
        }
        
        return bl;
    },

    checkJurisdictionByType: function(typeStr, eventStr, wORr) {
        if (typeStr) {

        }
        return false;
    },

    orderCode:function () {
        var orderCode='';
        for (var i = 0; i < 6; i++) //6位随机数，用以加在时间戳后面。
        {
            orderCode += Math.floor(Math.random() * 10);
        }
        orderCode = new Date().getTime() + orderCode;  //时间戳，用来生成订单号。
        console.log(orderCode)
        return orderCode;
    },
      

    // 定义一个深拷贝函数  接收目标target参数
    deepClone: function(target) {
        // 定义一个变量
        let result;
        // 如果当前需要深拷贝的是一个对象的话
        if (typeof target === 'object') {
        // 如果是一个数组的话
            if (Array.isArray(target)) {
                result = []; // 将result赋值为一个数组，并且执行遍历
                for (let i in target) {
                    // 递归克隆数组中的每一项
                    result.push(tool.deepClone(target[i]))
                }
            // 判断如果当前的值是null的话；直接赋值为null
            } else if(target===null) {
                result = null;
            // 判断如果当前的值是一个RegExp对象的话，直接赋值    
            } else if(target.constructor===RegExp){
                result = target;
            }else {
            // 否则是普通对象，直接for in循环，递归赋值对象的所有值
                result = {};
                for (let i in target) {
                    result[i] = tool.deepClone(target[i]);
                }
            }
        // 如果不是对象的话，就是基本数据类型，那么直接赋值
        } else {
            result = target;
        }
        // 返回最终结果
        return result;
    }
}


module.exports = tool;