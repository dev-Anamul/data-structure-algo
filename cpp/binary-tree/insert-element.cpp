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

void insertUsingLevelOrder(Node *root, int data)
{

    if (!root)
    {
        cout << "i am calling" << endl;
        root = new Node(data);
        return;
    }

    queue<Node *> q;
    q.push(root);

    while (!q.empty())
    {
        Node *temp = q.front();
        q.pop();

        if (temp->left)
            q.push(temp->left);
        else
        {
            temp->left = new Node(data);
            return;
        }

        if (temp->right)
            q.push(temp->right);
        else
        {
            temp->right = new Node(data);
            return;
        }
    }
}

void printTree(Node *root)
{

    queue<Node *> q;
    q.push(root);

    while (!q.empty())
    {
        Node *temp = q.front();
        q.pop();
        cout << temp->data << " ";

        if (temp->left)
            q.push(temp->left);
        if (temp->right)
            q.push(temp->right);
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

    insertUsingLevelOrder(root, 8);

    printTree(root);

    return 0;
}