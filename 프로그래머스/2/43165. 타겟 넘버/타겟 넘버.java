import java.util.*;

class Solution {
    int answer = 0;
    
    public int solution(int[] numbers, int target) {
        
        DFS_find(numbers, 0, target, 0);
        
        return answer;
    }
    
    public void DFS_find(int[] numbers, int depth, int target, int sum) {
        
        if(depth == numbers.length) {
            if(target == sum) {
                answer++;
            }
            return; // depth가 끝까지 진행됐으면 재귀 호출을 종료한다
    
        }
        
        DFS_find(numbers, depth + 1, target, sum + numbers[depth]);
        DFS_find(numbers, depth + 1, target, sum - numbers[depth]);
    }
}