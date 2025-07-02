import java.util.*;

class Solution {
    
    private ArrayList<String> list = new ArrayList<>();
    private String[] chars = {"A", "E", "I", "O", "U"};
    
    public int solution(String word) {
        int answer = 0;
        
        dfs("");
        
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).equals(word)) {
                answer = i;
                break;
            }
        }
        
        return answer;
    }
    
    void dfs(String word) {
        list.add(word);
        
        if (word.length() == 5) {
            return;
        }
        
        for (int i = 0; i < 5; i++) {
            dfs(word + chars[i]);
        }
    }
}