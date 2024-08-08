#include <bits/stdc++.h>
using namespace std;

class Node
{
public:
    int data;
    Node *next;
    Node *prev;

public:
    Node(int val, Node *next, Node *prev)
    {
        this->data = val;
        this->next = next;
        this->prev = prev;
    }

public:
    Node(int val)
    {
        this->data = val;
        this->next = nullptr;
        this->prev = nullptr;
    }
};

Node *arrToDLL(vector<int> &arr)
{
    Node *head = new Node(arr[0]);
    Node *prev = head;

    for (int i = 1; i < arr.size(); i++)
    {
        Node *temp = new Node(arr[i], nullptr, prev);
        prev->next = temp;
        prev = temp;
    }

    return head;
}

Node *deleteHead(Node *head)
{
    if (head == NULL || head->next == NULL)
        return NULL;

    Node *prev = head;

    // change heal to next
    head = head->next;
    head->prev = nullptr;

    prev->next = nullptr;
    delete prev;

    return head;
}

Node *deleteTail(Node *head)
{
    if (head == NULL || head->next == NULL)
        return NULL;

    Node *tail = head;

    while (tail->next != NULL)
    {
        tail = tail->next;
    }

    Node *newTail = tail->prev;
    newTail->next = nullptr;

    tail->prev = nullptr;
    free(tail);

    return head;
}

Node *deleteKthElement(Node *head, int k)
{
    if (head == NULL)
        return NULL;

    Node *temp = head;
    int count = 0;

    while (temp != NULL)
    {
        count++;
        if (count == k)
            break;

        temp = temp->next;
    }

    Node *prev = temp->prev;
    Node *next = temp->next;

    if (prev == NULL && next == NULL)
        return NULL;
    else if (prev == NULL)
    {
        return deleteHead(head);
    }
    else if (next == NULL)
    {
        return deleteTail(head);
    }

    prev->next = next;
    next->prev = prev;

    temp->next = nullptr;
    temp->prev = nullptr;
    free(temp);

    return head;
}

void print(Node *head)
{
    Node *temp = head;

    while (temp != NULL)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
}

int main()
{
    vector<int> arr = {1, 7, 3, 4, 5};
    Node *head = arrToDLL(arr);
    // head = deleteHead(head);
    // head = deleteTail(head);
    head = deleteKthElement(head, 2);

    print(head);
    return 0;
}