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

int findMaxLevelOrder(Node *root)
{
    int max = INT_MIN;
    queue<Node *> q;

    q.push(root);

    while (!q.empty())
    {
        Node *temp = q.front();
        q.pop();

        if (temp->data > max)
            max = temp->data;

        if (temp->left)
            q.push(temp->left);
        if (temp->right)
            q.push(temp->right);
    }

    return max;
}

int main()
{

    Node *root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(11);
    root->left->left = new Node(4);
    root->left->right = new Node(15);
    root->right->left = new Node(6);
    root->right->right = new Node(7);

    int maxVal = findMaxLevelOrder(root);

    cout << maxVal << " ";

    return 0;
}