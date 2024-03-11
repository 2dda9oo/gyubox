import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = n;
        HashMap<Integer, Integer> map = new HashMap<>();
        List<Integer> lostList = Arrays.stream(lost).boxed().collect(Collectors.toList());
        List<Integer> reserveList = Arrays.stream(reserve).boxed().collect(Collectors.toList());


        for (int i = 1; i <= n; i++) {
            if (reserveList.contains(i) && lostList.contains(i)) {
                map.put(i, 1);
            } else if (lostList.contains(i)) {
                map.put(i, 0);
            } else if (reserveList.contains(i)) {
                map.put(i, 2);
            } else {
                map.put(i, 1);
            }
        }
        
        for(int i = 1; i <= n; i++) {
            if (map.get(i) == 0) {
                if (i > 1 && map.get(i - 1) == 2) {
                    map.put(i - 1, 1);
                    map.put(i, 1);
                } else if (i < n && map.get(i + 1) == 2) {
                    map.put(i, 1);
                    map.put(i + 1, 1);
                } else {
                    answer--;
                }
            }
        }
        
        return answer;
    }
}