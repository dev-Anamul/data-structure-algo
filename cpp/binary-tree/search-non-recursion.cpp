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

bool searchUsingLevelOrder(Node *root, int data)
{

    queue<Node *> q;
    q.push(root);

    while (!q.empty())
    {

        Node *temp = q.front();
        q.pop();

        if (temp->data == data)
            return true;

        if (temp->left)
            q.push(temp->left);
        if (temp->right)
            q.push(temp->right);
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

    bool res = searchUsingLevelOrder(root, 59);

    cout << res << " ";

    return 0;
}