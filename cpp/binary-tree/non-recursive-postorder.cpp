#include <bits/stdc++.h>
using namespace std;

// ! need to understand this traversal

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

void postOrder(Node *root)
{
    Node *current = root;
    stack<Node *> s;

    while (current || !s.empty())
    {

        if (current)
        {
            s.push(current);
            current = current->left;
        }
        else
        {

            Node *temp = s.top()->right;

            if (temp == NULL)
            {
                temp = s.top();
                s.pop();
                cout << temp->data << " ";

                while (!s.empty() && temp == s.top()->right)
                {
                    temp = s.top();
                    s.pop();
                    cout << temp->data << " ";
                }
            }
            else
                current = temp;
        }
    }

    return;
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

    postOrder(root);

    return 0;
}