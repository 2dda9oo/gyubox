package datastruct;

import java.util.*;

public class DFS_List {

    static boolean[] visited = new boolean[9];
    static int[][] graph = {{}, {2,3,8}, {1,6,8}, {1,5}, {5,7}, {3,4,7}, {2}, {4,5}, {1,2}};
    static void recursive_DFS(int nodeIndex) {


        visited[nodeIndex] = true;
        System.out.print(nodeIndex + " > ");

        Arrays.sort(graph[nodeIndex]);
        for(int node : graph[nodeIndex]) {
            if(!visited[node]) {
                recursive_DFS(node);
            }
        }
    }

    static boolean[] visited2 = new boolean[9];

    static void stack_DFS(int nodeIndex) {
        Stack<Integer> stack = new Stack<>();

        stack.push(nodeIndex);
        visited2[nodeIndex] = true;

        while(!stack.isEmpty()) {
            int idx = stack.pop();
            visited2[idx] = true;
            System.out.print(idx + " > ");

            for(int node : graph[idx]) {
                if(!visited2[node]) {
                    stack.push(node);
                }
            }
        }
    }

    public static void main(String[] args) {

        recursive_DFS(1);
        System.out.println();
        stack_DFS(1);
    }
}