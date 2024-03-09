package queue;
import java.util.*;

public class QueueTest {
    public static void main(String[] args) {
        ArrayQueue arrayQueue = new ArrayQueue();
        arrayQueue.add(1); // {1}
        arrayQueue.add(2); // {1, 2}
        arrayQueue.add(3); // {1, 2, 3}
        System.out.println(arrayQueue.poll()); // 1 {2, 3}
        System.out.println(arrayQueue.peek()); // 2 {2, 3}
        System.out.println(arrayQueue.poll()); // 2 {3}
        System.out.println(arrayQueue.size()); // 1 {3}


        LinkedQueue linkedQueue = new LinkedQueue();
        System.out.println(linkedQueue.poll());
        linkedQueue.add(1);
        linkedQueue.add(2);
        linkedQueue.add(3);
        System.out.println(linkedQueue.poll());
        linkedQueue.add(5);
        System.out.println(linkedQueue.peek());
        System.out.println(linkedQueue.poll());
        System.out.println(linkedQueue.poll());
        System.out.println(linkedQueue.poll());
    }
}

class ArrayQueue {
    private int front;
    private int rear;
    private int[] queue;

    public ArrayQueue() {
        front = 0;
        rear = 0;
        queue = new int[1000];
    }

    public int poll() {
        if(isEmpty()) {
            System.out.println("Queue가 비었습니다");
            return -1;
        }
        int pollItem = queue[front++];
        return pollItem;
    }

    public void add(int item) {
        if(rear == 999) {
            System.out.println("Queue가 꽉 찼습니다");
        }
        queue[rear++] = item;
    }

    public int peek() {
        if(isEmpty()) {
            System.out.println("Queue가 비었습니다");
            return -1;
        }
        return queue[front];
    }

    public boolean isEmpty() {
        return front == rear;
    }

    public int size() {
        return rear - front;
    }
}

class QNode {
    private int item;
    private QNode nextNode;

    public QNode(int item) {
        this.item = item;
        nextNode = null;
    }

    public int getItem() {
        return item;
    }

    public QNode getNextNode() {
        return nextNode;
    }

    public void setNextNode(QNode node) {
        this.nextNode = node;
    }
}

class LinkedQueue {
    QNode front;
    QNode rear;

    public LinkedQueue() {
        front = null;
        rear = null;
    }

    public int poll() {
        if(isEmpty()) {
            System.out.println("Queue가 비었습니다");
            return -1;
        } else {
            QNode pollNode = front;
            front = front.getNextNode();
            return pollNode.getItem();
        }
    }

    public void add(int item) {
        QNode addNode = new QNode(item);
        if(isEmpty()) {
            front = addNode;
            rear = addNode;
        } else {
            rear.setNextNode(addNode);
            rear = addNode;
        }
    }

    public int peek() {
        if(isEmpty()) {
            System.out.println("Queue가 비었습니다");
            return -1;
        } else {
            return front.getItem();
        }
    }

    public boolean isEmpty() {
        if(front == null && rear == null) {
            return true;
        } else {
            return false;
        }
    }
}
