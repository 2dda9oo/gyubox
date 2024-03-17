import java.util.*;

class Solution {
    private ArrayList<Integer> yellos = new ArrayList<>();
    
    public void setDivisor(int number) {
        int root = (int)Math.sqrt(number);
        for(int i = 1; i <= root; i++) {
            if(number % i == 0) {
                yellos.add(i);
            }
        }
    }
    
    public boolean findLug(int brown, int a, int b) {
        int line = (a * 2) + (b * 2) + 4;
        if(brown == line) {
            return true;
        } else if (brown > line){
            int num = brown - line;
            boolean result = findLug(num, a + 2, b + 2);
            return result;
        } else {
            return false;
        }
    }
    
    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        setDivisor(yellow);
        
        for(int i = 0; i < yellos.size(); i++) {
            int a = yellos.get(i);
            int b = yellow / yellos.get(i);
            
            if(findLug(brown, a, b)) {
                answer[0] = b + 2;
                answer[1] = a + 2;
            }
        }
        
        return answer;
    }
}