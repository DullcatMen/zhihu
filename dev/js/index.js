var data_1 = {
	number : 943,
	userHead : "https://pic1.zhimg.com/dcef50ec555581dda1377ab38cffe6c0_m.jpg",
	topTag : "热门文章",
	title : "机器学习在量化投资中的应用（二）：那些年我犯过的错误",
	author : "Weicong Liu",
	dico : "计算机MPhil，期权量化研究员",
	contentImg : "https://pic3.zhimg.com/21a1ed8ec2877fe4fcf777ff191429e6_200x112.jpg",
	contentTxt : "这篇文章本来无人问津，很奇怪，最近一个月突然增加了500赞。我个人认为这篇文章是专栏里比较差的一篇，将近700赞已经完全超过了文章本身的价值。恳请读者们不再点赞，可以移步专栏的其他文章读一读。说实话，我很怀疑最近增加的粉丝大多数是僵尸粉，因为大…",
	review : 92,
};
var data_2 = {
	number : 6769,
	userHead : "https://pic3.zhimg.com/1d0a7818defacba170c9e8980a8f7242_m.jpg",
	topTag : "热门文章",
	title : "那么实用的置物架别人都能摆好看，你凭什么不行？",
	author : "冯驌",
	dico : "",
	contentImg : "https://pic3.zhimg.com/88965e6f42b9f768d56d9efb165ce3ea_200x112.jpg",
	contentTxt : "灵活能装的小书架特别好用，可以做装饰架也可以做收纳架，很适合小户型或者租房住的人。但是，想把它摆好看了也没有那么容易。东西方少了太空，放多了又显得乱，放书又受限于书的高度，东西全暴露在外落灰强迫症又会抓狂……我们今天就来通过具体图片，看看…",
	review : 256,
};
var data_3 = {
	number : "17K",
	userHead : "https://pic3.zhimg.com/f9f67bdb4b16b3b02cfab1652acf341a_m.jpg",
	topTag : "热门回答，来自 电影",
	title : "如何评价迪士尼动画电影《疯狂动物城》？",
	author : "water five",
	dico : "动画/电影/Storyteller",
	contentImg : "https://pic3.zhimg.com/5f02b7874e21c976023155236c44f136_200x112.png",
	contentTxt : "谢邀……为什么《疯狂动物城》是一部让人恐怖与绝望充满核打击力量佛挡杀佛神挡杀神的作品？刚屁颠屁颠二刷回来……一刷的去看的时候真是震撼到浑身发抖，于是一结束放映就迫不及待去朋友圈发了感想：和羊去看《疯狂动物城》，简直是卧！！！槽！！！我俩抱…",
	review : 1670,
};
var data_4 = {
	number : 1400,
	userHead : "https://pic1.zhimg.com/7cc703c8c_m.jpg",
	topTag : "热门回答，来自 旅游",
	title : "杭州近郊、周边有哪些不为人知的好玩地方？",
	author : "Feekr君",
	dico : "发现最具小众特色旅行体验！",
	contentImg : "https://pic4.zhimg.com/6f1b3acb48b00d30b29b13f3b79e12ff_200x112.jpg",
	contentTxt : "题主问的是近郊、周边，那就推荐一些车程半小时左右的美景，有些不是在杭州，不过也超近，适合选一个周末就出发！比如说有着绚烂秋色的临安与美丽山居的富阳，比如说比安吉更安静的湖州市区、长兴、德清，比如说不仅仅是鲁迅故居的绍兴和诸暨，比如说远离西…",
	review : 137,
};

$(".plateBox").append(template("tmpl",{
	data : data_1,
})).append(template("tmpl",{
	data : data_2,
})).append(template("tmpl",{
	data : data_3,
})).append(template("tmpl",{
	data : data_4,
}));

