import  java.util.*;

class test{
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
        //itrarting the 


    }   
}