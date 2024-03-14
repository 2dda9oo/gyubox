import java.util.*;

class Solution {
    public List<Integer> solution(int[] answers) {
        List<Integer> answer = new ArrayList<>();
        int max = 0;
        
        String s1 = "12345";
        String s2 = "21232425";
        String s3 = "3311224455";
        
        int[] countAnswer = new int[3];
        countAnswer[0] = checkAnswer(answers, s1);
        System.out.println(countAnswer[0]);
        countAnswer[1] = checkAnswer(answers, s2);
        System.out.println(countAnswer[1]);
        countAnswer[2] = checkAnswer(answers, s3);
        System.out.println(countAnswer[2]);
        
        max = Math.max(countAnswer[0], Math.max(countAnswer[1], countAnswer[2]));
        
        for(int i = 0; i < 3; i++) {
            if(max == countAnswer[i]) {
                answer.add(i+1);
            }
        }
        
        return answer;
    }
    
    
    public int checkAnswer(int[] answers, String student) {
        int count = 0;
        
        if(answers.length > student.length()) {
            while(answers.length > student.length()) {
                student += student;
            }
            
        }
        System.out.println(student);
        
        for(int i = 0; i < answers.length; i++) {
            if(Integer.toString(answers[i]).equals(String.valueOf(student.charAt(i)))) {
                count++;
                
            }
        }
        
        return count;
    }
}
