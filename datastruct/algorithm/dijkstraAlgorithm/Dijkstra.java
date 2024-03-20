package algorithm.dijkstraAlgorithm;

import java.util.*;

public class Dijkstra {

    static class Node {
        int vertex;
        int cost;

        public Node(int vertex, int cost) {
            this.vertex = vertex;
            this.cost = cost;
        }
    }

    static ArrayList<Node>[] graph;
    static boolean[] visited;
    static int[] distance;

    static void dijkstra(int start) {
        PriorityQueue<Node> pq = new PriorityQueue<>((o1, o2) -> o1.cost - o2.cost);
        pq.add(new Node(start, 0));
        distance[start] = 0;

        while(!pq.isEmpty()) {
            Node now = pq.poll();

            if(!visited[now.vertex]) {
                visited[now.vertex] = true;
            }

            for(Node next : graph[now.vertex]) {
                if(!visited[next.vertex] && distance[next.vertex] > now.cost + next.cost) {
                    distance[next.vertex] = now.cost + next.cost;
                    pq.add(new Node(next.vertex, distance[next.vertex]));
                }
            }
        }
    }

    public static void main(String[] args) {

        graph = new ArrayList[6];
        distance = new int[6];
        visited = new boolean[6];

        for(int i = 1; i <= 5; i++) {
            graph[i] = new ArrayList<>();
            distance[i] = Integer.MAX_VALUE;
        }

        graph[1].add(new Node(2, 2));
        graph[1].add(new Node(3, 4));

        graph[2].add(new Node(3, 1));
        graph[2].add(new Node(5, 7));

        graph[3].add(new Node(2, 1));
        graph[3].add(new Node(4, 2));
        graph[3].add(new Node(5, 6));

        graph[4].add(new Node(5, 4));

        dijkstra(1);

        for(int i = 1; i <= 5; i++) {
            System.out.println(distance[i] + " ");
        }
    }
}
