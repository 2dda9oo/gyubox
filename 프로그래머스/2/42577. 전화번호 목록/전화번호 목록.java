import java.util.*;

class Solution {
    static int countNum;
    static HashMap<String, Integer> hash = new HashMap<>();
    
    public static boolean solution(String[] phone_book) {

        for(int i = 0; i < phone_book.length; i++) {
            hash.put(phone_book[i], i + 1);
        }

        for(int i = 0; i < phone_book.length; i++) {

            for(int j = 0; j < phone_book[i].length(); j++) {
                if(hash.containsKey(phone_book[i].substring(0, j))) {
                    return false;
                }
            }
        }
        return true;
    }
}