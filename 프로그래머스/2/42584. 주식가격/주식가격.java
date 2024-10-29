import java.util.*;

class Solution {
    public int[] solution(int[] prices) {
        int[] answer = new int[prices.length];
        
        for(int i = 0; i < prices.length; i++) {
            answer[i] = trace(prices, i);
        }
        
        return answer;
    }
    
    public int trace(int[] prices, int idx) {
        int count = 0;
        int num = prices[idx];
        
        for (int i = idx + 1; i < prices.length; i++) {
            count++;
            if (prices[i] < num) {
                break;
            }               
        }
            
        return count;
    }
}