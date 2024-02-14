class Solution {
    public String solution(String my_string, int num1, int num2) {
        if (num1 < 0 || num1 >= my_string.length() || num2 < 0 || num2 >= my_string.length()) {
            return "Invalid indices";
        }

        char[] charArray = my_string.toCharArray();

        char temp = charArray[num1];
        charArray[num1] = charArray[num2];
        charArray[num2] = temp;

        return new String(charArray);
    }
}