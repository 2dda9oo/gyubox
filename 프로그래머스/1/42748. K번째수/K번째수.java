import java.util.ArrayList;
import java.util.Collections;

class Solution {
    ArrayList<Integer> solution(int[] array, int[][] commands) {
            ArrayList<Integer> answer = new ArrayList<>();


            for(int i = 0; i < commands.length; i++) {
                int start = commands[i][0];
                int last = commands[i][1];
                int k = commands[i][2];

                ArrayList<Integer> arr = new ArrayList<>();

                for(int j = start - 1; j < last; j++) {
                    arr.add(array[j]);
                }

                Collections.sort(arr);
                answer.add(arr.get(k - 1));
            }
            return answer;
        }
}