$(function(){
		
		$("#selectBtn").on("click",function(){
			
			$(".modal_box").css("display", "block");
			
			
		});
		
		$("#chinesehBtn").on("click",function(){
			
			    var ko = $("body").text();
			    $.ajax({
			        url: "/chinese",
			        type: "GET",
			        dataType: "json",
			        data: { "korean" : ko },
			        success: function(response) {
			        	console.log(response);
			        	var translatedText = response.message.result.translatedText;
			        	$("body").text(translatedText);
			            
			        },
			        error: function(e) {
			            console.log(e);
			        }
			    });


			$("#englishBtn").on("click", function(){
			    var ko = $("body").text();
			    $.ajax({
			        url: "/english",
			        type: "GET",
			        dataType: "json",
			        data: { "korean" : ko },
			        success: function(response) {
			        	console.log(response);
			        	var translatedText = response.message.result.translatedText;
			        	$("body").text(translatedText);
			        },
			        error: function(e) {
			        	
						console.log("에러났음");
			        }
			    });
			});
			
			
		});
		
		
		
		
		
		
	});