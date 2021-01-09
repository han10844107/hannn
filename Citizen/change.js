var img_arr = ["Mcdonald.gif","cola.gif","channel.gif","son.gif","qq.gif","loan.gif"];
var a_href=["https://media4.giphy.com/media/E30zKqKzwkAwM/giphy.gif?cid=ecf05e47r2r2dstwyaooogrdrcxv54wkj79pkz1jqpq8tv1z&rid=giphy.gif",
"https://media4.giphy.com/media/1jl4s5mxSczo22IA4s/giphy.gif?cid=ecf05e47r2r2dstwyaooogrdrcxv54wkj79pkz1jqpq8tv1z&rid=giphy.gif"
,"https://www.pinterest.com/pin/469641067366055464/","https://media1.giphy.com/media/3o6Mb2Awby7bBmii1a/giphy.gif?cid=ecf05e47yzo07tbme006fhg8gueg8ui0bk99yf9fpehie8or&rid=giphy.gif"
,"https://lh3.googleusercontent.com/proxy/ZFUAjBGxXveSWTmtY8TNG7MEkVV182DjsBCFo1Nzlh9KZ0rrK6BC7jZcBGs0svirBuGXg34DuceCBioib60qCrul2_rrXuh0",
"https://thumbs.gfycat.com/KnobbyInfamousCoyote-max-1mb.gif"
];

	
function chh()
{
	
	var ran=Math.floor(Math.random()*img_arr.length);
	setTimeout("chh()",1000);
	change_(ran);
}
function change_(ran)
{

	document.getElementById("ad").src = img_arr[ran];

	document.getElementById("a_ad").href = a_href[ran];
}
chh();