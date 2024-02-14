package backjun_1213;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.*;

public class Main {
	
	static String name;

	public static void main(String[] args) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		name = br.readLine();
		List<String> list = new ArrayList<>();
		String splitstr[] = name.split("");
		
		for(int i = 0; i < splitstr.length; i++) {
			list.add(splitstr[i]);
		}
		
		int alphabet[] = new int[26];
		
		for(int i = 0; i < name.length(); i++) {
			int idx = name.charAt(i) - 'A';
			alphabet[idx]++;
		}
		
		int check = 0;
		for(int i = 0; i < alphabet.length; i++) {
			if(alphabet[i]%2 != 0) check++;
		}
		
		String finalname = "";
		StringBuilder sb = new StringBuilder();
		
		if(check > 1) {
			finalname += "I'm Sorry Hansoo";
		} else {
			for(int i = 0; i < alphabet.length; i++) {
				for(int j = 0; j < alphabet[i]/2; j++) {
					sb.append((char)(i+65));
				}
			}
			finalname += sb.toString();
			String end = sb.reverse().toString();
			
			sb = new StringBuilder();
			for(int i = 0; i < alphabet.length; i++) {
				if(alphabet[i] % 2 == 1) {
					sb.append((char)(i+65));
				}
			}
			finalname += sb.toString() + end;
		}
		System.out.println(finalname);
	}

}
