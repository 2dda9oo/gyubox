class Solution {
    public int solution(String[] s1, String[] s2) {
        int answer = 0;
        for(int i = 0; i < s1.length; i++){
            String c1 = s1[i];
            for(int j = 0; j < s2.length; j++){
                String c2 = s2[j];
                if(c1.equals(c2)){
                    answer++;
                }
            }
        }
        return answer;
    }
}