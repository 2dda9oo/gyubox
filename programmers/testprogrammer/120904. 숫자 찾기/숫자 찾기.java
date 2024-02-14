class Solution {
    public int solution(int num, int k) {
        int answer = 0;
        String s = Integer.toString(num);
        String[] strarr = s.split("");
        for(int i = 0; i < strarr.length; i++){
            if(strarr[i].equals(Integer.toString(k))){
                answer = i + 1;
                break;
            }
        }
        if(answer == 0){
            return -1;
        }
        return answer;
    }
}