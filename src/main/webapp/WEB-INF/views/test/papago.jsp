<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="rb" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>테스트</title>
</head>
<body>

<h1>성공이다!!!!</h1>
<table border="1">
    <thead>
        <tr>
            <th>한국어</th>
            <th>중국어</th>
            <th>영어</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="text" id="korean" name="korean"></td>
            <td width="200" height="30" id="chinaResult"></td>
            <td width="200" height="30" id="englishResult"></td>
        </tr>
        <tr>
            <td>api요청</td>
            <td width="200" height="30" id="chinaApi"></td>
            <td width="200" height="30" id="englishApi"></td>
        </tr>
    </tbody>
</table>
<input type="button" id="chineseButton" value="중국어">
<input type="button" id="englishButton" value="영어">

<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<!--   <script src="/resources/assets/js/jquery-3.6.4.min.js"></script> -->
  <script src="/resources/assets/js/papago.js"></script>
  
<!--   
 <script>
 $(function() {
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
                 $("#chinaResult").text(translatedText); // 영어 번역 결과
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
 });
</script> 
 -->
</body>
</html>