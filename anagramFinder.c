#include <stdio.h>
#include <string.h>
int main()
{
    int counter1[] = {0, 0, 0, 0};
    int counter2[] = {0, 0, 0, 0};
    int flag = 0;
    char s1[] = "dbb cccccaacb cdbababdcdcdab dcdad";
    char s2[] = "bbbcc bdddccccad cdbbaaacaccdabdd";
    for (int i = 0; i < strlen(s1); i++)
    {
        if (s1[i] == 'a')
        {
            counter1[0]++;
        }
        else if (s1[i] == 'b')
        {
            counter1[1]++;
        }
        else if (s1[i] == 'c')
        {
            counter1[2]++;
        }
        else if (s1[i] == 'd')
        {
            counter1[3]++;
        }
    }
    for (int j = 0; j < strlen(s2); j++)
    {
        if (s2[j] == 'a')
        {
            counter2[0]++;
        }
        else if (s2[j] == 'b')
        {
            counter2[1]++;
        }
        else if (s2[j] == 'c')
        {
            counter2[2]++;
        }
        else if (s2[j] == 'd')
        {
            counter2[3]++;
        }
    }
    for (int z = 0; z < 4; z++)
    {
        if (counter1[0] != counter2[0])
        {
            flag++;
        }
        else if (counter1[1] != counter2[1])
        {
            flag++;
        }
        else if (counter1[2] != counter2[2])
        {
            flag++;
        }
        else if (counter1[3] != counter2[3])
        {
            flag++;
        }
    }
    if (flag > 0)
    {
        printf("Not Anagram!");
    }
    printf("Anagram!");
}