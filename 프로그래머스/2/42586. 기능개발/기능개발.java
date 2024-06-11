import java.util.*;

class Solution {
    
    public ArrayList<Integer> solution(int[] progresses, int[] speeds) {
        ArrayList<Integer> answer = new ArrayList<>();
        boolean complete[] = new boolean[progresses.length];
        int n = 0;  // Day count
        
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < progresses.length; i++) {
            q.add(i);
        }
        
        while (!q.isEmpty()) {
            n++;
            
            for (int i = 0; i < progresses.length; i++) {
                if (!complete[i]) {
                    progresses[i] += speeds[i];
                    if (progresses[i] >= 100) {
                        complete[i] = true;
                    }
                }
            }
            
            int count = 0;
            while (!q.isEmpty() && complete[q.peek()]) {
                q.poll();
                count++;
            }
            if (count > 0) {
                answer.add(count);
            }
        }
        
        return answer;
    }
}