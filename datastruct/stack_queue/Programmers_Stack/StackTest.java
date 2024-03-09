
import java.util.*;


class Solution {
    boolean solution(String s) {

        Stack<String> stack = new Stack<>();

        for(String c : s.split("")){
            if(c.equals("(")){
                stack.push(c);
            } else {
                if(stack.isEmpty()){
                    return false;
                }
                stack.pop();
            }
        }
        return stack.isEmpty();
    }
}

public class StackTest {

    public static void main(String[] args) {
        String s1 = "()()";
        String s2 = "(()()()";
        Solution sol = new Solution();
        System.out.println(sol.solution(s1) ? "true" : "false");
        System.out.println(sol.solution(s2) ? "true" : "false");
    }
}
