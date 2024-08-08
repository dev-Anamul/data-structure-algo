#include <bits/stdc++.h>
using namespace std;

class Node
{
public:
    int data;
    Node *left;
    Node *right;

public:
    Node(int val)
    {
        this->data = val;
        this->left = nullptr;
        this->right = nullptr;
    }
};

int findMax(Node *root)
{
    int rootVal, left, right, max = INT_MIN;

    if (root != NULL)
    {
        rootVal = root->data;

        left = findMax(root->left);
        right = findMax(root->right);

        if (left > right)
            max = left;
        else
            max = right;

        if (rootVal > max)
            max = rootVal;
    }

    return max;
}

int main()
{

    Node *root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(9);
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    root->right->left = new Node(6);
    root->right->right = new Node(7);

    int max = findMax(root);

    cout << max << " ";

    return 0;
}