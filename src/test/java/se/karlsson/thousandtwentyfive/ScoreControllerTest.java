package se.karlsson.thousandtwentyfive;

import static org.junit.Assert.assertTrue;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import se.karlsson.thousandtwentyfive.controller.ScoreController;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ScoreControllerTest {
    
    @Autowired
    ScoreController scoreController;

    @Test
    @Ignore
    public void calculateScoreFirstTest() {
        int score = scoreController.calculateScore(0, 10);
        assertTrue(15 == score);
    }
    
    @Test
    @Ignore
    public void calculateScoreSecondTest() {
        int score = scoreController.calculateScore(1, 10);
        assertTrue(10 == score);
    }

}
