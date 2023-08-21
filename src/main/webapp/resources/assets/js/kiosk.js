$(document).ready(function() {
    // $(".numberPad").click(function() {
    //   var number = $(this).text();
    //   var phoneNumberInput = $("#phoneNumber");
    //   phoneNumberInput.val(phoneNumberInput.val() + number);
    // });


  
    $(".cencel").click(function() {
      $("#phoneNumber").val("010-"); // 입력 필드 값을 초기화합니다.
    });
  
    $(".enter").click(function() {
      $("form").submit(); // 폼을 제출합니다.
    });
  });
  

$(document).ready(function() {
  $("#eatBtn").on("click", function() {
    showReceiptModal('매장');
    location.href ="/order";
    /*location.href ="/receipt.html?message=매장식사"*/
  });

  $("#takeoutBtn").on("click", function() {
    showReceiptModal('포장');
    location.href ="/order";
  });

  function showReceiptModal(message) {
    $("#receiptMessage").text(message);
    $("#receiptModal").show();
  }

  // 모달 창을 닫기 위한 함수
  function closeReceiptModal() {
    $("#receiptModal").hide();
  }
});

$(document).ready(function() {
  // URL 매개변수에서 메시지를 가져옵니다.
  var urlParams = new URLSearchParams(window.location.search);
  var message = urlParams.get('message');

  // 메시지를 모달 창에 표시합니다.
  if (message) {
    $("#receiptMessage").text(message);
    $("#receiptModal").show();
  }
});







  