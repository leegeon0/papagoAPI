<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="rb" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example</title>
</head>
  <body>
    <!-- comments -->
    <ul class="comment_container">
      <!-- comment -->
      <li class="comment_item_wrapper">
        <div class="user_info">
          <span class="nickname">user1</span>
        </div>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            nostrum in earum minus voluptates nobis fugiat rerum totam illum
            ipsum.
          </p>
        </div>
      </li>
      <!-- comment -->

      <!-- comment -->
      <li class="comment_item_wrapper">
        <div class="user_info">
          <span class="nickname">user2</span>
        </div>
        <div class="content">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
      <!-- comment -->

      <!-- comment -->
      <li class="comment_item_wrapper">
        <div class="user_info">
          <span class="nickname">user3</span>
        </div>
        <div class="content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex tempora
            ipsa iusto temporibus consectetur. Libero sequi consequatur
            quibusdam dignissimos totam, praesentium harum dolor nisi
            repudiandae in error tempora incidunt aperiam.
          </p>
        </div>
      </li>
      <!-- comment -->

      <!-- comment -->
      <li class="comment_item_wrapper">
        <div class="user_info">
          <span class="nickname">user4</span>
        </div>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            nostrum in earum minus voluptates nobis fugiat rerum totam illum
            ipsum.
          </p>
          <br />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
      <!-- comment -->
    </ul>
    <!-- comments -->
<script src="//cdn.conveythis.com/javascript/conveythis-initializer.js"></script>

    <!-- ConveyThis: https://www.conveythis.com/   -->
    	
    	<script type="text/javascript">
    		document.addEventListener("DOMContentLoaded", function(e) {
    			ConveyThis_Initializer.init({
    				api_key: "pub_171485e0cae0019c259efa996490cc22"
    			});
    		});
    	</script>
  </body>
</html>