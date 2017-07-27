$(function(){
	/*
	*@param opts 配置
	*{
	*	container:"向导容器"
	*	errorWrap:"错误提示信息容器",
	*	progress:"进度条",
	*	duration:"过渡时间"
	*	callback:"每个页面对应的回掉函数"
	*	prevBtn:"上一页按钮"
	*	nextBtn:"下一页按钮"
	*}
	*
	*
	*
	*/
	
	
	//上传图片页面函数
	var uploadFun = {
		init: function(){
		// 	var that = $('.dropzone');
		// 	var error = {

		// 	}
		// 	var tips = {

		// 	}
		// 	//一些事件
		// 	that.on('dragenter',function(e){
		// 		e.stopPropagation();
		// 		e.preventDefault();
		// 		that.addClass('show');
		// 		that.html()
		// 	})
		// 	that.on('dragover',function(e){
		// 		e.stopPropagation();
		// 		e.preventDefault();
		// 	})
		// 	that.on('dragleave',function(e){
		// 		e.stopPropagation();
		// 		e.preventDefault();
		// 		that.removeClass('show');
		// 		that.html('')
		// 	})
		// 	that.on('drop',Fun.drop)
		// 	var uploadImg = function(opts,callback){
		// 	var Fun = {
		// 		drop: function(e){
		// 			e.stopPropagation();
		// 			e.preventDefault();
		// 			that.removeClass('show');
		// 			that.html('')
		// 			//获取文件
		// 			var fileList = e.originalEvent.dataTransfer.files;
		// 			var file = Fun.checkImg(fileList);
		// 			if(file){
		// 				Fun.upload(file)
		// 			}else {
		// 				setTimeout(function(){
		// 					that.removeClass('error');
		// 					that.html('')
		// 				},1500)
		// 			}
		// 		},
		// 		checkImg: function(files){
		// 			var imageType = files[0].type,
		// 				fileSize = files[0].size/1024/1024;
		// 			if(!files){
		// 				that.addClass('error');
		// 				that.html(this.defaultSettings.tips.formatError);
		// 				return false;
		// 			}else if(files.length!=1){
		// 				that.addClass('error');
		// 				that.html(this.defaultSettings.tips.exceedNum);
		// 				return false;
		// 			}else if(!/image\/./.test(imageType)){
		// 				console.log(opts.tips)
		// 				that.addClass('error');
		// 				that.html(this.defaultSettings.tips.formatError);
		// 				return false;
		// 			}else if(fileSize>5){
		// 				that.addClass('error');
		// 				that.html(this.defaultSettings.tips.exceedSize);
		// 				return false;
		// 			}else {
		// 				return files[0];
		// 			}
		// 		},
		// 		upload: function(file){
		// 			var reader = new FileReader();
		// 			reader.readAsDataURL(file);
		// 			reader.onload = function(){
		// 				var data = this.result;
		// 				$.ajax({
		// 					url:'upload',
		// 					type:'post',
		// 					data: data,
		// 					dataType:'json',
		// 					success: function(){

		// 					},
		// 					error: function(){},
		// 					complete: function(){
		// 						var img = $('img');
		// 						img.attr('class','previewImg').attr('src',data);
		// 						$('.image-thumbnail').append(img)
		// 						var timer = setInterval(function(){
		// 							console.log(img.height())
		// 							if(img.height()){
		// 								$('.image-thumbnail').css('height','auto');
		// 								clearInterval(timer)
		// 							}else {
		// 								$('.loading').removeClass('dp-n')
		// 							}
		// 						},200)
								

		// 					}
		// 				})
		// 			}

		// 		}
		// 	}
			
		// }
		},
		checkStatus: function(){

		},
	}
	var panelData = [
		{
			url:'#1',
			title:"上传图片",
			callback:[uploadFun.init,uploadFun.checkStatus]
		},
		{
			url:'#2',
			title:"选择风格",
			callback:[uploadFun.init,uploadFun.checkStatus]
		},{
			url:'#3',
			title:"裁剪图片",
			callback:[uploadFun.init,uploadFun.checkStatus]
		},{
			url:'#4',
			title:"选择主题",
			callback:[uploadFun.init,uploadFun.checkStatus]
		},{
			url:'#5',
			title:"自定义标签",
			callback:[uploadFun.init,uploadFun.checkStatus]
		}
	]
	
	var wizard = function(index){
		//公有有属性
		this.init.apply(this,arguments)
	}
	var panel = {
		init: function(index){//初始化函数
			this.data = panelData[index];
			prevTitle = index==0?'':panelData[index-1].title;
			nextTitle = index==panelData.length-1?'完成':panelData[index+1].title;
			$('.next').text(nextTitle);
			$('.prev').text(prevTitle);
			$('.progress-bar').css('width',(index/panelData.length).toFixed(2)*100+'%')
		},
		checkStatus: function(){//检查页面状态函数
		},
		destory: function(){//页面销毁执行函数

		},
		nextStep: function(){//下一步执行函数
			//检查页面状态
			index++;
			//成功后执行跳转页面,更具url不同重新载入模板
			location.href = this.data.url
			
		},
		prevStep: function(){//上一步执行函数
 			index--;
 			location.href = this.data.url
		}
	}
	wizard.prototype = panel;
	var index = 0;
	var k = new wizard(index);//对模板对象的引用
	$(document).on('click','.next,.prev',function(){
		if($(this).hasClass('next')){
			k.nextStep();
			k = new wizard(index);
		}else {
			k.prevStep()
			k = new wizard(index);
			
		}
	})
	



})