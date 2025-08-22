import java.util.*;

class Solution {
    public int solution(int n, int k, int[] enemy) {
        int answer = 0;
        
        Queue<Integer> qu = new PriorityQueue<>(Collections.reverseOrder());
        for(int num : enemy) {
            qu.add(num);
            n -= num;
            
            if(n < 0) {
                while(!qu.isEmpty()) {
                    if(k > 0) {
                        n += qu.poll();
                        k--;
                    } else {
                        break;
                    }
                    
                    if(n >= 0) {
                        break;
                    }
                }
                
                if(n < 0) {
                    return answer;
                }
            }
            answer++;
        }
        
        return enemy.length;
    }
}