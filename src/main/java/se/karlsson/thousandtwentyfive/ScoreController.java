package se.karlsson.thousandtwentyfive;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScoreController {
	
	@Resource
	ReadScore readScore;

	@RequestMapping(value="/score/{key}/{position}", method=RequestMethod.GET, produces="application/json")
    public int calculateScore(@PathVariable Integer position, @PathVariable Integer key) {
    	return readScore.calculateScore(position, key);
    }

}
