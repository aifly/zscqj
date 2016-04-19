/**
 created by fly on 2016/4/13 0013
 */
//import jQuery from 'jquery';
import {utilMethods,$,$$} from  './utilMethod.es6';
//import './static/libs/jquery.nicescroll';


/*import './static/libs/kontext';
 import './static/css/kontext.css';*/

let data = {
    viewWidth: document.documentElement.clientWidth,
    viewHeight: document.documentElement.clientHeight,
    header: $('#fly-main .fly-header'),
    pannelC: $('#fly-main .fly-panner-container'),
    logo: $('#fly-main .fly-logo'),
    canvas: $("#province-canvas"),
    cityCanvas: $("#city-canvas"),
    mask: $("#fly-mask"),
    close: $("#fly-mask .fly-close"),
    provinceData: [
        {
            type: 'image',
            src: "./static/images/p-1.jpg",
            city: "新疆生产建设兵团"
        }, {
            type: 'text',
            content: `<p>值此国家知识产权局系统政府门户网站开通运行十周年之际，宁夏回族自治区知识产权局向国家知识产权局系统政府门户网站表示热烈祝贺！</p>
                        <p>回首发展，国家知识产权局系统政府门户网站已经成为展示我国知识产权成就的宣传阵地，促进知识产权对外合作交流的重要窗口，联结地方知识产权工作的信息纽带；成为普及知识产知识，提高知识产权意识，培育知识产权文化的重要平台。</p>
                        <p>衷心祝愿国家知识产权局系统政府门户网站继往开来，为我国知识产权事业发展再书新篇！</p>
                        <p>
                            <span>宁夏回族自治区科学技术厅副厅长</span>
                            <span>（原宁夏回族自治区知识产权局局长）</span>
                            <span>廖斌</span>
                        </p>`,
            city: "宁夏回族自治区"
        }, {
            type: 'image',
            src: "./static/images/p-3.jpg",
            city: "新疆"
        }, {
            type: 'image',
            src: "./static/images/p-4.jpg",
            city: "厦门"
        },
        {
            type: 'text',
            content: `<p>风雨十年路，一曲奋进歌。历经十年磨砺，国家知识产权局系统政府门户网站已经成为中国知识产权事业最重要、最权威、最丰富、最及时的资讯平台，成为全球知识产权界关注的聚焦点。十年是一个里程碑，更是一个新起点，衷心祝愿国家知识产权局系统政府门户网站乘着时代劲风、继续扬帆远航！</p>
                     <p>江苏省知识产权局局长 支苏平</p>`,
            city: "江苏省"
        }, {
            type: 'text',
            content: ` <p>大地春回，万物复苏，繁花似锦，气象更新，在这美好的季节，国家知识产权局系统政府门户网站迎来了十岁的生日，我谨代表青海省知识产权局全体工作人员，向贵网站表示热烈的祝贺，祝愿您生日快乐！</p>
                        <p>“逝者如斯，不舍昼夜”，回首十年春秋，国知局网为全体知识产权服务人员和创造发明英才打开了一扇门户，吸纳智慧，释放正能量；与时俱进，群策群力，展现风采；鼓励发明，激励创造，导航引领，使知识产权事业蓬勃发展，创造了一个又一个辉煌。展望未来前景，我国知识产权事业喜逢机遇，面临大好形势，呈现出蓬勃发展的良好势头，必将攀登新的事业高峰，青海省知识产权局也将在国家知识产权局的带领下，进一步推动知识产权事业向前发展，积极奋进，开拓进取，创造辉煌！</p>
                        <p>青海省知识产权局局长　许淳</p>`,
            city: "青海省"
        }, {
            type: 'image',
            src: "./static/images/p-7.jpg",
            city: "西藏"
        }, {
            type: 'image',
            src: "./static/images/p-8.jpg",
            city: "湖北"
        },
        {
            type: 'image',
            src: "./static/images/p-9.jpg",
            city: "广东"
        }, {
            type: 'text',
            content: `<p>时值暖春，万物复苏，生机勃勃，在这充满活力的季节里，国家知识产权局系统政府门户网站迎来了开通十周年纪念日，我谨代表江西省知识产权局及全省知识产权工作者向贵网站表示热烈的祝贺，诚挚祝愿门户网站各项工作蓬勃发展，为深入实施创新驱动发展战略和建设知识产权强国做出更大贡献。</p>
                     <p>江西省知识产权局局长 熊绍员</p>`,
            city: "江西省"
        }, {
            type: 'text',
            content: ` <p>十年峥嵘，风霜雪雨，斗转星移。</p>
                    <p>看行业内外，尊重知识，崇尚科学，百舸争流。</p>
                    <p>中知网，继往开来，与时俱进，开拓创新求发展。</p>
                    <p>问业界，谁担行业楚雄？   </p>
                    <p>携来知名大家，忆往昔创业岁月稠。</p>
                    <p>看我们士气，风华正茂；斗志昂扬，自强不息。</p>
                    <p>知识产权人，不离不弃，风雨同舟，踏破冰雪为彩虹。</p>
                    <p>唯铭记，永不言弃，才能笑看风云！</p>
                    <p>山西省知识产权局局长 闫毅</p>`,
            city: "山西省"
        }, {
            type: 'image',
            src: "./static/images/p-12.jpg",
            city: "甘肃"
        },
        {
            type: 'text',
            content: `<p>国家知识产权局系统政府门户网站开通十周年，见证了中国知识产权的十年之路，历经磨砺，中国已然跻身专利大国的行列。这十年，通过国知网西安子站，也见证了西安坚持科技与知识产权融合、助推产业和经济发展的工作历程，记载着西安科技工作者对知识产权事业的热爱！值此十年佳际，衷心祝愿国知网越办越好！</p>
                    <p>西安市科技局（知识产权局）局长  问向荣</p>`,
            city: "西安"
        }, {
            type: 'text',
            content: `<p>宣传知识产权，推进人类文明。</p>
                    <p>祝国家知识产权局系统政府门户网站越办越好。</p>
                    <p>内蒙古自治区知识产权局局长  李秉荣</p>`,
            city: "内蒙古自治区"
        }, {
            type: 'text',
            content: ` <p>见证十年崛起，展望万年兴盛！</p>
                        <p>祝愿国家知识产权局系统政府门户网站越办越好，在新的征途中再谱新篇。 </p>
                      <p>浙江省知识产权局副局长 洪积庆</p>`,
            city: "浙江省"
        }, {
            type: 'text',//16
            content: `<p>国家知识产权局系统政府门户网站，不仅展示了国家和地方知识产权事业的发展历程和辉煌成就，也展现了知识产权界不断进取、锐意创新的奋斗精神。值此网站开通十周年之际，我谨代表成都市知识产权局，祝国家知识产权局系统政府门户网站明天更加美好、更加灿烂！</p>
                     <p>成都市知识产权局局长　卢铁城</p>`,
            city: "成都"
        },
        {
            type: 'image',
            src: "./static/images/p-17.jpg",
            city: "云南"
        }, {
            type: 'text',
            content: `<p>昨天的灿烂如日挂中天，辉煌耀眼；今天的团结一心像十指握成拳，众志成城；望明天的宏图如鲲鹏展翅，一飞冲天。新的起点，新的征程，机遇蕴含精彩，发展充满信心，号角催人奋进。祝愿网站在新的十年里再创佳绩！</p>
                       <p>海南省科技厅副厅长（分管知识产权工作）朱东海</p>`,
            city: "海南"
        }, {
            type: 'text',
            content: `<p>十年弹指一挥间。国家知识产权局系统政府门户网站始终秉持务实性、综合性、服务性的理念，宣传知识产权保护的法律法规和政策，传递有关知识产权领域的重要信息，反映知识产权贸易、监管动态和研讨成果，分析涉及知识产权的典型案例，在政府和百姓之间架起一座沟通的“连心桥”，为推进全国知识产权事业开辟了一个新阵地，搭建了一个新平台，构建了一个新载体。当前，全球新一轮科技革命和产业变革蓄势待发，创新引领发展的趋势更加明显，知识产权作为战略资源和竞争力核心要素的作用更加突出。我国经济发展步入新常态，“大众创业，万众创新”更加需要践行新的发展理念，发挥知识产权制度保障和激励创新的重要作用。祝愿国家知识产权局系统政府门户网站越办越好，为推动知识产权强国建设发挥更大的作用！</p>
                        <p>重庆市知识产权局局长袁杰</p>`,
            city: "重庆"
        }, {
            type: 'text',//20
            content: `<p>今年是知识产权系统门户网站正式开通十周年，作为展示全国知识产权工作的重要窗口，推送政府信息的重要渠道和提供公共信息服务的重要平台，十年来，门户网站准确把握时代发展脉搏，紧扣知识产权事业建设主线，在宣传知识产权创造、运用、保护、管理、服务、合作交流等各方面都取得了丰硕的成果，在推进政务公开、提高办事效率、架设沟通桥梁等方面发挥了良好的作用。今年，是“十三五”的开局之年，衷心祝愿门户网站在知识产权强国建设的事业发展中百尺竿头、更进一步，再上新的台阶！</p>
                     <p>四川省知识产权局 局长 黄峰</p>`,
            city: "四川"
        },
        {
            type: 'image',
            src: "./static/images/p-21.jpg",
            city: "湖南"
        }, {
            type: 'text',
            content: `<p>国家知识产权局网站是宣传知识产权政策法规的窗口、是展示知识产权成果的平台，是连接政府与大众的桥梁。十年来，网站见证了我国知识产权事业发展的历程，得到了广大专利工作者的关注和热爱，成为宣传知识产权强国建设的重要载体。</p>
                      <p> 祝愿国家知识产权局网站越办越好，下一个十年更创辉煌。</p>
                      <p>杭州市知识产权局局长 阳作军</p>`,
            city: "杭州"
        }, {
            type: 'image',
            src: "./static/images/p-23.jpg",
            city: "济南"
        }, {
            type: 'text',
            content: `<p>作为服务全国知识产权事业发展的信息平台和涵育知识产权强国文化的主阵地，国家知识产权局系统政府门户网站既有政策的权威性，又有鲜明的时代特色，还有贴近大众、服务双创的便利，为我们提供了立体化、全方位和多视角的窗口，具有很强的社会影响力和公信力。衷心祝愿国家知识产权局系统政府门户网站伴随着知识产权强国建设的步伐一路前行，越办越好。</p>
                        <p>山东省知识产权局局长 于智勇</p>`,
            city: "山东省"
        }, {
            type: 'image',
            src: "./static/images/i-anhui.jpg",
            city: "安徽"
        },
        {
            type: 'image',
            src: "./static/images/p-26.jpg",
            city: "河南"
        }, {
            type: 'text',
            content: ` <p>国家知识产权局系统政府门户网站作为我国最权威的知识产权门户网站，自创办以来，认真贯彻党的宣传工作方针，紧跟时代潮流，紧扣发展大局，紧贴百姓生活，大力宣传我国改革开放和现代化建设的辉煌成就，热情讴歌我国知识产权工作的辉煌成就，已经成为对外宣传全国及各地知识产权工作的主阵地。</p>
                        <p>祝愿国家知识产权局系统政府门户网站以上线10年为新起点，继续发挥优势、开拓创新，积极利用互联网新技术，发展新业务、新服务，在我国知识产权发展探索中作出新的贡献，在专业门户网站体制改革创新方面取得新的突破，努力打造一流品牌网站。</p>
                        <p>天津知识产权局局长 齐成喜</p>`,
            city: "天津"
        }, {
            type: 'text',
            content: `<p>在第十六个世界知识产权日来临之际，迎来了国家知识产权局系统政府门户网站十周岁的生日，在此，我谨代表大连市知识产权局以及大连知识产权同仁表示热烈祝贺！</p>
            <p>十年岁月，见证了国家知识产权事业的发展。经过十年的打造，国家知识产权局系统政府门户网站已成为宣传知识产权法律法规方针政策、普及知识产权知识、传播知识产权信息、促进国内外经验交流、营造知识产权氛围、为公众提供知识产权优质服务的重要平台，在创新驱动发展和知识产权强国建设中发挥了不可代替的作用。</p>
            <p>祝：国家知识产权局系统政府门户网站十周岁生日快乐！</p>
            <p>愿：国家知识产权局系统政府门户网站越办越好！</p>
            <p>大连市知识产权局局长 江亲瑜</p>`,
            city: "大连"
        },
        {
            type: 'text',
            content: ` <p>热烈祝贺国家知识产权局系统政府门户网站开通十周年！这是一个知识产权政策平台、资源平台、创新平台、学习平台、交流平台，承载着全国全社会知识产权人的强国梦。预祝国家知识产权局系统政府门户网站越办越好，引领全国知识产权人勇敢追梦！</p>
                         <p>长春市知识产权局副局长 周衍广</p>`,
            city: "长春"
        }, {
            type: 'video',
            src: "./static/video/h.mp4",
            city: "哈尔滨"
        }, {
            type: 'text',
            content: `<p>十年光阴，弹指挥间：从起步到发展，我们共同成长；从困难到成绩，我们共同分享；从平凡到优秀，我们共同谱写。十年，我们在一起，携手并肩！祝贺国家知识产权局系统政府门户网站成立十周年！我们将一如既往，真诚相伴！</p>
                     <p>黑龙江省知识产权局局长 常城</p>`,
            city: "黑龙江"
        }
    ],
    cityData: [
        {
            type: 'text',
            content: `<p>在国家知识产权局系统政府门户网站建站十周年之际，作为一名子站信息员，深感欣慰。国知局网站作为我国知识产权阵地最权威的网站，不仅发挥着信息传递、舆情监测、在线服务等多种功能，而且也一直引领着我们地方局网站建设的方向，给我们力量、给我们依靠的臂膀。展望未来，前景光明而美好。在知识产权强国建设的新形势下，希望国知局网站越办越好。</p>
                    <p>（北京局 李渊）</p>`,
            city: "北京"
        }, {
            type: 'text',
            content: `<p>国家知识产权局系统政府门户网站建站十周年之际，作为一名普通信息员，经历了国家知识产权局系统政府门户网站的变化，也参与过国家知识产权局系统政府门户网站的专题栏目与图文直播活动，深感国家知识产权局系统政府门户网站的认真与负责。 在此由衷祝愿国家知识产权局系统政府门户网站越办越好，坚守、创新、探索、突破，与知识产权事业共同蓬勃发展！</p>
                      <p>黑龙江局 侯志刚</p>`,
            city: '黑龙江'
        }, {
            type: 'text',
            content: `<p>时光飞逝、日月如梭，转眼国家知识产权局系统政府门户网站已成立10周年了，一路走来，收获很多，感触也很多，作为信息员，对网站归属感与自豪感由衷而生。2008年我正式成为国家知识产权局系统政府门户网站信息报送人员。初来乍到，在领导的关怀下，同事的协助下，我从最初的忐忑不安，逐渐熟悉了报送信息过程，掌握了报送信息要领。8年间，自己从国家知识产权局系统政府门户网站看到了很多、学到了很多、收获了很多，更是成长了很多，明白了这份事业的意义。</p>
                    <p>感触最深的是工作理念，作为信息员，保证信息准确性、时效性为基础，为上级部门及各级领导提供政策导向为宗旨，在国知局正确领导下，以此理念报送信息，为国家知识产权局系统政府门户网站贡献自己的一份力量；其次，与国家知识产权局系统政府门户网站管理员保持紧密联系，每次报送信息遇到问题都能够及时联系上网站编辑，并得到网站编辑的热情指导，保证了信息及时有效上传。在国家知识产权局系统政府门户网站成立10周年之际，我愿为国家知识产权局系统政府门户网站蓬勃发展继续贡献自己的一份力量。</p>
                    <p>辽宁局 陆洋</p>`,
            city: '辽宁'
        }, {
            type: 'text',
            content: `<p>今天，知识产权网站走过了风雨兼程的十年。</p>
                        <p>今天，我们又一次站在伟大时代的新起点。</p>
                        <p>十年来，全国知识产权局系统政府门户网站经过艰难探索，从无到有，成为全国知识产权人的忠诚朋友；十年来，网站的每一次更新，每一次改版，每一次跨越，无不凝聚着国家知识产权局网站和四十七地方子站所有同仁的辛勤汗水；十年来，网站作为宣传窗口，将全国知识产权创造、运用、保护、管理工作在这里传递，无不体现着新老全体知识产权人的智慧和劳作。</p>
                        <p>十年，我们夙夜在公，坚持不懈。十年来，积极发挥全国知识产权局系统政府门户网站定位功能，辛勤耕耘于信息发布，政策宣传、法规解读，便民服务，通过不断学习、借鉴、完善，有效地发挥了门户网站的应有作用，有效地服务于民本民生，有效地促进了各省市、各地区经济的发展。</p>
                        <p>站在更高的视角，深怀更美的梦想，是时代赋予我们的责任，更是我们理智的追求。有激情，就有梦想；有梦想，就有责任；有责任，就有努力。未来，我们将再接再厉，再创辉煌。</p>
                        <p>天津局  杜建泽</p>`,
            city: '天津'
        }, {
            type: 'text',
            content: `<p>联系创新主体的重要桥梁，传播知识产权制度的重要平台,展现大国文明的重要窗口。内蒙古子站 韩勇 衷心祝愿国家知识产权局系统政府门户网站越办越好！</p>
                    <p>内蒙古局　韩勇</p>`,
            city: '内蒙古'
        }, {
            type: 'image',
            src: './static/images/i-xinjiang.jpg',
            city: '新疆'
        }, {
            type: 'text',
            content: `<p>十年如一日的坚持，铸就了今日的成就，一如往昔的坚守，必将创造未来的辉煌。祝贺国家知识产权局系统政府门户网站正式开通十周年！</p>
                    <p>青海局 胡铁成</p>`,
            city: '青海'
        }, {
            type: 'image',
            src: './static/images/i-gansu.jpg',
            city: '甘肃'
        }, {
            type: 'text',
            content: `<p>祝贺全国知识产权局系统政府门户网站开通十周年！</p>
                    <p>政务公开  履行职能  搭建信息平台服务创新</p>
                    <p>即时交流  解疑释惑  发挥互动效能推动和谐</p>
                    <p>陕西局  宁静</p>`,
            city: '陕西'
        }, {
            type: 'image',
            src: './static/images/i-xizang.jpg',
            city: '西藏'
        }, {
            type: 'text',
            content: `<p>2006年，国家知识产权局网站进行了改版，建立了全国知识产权局系统网站群，创新的实现了全国知识产权局系统政府门户网站的一盘棋。过去十年里，不仅获得了中国政府网站优秀奖 ，网站英文版获首届中国外文版政府网站优秀奖,网站的“专利检索与服务系统”也获得年度中央国家机关网站特色栏目奖。这不仅是全国知识产权局系统政府门户网站的努力，也包含了全国子站的全部心血。不仅吸引了更多的四川人关注全国知识产权局系统政府门户网站，也把更多的四川专利工作展现到了全国的平台。</p>
                    <p>我们网站群是一家人,不仅齐心协力共建网站，也有亲人般的温暖。2008年512四川汶川遭受特大地震，全国知识产权局系统政府门户网站第一时间来电了解受灾情况，全国兄弟省市也纷纷来电来函。全国上下，齐齐对四川伸出了援助之手，抗震救灾、灾后重建，点点滴滴令人感动至深。</p>
                    <p>我们一起走过了一个十年，还将继续共同建设更多更好的十年、二十年……</p>
                    <p>四川局 吴学松</p>`,
            city: '四川'
        }, {
            type: 'text',
            content: `<p>十年坚持，铸造辉煌；十年努力，塑造形象！祝贺全国知识产权局系统政府门户网站正式开通十周年！</p>
                       <p>重庆局周冬梅</p>`,
            city: '重庆'
        }, {
            type: 'text',
            content: `<p>全国知识产权局系统政府门户网站正式开通十周年庆祝福</p>
                    <p>时光飞逝 岁月如梭；全国知识产权局系统政府门户网站即将迎来第3650个工作日，在这即将来到的特殊时刻，我要为它日日夜夜的驻守、完善我国知识产权的努力、改革知识产权的认证而点赞；</p>
                    <p>不经历风雨怎能见彩虹，回顾过去十年，从全国知识产权局系统政府门户网站开通到今天，对于各地方子站信息员来说是难忘的，在摸索中，各地方子站信息员知晓了全国知识产权局系统政府门户网站的各项功能，并提出相关的修改建议，使全国知识产权局系统政府门户网站逐渐成熟并完善，为各地方的知识产权发展提供强大的支撑，为国家的科学技术进步做出了不可磨灭的功勋。</p>
                    <p>一份耕耘，一份收获！全国知识产权局系统政府门户网站与各地信息员共同走过了风雨兼程的十年，走过了同心同德的十年，走过了跨越发展的十年。全国知识产权局系统政府门户网站即将迎来它的第十个生日，值此欢庆之际，恭贺全国知识产权局系统政府门户网站越来越好，在新的征程中再谱新篇。</p>
                    <p>贵州局 敖发萍</p>`,
            city: '贵州'
        }, {
            type: 'text',
            content: `<p>建好地方子站，传播创新的声音</p>
                    <p>云南局  安建民</p>`,
            city: '云南'
        }, {
            type: 'text',
            content: `<p>回顾过去我们无比自豪，展望未来我们信心十足。</p>
                    <p>我们相信全国知识产权局系统政府门户网站的十年华诞必将成为承前启后、开拓创新、追求卓越的新起点。</p>
                    <p>创新之路无止境，知识产权伴你行。知识产权，只有起点，没有终点。创新发展，只有逗号，没有句号。</p>
                    <p>愿知识产权在新的征途上一如继往，再创辉煌！</p>
                    <p>山西局 祁晓</p>`,
            city: '山西'
        }, {
            type: 'text',
            content: `<p>十年非凡历程，十年春华秋实。作为国家知识产权局系统政府门户网站，为全国知识产权系统提供了大量知识产权信息，给予了地方知识产权工作大力支持和帮助，希望国家知识产权局系统政府门户网站今后对地方知识产权局的支持一如既往，值此国家知识产权局系统政府门户网站成立十周年之际，河北省知识产权局谨致热烈祝贺！祝国家知识产权局系统政府门户网站越办越好，再创辉煌！</p>
                    <p>河北局　王伟</p>`,
            city: '河北'
        }, {
            type: 'text',
            content: `<p>了解世界知识产权发展趋势的窗口，</p>
                    <p>掌握国家知识产权政策的园地，</p>
                     <p>服务大众创业、万众创新的平台。</p>
                     <p>www.sipo.gov.cn将伴我们实现伟大的知识产权强国梦！</p>
                     <p>山东局  张忠强</p>`,
            city: '山东'
        }, {
            type: 'text',
            content: `<p>我与国家知识产权局门户网站走过的“十年”</p>
                    <p>十年，光阴荏苒；十年，弹指一挥间。</p>
                    <p>转眼间，国家知识产权局系统政府门户网站已陪伴我走过了十年。对于很多人来说，十年只是岁月的一个阶段，是成长的一段旅程。可对我来说，这十年却有着特殊的意义，是我和国家知识产权局门户网站共同成长的十年，更是我投身知识产权事业的十年。</p>
                    <p>2006年的2月底，刚到河南省知识产权局工作不到两个月的我去厦门参加国家知识产权局系统政府门户网站工作会议。也正是在那里，我认识了国家知识产权局负责网站工作的领导们，结识了一群和我一样有着满腔热血的年轻人。</p>
                    <p>刚开始，我对网站信息报送工作并不是很了解。国家知识产权局网站初运行的几年，各地还没有地方子站，我所做的工作就是时不时把我们单位的工作信息进行修改编辑，然后给国家知识产权局门户网站投稿。当时每年发稿量也不过十几篇。第一次看到自己的稿件被网站“地方动态”采用，我兴奋不已，冲到时任局办公室主任的周主任办公桌前报告这个好消息。“是吗？这可是我们的突破啊！我来看看！”周主任马上打开电脑。虽然他不怎么精通电脑，但在我的帮助下很快通过国家知识产权局门户网站点开了我们的信息，至今我们清楚的记得周主任看到那篇信息时激动的眼神，他说通过网站发布信息在我们局里一直是个空白，希望我能通过这个平台发挥好自己的文字写作优势，把我们局的宣传工作做好。</p>
                    <p>2006年冬天，世界知识产权组织和国家知识产权局在河南郑州召开了“世界传统知识、传统文化表达和遗传资源地区间研讨会”。在那个会上，我第一次见识了国家知识产权局系统政府门户网站的“图文直播”。会场一侧，陈晓溪处长和陕西省知识产权局的宁静密切配合，根据会议进度有条不紊地上传文字和图片，使得这样一个大规模国际性会议在互联网站得以同步展现，为我们宣传工作开辟了一个崭新的空间。</p>
                    <p>2008年11月，国家知识产权局逐步在各省市建立了地方子站，这使得我们终于有了自己的“小家”，地方子站根据各地特色工作设置，既有共性栏目，也有特色板块，成为各地展示知识产权工作的重要平台。每年国家知识产权局都会举办各省市信息管理员和信息维护工作人员参加的网站工作会议，给大家培训网站管理和信息发布知识，听取大家对网站工作发展的建议，共同研讨提升网站工作水平的思路和举措，进行网络信息安全重要性的提升教育。</p>
                    <p>十年从事网站信息管理工作，有喜悦，有忧伤，有坚定，有徘徊。看到自己编辑的稿件被顺利采纳，内心充满了喜悦；成功举办了图文直播活动，让我凭添了继续探索开展新工作的自信；发稿量迅速攀升，网站工作得到了国家局领导的认可，让我对网站信息管理工作充满了归属感。一段时间地市单位稿件质量上不去，很久没有在主页上稿了，忧郁和焦虑慢慢弥散；由于诸多条件所限，至今为止在“在线访谈”等一些活动上还没有尝试；随着手头工作业务的增加，能真正静下心来做好网站信息管理工作的时间越来越少，也让我对自己做好网站工作充满了不自信。</p>
                    <p>和当初开通的时候相比，历经几次改版的国家知识产权局系统政府门户网站版面更加赏心悦目、美观大方；实用性、服务性和功能性也大大增强。而守候这个网站也逐渐成为我的一种习惯，每天上班打开电脑的第一件事就是打开国家知识产权局系统政府门户网站看一看，那种感觉像和一位相处多年的友人亲密无间，更像和一位博学的长者开怀畅谈。</p>
                    <p>回首过去，无比感慨；展望未来，踌躇满怀。我衷心的祝愿国家知识产权局系统政府门户网站越来越好、更加茁壮，伴随着知识产权强国梦的实现，一起谱写知识产权事业发展更美好的明天。</p>
                    <p>河南局  张晓燕</p>`,
            city: '河南'
        }, {
            type: 'image',
            src: './static/images/i-anhui.jpg',
            city: '安徽'
        }, {
            type: 'text',
            content: `<p>十年励精图治，十年躬耕不辍，换来了国家知识产权局系统政府门户网站可喜的发展，感谢过去的十年有你的陪伴和指引！希望在下一个十年，我们携手共创辉煌，更上一层楼!</p>
                    <p>江苏局 黄红健</p>`,
            city: '江苏'
        }, {
            type: 'image',
            src: './static/images/i-shanghai.jpg',
            city: '上海'
        }, {
            type: 'image',
            src: './static/images/i-hubei.jpg',
            city: '湖北'
        }, {
            type: 'text',
            content: `<p>十年，弹指一挥间，十年，潜心磨一剑。伴随全国知识产权事业的蓬勃发展，国家知识产权局系统政府门户网站日渐完善，成为了形象展示的重要窗口、信息传播的坚强利器、地方与上层沟通的有效平台。很荣幸在这样一个好时代融入到知识产权事业当中，为这项工作献上自己的微薄之力。在国家知识产权局系统政府门户网站正式开通十周年之际，我想套用一句经典的话，“你的过去我来不及参与，你的未来我会竭尽全力。”</p>
                    <p>湖南局　周闯</p>`,
            city: '湖南'
        }, {
            type: 'text',
            content: `<p>时光荏苒，日月如梭，国家知识产权局政府门户网站十周岁了，在过去的几年中，我伴随着网站在知识产权宣传工作中不断成长，祝福门户君生日快乐，越办越好，为更多的知识产权工作者带去权威、及时、有效的资讯和服务。</p>
                    <p>江西局　徐加叶</p>`,
            city: '江西'
        }, {
            type: 'text',
            content: `<p>今年是国家知识产权局系统政府门户网站开通十周年！在这漫漫十年中，它见证了国家知识产权事业的崛起与发展，记录了知识产权人的辛勤工作的点滴。十年是一个里程碑，亦是一个新起点，在此之际，我预祝网站越办越好，走向一个新的巅峰！</p>
                    <p>浙江局 王小燕</p>`,
            city: '浙江'
        }, {
            type: 'text',
            content: `<p>十年，从无到有，由萌芽而茁壮；</p>
                    <p>十年，脚踏实地，传递星星之火。</p>
                    <p>回首来时路，子站凝聚了众多知识产权信息工作者的心血，推动了知识产权意识在全社会的普及，见证了知识产权事业的蓬勃发展——一路砥砺前行，硕果累累。</p>
                    <p>展望新征程，建设知识产权强国的号角声已吹响，如雄风浩荡，催人奋进，子站的宣传作用更加凸显——路自脚下延伸，责无旁贷。</p>
                    <p>雄关漫道真如铁，而今迈步从头跃。让我们埋头行路，辛勤耕耘，让子站成为知识产权强国路上的执灯者、筑路人、引风者，助推最美“知识产权梦”的腾飞！</p>
                    <p>（福建局 徐文彬）</p>`,
            city: '福建'
        }, {
            type: 'text',
            content: `<p>全国知识产权局系统政府门户网站不仅是资讯网，更是交流圈，每一位从事和热心于发明创造工作的朋友都可以在这里找到共鸣，找到指南！</p>
                       <p>回顾前十年的风采，展望后十年的辉煌，广西子站与各兄弟省市一起，衷心祝愿全国知识产权系统门户网站越办越好！</p>
                       <p>广西局　梁干</p>`,
            city: '广西'
        }, {
            type: 'text',
            content: `<p>十年的辛劳，换来今日的举杯祝贺，成功就在面前；十年的汗水，得来今日的鲜花掌声，胜利就在眼前。十年历程，十年历练，终有收获。在新的十年里，祝愿网站再创造新的辉煌！</p>
                    <p>海南局　禹颖</p>`,
            city: '海南'
        }, {
            type: 'text',
            content: `<h1>做知识产权事业的传播者</h1>
                        <p>党的十八大以来，中央充分认识到知识产权对创新驱动发展的重大作用，将知识产权工作提升到新的战略高度，出台了一系列涵盖知识产权在内的政策措施。</p>
                        <p>“长风破浪会有时,直挂云帆济沧海”，知识产权引领创新驱动发展的前途是光明的，我们坚信，在党中央的正确领导下，在包括你我在内的千千万万的知识产权工作者的奋勇进取下，我们一定能够开创知识产权引领创新发展新的辉煌！</p>
                        <p>作为一名知识产权事业的宣传者，我们是幸运的。我们有幸见证、亲身参与并广泛传播了这场伟大的经济变革。让我们用自己的青春为创新发展注入知识产权活力！让我们用自己的热情使创新之路变得更为平坦！让我们用自己的汗水浇灌创新幼苗茁壮成长！</p>
                        <p>祝国家知识产权局门户网站十岁生日快乐！</p>
                        <p>广东局  吴勇</p>`,
            city: '广东'
        }, {
            type: 'text',
            content: `<p>光阴荏苒，我们永怀逝去的日子，开拓知识产权事业，任重而道远，但我们愿化作丝丝春雨，助您播下美好未来的良种。</p>
                        <p>兵团 李波</p>`,
            city: '建设兵团'
        }, {
            type: 'text',
            content: `<p>在对知识产权尚无明确认识的时候，走进了这个具有技术含量的工作岗位，国家知识产权地方子站成为了我了解、认识知识产权的平台和纽带，通过地方子站工作，我学习了知识产权相关法律法规，了解、熟悉了知识产权系统的相关工作。在发表感言之时，我的工作刚刚进行了调整，但对于知识产权子站的关注是我无法改变的事情。在此，希望国家知识产权地方子站能够越办越好，也希望我国的知识产权事业蒸蒸日上。</p>
                        <p>沈阳局　孙凯</p>`,
            city: '沈阳'
        }, {
            type: 'text',
            content: `<p>十载风华，共励成长，十年耕耘，硕果累累。</p>
                     <p>长春局 张烨</p>`,
            city: '长春'
        }, {
            type: 'text',
            content: `<p> 在第十六个世界知识产权日来临之际，国家知识产权局系统政府门户网站迎来了开通十周年纪念。在此，国家知识产权局南京子站祝贺国家知识产权局系统政府门户网站不断创新，锐意前行，成为在全国更具影响力、更具引导力的知识产权标志性网站。</p>
                    <p>十年的一路风雨兼程，国家知识产权局系统政府门户网站所有工作人员破冰前行，取得了骄人的成绩，国家知识产权局系统政府门户网站成为大众了解知识产权、世界了解我国知识产权事业高速发展的窗口；十年的“一路有你”相伴，南京子站也有了相互交流学习和更高的展示地方知识产权工作风采的窗口。</p>
                    <p>十年是一个里程碑，更是一个新的起点，再次祝贺国家知识产权局系统政府门户网站在新的起点上，开启下一个十年的华彩篇章。</p>
                    <p>南京局 李群</p>`,
            city: '南京'
        }, {
            type: 'text',
            content: `<p>祝国家知识产权局政府门户网站十周岁生日快乐！</p>
                       <p>织网十载，织就知识产权宣传鸿图；筑梦千年，筑成专利创造保护伟业。祝国家知识产权局政府门户网站生日快乐，越办越好！</p>
                       <p>杭州局 庞飞霞</p>`,
            city: '杭州'
        }, {
            type: 'video',
            src: './static/video/jinan.mp4',
            city: '济南'
        }, {
            type: 'image',
            src: './static/images/i-wuhan.jpg',
            city: '武汉'
        }, {
            type: 'image',
            src: './static/images/i-guangzhou.jpg',
            city: '广州'
        }, {
            type: 'text',
            content: `<p>全国知识产权局系统政府门户网站十年的发展，进一步完善了国家知识产权局网站的公共服务职能，也为地方知识产权工作提供了更好的交流和展示平台。衷心祝福全国知识产权局系统政府门户网站十周年生日快乐！越做越出彩！</p>
                    <p>成都局 罗伟</p>`,
            city: '成都'
        }, {
            type: 'image',
            src: './static/images/i-xian.jpg',
            city: '西安'
        }, {
            type: 'text',
            content: `<p>十年抒怀</p>
                    <p>——致全国知识产权地方子站成立十周年</p>
                    <p>时政要闻天下事，</p>
                    <p>知识产权擎峥嵘。</p>
                    <p>地方动态百花放，</p>
                    <p>媒体聚焦写纵横。</p>
                    <p>十载创建勤耕耘，</p>
                    <p>凝心聚力促发展。</p>
                    <p>强国利民铸伟业，</p>
                    <p>当仁不让专利人。</p>
                    <p>大连局 李文焕</p>`,
            city: '大连'
        }, {
            type: 'text',
            content: `<p>十年风雨磨一剑，而今迈步从头越，衷心祝愿国家知识产权局系统政府门户网站群越建越好！</p>
                    <p>宁波子站　章莉波</p>`,
            city: '宁波'
        }, {
            type: 'image',
            src: './static/images/i-xiamen.jpg',
            city: '厦门'
        }, {
            type: 'image',
            src: './static/images/i-qingdao.jpg',
            city: '青岛'
        }, {
            type: 'image',
            src: './static/images/i-shenzhen.jpg',
            city: '深圳'
        }
    ]
};


let util = {
    init(){

        this.setSize();
        let w = parseFloat(utilMethods.getStyle($('#fly-main .fly-panner-container')).width),
            h = parseFloat(data.pannelC.style.height);
        data.canvas.width = w;
        data.canvas.height = h;
        data.cityCanvas.width = w;
        data.cityCanvas.height = h;
        this.bindEvent();
        let d = this.renderLoading(data.canvas, "province");

        let imgArr = ['./static/images/line.png'];
        for (let i = 1; i <= 31; i++) {
            imgArr.push('./static/images/' + i + '.png');
        }

        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.on('tick', tick);

        var a = 0;
        this.b = 0;
        let self = this;

        function tick(evt) {
            !a && d.stage.update();
            self.b && self.d1.stage.update();
        };

        class BitMap {
            constructor(option = {}) {
                let s = this;
                s.container = option.container;
                s.src = option.src;
                s.stage = option.stage;
                s.speed = .01;
                s.k = option.k || 800;
                s.render();
            }

            render() {
                let s = this;
                let scale = $("#province-canvas").height / s.k;
                let bit = new createjs.Bitmap(s.src).set({scaleX: scale, scaleY: scale});
                bit.alpha = 1;
                bit.on('mousedown', e=> {
                    bit.index = s.container.getChildIndex(bit);
                    let cityData = s.container.type === 'province' ? data.provinceData : data.cityData;

                    if (bit.index > 0) { //bit.index = 0 的是线条和背景图片
                        let dt = cityData[bit.index - 1];

                        Array.from($$('.fly-container', data.mask)).forEach(item=> {
                            item.style.display = 'none';
                        });

                        switch (dt.type) {
                            case "image":
                                self.initMaskContent(dt.type, dt.src, ()=> {
                                    let img = $('.fly-image-container .fly-content img');
                                    img.style.opacity = 1;
                                    img.src = dt.src;
                                    img.classList.remove('loading-gif');
                                });
                                break;
                            case "text":
                                self.initMaskContent(dt.type);
                                $('#fly-text-container').innerHTML = dt.content;
                                break;
                            case "video":
                                self.initMaskContent(dt.type);
                                let index = s.container.type === "province" ? 0 : 1;
                                $$("video", data.mask)[index].style.display = 'block';
                                $$("video", data.mask)[index].play();
                                break;
                        }


                        $('.fly-' + dt.type + '-container .fly-city').innerHTML = dt.city;

                        $('.fly-' + dt.type + '-container').style.display = 'block';
                    }

                });
                s.bit = bit;
                s.container.addChild(bit);
            }


        }

        this.BitMap = BitMap;

        this.proviceArr = [];
        utilMethods.loading(imgArr, (p, s)=> {
            d.prec.text = Math.round(p * 100) + "%";
        }, (s)=> {
            imgArr.forEach(img=> {
                this.proviceArr.push(new BitMap({src: img, container: d.container, stage: d.stage}));
            });
            d.stage.removeChild(d.prec, d.text);

            createjs.Tween.get(d.container, {loop: false})
                .to({alpha: 1}, 1500, createjs.Ease.linear).call(()=> {
                setTimeout(()=> {
                    a = 1;
                }, 500)
            });
        });
    },

    loadingCity(){

        if (!this.theCityIsLoaded) {
            this.theCityIsLoaded = true;
            this.b = 1;
            let cityImgArr = ['./static/images/city-bg.png'];
            for (let i = 1; i < 45; i++) {
                cityImgArr.push('./static/images/c-' + i + '.png');
            }
            let d1 = this.renderLoading(data.cityCanvas, 'city', 1595, 670);
            this.d1 = d1;
            this.cityArr = [];
            utilMethods.loading(cityImgArr, (p, s)=> {
                d1.prec.text = Math.round(p * 100) + "%";
            }, ()=> {

                cityImgArr.forEach(s=> {
                    this.cityArr.push(new this.BitMap({src: s, k: 750, container: d1.container, stage: d1.stage}));
                });
                d1.stage.removeChild(d1.prec, d1.text);
                d1.container.alpha = 1;
                setTimeout(()=> {
                    this.b = 0;
                }, 500);

            });
        }
    },

    renderLoading(canvas, type, w = 1700, h = 800){

        let stage = new createjs.Stage(canvas);
        let container = new createjs.Container();
        container.alpha = 0;
        container.type = type;
        let text = new createjs.Text("Loading...", "50px Arial", "rgba(62, 59, 189, 1)");
        text.x = 300;
        text.y = 300;
        text.textAlign = "center";
        //text.textBaseline = "top";

        text.x = canvas.width / 2;
        text.y = canvas.height / 2 - 20;


        let prec = new createjs.Text("0%", "50px Arial", "rgba(62, 59, 189, 1)");
        prec.x = 300;
        prec.y = 300;
        prec.textAlign = "center";
        //text.textBaseline = "top";
        let cX = (canvas.width - canvas.height / h * w) / 2;
        container.x = cX <= 0 ? 0 : cX;


        prec.x = canvas.width / 2;
        prec.y = canvas.height / 2 + 40;
        stage.addChild(text, prec);
        stage.addChild(container);
        return {container, prec, stage, text};
    },

    setSize(width = data.viewWidth, height = data.viewHeight){
        let h = (height - parseFloat(utilMethods.getStyle(data.logo).marginTop) - 30 - data.header.offsetHeight);
        data.pannelC.style.height = h + 'px';
        $('#fly-main .fly-logo').style.transform = 'scale(' + (width / 1920) + ')';

        Array.from($$("canvas")).forEach(item=> {
            item.style.transformOrigin = 'center center -' + h / 2 + 'px';
            item.style.webkitTransformOrigin = 'center center -' + h / 2 + 'px';
        });
    },
    bindEvent(){
        window.addEventListener('resize', ()=> {
            let width = document.documentElement.clientWidth,
                height = document.documentElement.clientHeight;
            this.setSize(width, height);
        });
        // var k = kontext( document.querySelector( '.kontext' ) );
        let cIndex = 0;
        document.addEventListener("click", e=> {
            if (utilMethods.hasClass(e.target, 'nav')) {
                e.preventDefault();
                let target = e.target;
                Array.from($$('a', $('#fly-main .fly-pannel-bar'))).forEach(item=> {
                    item.classList.remove('active');
                });
                target.classList.add('active');
                let index = utilMethods.index(target);
                data.pannelC.classList[index === 1 ? "add" : "remove"]('active');
                target.parentNode.classList[index === 1 ? 'add' : 'remove']('after');
                cIndex = index;
                ///k.show( index );
                if (index === 1) {
                    this.loadingCity();
                }
            }
        });
        let iNow = 0;
        document.addEventListener("keydown", e=> {
            if (e.keyCode === 37 || e.keyCode === 39) {
                cIndex = iNow % 2 === 0 ? 1 : 0;
                $$(".nav")[cIndex].click()
                iNow++;
            }
            else if (e.keyCode === 27) {
                data.close.click();
            }
        });

        data.close.addEventListener('click', ()=> {
            data.mask.classList.remove('show');
            let img = $('.fly-image-container .fly-content img', data.mask);
            img.style.opacity = 0;
            setTimeout(()=> {
                img.classList.add('loading-gif');
                img.src = './static/images/loading1.gif';
            }, 400);
            Array.from($$('video', data.mask)).forEach(video=> {
                video.style.display = 'none';
                video.pause();
            });
        });
    },
    initMaskContent(type, src, fn){
        if (type === 'image') {
            let content = $('.fly-image-container .fly-content', data.mask);

            this.imgLoad(src, (w, h) => {
                fn && fn();
                let cH = content.offsetHeight;
                let cW = content.offsetWidth;
                let img = $(".fly-content img", data.mask);
                if (w / h >= cW / cH) {
                    img.style.width = "100%";
                    img.style.height = 'auto';
                    let imgH = h / w * cW;
                    content.style.marginTop = (cH - imgH ) / 2 + "px";
                    content.style.marginLeft = 0;
                } else {
                    img.style.width = "auto";
                    img.style.height = '100%';
                    let imgW = w / h * cH;
                    content.style.marginTop = 0;
                    content.style.marginLeft = (cW - imgW  ) / 2 + "px";
                }
            });
        }
        data.mask.classList.add("show");

    },
    imgLoad(src, fn){
        let img = new Image();
        img.onload = function () {
            fn && fn(this.width, this.height);
        };
        img.src = src;
    }

};

utilMethods.ajax('temp.html', data=> {
    $("#temp").innerHTML = data;
    utilMethods.tempLoaded();
    util.init();
});