// 切换语言
function changeLanguage() {
    var language = localStorage['language'];
    if (language == "en") {
        language = "zh-Hans";
    } else {
        language = "en";
    }
    localStorage['language'] = language;
    location.reload();
};

const getQuery = (url) => {
    // str为？之后的参数部分字符串
    const str = url.substr(url.indexOf('?') + 1)
    // arr每个元素都是完整的参数键值
    const arr = str.split('&')
    // result为存储参数键值的集合
    const result = {}
    for (let i = 0; i < arr.length; i++) {
        // item的两个元素分别为参数名和参数值
        const item = arr[i].split('=')
        result[item[0]] = item[1]
    }
    return result
};

// 初始化
function init(pageName) {
    var languageData = {
        "zh-Hans": {
            "title": "苏州市碧龙旅游用品有限公司",
            "logo": "//s2.loli.net/2023/02/17/D3jCZRarOmtluLH.png",
            "navigation": [
                {
                    "title": "首页",
                    "href": "/"
                },
                {
                    "title": "关于我们",
                    "href": "/gywm/"
                },
                {
                    "title": "产品中心",
                    "href": "/cpzx/"
                },
                {
                    "title": "联系我们",
                    "href": "/lxwm/"
                },
                {
                    "title": "EN",
                    "href": "javascript:changeLanguage();"
                }
            ],
            "footer": {
                "title": "版权所有：",
                "text": "苏州市碧龙旅游用品有限公司"
            },
            "cpzx": {
                "title": "产品分类",
                "width": "162px",
                "left": "406px",
                "category": [
                    {
                        "name": "boat",
                        "title": "船罩系列",
                        "img": "//s2.loli.net/2023/02/15/RMfImPYZ8TDX2rQ.jpg",
                        "products": [
                            {
                                "title": "T顶船罩",
                                "img": "//s2.loli.net/2023/02/17/G5qalcKQ39VX6Mm.jpg"
                            },
                            {
                                "title": "皮艇罩",
                                "img": "//s2.loli.net/2023/02/17/sMLDJU8QcOCeNVp.jpg"
                            },
                            {
                                "title": "船罩",
                                "img": "//s2.loli.net/2023/02/17/xBh8uRqkXbZTy4F.jpg"
                            },
                            {
                                "title": "游艇罩",
                                "img": "//s2.loli.net/2023/02/17/Lz95bXOm4dvNErj.jpg"
                            }
                        ]
                    },
                    {
                        "name": "rv",
                        "title": "房车罩系列",
                        "img": "//s2.loli.net/2023/02/15/jn5oqOV6wayxdph.jpg",
                        "products": [
                            {
                                "title": "A型房车罩",
                                "img": "//s2.loli.net/2023/02/17/tRW4HBxzvQfIiDp.jpg"
                            },
                            {
                                "title": "B型房车罩",
                                "img": "//s2.loli.net/2023/02/17/dcVKDUjO2G4prtF.jpg"
                            },
                            {
                                "title": "C型房车罩",
                                "img": "//s2.loli.net/2023/02/17/rY5RaQSep3AiGqD.jpg"
                            },
                            {
                                "title": "拖车房车罩",
                                "img": "//s2.loli.net/2023/02/17/ZEi5YJ4OPSxHu78.jpg"
                            },
                            {
                                "title": "第5轮拖挂房车罩",
                                "img": "//s2.loli.net/2023/02/17/9Q6fZy8iCRepOLq.jpg"
                            }
                        ]
                    },
                    {
                        "name": "patio",
                        "title": "家具罩系列",
                        "img": "//s2.loli.net/2023/02/15/Y9oJIqyfUmGh5BC.jpg",
                        "products": [
                            {
                                "title": "收纳包",
                                "img": "//s2.loli.net/2023/02/17/zYst62VMrwTObxu.jpg"
                            },
                            {
                                "title": "烤架罩",
                                "img": "//s2.loli.net/2023/02/17/BaQ8zlteh26VbHS.jpg"
                            },
                            {
                                "title": "烤炉罩",
                                "img": "//s2.loli.net/2023/02/17/1b3hBr45xFecLy2.jpg"
                            },
                            {
                                "title": "躺椅罩",
                                "img": "//s2.loli.net/2023/02/17/4EDQ1I6q3Rn8cfw.jpg"
                            },
                            {
                                "title": "靠椅罩",
                                "img": "//s2.loli.net/2023/02/17/RMPL5ONsXupqoB9.jpg"
                            },
                            {
                                "title": "圆桌椅罩",
                                "img": "//s2.loli.net/2023/02/17/yY6zKJ7GSXAilPZ.jpg"
                            },
                            {
                                "title": "V型沙发罩",
                                "img": "//s2.loli.net/2023/02/17/FQkc7VWrGSfbgwE.jpg"
                            },
                            {
                                "title": "圆形立式加热器罩",
                                "img": "//s2.loli.net/2023/02/17/xok8Be5ifpbYmLO.jpg"
                            }
                        ]
                    },
                    {
                        "name": "car",
                        "title": "汽车罩系列",
                        "img": "//s2.loli.net/2023/02/15/3K9Yc8Qpu27WAzS.jpg",
                        "products": [
                            {
                                "title": "汽车罩",
                                "img": "//s2.loli.net/2023/02/17/b87mQGAJilF5CeT.jpg"
                            },
                            {
                                "title": "车罩",
                                "img": "//s2.loli.net/2023/02/17/UuVfmiDrOvZkgYy.jpg"
                            }
                        ]
                    },
                    {
                        "name": "bag",
                        "title": "箱包系列",
                        "img": "//s2.loli.net/2023/02/15/d4EwvTOKf8scYxP.jpg",
                        "products": [
                            {
                                "title": "登山包",
                                "img": "//s2.loli.net/2023/02/17/KcRhWB9YQZ2CuJy.jpg"
                            },
                            {
                                "title": "工具包",
                                "img": "//s2.loli.net/2023/02/17/9zAZQjg4oOmUqty.png"
                            },
                            {
                                "title": "手提包",
                                "img": "//s2.loli.net/2023/02/17/ESVikfaoX1JsHjw.jpg"
                            },
                            {
                                "title": "背包",
                                "img": "//s2.loli.net/2023/02/17/eRzLVKQGinbFgvI.jpg"
                            }
                        ]
                    },
                    {
                        "name": "tent",
                        "title": "帐篷系列",
                        "img": "//s2.loli.net/2023/02/15/Ccb5jSXPgKheznW.jpg",
                        "products": [
                            {
                                "title": "二人帐篷",
                                "img": "//s2.loli.net/2023/02/17/A7gKGnWT1rxYNpm.jpg"
                            },
                            {
                                "title": "天幕",
                                "img": "//s2.loli.net/2023/02/17/JuIfTvPtm4iFLkE.jpg"
                            },
                            {
                                "title": "淋浴帐篷",
                                "img": "//s2.loli.net/2023/02/17/soOViUt3nC61yDE.jpg"
                            }
                        ]
                    }
                ]
            },
            "about": {
                "title": "关于我们",
                "height": "177px",
                "more": "查看更多",
                "info": "苏州市碧龙旅游用品有限公司是一家专业生产各类车罩、船罩、帐篷、箱包的私营企业，公司成立于2011年3月，具有自营出口资格。地处中国最发达地区-长三角经济圈的腹地。环境优美，交通便利。我公司秉承“品质第一，互利共赢〞的经营理念，坚持“立足国内，面向世界”的经营政策。公司从各地高薪聘请了多位具有十多年经验的专业技术和管理人才。年产量达到400000件。",
                "text": "苏州市碧龙旅游用品有限公司是一家专业生产各类车罩、船罩、帐篷、箱包的私营企业，公司成立于2011年3月，具有自营出口资格。地处中国最发达地区-"
                    + "长三角经济圈的腹地。环境优美，交通便利。"
                    + "我公司秉承“品质第一，互利共赢〞的经营理念，坚持“立足国内，面向世界”的经营政策。公司从各地高薪聘请了多位具有十多年经验的专业技术和管理人才。年产量达到400000件。历年来公司连续通过了上海天祥SGS、"
                    + "Wal-Mart、BV，WRAP等中外著名公司和企业的审核和认证，产品质量获得了国内外客户的肯定。"
                    + "我公司是美国 \"CLASSIC\" 品牌系列的汽车车罩、游艇船罩及其他相关的旅游用品的加工生产基地。产品品种、型号多达上千余种，产品销售覆盖世界各地。"
                    + "公司在坚持与国外大公司大客户继续合作的基础上，大胆开拓国内外市场，积极参与国际竞争，不断开发新产品，建立新客户，做好行业中的领头企业。"
            },
            "contact": [
                {
                    "title": "地址",
                    "text": "江苏省苏州市吴江区平望镇平安村松桃线88号",
                    "href": "javascript:void(0)",
                    "class": "gs-dizhi"
                },
                {
                    "title": "电话",
                    "text": "0512-63670388",
                    "href": "tel:0512-63670388",
                    "class": "gs-dianhua"
                },
                {
                    "title": "手机",
                    "text": "+86-15722706450",
                    "href": "tel:+86-15722706450",
                    "class": "gs-shouji"
                },
                {
                    "title": "邮箱",
                    "text": "lcm@szbknown.com,zsc@szbknown.com",
                    "href": "mailto:lcm@szbknown.com,zsc@szbknown.com",
                    "class": "gs-youxiang"
                }
            ]
        },
        "en": {
            "title": "Suzhou Bi Long Travel Products Co.,Ltd",
            "logo": "//s2.loli.net/2023/02/17/D3jCZRarOmtluLH.png",
            "navigation": [
                {
                    "title": "Home",
                    "href": "/"
                },
                {
                    "title": "About us",
                    "href": "/gywm/"
                },
                {
                    "title": "Products",
                    "href": "/cpzx/"
                },
                {
                    "title": "Contact us",
                    "href": "/lxwm/"
                },
                {
                    "title": "中文",
                    "href": "javascript:changeLanguage();"
                }
            ],
            "footer": {
                "title": "Copyright：",
                "text": "Suzhou Bi Long Travel Products Co.,Ltd"
            },
            "cpzx": {
                "title": "Product Classification",
                "width": "362px",
                "left": "306px",
                "category": [
                    {
                        "name": "boat",
                        "title": "Boat Cover",
                        "img": "//s2.loli.net/2023/02/15/RMfImPYZ8TDX2rQ.jpg",
                        "products": [
                            {
                                "title": "T-TOP boat Cover",
                                "img": "//s2.loli.net/2023/02/17/G5qalcKQ39VX6Mm.jpg"
                            },
                            {
                                "title": "Kayak Cover",
                                "img": "//s2.loli.net/2023/02/17/sMLDJU8QcOCeNVp.jpg"
                            },
                            {
                                "title": "Boat Cover",
                                "img": "//s2.loli.net/2023/02/17/xBh8uRqkXbZTy4F.jpg"
                            },
                            {
                                "title": "Pantoon Boat Cover",
                                "img": "//s2.loli.net/2023/02/17/Lz95bXOm4dvNErj.jpg"
                            }
                        ]
                    },
                    {
                        "name": "rv",
                        "title": "RV Cover",
                        "img": "//s2.loli.net/2023/02/15/jn5oqOV6wayxdph.jpg",
                        "products": [
                            {
                                "title": "Class A RV Cover",
                                "img": "//s2.loli.net/2023/02/17/tRW4HBxzvQfIiDp.jpg"
                            },
                            {
                                "title": "Class B RV Cover",
                                "img": "//s2.loli.net/2023/02/17/dcVKDUjO2G4prtF.jpg"
                            },
                            {
                                "title": "Class C RV Cover",
                                "img": "//s2.loli.net/2023/02/17/rY5RaQSep3AiGqD.jpg"
                            },
                            {
                                "title": "Travel Trailer Cover",
                                "img": "//s2.loli.net/2023/02/17/ZEi5YJ4OPSxHu78.jpg"
                            },
                            {
                                "title": "5th Wheel Cover",
                                "img": "//s2.loli.net/2023/02/17/9Q6fZy8iCRepOLq.jpg"
                            }
                        ]
                    },
                    {
                        "name": "patio",
                        "title": "Patio Cover",
                        "img": "//s2.loli.net/2023/02/15/Y9oJIqyfUmGh5BC.jpg",
                        "products": [
                            {
                                "title": "Patio Cushion and Cover Storage Bag",
                                "img": "//s2.loli.net/2023/02/17/zYst62VMrwTObxu.jpg"
                            },
                            {
                                "title": "Kamado Ceramic Grill Cover",
                                "img": "//s2.loli.net/2023/02/17/BaQ8zlteh26VbHS.jpg"
                            },
                            {
                                "title": "Grill Cover",
                                "img": "//s2.loli.net/2023/02/17/1b3hBr45xFecLy2.jpg"
                            },
                            {
                                "title": "Lounge Chair Cover",
                                "img": "//s2.loli.net/2023/02/17/4EDQ1I6q3Rn8cfw.jpg"
                            },
                            {
                                "title": "High Back Patio Chair Cover",
                                "img": "//s2.loli.net/2023/02/17/RMPL5ONsXupqoB9.jpg"
                            },
                            {
                                "title": "Round Patio Table _ Chair Set Cover",
                                "img": "//s2.loli.net/2023/02/17/yY6zKJ7GSXAilPZ.jpg"
                            },
                            {
                                "title": "V-shaped sectional lounge Cover",
                                "img": "//s2.loli.net/2023/02/17/FQkc7VWrGSfbgwE.jpg"
                            },
                            {
                                "title": "Round Stand-Up Patio Heater Cover",
                                "img": "//s2.loli.net/2023/02/17/xok8Be5ifpbYmLO.jpg"
                            }
                        ]
                    },
                    {
                        "name": "car",
                        "title": "Car Cover",
                        "img": "//s2.loli.net/2023/02/15/3K9Yc8Qpu27WAzS.jpg",
                        "products": [
                            {
                                "img": "//s2.loli.net/2023/02/17/b87mQGAJilF5CeT.jpg",
                                "title": "Car Cover"
                            },
                            {
                                "img": "//s2.loli.net/2023/02/17/UuVfmiDrOvZkgYy.jpg",
                                "title": "Car Cover"
                            }
                        ]
                    },
                    {
                        "name": "bag",
                        "title": "Bag",
                        "img": "//s2.loli.net/2023/02/15/d4EwvTOKf8scYxP.jpg",
                        "products": [
                            {
                                "title": "Hiking bags",
                                "img": "//s2.loli.net/2023/02/17/KcRhWB9YQZ2CuJy.jpg"
                            },
                            {
                                "title": "Tool Bags",
                                "img": "//s2.loli.net/2023/02/17/9zAZQjg4oOmUqty.png"
                            },
                            {
                                "title": "Laptop",
                                "img": "//s2.loli.net/2023/02/17/ESVikfaoX1JsHjw.jpg"
                            },
                            {
                                "title": "Backpack",
                                "img": "//s2.loli.net/2023/02/17/eRzLVKQGinbFgvI.jpg"
                            }
                        ]
                    },
                    {
                        "name": "tent",
                        "title": "Tent",
                        "img": "//s2.loli.net/2023/02/15/Ccb5jSXPgKheznW.jpg",
                        "products": [
                            {
                                "title": "Dome Tent（2 Person）",
                                "img": "//s2.loli.net/2023/02/17/A7gKGnWT1rxYNpm.jpg"
                            },
                            {
                                "title": "Shade Shelter",
                                "img": "//s2.loli.net/2023/02/17/JuIfTvPtm4iFLkE.jpg"
                            },
                            {
                                "title": "Toile_Shower Tent",
                                "img": "//s2.loli.net/2023/02/17/soOViUt3nC61yDE.jpg"
                            }
                        ]
                    }
                ]
            },
            "about": {
                "title": "About us",
                "height": "187px",
                "more": "more",
                "info": "Suzhou BiLong Travel Products Co., LTD is a private enterprise with professional production of various kinds of car covers, boat covers, tents, bags and suitcases. The company was established in March 2011, with export qualifications. It is located in the most developed region in China- the Yangtze river delta economic circle hinterland with a beautiful environment and convenient transportation.",
                "text": "Suzhou BiLong Travel Products Co., LTD is a private enterprise with"
                    + "professional production of various kinds of car covers, boat covers, tents,"
                    + "bags and suitcases. The company was established in March 2011, with export"
                    + "qualifications. It is located in the most developed region in China- the"
                    + "Yangtze river delta economic circle hinterland with a beautiful environment"
                    + "and convenient transportation."
                    + "Our company follows the \"Quality first, mutual benefit and win-win"
                    + "cooperation\" business philosophy, adhering to the \"based on domestic, facing"
                    + "to the world\" operating policy. Our company has hired professional technical"
                    + "talents and management personnel with more than ten years of experience. The"
                    + "annual output has reached 400000 units. Over the years, the company has"
                    + "continued to pass the audit and certification of famous Chinese and foreign"
                    + "companies and enterprises such as Shanghai Intertek, SGS, Wal - Mart, and"
                    + "Warp, which means the quality of products has won the recognition of"
                    + "domestic and foreign customers."
                    + "Our company is the production base for the brand \"CLASSIC ACCESSORIES\" which"
                    + "has a series of car covers, boat covers and other related tourism supplies."
                    + "Products are up more than thousands of kinds of models, and product sales"
                    + "are spread all over the world."
                    + "Based on the insistence on cooperating with large foreign businesses, our"
                    + "company is bold in expanding domestic and foreign markets, actively"
                    + "participating in international competition, constantly developing new"
                    + "products and making up new customers to play an essential role of a leading"
                    + "enterprise in this industry."
            },
            "contact": [
                {
                    "title": "Address",
                    "text": "88 Songtao Rd. Ping'an Cun Pingwang Town,Wujiang District Suzhou,China",
                    "href": "javascript:void(0)",
                    "class": "gs-dizhi"
                },
                {
                    "title": "Tel",
                    "text": "0512-63670388",
                    "href": "tel:0512-63670388",
                    "class": "gs-dianhua"
                },
                {
                    "title": "Mobile",
                    "text": "+86-15722706450",
                    "href": "tel:+86-15722706450",
                    "class": "gs-shouji"
                },
                {
                    "title": "Email",
                    "text": "lcm@szbknown.com,zsc@szbknown.com",
                    "href": "mailto:lcm@szbknown.com,zsc@szbknown.com",
                    "class": "gs-youxiang"
                }
            ]
        }
    };

    var language = localStorage.getItem('language');
    if (language == undefined) {
        language = 'zh-Hans';
        localStorage['language'] = language;
    }

    var data = languageData[language];

    // 标题
    document.title = data.title;

    // logo
    // $("#img_smv_tem_62_9").attr("src", data.logo);

    // 导航
    for (let i = 0; i < data.navigation.length; i++) {
        $("#nav_tem_2_35 ul.w-nav").append(
            '<li class="w-nav-inner" style="height:50px;line-height:50px;width:20%;">'
            + '<div class="w-nav-item">'
            + '<a href="' + data.navigation[i].href + '" target="_self" class="w-nav-item-link">'
            + '<span class="mw-iconfont"></span>'
            + '<span class="w-link-txt">' + data.navigation[i].title + '</span>'
            + '</a>'
            + '<div class="sliding" style="width:20%;"></div>'
            + '</div>'
            + '</li>');
    }

    // 版权
    $("#smv_tem_66_55 .company-info-title").text(data.footer.title);
    $("#smv_tem_66_55 .company-info-text").text(data.footer.text);

    if (pageName == "index") {

        // 产品分类
        $("#txt_con_29_45 span:first").text(data.cpzx.title);
        $("#smv_con_29_45").css("width", data.cpzx.width);
        $("#smv_con_28_45").css("left", data.cpzx.left);

        for (let i = 0; i < data.cpzx.category.length; i++) {
            $("#ulList_con_5_58").append(
                '<li class="w-list-item f-clearfix">'
                + '<a href="/cpzx/?category=' + data.cpzx.category[i].name + '" target="_self" class="w-list-link">'
                + '<div class="w-list-pic">'
                + '<img src="' + data.cpzx.category[i].img + '" class="w-listpic-in" />'
                + '</div>'
                + '<div class="w-list-bottom">'
                + '<h5 class="w-list-title">' + data.cpzx.category[i].title + '</h5>'
                + '</div>'
                + '</a>'
                + '</li>');
        }

        // 关于我们
        $("#txt_con_7_59 span:first").text(data.about.title);
        $("#smv_con_24_47 div.w-info").text(data.about.info);
        $("#smv_con_38_12 em.w-button-text").text(data.about.more);

    } else if (pageName == "gywm") {
        $("#smv_con_16_23 div.w-info").text(data.about.text);

    } else if (pageName == "cpzx") {

        var params = getQuery(document.URL);
        var category = params.category;

        var products = [];

        for (let i = 0; i < data.cpzx.category.length; i++) {
            var selected = '';
            if (category != undefined) {
                if (category == data.cpzx.category[i].name) {
                    products.push(data.cpzx.category[i]);
                    selected = 'on';
                }
            } else {
                products.push(data.cpzx.category[i]);
            }
            $("#smv_con_20_51 ul.w-category-list").append(
                '<li class="w-category-list-item ' + selected + '"'
                + 'data-url="/cpzx/?category=' + data.cpzx.category[i].name + '">'
                + '<h3 class="w-category-list-title">'
                + '<a href="javascript:void(0);">' + data.cpzx.category[i].title + '</a>'
                + '</h3>'
                + '</li>');
        }

        let num = 0;
        for (let i = 0; i < products.length; i++) {
            for (let l = 0; l < products[i].products.length; l++) {
                num++;
                $("#smv_con_3_30 ul.w-list-ul").append(
                    '<li class="w-list-item f-clearfix">'
                    + '<a href="javascript:void(0);" target="_self" class="w-list-link">'
                    + '<div class="w-list-pic">'
                    + '<img src="' + products[i].products[l].img + '"'
                    + 'class="w-listpic-in" />'
                    + '</div>'
                    + '<div class="w-list-bottom">'
                    + '<h5 class="w-list-title">' + products[i].products[l].title + '</h5>'
                    // + '<div class="w-list-desc ">' + products[i].title + '</div>'
                    + '</div>'
                    + '</a>'
                    + '</li>');
            }
        }
        var add = (Math.ceil(num / 3) - 1) * 360;
        $("#smv_con_3_30").css("height", (476 + add) + "px");
        $("#smv_Main").css("height", (1046 + add) + "px");

    } else if (pageName == "lxwm") {

        for (let i = 0; i < data.contact.length; i++) {
            $("#smv_con_24_26 ul").append(
                '<li class="company-info-item">'
                + '<a href="' + data.contact[i].href + '">'
                + '<div class="company-info-titleBox" >'
                + '<span class="company-info-icon ">'
                + '<i class="ltd-icon ' + data.contact[i].class + '"></i>'
                + '</span>'
                + '<span class="company-info-title" style="white-space:pre">' + data.contact[i].title + '：</span>'
                + '</div>'
                + '<div class="company-text">'
                + '<span class="company-info-text">' + data.contact[i].text + '</span>'
                + '</div>'
                + '</a>'
                + '</li>');
        }
    }
};