import java.util.*;

class Solution {
    
    static class Node {
        int x;
        int y;
        
        public Node(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }
    
    public static int dx[] = {-1, 1, 0, 0};
    public static int dy[] = {0, 0, -1, 1};
    
    public int solution(int[][] maps) {
        int answer = 0;
        
        int n = maps.length;
        int m = maps[0].length;
        int[][] visited = new int[n][m];
        
        BFS_find(0, 0, maps, visited);
        answer = visited[n-1][m-1];
        if(answer == 0) {
            answer = -1;
        }
        
        return answer;
    }
    
    public void BFS_find(int row, int column, int[][] maps, int[][] visited) {
        visited[row][column] = 1;
        Queue<Node> queue = new LinkedList<>();
        queue.add(new Node(row, column));
        
        while(!queue.isEmpty()) {
            Node now = queue.poll();
            int nowX = now.x;
            int nowY = now.y;
            
            for(int i = 0; i < 4; i++) {
                int nextX = nowX + dx[i];
                int nextY = nowY + dy[i];
                
                if(nextX < 0 || nextY < 0 || nextX > maps.length - 1 || nextY > maps[0].length - 1) {
                    continue;
                }
                
                if(visited[nextX][nextY] == 0 && maps[nextX][nextY] == 1) {
                    visited[nextX][nextY] = visited[nowX][nowY] + 1;
                    queue.add(new Node(nextX, nextY));
                }
            }
        }
    }
    
}