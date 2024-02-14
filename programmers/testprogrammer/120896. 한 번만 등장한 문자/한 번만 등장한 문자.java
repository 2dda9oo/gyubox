import java.util.*;

class Solution {
    public String solution(String s) {
        String answer = "";
        String[] strarr = s.split("");
        
        Arrays.sort(strarr);
        for(int i = 0; i < strarr.length; i++){
            int count = 0;
            for(int j = 0; j < strarr.length; j++){
                if(strarr[i].equals(strarr[j])){
                    count++;
                }
            } if(count == 1){
                answer += strarr[i]; 
            }
        }
        return answer;
    }
}