import java.util.*;

class Solution {
    public ArrayList<Integer> solution(String today, String[] terms, String[] privacies) {
        ArrayList<Integer> answer = new ArrayList<>();

        HashMap<String, Integer> tmap = new HashMap<>();

        for(int i = 0; i < terms.length; i++) {
            String a = "";
            int b = 0;
            int count = 0;

            for(String t : terms[i].split(" ")) {
                if(count == 0) {
                    a += t;
                    count++;
                } else {
                    b += Integer.parseInt(t);
                }
            }
            tmap.put(a, b);
        }

        for(int i = 0; i < privacies.length; i++) {
            String a = "";
            String b = "";
            int count = 0;

            for(String p : privacies[i].split(" ")) {
                if(count == 0) {
                    b += p;
                    count++;
                } else {
                    a += p;
                }
            }

            int num = tmap.get(a) * 28 - 1;
            System.out.println("총 계약 일수 : " + num);
            int constract = dateSub(today, b);

            if(num >= constract) {
                continue;
            } else {
                answer.add(i + 1);
            }
        }
        return answer;
    }

    public int dateSub(String today, String privacies) {
        int[] todayArr = new int[3];
        int[] priArr = new int[3];
        int count = 0;

        for(String t : today.split("[.]")) {
            if(count == 0) {
                todayArr[count] = Integer.parseInt(t);
                count++;
            } else if(count == 1) {
                todayArr[count] = Integer.parseInt(t);
                count++;
            } else {
                todayArr[count] = Integer.parseInt(t);
            }
        }
        count = 0;

        for(String p : privacies.split("\\.")) {
            if(count == 0) {
                priArr[count] = Integer.parseInt(p);
                count++;
            } else if(count == 1) {
                priArr[count] = Integer.parseInt(p);
                count++;
            } else {
                priArr[count] = Integer.parseInt(p);
            }
        }

        int sumConstract = 0;
        sumConstract += ((todayArr[0] - priArr[0]) * 28 * 12);

        if(todayArr[1] >= priArr[1]) {  // 월 기준으로 차이가 12개월 이상일 때
            sumConstract += ((todayArr[1] - priArr[1]) * 28);
        } else {   // 월 기준으로 차이가 12개월 미만일 때
            sumConstract -= (12 * 28);
            sumConstract += (((todayArr[1] + 12) - priArr[1]) * 28);
        }

        if(todayArr[2] >= priArr[2]) {
            sumConstract += (todayArr[2] - priArr[2]);
        } else {
            sumConstract -= 28;
            sumConstract += ((todayArr[2] + 28) - priArr[2]);
        }
        System.out.println(sumConstract);

        return sumConstract;
    }
}