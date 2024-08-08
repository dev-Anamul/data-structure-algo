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

void nonRecursivePreorder(Node *root)
{
    stack<Node *> s;

    while (true)
    {
        while (root)
        {
            cout << root->data << " ";
            s.push(root);
            root = root->left;
        }

        if (s.empty())
            break;
        root = s.top();
        s.pop();
        root = root->right;
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

    nonRecursivePreorder(root);

    return 0;
}