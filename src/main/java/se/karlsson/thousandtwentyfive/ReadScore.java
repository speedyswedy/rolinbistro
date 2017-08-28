package se.karlsson.thousandtwentyfive;

import java.io.IOException;
import java.util.Properties;

import org.springframework.stereotype.Service;

@Service
public class ReadScore {

    Properties prop = new Properties();
    final int START = 0;
    final int END = 5;

    public ReadScore() {
        try {
            
            prop.load(App.class.getClassLoader().getResourceAsStream("config.properties"));

        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    private int readBonus(int key) {
        return Integer.parseInt(prop.getProperty(String.valueOf(key)));
    }
    
    public int calculateScore(int position, int key) {
        if (START == position || END == position) {
            return key + readBonus(key);
        }
        return key;
    }
}
