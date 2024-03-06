import java.util.*;

public class Solution {
    
    public int[] solution(int []arr) {
        
        ArrayList<Integer> stackArr = new ArrayList<>();
        int count = 0;
        for(int i = 0; i < arr.length; i++) {
            if(stackArr.isEmpty()){
                stackArr.add(arr[0]);
            } else {
                if(stackArr.get(count) != arr[i]){
                    stackArr.add(arr[i]);
                    count++;
                }
            }
        }
        
        int[] answer = new int[stackArr.size()];
        
        for(int i = 0; i < stackArr.size(); i++){
            answer[i] = stackArr.get(i);
        }
        
      

        return answer;
    }
}