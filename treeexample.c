#include <stdio.h>
#include <stdlib.h>
// tree example hard coded
typedef struct treenode
{
    int value;
    struct treenode *left;
    struct treenode *right;
} treenode;

treenode *createnode(int value)
{
    treenode *result = malloc(sizeof(treenode));
    if (result != NULL)
    {
        result->left = NULL;
        result->right = NULL;
        result->value = value;
    }
    return result;
}
// makes a tab for each edge
void printtabs(int numtabs)
{
    for (int i = 0; i < numtabs; i++)
    {
        printf("\t");
    }
}
// prints the tree and showcases how the tree looks
void printtree_rec(treenode *root, int level)
{
    if (root == NULL)
    {
        printtabs(level);
        printf("---<empty>--\n");
        return;
    }
    printtabs(level);
    printf("value = %d\n", root->value);
    printtabs(level);
    printf("left\n");

    printtree_rec(root->left, level + 1);
    printtabs(level);
    printf("right\n");

    printtree_rec(root->right, level + 1);

    printtabs(level);
    printf("done\n");
}

void printtree(treenode *root)
{
    printtree_rec(root, 0);
}

int main()
{
    // creating nodes n1 through n5
    treenode *n1 = createnode(10);
    treenode *n2 = createnode(11);
    treenode *n3 = createnode(12);
    treenode *n4 = createnode(13);
    treenode *n5 = createnode(14);
    // building the tree
    n1->left = n2;
    n1->right = n3;
    n3->left = n4;
    n3->right = n5;

    printtree(n1);
    // free memory
    free(n1);
    free(n2);
    free(n3);
    free(n4);
    free(n5);
}