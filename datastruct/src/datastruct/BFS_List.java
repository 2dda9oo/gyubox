package datastruct;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;
import java.util.*;

public class BFS_List { // 노드들 간 간선의 수가 두가지일 경우
	
	public static void main(String[] argc) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		int v = Integer.parseInt(st.nextToken());
		
		boolean visited[] = new boolean[n + 1];
		LinkedList<Integer>[] adjList = new LinkedList[n + 1];
		
		for(int i = 0; i <= n; i++) {
			adjList[i] = new LinkedList<Integer>();
		}
		
		for(int i = 0; i < m; i++) {
			st = new StringTokenizer(br.readLine());
			int v1 = Integer.parseInt(st.nextToken());
			int v2 = Integer.parseInt(st.nextToken());
			adjList[v1].add(v2);
			adjList[v2].add(v1);
		}
		
		for(int i = 1; i <= n; i++) {
			Collections.sort(adjList[i]);
		}
		
		BFS_Start(v, adjList, visited);
		
		
	}
	
	static void BFS_Start(int v, LinkedList<Integer>[] adjList, boolean[] visited ) {
		Queue<Integer> queue = new LinkedList<Integer>();
		visited[v] = true;
		queue.add(v);
		
		while(queue.size() != 0) {
			v = queue.poll();
			System.out.println(v + " ");
			
			Iterator<Integer> iter = adjList[v].listIterator();
			while(iter.hasNext()) {
				int w = iter.next();
				if(!visited[w]) {
					visited[w] = true;
					queue.add(w);
				}
			}
		}
	}

}
