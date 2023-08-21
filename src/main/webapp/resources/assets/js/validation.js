
	check = function(obj){
		
		myRe = /^[a-zA-Z0-9\uAC00-\uD7A3_/-]{2,10}$/;
		
		if(myRe.test($.trim(obj.val())) == false){
			console.log("Validation failed:", obj.val());
			alert("공백없는 숫자와 대소문자만 입력 가능합니다.");
			obj.focus();
			return false;
		}else{
			console.log("Validation Suc:", obj.val());
			return true;
			//by pass
		} 

	}
	
	
/*	
	check = function(param){
		
		myRe = /^[a-z0-9_-]{2,10}$/;
		
		if(myRe.test($.trim(param)) == false){
			alert("공백없는 숫자와 대소문자만 입력 가능합니다.");
			$("#nameFull").focus();
			return false;	
		}else{
		// by pass
		} 
		
		
	}
*/