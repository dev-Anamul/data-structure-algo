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

int heightOfBinaryTree(Node *root)
{
    int leftHeight, rightHeight;
    if (!root)
        return 0;
    else
    {

        leftHeight = heightOfBinaryTree(root->left);
        rightHeight = heightOfBinaryTree(root->right);

        if (leftHeight > rightHeight)
            return leftHeight + 1;
        else
            return rightHeight + 1;
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

    int h = heightOfBinaryTree(root);

    cout << "Height: " << h << " ";

    return 0;
}