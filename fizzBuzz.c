#include <stdio.h>

int main()
{
    int i;

    for (i = 1; i <= 100; i++)
    {
        // checks for 15 before other iterations HAVE to check this case before any other or it wont work
        // the only problem among this interview question
        if (i % 3 == 0 && i % 5 == 0)
        {
            printf("FizzBuzz\n");
        }
        else if (i % 3 == 0)
        {
            printf("Fizz\n");
        }
        else if (i % 5 == 0)
        {
            printf("Buzz\n");
        }
        else
        {
            printf("%d\n", i);
        }
    }
}
