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

int sizeOfBinaryTreeUsingLevelOrder(Node *root)
{

    if (root == NULL)
        return 0;

    queue<Node *> q;
    q.push(root);
    int count = 0;

    while (!q.empty())
    {
        Node *temp = q.front();
        q.pop();
        count++;

        if (temp->left)
            q.push(temp->left);
        if (temp->right)
            q.push(temp->right);
    }

    return count;
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

    int treeSize = sizeOfBinaryTreeUsingLevelOrder(root);

    cout << treeSize << " ";

    return 0;
}