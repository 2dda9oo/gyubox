## Java를 이용한 Queue의 구현

- 배열을 이용한 ArrayQueue
- LinkedList를 이용한 LinkedQueue

---
#### ArrayQueue
ArrayQueue의 클래스의 생성자에서 Queue의 front와 rear와 함께 미리 크기가 정해진 배열을 하나 선언한 후, 
front와 rear를 인덱스로서 배열에 item을 저장하는 방법. 배열의 크기가 다 차면 더 이상 Queue를 이용할 수 없고
poll()이 일어나며 front의 인덱스를 옮겨나가는 것이기 때문에, 사용하지 않는 공간이 더 클 수도 있다.



---
#### LinkedQueue
Node로서 front와 rear를 관리하며 Queue를 이용한다. QNode엔 값을 저장할 item과 다음 노드를 가리킬 수 있도록
nextNode를 선언한다.

- add() : 새로운 값을 가진 노드를 만들고, rear의 다음 노드에 새로운 node를 연결하고 rear는 그 새로운 노드르 옮겨간다
- Queue가 비었을 땐 front 노드와 rear 노드 모두 동일한 노드를 가진다
- poll() : front의 다음 노드로 front를 옮겨간다
