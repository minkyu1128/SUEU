package egovframework.iscm.web.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import egovframework.common.utils.tiles.TilesUtil;

@Controller
@RequestMapping(value="/main/")
public class MainController {

	@RequestMapping(value="index.do")
	public String index(){
		return  TilesUtil.tilesUseAt("/egovframework/iscm/web/main/index",true);
	}
	
	
	@RequestMapping(value="sample.do", method={RequestMethod.POST, RequestMethod.GET})
	public String sample(@RequestParam(value="fileName", required=false, defaultValue="")String fileName){
		StringBuffer sb = new StringBuffer();
		sb.append("/egovframework/iscm/web/main/sample/");
		sb.append(fileName);
		return  TilesUtil.tilesUseAt(sb.toString(),true);
	}
}
