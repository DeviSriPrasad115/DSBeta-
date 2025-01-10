import  java.util.*;

class test{
    /**
     * @param args
     */
    public static void main(String[] args) {
        //array list which is the dynamic array in the collections 
        ArrayList <String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        list.add("Date");
        list.add("Elderberry");

        System.out.println(list);

        //converting the  Arraylist to LinkedList
        LinkedList <String> llyst = new LinkedList<String>(list);
        System.out.println(llyst);
        
        //performing the array operations 
        ArrayList <Integer> arr = new ArrayList<Integer>(List.of(1, 2, 3, 4));
        System.out.println(arr);

        //creating the anaymnous function
        arr.stream()
            .filter((n) -> n%2==0)  //here we are filtering the even numbers from the array length chages based on the condition
            .forEach(System.out::println);
        arr.stream()
            .map(n -> n*n)    //here we are multiplying the array with 2  but the length of the array dont chage 
            .forEach(System.out::println);
        int a = arr.stream()
                .reduce(0, (sum, element) -> sum + element * 2); // multiplying each element by 2 and summing them up
        System.out.println(a);

        //Deque in java collection as stack for performance 
        Stack <Integer> stack = new Stack<>();
        Deque <Integer> deque = new ArrayDeque<>();//double ended queue
        deque.add(1);
        deque.add(2);
        deque.add(3);
        deque.add(4);
        deque.add(5);
        System.out.println(deque);
        deque.addFirst(0);
        deque.addLast(6);
        System.out.println(deque);
        deque.removeFirst();
        System.out.println(deque);
        deque.removeLast();
        System.out.println(deque);
        deque.push(0);
        System.out.println(deque);
        deque.pop();
        System.out.println(deque);
        deque.offerFirst(0);
        System.out.println(deque);
        deque.offerLast(6);
        System.out.println(deque);
        deque.pollFirst();
        System.out.println(deque);
        deque.pollLast();
        System.out.println(deque);
        deque.peekFirst();
        System.out.println(deque);
        deque.peekLast();
        System.out.println(deque);
        deque.removeFirstOccurrence(3);
        System.out.println(deque);
        deque.removeLastOccurrence(3);
        System.out.println(deque);
        deque.offer(3);
        System.out.println(deque);
        deque.offer(3);
        System.out.println(deque);

        //sorting the list based on the values
        ArrayList <String> arr1 = new ArrayList<String>(List.of("Apple", "Banana", "Cherry", "Date", "Elderberry"));
        ArrayList <Integer> arr2 = new ArrayList<Integer>(List.of(10, 60, 3, 4, 50));
        Collections.sort(arr1);
        Collections.sort(arr2);
        System.out.println(arr1);
        System.out.println(arr2); 
        //sort the list of string based on the length of the string
        arr1.sort(Comparator.comparing(String::length));
        System.out.println(arr1);
        //sort the list of string based on the length of the string in reverse order
        arr1.sort(Comparator.comparing(String::length).reversed());
        

        //priority queue in java
        PriorityQueue <Integer> pq = new PriorityQueue<>();
        PriorityQueue <Integer> pq1 = new PriorityQueue<>(Comparator.reverseOrder());
        pq.add(a);
        System.out.println(pq);

        

    }   
}