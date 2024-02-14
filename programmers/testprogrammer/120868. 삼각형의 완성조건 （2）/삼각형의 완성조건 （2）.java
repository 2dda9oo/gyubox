class Solution {
    public int solution(int[] sides) {
        int answer = 0;
        answer = (sides[0] + sides[1] - 1) - Math.abs(sides[0] - sides[1]);
        return answer;
    }
}