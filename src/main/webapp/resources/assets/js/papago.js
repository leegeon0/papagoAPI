$(function() {
	
	/*
     $("#chineseButton").on("click", function(){
         var ko = $("#korean").val();
         $.ajax({
             url: "/chinese",
             type: "GET",
             dataType: "json",
             data: { korean: ko },
             success: function(response) {
            	 console.log(response); // 서버 응답을 콘솔에 출력하여 확인

                var jsonResponse = JSON.parse(response.responseText);
                var translatedText = jsonResponse.message.result.translatedText;
                console.log(translatedText); // 번역 결과 값을 콘솔에 출력하여 확인

                // 번역된 결과를 해당 요소에 표시
                $("#chinaResult").text(translatedText);
             },
             error: function(e) {
                 console.log(e);
             }
         });
     });

     $("#englishButton").on("click", function(){
         var ko = $("#korean").val();
         $.ajax({
             url: "/english",
             type: "GET",
             dataType: "json",
             data: { korean: ko },
             success: function(response) {
                 console.log(response); // 서버 응답을 콘솔에 출력하여 확인

                 var jsonResponse = JSON.parse(response.responseText);
                 var translatedText = jsonResponse.message.result.translatedText;
                 console.log(translatedText); // 번역 결과 값을 콘솔에 출력하여 확인
                 
                 // 또는
                 $("#englishResult").text(translatedText); // 영어 번역 결과
             },
             error: function(e) {
                 console.log(e);
             }
         });
     });
     */
	
	
	$("#chineseButton").on("click", function(){
    var ko = $("#korean").val();
    $.ajax({
        url: "/chinese",
        type: "GET",
        dataType: "json",
        data: { "korean" : ko },
        success: function(response) {
             console.log(response); // 서버 응답을 콘솔에 출력하여 확인
            $("#chinaApi").text(response.message.result);
            var translatedText = response.message.result.translatedText;
            console.log(translatedText); // 번역 결과 값을 콘솔에 출력하여 확인
            
            // 번역된 결과를 해당 요소에 표시
            $("#chinaResult").text(translatedText);
        },
        error: function(e) {
            console.log(e);
        }
    });
});

$("#englishButton").on("click", function(){
    var ko = $("#korean").val();
    $.ajax({
        url: "/english",
        type: "GET",
        dataType: "json",
        data: { "korean" : ko },
        success: function(response) {
			
            $("#englishApi").text(response);
            var translatedText = response.message.result.translatedText;
//            console.log(translatedText); // 번역 결과 값을 콘솔에 출력하여 확인
            $("#englishResult").text(translatedText); // 영어 번역 결과 표시
        },
        error: function(e) {
//            console.log(e);
			console.log("asdfasdf");
        }
    });
});

     
     
 });