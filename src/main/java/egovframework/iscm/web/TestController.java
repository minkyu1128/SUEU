package egovframework.iscm.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import egovframework.common.utils.TilesUseAt;

@Controller
@RequestMapping(value="/test/")
public class TestController {

	@RequestMapping(value="index.do")
	public String index(){
		
		return  TilesUseAt.tilesUseAt("/egovframework/iscm/web/test",true);
	}
}
