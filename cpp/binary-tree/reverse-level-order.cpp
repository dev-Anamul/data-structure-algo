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

void reverseLevelOrder(Node *root)
{
    queue<Node *> q;
    stack<Node *> s;

    if (!root)
        return;

    q.push(root);

    while (!q.empty())
    {
        Node *temp = q.front();
        q.pop();

        if (temp->right)
            q.push(temp->right);
        if (temp->left)
            q.push(temp->left);

        s.push(temp);
    }

    while (!s.empty())
    {
        Node *temp = s.top();
        s.pop();

        cout << temp->data << " ";
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
    // root->left->left->left = new Node(8);
    // root->left->left->right = new Node(9);

    reverseLevelOrder(root);

    return 0;
}