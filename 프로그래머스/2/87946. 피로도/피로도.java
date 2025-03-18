class Solution {
    
    public int answer;
    public boolean[] visited;
    
    public int solution(int k, int[][] dungeons) {
        
        visited = new boolean[dungeons.length];
        
        dfs_start(k, dungeons, 0);
        
        return answer;
    }
    
    public void dfs_start(int k, int[][] dungeons, int depth) {
        for(int i = 0; i < dungeons.length; i++) {
            if(!visited[i] && dungeons[i][0] <= k) {
                visited[i] = true;
                dfs_start(k - dungeons[i][1], dungeons, depth + 1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer, depth);
    }
}