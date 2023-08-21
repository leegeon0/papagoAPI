package com.papagoAPI.app.infra.index;

import lombok.Data;


@Data

 public class PapagoDto{

	
	private String korean;

	public String getKorean() {
		return korean;
	}

	public void setKorean(String korean) {
		this.korean = korean;
	}
}
