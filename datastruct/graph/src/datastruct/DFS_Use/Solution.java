package datastruct.DFS_Use;

import java.util.*;

public class Solution {
    static Set<Integer> primeSet = new HashSet<>();
    static boolean[] visited = new boolean[7];

    public static boolean primeCheck(int number) {
        int count = number - 1;

        if(number == 1 || number == 0) {
            return false;
        }
        while(count > 1) {
            if(number % count == 0) {
                return false;
            }
            count--;
        }
        return true;
    }

    public static void DFS_find(String numbers, String s, int count) {

        if(count > numbers.length()) {
            return;
        }

        for(int i = 0; i < numbers.length(); i++) {
            if(!visited[i]) {
                visited[i] = true;
                primeSet.add(Integer.parseInt(s + numbers.charAt(i)));
                DFS_find(numbers, s + numbers.charAt(i), count + 1);
                visited[i] = false;
            }
        }
    }

    public static int solution(String numbers) {
        int answer = 0;

        DFS_find(numbers, "", 0);
        for(Integer n : primeSet) {
            if(primeCheck(n)) {
                System.out.println(n);
                answer++;
            }
        }

        return answer;
    }

    public static void main(String[] args) {
        String numbers = "011";
        System.out.println(solution(numbers));
    }
}
