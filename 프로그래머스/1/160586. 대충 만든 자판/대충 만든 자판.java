import java.util.*;

class Solution {
    
    public int wordChecking(String[] keymap, String word) {
        ArrayList<Integer> countArr = new ArrayList<>();
        
        for(int i = 0; i < keymap.length; i++) {
            int num = 0;
            
            if(keymap[i].contains(word)) {
                num = keymap[i].indexOf(word);
                countArr.add(num + 1);
            }            
        }
        if(countArr.isEmpty()){
            return -1;
        } else {
            return Collections.min(countArr);
        }
    }
    
    
    public int[] solution(String[] keymap, String[] targets) {
        int[] answer = new int[targets.length];
        
        for(int i = 0; i < targets.length; i++) {
            int result = 0;
            
            for(String s : targets[i].split("")) {
                result += wordChecking(keymap, s);
                if(wordChecking(keymap, s) == -1){
                    result = -1;
                    break;
                }
            }
            answer[i] = result;
        }
        
        return answer;
    }
}