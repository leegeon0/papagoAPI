$(function(){

/*
  $(document).ready(function() {
    $("#sign_in").on("click",function(event) {
      event.preventDefault(); // 폼 제출 동작을 막음
  
      var id = $("#id").val(); // 아이디 입력란의 값을 가져옴
  
      // 로그인 처리 로직을 추가할 수 있습니다.
      // 예를 들면, 아이디와 비밀번호를 검증하는 코드 등이 올 수 있습니다.
  
      // 이후에 index2.html로 이동합니다.
      window.location.href = "indexUserView?=" + id;
  
  
    });
    
  });
*/
  
  
  
  
  
  
  
    $(document).ready(function() {
      var params = new URLSearchParams(window.location.search);
      var id = params.get("id");
      
      if (id) {
        // 아이디 값을 보여줍니다.
        $("#id").text(id);
      }
  
      updateCurrentDateTime();
  
      function updateCurrentDateTime() {
          var currentDateTimeElement = $("#currentDateTime");
    
          setInterval(function() {
            var now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
            var date = now.getDate();
            var day = now.getDay(); // 요일을 가져옵니다.
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();
    
            var dayNames = ['일', '월', '화', '수', '목', '금', '토'];
            var formattedDateTime = year + ". " + month + ". " + date + " " +"<span class='day'>["+ dayNames[day] + "]</span> "+ hours + ":" + minutes + ":" + seconds;
    
            currentDateTimeElement.html(formattedDateTime);
          }, 500); // 0.5초마다 시간을 업데이트합니다.
        }
      
    });
    
    
  
  
  $(document).ready(function() {
      // 로그아웃 버튼 클릭 이벤트 핸들러
      $('.logout_btn').click(function() {
          window.postMessage('logout', '*'); // 현재 창으로 메시지 보내기
      });
  });
  
  window.addEventListener('message', function(event) {
      if (event.data === 'logout') {
          window.location.href = "index.html"; // 이전 페이지로 이동
      }
  });



$('.inventory_manager_btn').click(function(){

  alert("미구현");

});
$('.sales_status_btn').click(function(){

  alert("미구현");

});
$('.preferences_btn').click(function(){

  alert("미구현");

});




// 판매관리 탭 선택시 이동
$(document).ready(function() {
  $('.main_page_menu_btn').click(function() {
    window.location.href = "indexUserTable";
  });
});




$(document).ready(function() {
  // 버튼 클릭 이벤트 핸들러
  $('.close_btn').click(function() {
    var targetPage = '';

    if ($(this).hasClass('button_index2')) {
      targetPage = 'index2.html';
    } else if ($(this).hasClass('button_index3')) {
      targetPage = 'index3.html';
    }

    if (targetPage !== '') {
      window.location.href = targetPage; // 이동할 페이지로 이동
    }
  });
});




$(document).ready(function () {
  // 테이블 번호 클릭 시 이벤트 처리
  $(".pos2_table").click(function () {
    var tableNumber = $(this).find(".table_header").text().trim(); // 선택한 테이블 번호 가져오기
    localStorage.setItem("tableNumber", tableNumber); // localStorage에 테이블 번호 저장
    window.location.href = "index4.html"; // index4.html로 이동
  });
});


$(document).ready(function () {
  var tableNumber = localStorage.getItem("tableNumber"); // localStorage에서 테이블 번호 가져오기
  $("#tableNumber").text("테이블번호 : " + tableNumber); // 가져온 번호를 표시
});


$(document).ready(function() {
  // 주문 버튼 클릭 이벤트 핸들러
  $(".orderButton").click(function() {
    var menuName = $(this).closest(".card-body").find(".card-title").text(); // 메뉴 이름 가져오기
    var price = $(this).closest(".card-body").find(".card-text").text(); // 가격 가져오기
    
    // 기존에 추가된 행인지 확인
    var existingRow = $(".table").find("td:contains('" + menuName + "')").closest("tr");
    
    if (existingRow.length > 0) {
      // 이미 추가된 행이 있는 경우, 수량과 총 금액을 변경
      var quantityCell = existingRow.find("td:eq(2)"); // 수량 셀
      var totalCell = existingRow.find("td:eq(4)"); // 총 금액 셀
      
      var quantity = parseInt(quantityCell.text()) + 1; // 현재 수량에 1을 더함
      var total = parseInt(price.replace(/[^0-9]/g, "")) * quantity; // 가격과 수량을 곱하여 총 금액 계산
      
      // 변경된 수량과 총 금액을 셀에 반영
      quantityCell.text(quantity);
      totalCell.text(total.toLocaleString()); // 숫자를 천 단위로 콤마(,)로 구분하여 표시
    } else {
      // 새로운 행을 생성하여 변수에 저장
      var newRow = $("<tr>");
      
      // 체크박스 열 생성
      var checkboxCell = $("<th>").attr("scope", "row").append('<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></div>');
      newRow.append(checkboxCell);
      
      // 각 셀 생성
      var cells = [
        $("<td>").text(menuName), // 메뉴 이름
        $("<td>").text(price), // 가격
        $("<td>").text("1"), // 수량 (기본값 1로 설정)
        $("<td>").text(""), // 할인
        $("<td>").text(price), // 총금액 (가격과 동일하게 설정)
        $("<td>").text("") // 비고
      ];
      
      // 행에 셀 추가
      for (var i = 0; i < cells.length; i++) {
        newRow.append(cells[i]);
      }
      
      // 테이블에 새로운 행 추가
      $(".table").append(newRow);
    }
  });
});


$(document).ready(function() {
  // 주문 가져오기 버튼 클릭 이벤트 핸들러
  $("#last_order").click(function() {
    // 주문 테이블에서 모든 행 데이터 가져오기
    var rows = $("#orderTable tbody tr");
    var orderDetails = [];


    rows.each(function() {
      var menuName = $(this).find("td:nth-child(2)").text();
      var quantity = $(this).find("td:nth-child(4)").text();
      var totalAmount = $(this).find("td:nth-child(6)").text();
      orderDetails.push([menuName, quantity, totalAmount]);
    });

    // 데이터를 localStorage에 저장
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    // index3.html로 이동
    window.location.href = "index3.html";
  });
});

$(document).ready(function() {
  // localStorage에서 데이터 가져와서 요소에 채우기
  var orderDetails = JSON.parse(localStorage.getItem("orderDetails"));

  if (orderDetails && orderDetails.length > 0) {
    for (var i = 0; i < orderDetails.length; i++) {
      var menuName = orderDetails[i][0];
      var quantity = orderDetails[i][1];
      var totalAmount = orderDetails[i][2];

      var row = $("<tr>");
      row.append($("<td>").text(menuName));
      row.append($("<td>").text(quantity));
      row.append($("<td>").text(totalAmount));

      $("#Table1").append(row);
    }
  }
});



// $(document).ready(function() {
//   // localStorage에서 데이터 가져와서 요소에 채우기
//   var orderDetails1 = JSON.parse(localStorage.getItem("orderDetails"));
//   var orderDetails2 = JSON.parse(localStorage.getItem("orderDetails"));

//   if (orderDetails1 && orderDetails1.length > 0) {
//     for (var i = 0; i < orderDetails1.length; i++) {
//       var menuName = orderDetails1[i][0];
//       var quantity = orderDetails1[i][1];
//       var totalAmount = orderDetails1[i][2];

//       var row = $("<tr>");
//       row.append($("<td>").text(menuName));
//       row.append($("<td>").text(quantity));
//       row.append($("<td>").text(totalAmount));

//       $("#orderTable1").append(row);
//     }
//   }

//   if (orderDetails2 && orderDetails2.length > 0) {
//     for (var i = 0; i < orderDetails2.length; i++) {
//       var menuName = orderDetails2[i][0];
//       var quantity = orderDetails2[i][1];
//       var totalAmount = orderDetails2[i][2];

//       var row = $("<tr>");
//       row.append($("<td>").text(menuName));
//       row.append($("<td>").text(quantity));
//       row.append($("<td>").text(totalAmount));

//       $("#orderTable2").append(row);
//     }
//   }
// });

// $(document).ready(function() {
//   // 주문 가져오기 버튼 클릭 이벤트 핸들러
//   $("#last_order").click(function() {
//     // 주문 테이블에서 모든 행 데이터 가져오기
//     var rows1 = $("#orderTable1 tbody tr");
//     var rows2 = $("#orderTable2 tbody tr");
//     var orderDetails1 = [];
//     var orderDetails2 = [];

//     rows1.each(function() {
//       var menuName = $(this).find("td:nth-child(2)").text();
//       var quantity = $(this).find("td:nth-child(4)").text();
//       var totalAmount = $(this).find("td:nth-child(3)").text();
//       orderDetails1.push([menuName, quantity, totalAmount]);
//     });

//     rows2.each(function() {
//       var menuName = $(this).find("td:nth-child(2)").text();
//       var quantity = $(this).find("td:nth-child(4)").text();
//       var totalAmount = $(this).find("td:nth-child(3)").text();
//       orderDetails2.push([menuName, quantity, totalAmount]);
//     });

//     // 데이터를 localStorage에 저장
//     localStorage.setItem("orderDetails1", JSON.stringify(orderDetails1));
//     localStorage.setItem("orderDetails2", JSON.stringify(orderDetails2));

//     // index3.html로 이동
//     window.location.href = "index3.html";
//   });
// });








});
