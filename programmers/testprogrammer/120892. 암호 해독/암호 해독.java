class Solution {
    public String solution(String cipher, int code) {
        String answer = "";
        String[] sarr = cipher.split("");
        for(int i = code - 1; i < sarr.length; i += code){
            answer += sarr[i];
        }
        return answer;
    }
}