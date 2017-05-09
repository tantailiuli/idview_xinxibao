var info_chooseul_li1 = document.getElementById('info_chooseul1').getElementsByTagName('li'),
	info_contentul_li1 = document.getElementById('info_contentul1').getElementsByTagName('li'),
	info_chooseul_li2 = document.getElementById('info_chooseul2').getElementsByTagName('li'),
	info_contentul_li2 = document.getElementById('info_contentul2').getElementsByTagName('li'),
	infoLen1 = info_chooseul_li1.length,
	infoLen2 = info_chooseul_li2.length;
function info_ul(li1,li2,Len){
	li1[0].setAttribute("class","col-xs-2 hover");
	li1[0].getElementsByTagName('img')[0].setAttribute("class","hidden responsive img-responsive");
	li1[0].getElementsByTagName('img')[1].setAttribute("class","responsive img-responsive");
	li1[Len-1].setAttribute("class","col-xs-2 last");
	li2[0].setAttribute("class","block");
	for (var i = 0; i < Len; i++) {
		li1[i].index = i;
		li1[i].addEventListener("click",function(){
			for (var i = 0; i < Len; i++) {
				i==Len-1?li1[i].setAttribute("class","col-xs-2 last"):li1[i].setAttribute("class","col-xs-2");
				li1[i].getElementsByTagName('img')[0].setAttribute("class","responsive img-responsive");
				li1[i].getElementsByTagName('img')[1].setAttribute("class","hidden responsive img-responsive");
				li2[i].setAttribute("class","");
			}
			li2[this.index].setAttribute("class","block");
			this.index==Len-1?this.setAttribute("class","col-xs-2 hover last"):this.setAttribute("class","col-xs-2 hover");
			this.getElementsByTagName('img')[0].setAttribute("class","hidden responsive img-responsive");
			this.getElementsByTagName('img')[1].setAttribute("class","responsive img-responsive");
		},false)
	}
}
info_ul(info_chooseul_li1,info_contentul_li1,infoLen1);
info_ul(info_chooseul_li2,info_contentul_li2,infoLen2);