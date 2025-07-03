import java.util.*;

class Solution {
    
    private ArrayList<Integer>[] graph;
    
    public int solution(int n, int[][] wires) {
        int answer = 100;
        
        graph = new ArrayList[n + 1];
        
        
        for(int i = 0; i <= n; i++) {
            graph[i] = new ArrayList<>();
        }
        
        for(int i = 0; i < wires.length; i++) {
            int start = wires[i][0];
            int end = wires[i][1];
            graph[start].add(end);
            graph[end].add(start);
        }
        
        for(int i = 1; i <= n; i++) {
            if(!graph[i].isEmpty()) {
                List<Integer> connected = new ArrayList<>(graph[i]);
                for (int num : connected) {
                    graph[i].remove(Integer.valueOf(num));
                    graph[num].remove(Integer.valueOf(i));

                    int result = bfs(n);
                    answer = Math.min(answer, result);

                    graph[i].add(num);
                    graph[num].add(i);
                }
            }
        }
        
        return answer;
    }
    
    public int bfs(int nn) {
        ArrayList<Integer> headCount = new ArrayList<>();
        Queue<Integer> qu = new LinkedList<>();
        boolean[] visited = new boolean[nn + 1];
        
        for(int n = 1; n <= nn; n++) {
            int count = 1;
            
            if(!visited[n]) {
                qu.add(n);
                visited[n] = true;
                
                while(!qu.isEmpty()) {
                    int now = qu.poll();
                    for(int i = 0; i < graph[now].size(); i++) {
                        int num = graph[now].get(i);
                        if(!visited[num]) {
                            count++;
                            visited[num] = true;
                            qu.add(num);
                        }
                    }
                }
                headCount.add(count);
            }
        }
        if (headCount.size() == 2) {
            return Math.abs(headCount.get(0) - headCount.get(1));
        } else {
            return nn;
        }
    }
}