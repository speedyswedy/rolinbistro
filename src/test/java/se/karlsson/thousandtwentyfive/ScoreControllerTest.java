package se.karlsson.thousandtwentyfive;

import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ScoreControllerTest {
    
    @Autowired
    ScoreController scoreController;

    @Test
    public void calculateScoreFirstTest() {
        int score = scoreController.calculateScore(0, 10);
        assertTrue(15 == score);
    }
    
    @Test
    public void calculateScoreSecondTest() {
        int score = scoreController.calculateScore(1, 10);
        assertTrue(10 == score);
    }

}
