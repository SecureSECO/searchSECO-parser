

public class Main {
    public static void Main(String[] args) {
        Main p = new Main();
        int a = p.Multiply(4,5)
        p.Test()
        System.out.println("Hello World");
    }

    // This is a test
    private void Test() {
        int a = 3;
        int b = 4;
        System.out.println(a * b)
    }

    private int Multiply(int a, int b) {
        return a * b;
    }
}