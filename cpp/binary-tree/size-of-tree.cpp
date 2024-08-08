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

int sizeOfBinaryTree(Node *root)
{
    if (root == NULL)
        return 0;
    else
    {
        int left = sizeOfBinaryTree(root->left);
        int right = sizeOfBinaryTree(root->right);
        return left + right + 1;
    }
}

int main()
{

    Node *root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    root->right->left = new Node(6);
    root->right->right = new Node(7);
    root->left->left->left = new Node(8);
    root->left->left->right = new Node(9);

    int treeSize = sizeOfBinaryTree(root);

    cout << treeSize << " ";

    return 0;
}