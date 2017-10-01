package egovframework.iscm.web.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import egovframework.common.utils.TilesUseAt;

@Controller
@RequestMapping(value="/main/")
public class MainController {

	@RequestMapping(value="index.do")
	public String index(){
		
		return  TilesUseAt.tilesUseAt("/egovframework/iscm/web/main/index",true);
	}
}
