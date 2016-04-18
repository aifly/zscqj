/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 created by fly on 2016/4/17 0017
	 */
	'use strict';

	var _utilMethodEs6 = __webpack_require__(1);

	var data = {
	    list: [{
	        title: "访谈篇",
	        content: [{
	            name: '"关注企业明天"系列访谈',
	            items: [{
	                src: "",
	                text: "2006年8月25日，由国家知识产权局主办、各地方知识产权局协办的“关注企业明天——自主创新知识产权化”专题宣传活动现场访谈。首场访谈在陕西西安举办。",
	                href: "#"
	            }, {
	                src: "",
	                text: "2006年9月18日，在线访谈“自主创新——中国优势产业全球化延伸之路”，访谈现场设在青岛海尔集团海尔中心大楼。",
	                href: "#"
	            }, {
	                src: "",
	                text: "2006年9月20日，在线访谈的主题是“以市场竞争驱动技术创新--提升中国优势产业核心竞争力”，访谈现场设在青岛海信集团的海信大厦。",
	                href: "#"
	            }, {
	                src: "",
	                text: "2006年11月10日，在江苏扬州邗江举办在线访谈，主题为“充分利用企业集群优势效应 培植知识产权竞争力”。这场访谈是在全国知识产权政府门户网站工作会期间进行的，来自全国各地的会议代表也来到了访谈现场。",
	                href: "#"
	            }, {
	                src: "",
	                text: "2006年11月30日，“以标准与知识产权 构筑企业核心竞争力”为主题的在线访谈在北京举办，访谈现场设在国家知识产权局办公大楼。",
	                href: "#"
	            }, {
	                src: "",
	                text: "2007年03月28日，在宁夏举行访谈，主题是知识产权是企业发展的重要战略资源。",
	                href: "#"
	            }, {
	                src: "",
	                text: "2007年4月26日，在全国知识产权局系统政府门户网站正式开通一周年之际，举行“关注企业明天——自主创新知识产权化”专题宣传活动在线访谈特别节目。",
	                href: "#"
	            }]
	        }, {
	            name: '地方访谈',
	            items: [{
	                src: "",
	                text: "2007年8月20日，访谈主题是：“完善地方专利法规，推行创新型城市建设。”访谈现场设在重庆市知识产权局。"
	            }, {
	                src: "",
	                text: "2008年4月23日，国知网在天津举办线访谈，访谈主题是“知识产权助力滨海新区”。"
	            }, {
	                src: "g",
	                text: "2009年9月17日，成都市知识产权局就成都市知识产权战略纲要实施，举行在线访谈，主题为“实施知识产权战略，提升核心竞争力”。"
	            }, {
	                src: "g",
	                text: "2009年11月26日，国家知识产权局政府网站“地方局长访谈”栏目正式开通，江苏知识产权局朱宇局长在南京与各位网民在线交流，访谈主题“创建实施知识产权战略示范省 加快推进创新型经济建设”"
	            }, {
	                src: "g",
	                text: "2011年4月19日，作为2011年广西知识产权宣传周活动的重要内容之一，广西科技信息网、“知识产权在广西”门户网站、国家知识产权局广西子站联合广西知识产权局开展知识产权网上专题讨论，访谈主题为《如何正确认识企业专利工作的关键问题》。"
	            }, {
	                src: "g",
	                text: "2011年11月11日，成都市知识产权托管工作在线访谈"
	            }, {
	                src: "g",
	                text: "2012年4月20日，作为2012年广西知识产权宣传周活动的重要内容之一，由广西知识产权局、广西科技信息网联合主办知识产权网上专题讨论，广西有关专家将做客广西科技信息网，围绕“如何帮助企业提升发明创造能力”这一主题，与网友进行零距离交流，重点探讨如何从政府层面帮助企业提升发明创造能力，促进创新型广西建设。"
	            }, {
	                src: "g",
	                text: "2013年11月26日，国家知识产权门户网站成都子站在线访谈现场。这场访谈的主题是“加强知识产权保护 优化创新环境”。"
	            }]
	        }, {
	            name: '司部长访谈',
	            items: [{
	                src: "g",
	                text: "2006年10月16日，人教部部长谈国家知识产权局公务员招考。"
	            }, {
	                src: "",
	                text: "2007年1月16日，知识产权政府门户网站《司部长访谈》第一期，条法司司长谈关于我国专利法第三次修改的进展情况。"
	            }, {
	                src: "",
	                text: "2007年3月9日，协调管理司司长谈知识产权宏观管理。"
	            }, {
	                src: "",
	                text: "2007年4月12日，初审及流程管理部部长谈专利申请及审查流程管理。"
	            }, {
	                src: "",
	                text: "2007年10月25日，人教部部长谈国家知识产权局公务员招考。"
	            }, {
	                src: "",
	                text: "2008年10月16日，人教部部长谈2009年国家知识产权局公务员招考。"
	            }, {
	                src: "",
	                text: "2009年3月13日 ，条法司司长尹新天解答与全国人大常委会关于修改专利法决定的有关问题。"
	            }]
	        }, {
	            name: '协力中国政府网在线访谈',
	            items: [{
	                src: "",
	                text: "2006年02月15日，国家知识产权局局长田力普做客中国政府网,围绕国家“十一五”规划建议中对知识产权工作的要求，就如何发挥知识产权作用促进自主创新进行在线访谈，并对网民提出的问题给予解答。"
	            }, {
	                src: "",
	                text: "2007年4月23日上午10时,知识产权局局长田力普接受中国政府网专访,就加强知识产权能力建设的相关问题与网民进行在线交流。"

	            }, {
	                src: "",
	                text: "2008年6月24日，张勤做客中国政府网谈“实施知识产权战略 建设创新型国家”。"
	            }, {
	                src: "",
	                text: "2009年4月23日1，知识产权局局长田力普接受中国政府网专访，就“实施知识产权战略，提升知识产权创造、运用、保护和管理水平”与网友在线交流。"
	            }]
	        }]

	    }, {
	        title: "直播篇",
	        content: [{
	            name: "",
	            items: [{
	                src: "",
	                text: "2006年7月31日上午全国人大常委会副委员长、全国妇联主席顾秀莲视察国家知识产权局。"
	            }, {
	                src: "",
	                text: "2007年06月26，中国当代发明家创新事迹巡回报告会。"
	            }, {
	                src: "",
	                text: "2008年4月18日，国家知识产权局召开2008年保护知识产权宣传周新闻发布会，知识产权政府门户网站进行图文及视频直播。"
	            }, {
	                src: "",
	                text: "2009年11月24日，2009年内地与香港、澳门特别行政区知识产权研讨会"
	            }, {
	                src: "",
	                text: "2010年04月01日，纪念专利法实施二十五周年座谈会。"
	            }, {
	                src: "",
	                text: "2010年04月24日，以“知识产权与科技北京同行”为主题的首都知识产权界长走活动"
	            }, {
	                src: "",
	                text: "2011年11月09日，第五届中国专利周开幕式。"
	            }, {
	                src: "",
	                text: "2012年04月27日，2012年国家知识产权局开放日仪式。鲍红副局长和小发明家共同开通中国知识产权资讯网"
	            }, {
	                src: "",
	                text: "2013年11月11日，第十五届中国专利奖颁奖大会。大会由国家知识产权局和世界知识产权组织共同主办，旨在表彰积极运用知识产权制度，推动技术创新和促进经济社会发展做出突出贡献的专利权人、发明人和设计人。世界知识产权组织总干事弗朗西斯·高锐出席大会并致辞。国家知识产权局局长田力普出席大会并讲话。"
	            }, {
	                src: "",
	                text: "2014年11月06日，第十二届“中国光谷”知识产权国际论坛。"
	            }, {
	                src: "",
	                text: "2015年09月15日，中国专利信息年会2015。"
	            }, {
	                src: "",
	                text: "2015年12月17日，国家知识产权运营军民融合特色试点平台揭牌仪式暨全国军民融合知识产权运营高峰论坛。由陕西省政府与国家知识产权局共同主办，在西安举行。"
	            }, {
	                src: "",
	                text: "2016年01月14日，2015年发明专利申请授权及其他有关情况新闻发布会。"
	            }]

	        }]
	    }, {
	        title: "报道篇",
	        content: [{
	            name: "知识产权战略实施与强国建设",
	            items: [{
	                src: "",
	                text: "2006年9月29日，中共中央政治局委员、国务院副总理、国家知识产权战略制定工作领导小组组长吴仪主持召开了国家知识产权战略制定工作领导小组第二次会议，研究部署国家知识产权战略制定工作。"
	            }, {
	                src: "",
	                text: "2008年4月9日，国务院总理温家宝主持召开国务院常务会议，审议并原则通过《国家知识产权战略纲要》。"
	            }, {
	                src: "",
	                text: "2009年1月12日，国家知识产权战略实施工作部际联席会议第一次联络员全体会议在北京举行。"
	            }, {
	                src: "",
	                text: "2009年6月2日，纪念《国家知识产权战略纲要》颁布实施一周年座谈会在北京举行。"
	            }, {
	                src: "",
	                text: "2010年3月1日，国家知识产权战略实施工作部际联席会议第二次会议召开。"
	            }, {
	                src: "",
	                text: "2010年11月19日，国家知识产权战略实施研究基地落户北京大学。"
	            }, {
	                src: "",
	                text: "2011年6月28日，国家知识产权局与江苏省人民政府在南京举行创建实施知识产权战略示范省部省合作工作会议。 "
	            }, {
	                src: "",
	                text: "2012年8月2日，国防知识产权战略实施工作会议在京召开。"
	            }, {
	                src: "",
	                text: "2012年11月28日，2012年度全国地方知识产权战略实施工作会议在南京召开。"
	            }, {
	                src: "",
	                text: "2013年6月3日，国家知识产权战略实施专家座谈会在京召开。"
	            }, {
	                src: "",
	                text: "2013年8月30日，全国知识产权战略实施工作电视电话会议在京召开。"
	            }, {
	                src: "",
	                text: "2014年11月25日，全国地方知识产权战略实施工作会议在福州举行。"
	            }, {
	                src: "",
	                text: "2014年12月31日，国家知识产权局召开《深入实施国家知识产权战略行动计划(2014-2020年)》新闻通气会。"
	            }, {
	                src: "",
	                text: "2016年2月26日，2016年北京市知识产权工作会暨《国务院关于新形势下加快知识产权强国建设的若干意见》宣传解读会在北京举行。"
	            }, {
	                src: "",
	                text: "2016年2月26日，《国务院关于新形势下加快知识产权强国建设的若干意见》宣传解读会在上海举办。"
	            }]
	        }, {
	            name: "省部、部际合作会商",
	            items: [//28
	            {
	                src: "",
	                text: "2006年5月10日，国家知识产权局与上海市人民政府在上海市举行合作会商制度议定书签约仪式。"
	            }, {
	                src: "",
	                text: "2007年3月8日，《国家知识产权局与湖南省人民政府工作会商制度议定书》签字仪式在京举行。"
	            }, {
	                src: "",
	                text: "2008年3月10日，江西省人民政府与国家知识产权局第三次合作会商会议在北京举行，双方共同签署了合作会商2008年工作安排。"
	            }, {
	                src: "",
	                text: "2008年3月31日，国家知识产权局与天津市人民政府签定合作会商制度议定书。"
	            }, {
	                src: "",
	                text: "2008年5月12日，国家知识产权局与福建省人民政府合作会商会议暨《共同推进海峡西岸经济区知识产权发展合作议定书》签字仪式在福州举行。"
	            }, {
	                src: "",
	                text: "2008年6月30日，国家知识产权局与铁道部知识产权战略合作框架协议签字仪式在京举行。这是国务院部门间签署的首个知识产权战略合作框架协议。"
	            }, {
	                src: "",
	                text: "2008年7月3日，中国科学院与国家知识产权局工作合作议定书签字仪式在京举行。全国人大常委会副委员长、中国科学院院长路甬祥出席签字仪式并讲话。"
	            }, {
	                src: "",
	                text: "2008年8月26日，国家知识产权局与贵州省人民政府合作会商会议暨《国家知识产权局贵州省人民政府合作会商制度议定书》签字仪式在贵阳举行。"
	            }, {
	                src: "",
	                text: "2008年10月21日，国家知识产权局与黑龙江省人民政府在京签订合作会商议定书。"
	            }, {
	                src: "",
	                text: "2008年12月29日，国家知识产权局与广东省人民政府在广州举行《关于建立知识产权高层次战略合作关系的议定书》签署仪式。"
	            }, {
	                src: "",
	                text: "2009年3月2日，国家知识产权局与江西省人民政府在京举行第四次合作会商会议。"
	            }, {
	                src: "",
	                text: "2009年11月25日，国家知识产权局与湖北省政府建立合作会商制度。"
	            }, {
	                src: "",
	                text: "2010年12月12日，全国知识产权局系统对口援疆工作会议暨国家知识产权局与新疆维吾尔自治区政府第二次合作会商会议在京举行。"
	            }, {
	                src: "",
	                text: "2011年11月4日，国家知识产权局与陕西省人民政府在西安举行知识产权合作会商议定书签字仪式暨第一次合作会商会议。"
	            }, {
	                src: "",
	                text: "2012年3月2日，国家知识产权局与广东省政府知识产权高层次战略合作工作委员会第四次会议在京举行。"
	            }, {
	                src: "",
	                text: "2012年3月8日，国家知识产权局与江苏省人民政府在北京举行江苏创建实施知识产权战略示范省2012年度合作计划签字仪式。"
	            }, {
	                src: "",
	                text: "2012年7月26日，第二次全国知识产权系统对口援疆工作会议暨国家知识产权局与新疆维吾尔自治区人民政府第三次合作会商会议在乌鲁木齐举行。"
	            }, {
	                src: "",
	                text: "2012年8月31日，国家知识产权局与上海市人民政府举行新一轮部市合作会商。"
	            }, {
	                src: "",
	                text: "2013年4月11日，国家知识产权局与广东省人民政府第二轮知识产权高层次战略合作协议签署仪式暨2013年省部会商工作会议在广州举行。"
	            }, {
	                src: "",
	                text: "2013年9月6日，国家知识产权局与江苏省人民政府创建实施知识产权战略示范省2013年工作会商在京举行。"
	            }, {
	                src: "",
	                text: "2013年10月15日，国家知识产权局与河南省人民政府签署会商议定书。"
	            }, {
	                src: "",
	                text: "2014年4月10日，国家知识产权局与广东省人民政府第二轮知识产权高层次战略合作2014年度工作会议举行。"
	            }, {
	                src: "",
	                text: "2014年7月4日，国家知识产权局与中国国际贸易促进委员会举行战略合作议定书。"
	            }, {
	                src: "",
	                text: "2014年10月13日，国家知识产权局与天津市人民政府新一轮合作会商议定书签字仪式暨第一次会商会议举行。"
	            }, {
	                src: "",
	                text: "2015年3月12日，中国科学院与国家知识产权局签署第二轮合作会商议定书。"
	            }, {
	                src: "",
	                text: "2015年3月20日，国家知识产权局与国防科技工业局签署战略合作议定书。"
	            }, {
	                src: "",
	                text: "2015年4月14日，国家知识产权局与广东省人民政府2015年度会商工作会议举行。"
	            }, {
	                src: "",
	                text: "2015年7月16日，国家知识产权局与广西壮族自治区人民政府签署知识产权合作会商议定书并举行第一次合作会商会议。"
	            }]
	        }, {
	            name: "中国专利奖",
	            items: [//8
	            {
	                src: "",
	                text: "2007年12月7日，第十届中国专利奖评审会举行。"
	            }, {
	                src: "",
	                text: "2010年2月1日，第十一届中国专利奖颁奖大会在京举行。"
	            }, {
	                src: "",
	                text: "2010年11月13日，第十二届中国专利奖颁奖大会在京举行。全国人大常委会副委员长路甬祥出席大会，并为获奖代表颁奖。世界知识产权组织专利与创新司司长菲利普·巴赫托德出席大会并讲话。"
	            }, {
	                src: "",
	                text: "2011年11月8日，第十三届中国专利奖颁奖大会在京举行。全国人大常委会副委员长路甬祥出席大会并为获奖代表颁奖。世界知识产权组织总干事弗朗西斯·高锐出席大会并讲话。"
	            }, {
	                src: "",
	                text: "2012年11月30日，国家知识产权局和世界知识产权组织在京隆重举行第十四届中国专利奖颁奖大会。全国人大常委会副委员长严隽琪出席大会，并为获奖代表颁奖。世界知识产权组织总干事弗朗西斯·高锐通过视频发表致辞。"
	            }, {
	                src: "",
	                text: "2013年11月11日，第十五届中国专利奖颁奖大会在京举行。"
	            }, {
	                src: "",
	                text: "2014年12月12日，第十六届中国专利奖颁奖大会在京举行 。"
	            }, {
	                src: "",
	                text: "2015年12月15日，第十七届中国专利奖颁奖大会在北京举行。"
	            }]
	        }, {
	            name: "中国专利周",
	            items: [{
	                src: "",
	                text: "2007年11月16日，以“发展知识产权市场，推进创新型国家建设”为主题的首届中国专利周在北京举行。"
	            }, {
	                src: "",
	                text: "2008年11月18日，以“实施知识产权战略，发展知识产权市场，建设创新型国家”为主题的第二届中国专利周、改革开放30年中国专利成就展在江西南昌主会场开幕。"
	            }, {
	                src: "",
	                text: "2009年11月12日，以“实施知识产权战略，应对国际金融危机，建设创新型国家”为主题的第三届中国专利周在广州主会场开幕。"
	            }, {
	                src: "",
	                text: "2010年11月7日，以“运用专利制度，推动发展方式转变，促进创新型国家建设”为主题的第四届中国专利周在重庆主会场开幕。"
	            }, {
	                src: "",
	                text: "2011年11月9日，以“实施专利战略、推动创新发展”为主题的第五届中国专利周在主会场北京开幕。世界知识产权组织总干事弗朗西斯·高锐出席开幕式并致辞。"
	            }, {
	                src: "",
	                text: "2012年11月29日，以“专利保护创新、智慧改变生活”为主题的第六届中国专利周在南京主会场开幕。"
	            }, {
	                src: "",
	                text: "2013年11月21日，以“专利导航产业发展，服务聚焦企业创新”为主题的第七届中国专利周开幕。"
	            }]
	        }, {
	            name: "国家知识产权局开放日",
	            items: [//9
	            {
	                src: "",
	                text: "2006年4月26日，国家知识产权局首次举行开放日活动，来自北京人大附中副校长周建华、学生发明家代表、北京市高校和中小学师生代表、新闻媒体代表以及国家知识产权局有关部门负责人200余人参加开放日活动。"
	            }, {
	                src: "",
	                text: "2007年4月26日，国家知识产权局开放日活动举行，中外媒体代表、外国使馆人员、驻华参赞、重点行业国有企业负责人等参加活动。"
	            }, {
	                src: "",
	                text: "2008年4月25日，国家知识产权局开放日活动举行，来自全国各地的一百多名参观人员、中外各媒体代表、外国使馆参赞和工作人员、重点行业国有企业负责人参加活动。"
	            }, {
	                src: "",
	                text: "2009年4月25日，国家知识产权局举行开放日活动。"
	            }, {
	                src: "",
	                text: "2010年4月26日，国家知识产权局开放日活动举行，来自中国航天科技集团公司、中国石油天然气公司、国家电网公司、中国移动通信集团公司等24家中央企业的120名代表参加活动。"
	            }, {
	                src: "",
	                text: "2012年4月27日，国家知识产权局开放日活动举行，百余名来自北京各院校的大中小学生走进国家知识产权局。"
	            }, {
	                src: "",
	                text: "2013年4月26日，国家知识产权局举办开放日活动，来自我国战略性新兴产业的有关行业协会以及企业代表参加活动。"
	            }, {
	                src: "",
	                text: "2014年4月25日，国家知识产权局开放日活动举行，来自中国人民大学、北京科技大学等高校的近300名师生参加了活动。"
	            }, {
	                src: "",
	                text: "2015年4月27日，国家知识产权局开放日活动举办，20余名专家学者、100余名小微企业代表及30余名媒体记者走进国家知识产权局。"
	            }]
	        }, {
	            name: "知识产权宣传周",
	            items: [{
	                src: "",
	                text: "2007年4月20日，全国“保护知识产权宣传周”启动仪式在北京朝阳公园举行。"
	            }, {
	                src: "",
	                text: "2008年4月18日，2008年保护知识产权宣传周新闻发布会在京举行。"
	            }, {
	                src: "",
	                text: "2009年4月20日，2009年全国知识产权宣传周在奥林匹克公园庆典广场举行启动仪式。世界知识产权组织（WIPO）总干事弗朗西斯·高锐通过视频致贺。"
	            }, {
	                src: "",
	                text: "2009年4月20日，2009年全国知识产权宣传周在京举行启动仪式。世界知识产权组织（WIPO）总干事弗朗西斯·高锐通过视频致贺。（人民网）"
	            }, {
	                src: "",
	                text: "2010年4月20日，以“创造·保护·发展”为主题的2010年全国知识产权宣传周启动仪式在京举行。世界知识产权组织（WIPO）总干事弗朗西斯·高锐为宣传周活动发来贺辞。"
	            }, {
	                src: "",
	                text: "2011年4月20日，以“知识产权助推经济转型”为主题的2011年全国知识产权宣传周启动仪式在京举行。"
	            }, {
	                src: "",
	                text: "2012年4月20日，以“培育知识产权文化，促进社会创新发展”为主题的2012年全国知识产权宣传周启动仪式在京举行。"
	            }, {
	                src: "",
	                text: "2013年4月19日，以“实施知识产权战略，支撑创新驱动发展”为主题的2013年全国知识产权宣传周在京举行。世界知识产权组织（WIPO）总干事高锐对知识产权宣传周发来视频贺词。"
	            }]
	        }, {
	            name: "全国局长会",
	            items: [{
	                src: "",
	                text: "2007年4月10日，全国知识产权局局长会议在江西省南昌市举行。"
	            }, {
	                src: "",
	                text: "2008年1月29日，全国知识产权局局长会议在京举行，国务院副总理吴仪出席会议并讲话。"
	            }, {
	                src: "",
	                text: "2010年2月1日，全国知识产权局局长会议在北京召开。"
	            }, {
	                src: "",
	                text: "2011年3月29日至30日，全国知识产权局局长会议在南京举行。"
	            }, {
	                src: "",
	                text: "2012年1月5日，全国知识产权局局长会议在京召开。"
	            }, {
	                src: "",
	                text: "2013年1月8日，全国知识产权局局长会议在北京召开。"
	            }, {
	                src: "",
	                text: "2014年1月15日，全国知识产权局局长会议在京召开。"
	            }, {
	                src: "",
	                text: "2015年1月15日，全国知识产权局局长会议在京召开。"
	            }, {
	                src: "",
	                text: "2016年1月7日，全国知识产权局局长会议在京召开。"
	            }]
	        }, {
	            name: "新闻发布会",
	            items: [//10
	            {
	                src: "",
	                text: "2006年4月19日，由国家知识产权局联合商标局和版权局共同在国务院新闻办公室举行了“2005年中国知识产权保护状况”的新闻发布会。"
	            }, {
	                src: "",
	                text: "2007年4月17日，国新办就2006年中国知识产权保护状况举行发布会。"
	            }, {
	                src: "",
	                text: "2008年4月17日，国务院新闻办公室就2007年中国知识产权保护状况举行新闻发布会。"
	            }, {
	                src: "",
	                text: "2009年4月21日，国新办举行2008年中国保护知识产权状况新闻发布会。"
	            }, {
	                src: "",
	                text: "2011年4月21日，2010年中国知识产权发展状况新闻发布会在国务院新闻办公室举行。"
	            }, {
	                src: "",
	                text: "2012年4月24日，国务院新闻办公室举行新闻发布会介绍2011年中国知识产权发展状况。"
	            }, {
	                src: "",
	                text: "2013年2月21日，国家知识产权局发布2012年我国发明专利授权情况。"
	            }, {
	                src: "",
	                text: "2013年4月25日，国新办举行新闻发布会介绍2012年中国知识产权发展状况。"
	            }, {
	                src: "",
	                text: "2014年12月29日，国家知识产权局召开《深入实施国家知识产权战略行动计划(2014-2020年)》新闻通气会。"
	            }, {
	                src: "",
	                text: "2015年4月16日，国务院新闻办公室举行新闻发布会,介绍2014年中国知识产权发展状况。"
	            }]
	        }, {
	            name: "国际合作",
	            items: [{
	                src: "",
	                text: "2006年12月4日，第六次中日韩三国知识产权局局长政策对话会议在北京举行。会上,三方签署了《第六次中日韩三国知识产权局局长政策对话合作会议会谈纪要》。"
	            }, {
	                src: "",
	                text: "2007年7月5日，国家知识产权局局长田力普与非洲地区知识产权组织总干事斯班达在京签署了《中国国家知识产权局与非洲地区知识产权组织知识产权合作协议》。"
	            }, {
	                src: "",
	                text: "2007年12月3日世界知识产权组织和国家知识产权局在北京联合举行“世界知识产权组织（WIPO）《专利合作条约》（PCT）国际会议”。国家知识产权局局长田力普出席开幕式并致词，世界知识产权组织（WIPO）副总干事弗朗西斯·加利先生等WIPO高级官员出席会议。"
	            }, {
	                src: "",
	                text: "2009年12月21日，第九次中日韩知识产权局局长政策对话会在陕西举行。"
	            }, {
	                src: "",
	                text: "2010年4月15日至16日，第三次欧日韩中美五局局长会在桂林召开。"
	            }, {
	                src: "",
	                text: "2010年11月10日，田力普出席非洲知识产权组织知识产权局局长研讨会。"
	            }, {
	                src: "",
	                text: "2010年12月2日，田力普局长率团出席中日韩三局局长政策对话会议"
	            }, {
	                src: "",
	                text: "2011年11月8日，国家知识产权局与WIPO在京签署信息服务合作协议。"
	            }, {
	                src: "",
	                text: "2011年12月16日，中国国家知识产权局局长田力普率团在韩国庆州出席了第11届中日韩三局政策对话会议。"
	            }, {
	                src: "",
	                text: "2012年6月6日，中国国家知识产权局局长田力普率团出席了在法国科西嘉召开的中美欧日韩第五次五局局长会议。"
	            }, {
	                src: "",
	                text: "2012年6月20日，世界知识产权组织保护音像表演外交会议在京隆重开幕，中共中央政治局委员、国务委员刘延东出席开幕式并致辞，世界知识产权组织（WIPO）总干事弗朗西斯·高锐代表会议主办方致辞。"
	            }, {
	                src: "",
	                text: "2012年12月6日，中国国家知识产权局与欧洲专利局第六次局长会议在比利时布鲁塞尔举行，会议期间，两局局长还签署了《中国国家知识产权局-欧洲专利局双边合作2013年度工作计划》。"
	            }, {
	                src: "",
	                text: "2013年4月10日，中国国家知识产权局与美国马歇尔法学院合作20年暨中美知识产权学术研讨会在京举行。"
	            }, {
	                src: "",
	                text: "2013年6月3日至5日，中美欧日韩第六次五局局长会议在美国举行。"
	            }, {
	                src: "",
	                text: "2013年11月11日，田力普会见世界知识产权组织总干事高锐并签署合作协议。"
	            }, {
	                src: "",
	                text: "2014年3月6日至7日，世界知识产权组织（WIPO）协调委员会第69次会议在日内瓦召开，国家知识产权局副局长贺化率中国政府代表团出席会议。"
	            }, {
	                src: "",
	                text: "2014年9月10日，申长雨在天津会见WIPO总干事弗朗西斯·高锐一行"
	            }, {
	                src: "",
	                text: "2014年9月19日，中欧两局第八次局长会议在慕尼黑举行。"
	            }, {
	                src: "",
	                text: "2014年10月27日。在两国副总理的见证下,中新签署知识产权领域合作谅解备忘录。"
	            }, {
	                src: "",
	                text: "2014年11月12日，中国国家知识产权局与欧洲专利局两局局长会议在比利时布鲁塞尔召开，中国国家知识产权局局长申长雨和欧洲专利局局长伯努瓦·巴迪斯戴利分别率团出席会议。会后，双方签署了《中国国家知识产权局—欧洲专利局双边合作2015年度工作计划》。"
	            }, {
	                src: "",
	                text: "2015年3月19日，申长雨在京会见世界知识产权组织副总干事约翰·桑德奇一行。"
	            }, {
	                src: "",
	                text: "2015年5月21日，中美欧日韩五局合作第四次局长与产业界会议在苏州召开。"
	            }, {
	                src: "",
	                text: "2015年5月22日，中美欧日韩五局局长在会上签署《五局合作共识》"
	            }, {
	                src: "",
	                text: "2015年6月4日至6日，中美欧日韩第七次五局局长会议在韩国举行 申长雨率团出席。"
	            }, {
	                src: "",
	                text: "2015年6月10日，第四届金砖国家知识产权局局长会议在巴西里约热内卢开幕。"
	            }, {
	                src: "",
	                text: "2015年7月27日，申长雨在第六届中国—东盟知识产权局局长会召开，申长雨出席。"
	            }, {
	                src: "",
	                text: "2015年8月28日，第三届中蒙俄知识产权研讨会在京举行。"
	            }, {
	                src: "",
	                text: "2015年9月10日，申长雨出席夏季达沃斯论坛知识产权分论坛。"
	            }, {
	                src: "",
	                text: "2015年10月5日，申长雨率团出席WIPO成员国大会第55届系列会议。"
	            }, {
	                src: "",
	                text: "2015年11月17日，第15次中日韩知识产权局局长政策对话会和第三届中日韩知识产权研讨会在广州召开。"
	            }, {
	                src: "",
	                text: "2015年11月27日，中国国家知识产权局与欧洲专利局第九次局长会议在京举行。"
	            }, {
	                src: "",
	                text: "2015年12月3日至5日，申长雨出席第五届亚洲知识产权营商论坛并致辞。"
	            }]
	        }, {
	            name: "其他重大活动",
	            items: [{
	                src: "",
	                text: "2006年5月30日，第三届“新世纪巾帼发明家”颁奖大会在京举行，全国人大常委会副委员长、全国妇联主席顾秀莲出席颁奖大会。"
	            }, {
	                src: "",
	                text: "2007年11月29日，由中国发明协会、科技日报社、中国知识产权报社共同主办的“第二届中国发明家论坛”在京拉开了帷幕。全国人大常委会副委员长、中国科学院院长路甬祥做“发明改变世界、发明创造未来”论坛主题报告。"
	            }, {
	                src: "",
	                text: "2007年12月27日，全国知识产权局执法工作会在广西南宁召开。"
	            }, {
	                src: "",
	                text: "2008年4月26日，知识产权与改革开放30周年座谈会在京召开，全国人大常委会副委员长路甬祥出席并讲话。"
	            }, {
	                src: "",
	                text: "2008年12月27日，十一届全国人大常委会第六次会议表决通过了《全国人大常委会关于修改〈中华人民共和国专利法〉的决定》。"
	            }, {
	                src: "",
	                text: "2009年4月24日，由国家知识产权局、公安部、海关总署联合主办的“中国知识产权高层论坛”在京举行。全国人大常委会副委员长路甬祥出席开幕式并发表重要讲话。"
	            }, {
	                src: "",
	                text: "2009年11月1日第16届农高会开幕，国务委员刘延东参观国家知识产权局展团"
	            }, {
	                src: "",
	                text: "2010-12-23国家知识产权局等八部门联合召开2010年世博会知识产权保护专项行动总结表彰大会。"
	            }, {
	                src: "",
	                text: "2010年1月14日，国家知识产权局在京举行建局30年庆祝表彰大会。"
	            }, {
	                src: "",
	                text: "2010年1月21日，国家知识产权局局长田力普签署第55号局令，公布《专利审查指南》 。《专利审查指南》将于2010年2月1日起施行。"
	            }, {
	                src: "",
	                text: "2010年4月1日，纪念专利法实施二十五周年座谈会在京召开。全国人大常委会副委员长路甬祥出席并讲话。"
	            }, {
	                src: "",
	                text: "2011年11月22日田力普局长为圆满完成我国载人航天首次交会对接任务的上海航天技术研究院颁发专利证书。"
	            }, {
	                src: "",
	                text: "2012年4月26日，第六届“中国发明家论坛”开幕式暨第七届“发明创业奖”颁奖典礼在京举行。全国人大常委会副委员长路甬祥出席开幕式并作主旨报告。"
	            }, {
	                src: "",
	                text: "2012年7月16日，我国第100万号发明专利证书签发仪式在京举行。"
	            }, {
	                src: "",
	                text: "2013年12月3日，第十届上海知识产权国际论坛在沪举行，田力普出席并致辞"
	            }, {
	                src: "",
	                text: "2015年1月12日，国家知识产权局纪念建局35周年座谈会在京举行。"
	            }, {
	                src: "",
	                text: "2015年9月17日，国家知识产权专家咨询委员会高级研讨班专题研讨知识产权“十三五”规划，申长雨出席并讲话。"
	            }]
	        }]
	    }]
	};
	var i = 0;
	data.list.forEach(function (list) {
	    list.content.forEach(function (content) {
	        content.items.forEach(function (item) {
	            i++;
	            item.src = './static/images/d-' + i + '.png';
	        });
	    });
	});

	var util = {
	    init: function init() {
	        var index = _utilMethodEs6.utilMethods.getQueryString('id');
	        var type = _utilMethodEs6.utilMethods.getQueryString('type');

	        index = index === null ? 0 : index * 1;
	        type = type === null ? 0 : type * 1;

	        if (type !== 1 && type !== 2) {
	            type = 0;
	        }
	        var list = data.list[type];
	        !list && (list = data.list[0]);
	        var dt = list.content[index];
	        !dt && (dt = list.content[0]);
	        var title = '';
	        switch (type) {
	            case 0:
	                title = "访谈篇";
	                break;
	            case 1:
	                title = '直播篇';
	                break;
	            case 2:
	                title = '报道篇';
	                break;
	        }

	        (0, _utilMethodEs6.$)("#group").innerHTML = title;
	        (0, _utilMethodEs6.$)("#title").innerHTML = dt.name;
	        this.fill(dt);
	    },
	    fill: function fill(dt) {

	        var html = '';
	        dt.items.forEach(function (item) {
	            html += '<div class="item">\n                        <div class="img-c"><img src="' + item.src + '" alt=""></div>\n                        <div class="text">' + item.text + '</div>\n                    </div>';
	        });

	        (0, _utilMethodEs6.$)("#list").innerHTML = html;
	    }
	};

	_utilMethodEs6.utilMethods.ajax('temp.html', function (data) {
	    (0, _utilMethodEs6.$)("#temp").innerHTML = data;
	    _utilMethodEs6.utilMethods.tempLoaded();
	    util.init();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 created by fly on 2016/4/11 0011
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var utilMethods = {
	    getGuid: function getGuid() {
	        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	            var r = Math.random() * 16 | 0,
	                v = c == 'x' ? r : r & 0x3 | 0x8;
	            return v.toString(16);
	        });
	    },
	    r: function r(m, n) {
	        return m + Math.random() * (n - m);
	    },
	    loading: function loading(arr, fn, fnEnd) {
	        var len = arr.length;
	        var count = 0;
	        var i = 0;
	        loadimg();
	        function loadimg() {
	            if (i === len) {
	                return;
	            }
	            var img = new Image();
	            img.onload = img.onerror = function () {
	                count++;
	                if (i < len - 1) {
	                    i++;
	                    loadimg();
	                    fn && fn(i / (len - 1), img.src);
	                } else {
	                    fnEnd && fnEnd(img.src);
	                }
	            };
	            img.src = arr[i];
	        }
	    },
	    getQueryString: function getQueryString(name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	        var r = window.location.search.substr(1).match(reg);
	        if (r != null) return unescape(r[2]);
	        return null;
	    },
	    getStyle: function getStyle(obj) {
	        return window.getComputedStyle ? window.getComputedStyle(obj, null) : obj.currentStyle;
	    },
	    hasClass: function hasClass(obj, className) {

	        return Array.from(obj.classList).indexOf(className) > -1;
	    },
	    index: function index(obj) {
	        var index = -1;
	        Array.from(obj.parentNode.children).forEach(function (item, i) {
	            if (obj === item) {
	                index = i;
	            }
	        });

	        return index;
	    },
	    bindEvent: function bindEvent() {
	        var _this = this;

	        window.addEventListener('resize', function () {
	            var width = document.documentElement.clientWidth,
	                height = document.documentElement.clientHeight;
	            _this.setSize(width, height);
	        });

	        document.addEventListener("click", function (e) {
	            if (_this.hasClass(e.target, 'nav')) {
	                e.preventDefault();
	                var target = e.target;
	                Array.from($$('a', $('#fly-main .fly-pannel-bar'))).forEach(function (item) {
	                    item.classList.remove('active');
	                });
	                target.classList.add('active');
	                var index = _this.index(target);
	                target.parentNode.classList[index === 1 ? 'add' : 'remove']('after');
	            }
	        });
	        //alert(utilMethods.getByTagName($('a',$('#fly-main .fly-pannel-bar .btn-group'))).length)
	    },

	    ajax: function ajax(url, fn) {
	        var _this2 = this;

	        var xmlhttp = null;
	        if (window.XMLHttpRequest) {
	            // code for all new browsers
	            xmlhttp = new XMLHttpRequest();
	        }
	        if (xmlhttp != null) {
	            xmlhttp.onreadystatechange = function () {
	                _this2.stateChange(xmlhttp, fn);
	            };
	            xmlhttp.overrideMimeType && xmlhttp.overrideMimeType('text/html'); //设置MiME类别
	            xmlhttp.open("GET", url, true);
	            xmlhttp.send(null);
	        }
	    },
	    stateChange: function stateChange(xmlhttp, fn) {
	        if (xmlhttp.readyState == 4) {
	            // 4 = "loaded"
	            if (xmlhttp.status == 200) {
	                // 200 = OK
	                fn && fn(xmlhttp.responseText);
	            } else {
	                alert("Problem retrieving XML data");
	            }
	        }
	    },
	    tempLoaded: function tempLoaded(name) {
	        var link = document.createElement('link');
	        link.href = './static/css/temp.min.css';
	        link.rel = 'stylesheet';
	        document.head.appendChild(link);

	        document.getElementById('temp').innerHTML += '<div class="border-effect"><img draggable="false" src="./static/images/logo1.png" alt=""></div>';

	        !Array.from && (Array.from = function (c) {
	            return Array.prototype.slice.call(c);
	        });

	        var href = window.location.href.split('/').pop();
	        var id = 1;
	        ["huigu.html", "shuhuai.html", "tushuo.html", "licheng.html", "fengcai.html"].forEach(function (h, i) {
	            if (href.indexOf(h) > -1) {
	                id = i + 1;
	            }
	        });

	        $$("img", $$("#temp .pub-nav li")[id])[0].src = './static/images/nav-' + id + '.jpg';

	        var nav = _$(".pub-nav");
	        var aLi = Array.from(nav.getElementsByTagName('li'));

	        function Nav(option) {
	            var s = this;
	            s.obj = option.obj || {};
	            s.xINow = 0;
	            s.speedX = r(.05, .08);
	            s.speedY = r(.05, .1);
	            s.yINow = 0;
	            s.transX = 0;
	            s.transY = 0;
	            s.xLife = r(120, 200);
	            s.yLife = r(150, 200);
	        }

	        Nav.prototype.move = function () {
	            var s = this;
	            s.xINow++;
	            if (s.xINow >= s.xLife) {
	                s.xINow = 0;
	                s.speedX *= -1;
	            }
	            s.yINow++;
	            if (s.yINow >= s.yLife) {
	                s.yINow = 0;
	                s.speedY *= -1;
	            }

	            var x = s.transX + s.speedX,
	                y = s.transY + s.speedY;
	            s.obj.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
	            s.obj.style.webkitTransform = 'translate3d(' + x + 'px,' + y + 'px,0)';
	            s.transX = x;
	            s.transY = y;
	        };

	        var n = new Nav({ obj: nav });
	        var t = setInterval(function () {
	            n.move();
	        }, 17);

	        addEvent(addEvent(nav, 'mouseover', function (e) {
	            aLi.forEach(function (item, i) {
	                item.classList.add('active');
	                item.style.transitionDelay = 80 * i + 'ms';
	                item.style.webkitTransitionDelay = 80 * i + 'ms';
	            });
	        }), 'mouseout', function (e) {
	            aLi.forEach(function (item, i) {
	                item.classList.remove('active');
	                item.style.transitionDelay = 80 * (6 - i) + 'ms';
	                item.style.webkitTransitionDelay = 80 * (6 - i) + 'ms';
	            });
	        });

	        function r(m, n) {
	            return m + Math.random() * (n - m);
	        }

	        function addEvent(obj, event, fn) {
	            obj.addEventListener(event, function (e) {
	                fn && fn(e);
	            });
	            return obj;
	        }

	        function _$(selector) {
	            return document.querySelector(selector);
	        }
	    }
	};

	if (!Array.from) {
	    Array.from = function (c) {
	        return Array.prototype.slice.call(c);
	    };
	}

	var $ = function $(selector) {
	    return document.querySelector(selector);
	};
	var $$ = function $$(selector, parent) {
	    parent = parent || document;
	    return parent.querySelectorAll(selector);
	};

	exports['default'] = { utilMethods: utilMethods, $: $, $$: $$ };
	module.exports = exports['default'];

/***/ }
/******/ ]);