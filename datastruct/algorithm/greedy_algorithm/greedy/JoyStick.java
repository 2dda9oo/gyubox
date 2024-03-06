
import java.util.*;

public class JoyStick {

    private String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private int lastIdx = 25;
    private int firstIdx = 0;

    public int upDirection(char start, char goal){
        int subDistance = 0;
        int sNum = alphabet.indexOf(start);
        int gNum = alphabet.indexOf(goal);

        if(sNum < gNum){
            subDistance = gNum - sNum;
        } else if(sNum > gNum){
            subDistance += (lastIdx - sNum + 1);
            subDistance += (gNum - firstIdx + 1);
        }

        return subDistance;
    }

    public int downDirection(char start, char goal){
        int subDistance = 0;
        int sNum = alphabet.indexOf(start);
        int gNum = alphabet.indexOf(goal);

        if(sNum < gNum){
            subDistance += (sNum - firstIdx + 1);
            subDistance += (lastIdx - gNum + 1);
        } else if(sNum > gNum) {
            subDistance += (sNum - gNum);
        }

        return subDistance;
    }

    public int leftDirection(char goal){
        char startChar = 'A';

        int distance1 = upDirection(startChar, goal) + 1;
        int distance2 = downDirection(startChar, goal) + 1;

        return Math.min(distance1, distance2);
    }

    public int rightDirection(char goal){
        char startChar = 'Z';

        int distance1 = upDirection(startChar, goal) + 1;
        int distance2 = downDirection(startChar, goal) + 1;

        return Math.min(distance1, distance2);
    }

    public int solution(String name){
        int answer = 0;
        char startIdx = 'A';

        for(String s : name.split("")){
            char c = s.charAt(0);
            int[] arr = new int[4];
            arr[0] = upDirection(startIdx, c);
            arr[1] = downDirection(startIdx, c);
            arr[2] = leftDirection(c);
            arr[3] = rightDirection(c);

            answer += Arrays.stream(arr).min().getAsInt();
            startIdx = c;
        }
        return answer;
    }

    public static void main(String[] args) {
        JoyStick joyStick = new JoyStick();
        int result = joyStick.solution("JEROEN");
        System.out.println(result);
    }
}
