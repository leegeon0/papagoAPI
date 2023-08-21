package com.papagoAPI.app.infra.index;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
@Controller
public class PapagoController {
	
	@Autowired
	PapagoServiceImpl papagoService;
	
	@RequestMapping(value="/papagoApi")
	public String apiTest() {
		
		return "test/papagoApi";
	}
	
	
	
	@RequestMapping(value="/")
	public String test() {
		
		return "test/papago";
	}
	
	@RequestMapping(value="/test2")
	public String test2(Model model) {
		String test = papagoService.test();
		model.addAttribute("message", test);
		return "test/papago";
	}
	
	@RequestMapping("/test3")
	public String test3(@RequestParam(value = "korean", defaultValue = "-")String korean,
						Model model) {		
		PapagoDto dd = new PapagoDto();
		dd.setKorean(korean);
		String china = papagoService.getChinese(dd);
		String english = papagoService.getEnglish(dd); // 서비스에서 일을 진행 할 예정
		model.addAttribute("china", china);
		model.addAttribute("english", english);
		
		return "test/papago";
	}
	
//	
//	@RequestMapping("/chinese")
//	@ResponseBody
//	public Map<String, String> Chinese(@RequestParam(value = "korean", defaultValue = "-") String korean, Model model) throws Exception {
//	    PapagoDto dd = new PapagoDto();
//	    dd.setKorean(korean);        
//	    String china = papagoService.getChinese(dd);
//	    
//	    Map<String, String> response = new HashMap<>();
//	    response.put("china", china);
//	    return response;
//	}
//
//	@RequestMapping("/english")
//	@ResponseBody
//	public Map<String, String> English(@RequestParam(value = "korean", defaultValue = "-") String korean) throws Exception {
//	    PapagoDto dd = new PapagoDto();
//	    dd.setKorean(korean);        
//	    String english = papagoService.getEnglish(dd);
//	    
//	    Map<String, String> response = new HashMap<>();
//	    response.put("english", english);
//	    return response;
//	}

	
	
	
	
	@RequestMapping("/chinese")
	@ResponseBody
	public String Chinese(@RequestParam(value = "korean", defaultValue = "-")String korean,
									Model model) throws Exception{		
		PapagoDto dd = new PapagoDto();
		dd.setKorean(korean);		
		System.out.println(korean);
		String china = papagoService.getChinese(dd);
		System.out.println(china);
		return china;
	}
	
	@RequestMapping("/english")
	@ResponseBody
	public String English(@RequestParam(value = "korean", defaultValue = "-")String korean,
									Model model) throws Exception{		
		PapagoDto dd = new PapagoDto();
		dd.setKorean(korean);		
		System.out.println(korean);
		String english = papagoService.getEnglish(dd);
		System.out.println("here2");
		System.out.println("english: " + english);
		

		
		return english;
	}
	
	
}
