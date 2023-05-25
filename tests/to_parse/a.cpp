
#include <string>

int main(int argc, char* argv) {
    test();
    int result = multiply(4, 5);
    return 0;
}

void test() {
    std::cout << "Hello World" << std::endl;
}

int multiply(int a, int b) {
    return a * b;
}