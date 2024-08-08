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

bool searchUsingRecursion(Node *root, int data)
{
    bool temp;

    if (root == NULL)
        return false;
    else
    {
        if (data == root->data)
            return true;
        else
        {
            temp = searchUsingRecursion(root->left, data);

            if (temp)
                return temp;
            else
                return searchUsingRecursion(root->right, data);
        }
    }

    return false;
}

int main()
{

    Node *root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(59);
    root->right->left = new Node(6);
    root->right->right = new Node(7);

    bool res = searchUsingRecursion(root, 59);

    cout << res << " ";

    return 0;
}