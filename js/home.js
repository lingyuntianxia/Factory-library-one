


		// 首页中的图片变换  JS原型
			var Sj=1;
			setInterval(function(){
				$(".home3_1>a").eq(Sj).css('display','none');
				$(".home3_2_1>a").eq(Sj).css('opacity','0.5');
				Sj=Math.round(Math.random()*7);
				$(".home3_1>a").eq(Sj).css('display','block');
				$(".home3_2_1>a").eq(Sj).css('opacity','1');

			},3000)
			window.onload=function(){
				var T2=new Abc2();
				T2.fn3();
			}
		function Abc2(){
			this.ohome4_1=document.querySelector(".home4_1");
			this.ohome4_2=document.querySelector(".home4_2");
			this.ohome4_3=document.querySelector(".home4_3");
			this.omarquePic1=document.querySelector("#marquePic1");
			this.omarquePic2=document.querySelector("#marquePic2");
			this.time1=null;
			this.time2=null;
		}
		Abc2.prototype.fn3=function(){
			var This=this;
			this.omarquePic2.innerHTML=this.omarquePic1.innerHTML;
			this.ohome4_1.onclick=function(){
				This.fn4();
			}
			this.ohome4_3.onclick=function(){	
				This.fn5();
			}
		}		
		Abc2.prototype.fn4=function(){
			var This=this;
			clearInterval(this.time2);
			clearInterval(this.time1);
			this.time1=setInterval(function(){
				This.fn4_1();
			},50);
		}
				
		Abc2.prototype.fn4_1=function(){
			
			if(this.ohome4_2.scrollLeft>=this.omarquePic1.scrollWidth)
			{
				this.ohome4_2.scrollLeft=0;
			}
			else
			{
				this.ohome4_2.scrollLeft++;
			}
		}
		Abc2.prototype.fn5=function(){
			var This=this;
			clearInterval(this.time2);
			clearInterval(this.time1);
			this.time2=setInterval(function(){
				This.fn5_1();
				},50);
		}
		Abc2.prototype.fn5_1=function(){
			// console.log(this)
			if(this.ohome4_2.scrollLeft<=0)
			{
				this.ohome4_2.scrollLeft=this.omarquePic1.scrollWidth;
			}
			else{
				this.ohome4_2.scrollLeft--;
			}
		}	
		//图片切换
		var oDiv4_1_1=document.querySelector(".div4_1_1");
		var aImg2=oDiv4_1_1.querySelectorAll("img");
		var oDiv4_2_1=document.querySelector(".div4_2_1");		
		// console.log(oDiv4_2_1.offsetWidth)
		var aImg3 = oDiv4_2_1.querySelectorAll("img");	
		setInterval(function(){
			
			for(var i=0;i<aImg2.length;i++)
			{
				aImg2[i].style.display="block";
				aImg2[i].style.left=parseInt(getStyle(aImg2[i]))-265+'px';
				if(parseInt(getStyle(aImg2[i]))<(-397))
				{	
							aImg2[i].style.display="none";
							aImg2[i].style.left=265*6+"px";
				}
			}
			for(var i=0;i<aImg3.length;i++)
			{
					aImg3[i].style.display="block";
					aImg3[i].style.left=parseInt(getStyle(aImg3[i]))+265+'px';
					if(parseInt(getStyle(aImg3[i]))>397)
					{						
							aImg3[i].style.display="none";
							aImg3[i].style.left=-265*6+"px";
					}
			}
		},6000);
		function getStyle(obj)
		{
			return  obj.currentStyle?obj.currentStyle.left:getComputedStyle(obj).left;
		}
		// 动画首页
		$("document").ready(function(){
			
			$(".div6>ul>li").eq(0).click(function(){
				$("#Home").css('display','block');
				$("#Anime").css('display','none');
			})
		})
			var aSpan1=$(".span1");

			//页面切换
			aSpan1.eq(0).click(function(){			
				$("#Home").css('display','block');
				$("#Anime").css('display','none');
				$("#Photo").css('display','none');
				$("#Culture").css('display','none');
			});
			aSpan1.eq(1).click(function(){
				$("#Home").css('display','none');
				$("#Anime").css('display','block');
				$("#Photo").css('display','none');
				$("#Culture").css('display','none');
			});
			aSpan1.eq(2).click(function(){
				$("#Home").css('display','none');
				$("#Anime").css('display','none');
				$("#Photo").css('display','block');
				$("#Culture").css('display','none');

			});
			aSpan1.eq(3).click(function(){
				$("#Home").css('display','none');
				$("#Anime").css('display','none');
				$("#Photo").css('display','none');
				$("#Culture").css('display','block');
			});
			$('.span1').click(function(){
				$(this).eq(0).css({'backgroundColor':''});
				$(this).css({'backgroundColor':'#4894B3'}).siblings().css({'backgroundColor':''});
			});
		
			
				
				// 图片获取及加载
					var start=0;
					var step=60;
					var oPhoto1=document.querySelector(".Photo1");
					var H_soll=null;
					function fn1(data){
						for(var i=0;i<data.list.length;i++)
						{
							// console.log(data)
							var aDiv123=document.createElement("div");
							aDiv123.className="Photo1_1";
							var aImg123=document.createElement("img");			
							aImg123.className="Photo1_1_1";
							// _thumb
							 aImg123.src=data.list[i].thumb;
							aDiv123.appendChild(aImg123);
							var aP123=document.createElement("p");
							aP123.className="Photo1_1_1_1";
							aP123.innerHTML=data.list[i].title;
							aDiv123.appendChild(aP123);	
							oPhoto1.appendChild(aDiv123);
						}
					}
							
					var oPhoto2_1_value=$(".Photo2_1").val();
					$(".Photo2_2").click(function(){
						var V1=oPhoto2_1_value;
						oPhoto2_1_value=$(".Photo2_1").val();
						if(oPhoto2_1_value != "")
						{
							var oScript=document.createElement("script");
							oScript.src="http://image.so.com/j?src=360pic_strong&z=2&cmg=2f52849d495bb60742a8b46444e77bf8&q="+oPhoto2_1_value+"&correct="+oPhoto2_1_value+"&sn="+start+"&pn="+step+"&sid=553ab22c6a3cd0840c0785f3e3b7d582&ran=0&ras=0&callback=fn1";
							document.body.appendChild(oScript);
						}
						if(V1 != oPhoto2_1_value)
						{
							$(".Photo1").html("");
						}
					})
					setInterval(function(){
						var scroll=document.body.scrollTop;
						//console.log(document.body.scrollHeight-document.body.clientHeight+"\n"+window.scrollMaxY)  //滚动条的长度
						H_soll=document.body.scrollHeight-document.body.clientHeight;
						if($("#Photo").css('display')=='block')
						{
							if(scroll==H_soll || scroll==document.body.scrollHeight-window.innerHeight){
								start+=step;
								var oScript=document.createElement("script");
								oScript.src="http://image.so.com/j?src=360pic_strong&z=2&cmg=2f52849d495bb60742a8b46444e77bf8&q="+oPhoto2_1_value+"&correct="+oPhoto2_1_value+"&sn="+start+"&pn="+step+"&sid=553ab22c6a3cd0840c0785f3e3b7d582&ran=0&ras=0&callback=fn1";
								document.body.appendChild(oScript);
							}
						}
					},3000)
					setInterval(function(){
						var P_width=$(".Photo1").width();
						var D_width=document.body.clientWidth;
						window.onresize=function(){
							$(".Photo1").width(D_width);	
						}
					},50);		
		//总	
		var  ohome6_2_2_1=document.getElementsByClassName("home6_2_2_1")[0];
		var  ohome6_2_2_2=document.getElementsByClassName("home6_2_2_2")[0];
		ohome6_2_2_1.onclick=function(){
			ohome6_2_2_2.style.opacity="1";
			ohome6_2_2_1.style.opacity="0";
		}
		ohome6_2_2_2.onclick=function(){
			ohome6_2_2_1.style.opacity="1";
			ohome6_2_2_2.style.opacity="0";
		}
		
		// 总排行
		var ohome6_2_3_3=document.querySelectorAll(".home6_2_3_3");
		var ohome6_2_3public=document.querySelectorAll(".home6_2_3public");
		var a=0;
		 for(var i=0;i<ohome6_2_3_3.length;i++)
		{
			ohome6_2_3_3[i].index=i;
			console.log()
			ohome6_2_3_3[i].onmouseover=function(){
				ohome6_2_3public[a].style.display="none";
				ohome6_2_3_3[a].style.display="block";
			
					ohome6_2_3_3[this.index].style.display="none";
					ohome6_2_3public[this.index].style.display="block";
				
				a=this.index;
			}
		}
			
		//周排行
		var aButton=document.getElementsByClassName("home6_2_3_1_1");
		var ohome6_2_3=document.getElementsByClassName("home6_2_3")[0];
		var aImg=ohome6_2_3.getElementsByTagName("img");
		var aSpan=ohome6_2_3.getElementsByTagName("span");
		var aFont1=document.getElementsByClassName("Font1");
		var aFont2=document.getElementsByClassName("Font2");
		var arr1=["http://img1.v.tmcdn.net/img/h000/h73/img20170329141714439000.jpg",
					"http://img1.v.tmcdn.net/img/h000/h73/img20170112162825847880.jpg",
					"http://img1.v.tmcdn.net/img/h000/h73/img20160603132452433160.png",
					"http://img1.v.tmcdn.net/screenshot/31942/xcm1.png",
					"http://img1.v.tmcdn.net/screenshot/top500/866.jpg",
					"http://img1.v.tmcdn.net/img/h000/h72/img20150811104426c13110.jpg",
					"http://img1.v.tmcdn.net/screenshot/24768/51273891983031016784092942222912754374.jpg",
					"http://img1.v.tmcdn.net/img/h000/h71/img20150302104531553490.jpg",
					"http://img1.v.tmcdn.net/img/h000/h71/img20150323101851bb7150.jpg",
					"http://img1.v.tmcdn.net/screenshot/37482/_113229671557697138828523946650928964559.jpg"];
		var crr1=["http://v.61.com/comic/10144/",
					"http://v.61.com/comic/10199/",
					"http://v.61.com/comic/10525/",
					"http://v.61.com/comic/9205/index.shtml",
					"http://v.61.com/comic/866/index.shtml",
					"http://v.61.com/comic/10143/",
					"http://v.61.com/comic/7777/index.shtml",
					"http://v.61.com/comic/10198/index.shtml",
					"http://v.61.com/comic/7173/index.shtml",
					"http://v.61.com/comic/10507/index.shtml"];
		var brr1=["小花仙第三季",
					"赛尔号第八季幻梦战记",
					"赛尔号第七季宇宙之眼",
					"熊出没之夏日连连看",
					"喜羊羊与灰太狼",
					"小花仙第二季",
					"秦时明月之君临天下",
					"侠岚第六季决敌篇",
					"海绵宝宝",
					"机甲兽神爆裂飞车"];	
		var drr1=[" 更新至18集",
					"更新至23集",
					"30集全",
					" 52集全",
					"530集全",
					"52集全",
					" 更新至60集",
					"26集全",
					"更新至334集",
					"40集全",];	
		var arr2=["http://img1.v.tmcdn.net/screenshot/33853/xcmzdy.png",
					"http://img2.v.tmcdn.net/screenshot/top500/2063.jpg",
					"http://img1.v.tmcdn.net/img/h000/h73/img20170329141714439000.jpg",
					"http://img1.v.tmcdn.net/img/h000/h73/img20170112162825847880.jpg",
					"http://img1.v.tmcdn.net/screenshot/37124/a_100013931_m_601_195_260.jpg",
					"http://img1.v.tmcdn.net/img/h000/h14/img20121004202252f89570.jpg",
					"http://img1.v.tmcdn.net/img/h000/h73/img20160603132452433160.png",
					"http://img1.v.tmcdn.net/img/h000/h71/img20150323101851bb7150.jpg",
					"http://img1.v.tmcdn.net/screenshot/38195/a_100020026_m_601_m3.jpg",
					"http://img1.v.tmcdn.net/img/h000/h72/img20150811104426c13110.jpg"];
		var brr2=["光头强全集","熊出没","小花仙第三季","赛尔号第八季幻梦战记","功夫鸡","熊出没之环球大冒险","赛尔号第七季宇宙之眼","海绵宝宝","粉红猪小妹全集","小花仙第二季"];
		var crr2=["http://v.61.com/comic/9637/",
					"http://v.61.com/comic/2063/",
					"http://v.61.com/comic/10144/",
					"http://v.61.com/comic/10199/",
					"http://v.61.com/comic/10419/",
					"http://v.61.com/comic/6044/",
					"http://v.61.com/comic/10525/",
					"http://v.61.com/comic/7173/",
					"http://v.61.com/comic/10686/",
					"http://v.61.com/comic/10143/"];
		var drr2=["52集全",
					"104集全",
					"更新至18集",
					"更新至23集",
					"104集全",
					"更新至115集",
					"30集全",
					"更新至334集",
					"156集全",
					"52集全"];
		aButton[0].onclick=function(){
		for(var i=0;i<aImg.length;i++)
			{
				aImg[i].src=arr1[i];
				aImg[i].alt=brr1[i];
				aFont1[i].herf=crr1[i];
				aFont2[i].href=crr1[i];
				aFont1[i].innerText=brr1[i];
				aFont2[i].innerText=brr1[i];
				aFont1[i].title=brr1[i];
				aFont2[i].title=brr1[i];
				aSpan[i].innerText=drr1[i];
			}
		}
		aButton[1].onclick=function(){
			for(var i=0;i<aImg.length;i++)
			{
				aImg[i].src=arr2[i];
				aImg[i].alt=brr2[i];
				aFont1[i].herf=crr2[i];
				aFont2[i].href=crr2[i];
				aFont1[i].innerText=brr2[i];
				aFont2[i].innerText=brr2[i];
				aFont1[i].title=brr2[i];
				aFont2[i].title=brr2[i];
				aSpan[i].innerText=drr2[i];
			}
		}

		//左右按钮播放
		var H_width=250;  //大图的宽度
		var speed=100;		//图片向左移动速度 
		$(document).ready(function(){
			$(".OPPP2:eq(0)").click(function(){
				if(parseInt($(".HEIGHTH11_1_2BOX>ul").css("left"))>=-1000)
				{	$(".OPPP2:eq(1)").css({"opacity":"1"});
					var mar_lf1=parseInt($(".HEIGHTH11_1_2BOX>ul").css("left"))-H_width;
					$(".HEIGHTH11_1_2BOX>ul").animate({left:mar_lf1},speed);
				}
				else
				{
					$(".OPPP2:eq(0)").css({"opacity":"0"});
				}
			});
			$(".OPPP2:eq(1)").click(function(){
			 	if(parseInt($(".HEIGHTH11_1_2BOX>ul").css("left"))<=-250)
				{
					$(".OPPP2:eq(0)").css({"opacity":"1"});
					var mar_lf2=parseInt($(".HEIGHTH11_1_2BOX>ul").css("left"))+H_width;
					$(".HEIGHTH11_1_2BOX>ul").animate({left:mar_lf2},speed);
				}
				else{
					$(".OPPP2:eq(1)").css({"opacity":"0"});
				}
			});
		})
		//热门自动切换
		
		$(document).ready(function(){
		setInterval(function(){
			if(parseInt($(".home5_3_2").css("left"))=="0"){$(".home5_1_2").animate({"left":"-1946"},32000);}
			if(parseInt($(".home5_1_2").css("left"))=="-1946"){$(".home5_2_2").animate({"left":"-1208"},18000);}
			if(parseInt($(".home5_2_2").css("left"))=="-1208"){$(".home5_3_2").animate({"left":"-272"},900);}
			if(parseInt($(".home5_3_2").css("left"))=="-272"){$(".home5_1_2").animate({"left":"0"},32000);}
			if(parseInt($(".home5_1_2").css("left"))=="0"){$(".home5_2_2").animate({"left":"0"},18000);}
			if(parseInt($(".home5_2_2").css("left"))=="0"){$(".home5_3_2").animate({"left":"0"},900);}
			// console.log(parseInt($(".home5_3_2").css("left")))
		},1000);								
							               
											
	
		})
		//文化祭
		var  oCulture1=document.querySelector(".Culture1");
		var  aLi=oCulture1.querySelectorAll("li");
		var  oCulture1_1=document.querySelector(".Culture1_1");
		var grr=["#198","#464","#754","#198"];
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onclick=function(){
				oCulture1_1.style.width=this.clientWidth+40+"px";
				oCulture1_1.style.left=this.offsetLeft-20+"px";
				oCulture1_1.style.background=grr[this.index];
			}
		}
		var aButton11_1=$(".Button11_1");
		var aCulture6=$(".Culture6");
		
		//简介
		$("document").ready(function(){
			aButton11_1.eq(0).click(function(){
				if(parseInt(aCulture6.eq(0).height())==140)
				{
					$(".Off1").css({"display":"none"})
					aCulture6.eq(0).css("height","60")
					$(this).css("backgroundPosition","0 -20px")
				}
					
				else
				{
					$(".Off1").css({"display":"block"})
					aCulture6.eq(0).css("height","140")
					$(this).css("backgroundPosition","0 0")
				}
			})
		

		//举办方式
			aButton11_1.eq(1).click(function(){
				if(parseInt(aCulture6.eq(1).height())==560)
				{
					$(".Off2").css({"display":"none"});
					aCulture6.eq(1).css("height","60");
					$(this).css("backgroundPosition","0 -20px");
				}
				else
				{
					$(".Off2").css({"display":"block"})
					aCulture6.eq(1).css("height","560")
					$(this).css("backgroundPosition","0 0")
				}
			})
		
		//举办日期
			aButton11_1.eq(2).click(function(){
				if(parseInt(aCulture6.eq(2).height())==140)
				{
					$(".Off3").css({"display":"none"});
					aCulture6.eq(2).css("height","60");
					$(this).css("backgroundPosition","0 -20px");
				}
				else
				{
					$(".Off3").css({"display":"block"})
					aCulture6.eq(2).css("height","140")
					$(this).css("backgroundPosition","0 0")
				}
			})
		
		//文化祭与动漫
			aButton11_1.eq(3).click(function(){
				if(parseInt(aCulture6.eq(3).height())==420)
				{
						$(".Off4").css({"display":"none"});
						aCulture6.eq(3).css("height","60");
						$(this).css("backgroundPosition","0 -20px");
				}
				else
				{
					$(".Off4").css({"display":"block"})
					aCulture6.eq(3).css("height","420")
					$(this).css("backgroundPosition","0 0")
				}
			})

		//文化祭之最
			aButton11_1.eq(4).click(function(){
				if(parseInt(aCulture6.eq(4).height())==360)
				{
						$(".Off5").css({"display":"none"});
						aCulture6.eq(4).css("height","60");
						$(this).css("backgroundPosition","0 -20px");
				}
				else
				{
					$(".Off5").css({"display":"block"})
					aCulture6.eq(4).css("height","360")
					$(this).css("backgroundPosition","0 0")
				}
			})
		
		//最后
			aButton11_1.eq(5).click(function(){
				if(parseInt(aCulture6.eq(5).height())==160)
				{
						$(".Off6").css({"display":"none"});
						aCulture6.eq(5).css("height","60");
						$(this).css("backgroundPosition","0 -20px");
				}
				else
				{
					$(".Off6").css({"display":"block"})
					aCulture6.eq(5).css("height","160")
					$(this).css("backgroundPosition","0 0")
				}
			})
		})
		
		var Corr=["#694FBA","#69A75B","#69A72C","#69252C","#FEA75B","#E5FFDB","#819B08","#AF5A8F","#C1B7E1","red","blue","green"];
		$(".ulL1>li>a").each(function(){
			 $(this).css('fontSize',[Math.round(Math.random()*8+10)]+'px');
			 $(this).css('color',Corr[Math.round(Math.random()*11)]);
		})
		$(".Div4_1_1>ul>li>a").each(function(){
			 $(this).css('fontSize',[Math.floor(Math.random()*8+10)]+'px');
			 $(this).css('color',Corr[Math.round(Math.random()*11)]);
		})
		$(".Div4_1_2>ul>li>a").each(function(){
			 $(this).css('fontSize',[Math.floor(Math.random()*8+10)]+'px');
			 $(this).css('color',Corr[Math.round(Math.random()*11)]);
		})


		//导航条上下收缩
		setInterval(function(){
			if($('body').scrollTop()>0){
				$('.naw').css("top","-120px");
				$(".Photo2").css('top','-60px');
			}else{
				$(".naw").css("top","0");
				$(".Photo2").css('top','120px');
			}
		},50);


		
		

				
		
				

		

		
		
				
				
			
					
				
				
				
				

		

		
			
			
			

			

				
			

		
			
		