#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *list = malloc(3 * sizeof(int));
    if (list == NULL)
    {
        return 1;
    }

    list[0] = 1;
    list[1] = 2;
    list[2] = 3;
    // changed malloc to realloc and the list comma
    int *tmp = realloc(list, 4 * sizeof(int));
    if (tmp == NULL)
    {
        free(list);
        return 1;
    }
    /*using realloc instead of malloc on line 16 we do not need this
    which is the process of allocating the new malloc memory tmp into the list malloc size array*/
    // for (int i = 0; i < 3; i++)
    //{
    //     tmp[i] = list[i];
    //}
    tmp[3] = 4;

    list = tmp;

    for (int i = 0; i < 4; i++)
    {
        printf("%i\n", list[i]);
    }
    free(list);
}