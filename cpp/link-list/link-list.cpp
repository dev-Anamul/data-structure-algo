#include <bits/stdc++.h>
using namespace std;

class Node
{
public:
    int data;
    Node *next;

public:
    Node(int data)
    {
        this->data = data;
        this->next = nullptr;
    }

public:
    Node(int data, Node *next)
    {
        this->data = data;
        this->next = next;
    }
};

void printList(Node *n)
{
    while (n != NULL)
    {
        cout << n->data << " ";
        n = n->next;
    }
}

Node *convertArrToLL(vector<int> &arr)
{

    Node *head = new Node(arr[0]);
    Node *mover = head;

    for (int i = 1; i < arr.size(); i++)
    {
        Node *temp = new Node(arr[i]);
        mover->next = temp;
        mover = temp;
    };

    return head;
}

int lengthOfLL(Node *head)
{
    int count = 0;
    Node *temp = head;

    while (temp != NULL)
    {
        count++;
        temp = temp->next;
    }

    return count;
}

int checkIfPresent(Node *head, int val)
{
    Node *temp = head;

    while (temp)
    {
        if (temp->data == val)
            return 1;
        temp = temp->next;
    }

    return 0;
}

Node *deleteHead(Node *head)
{
    if (head == NULL)
        return head;

    Node *temp = head;
    head = head->next;
    free(temp);

    return head;
}

Node *deleteTail(Node *head)
{

    if (head == NULL || head->next == NULL)
        return NULL;

    Node *temp = head;
    while (temp->next->next != NULL)
        temp = temp->next;

    free(temp->next);
    temp->next = nullptr;

    return head;
}

Node *deleteKthNode(Node *head, int k)
{
    if (head == NULL)
        return head;

    if (k == 1)
        return deleteHead(head);

    Node *temp = head;
    Node *prev = NULL;
    int count = 0;

    while (temp != NULL)
    {
        count++;

        if (count == k)
        {
            prev->next = temp->next;
            free(temp);
            break;
        }

        prev = temp;
        temp = temp->next;
    }

    return head;
}

Node *insertHead(Node *head, int val)
{
    return new Node(val, head);
}

Node *insertTail(Node *head, int val)
{
    if (head == NULL)
        return new Node(val);

    Node *temp = head;
    while (temp->next != NULL)
        temp = temp->next;

    temp->next = new Node(val);

    return head;
}

Node *insertKthNode(Node *head, int val, int k)
{
    if (head == NULL)
    {
        if (k == 1)
            return new Node(val);
        else
            return head;
    }

    if (k == 1)
        return insertHead(head, val);

    int count = 0;
    Node *temp = head;

    while (temp != NULL)
    {
        count++;

        if (count == k - 1)
        {
            Node *n = new Node(val, temp->next);
            temp->next = n;
            return head;
        }

        temp = temp->next;
    }

    return head;
}

Node *deleteAllNode(Node *head)
{
    Node *temp = head;

    while (temp != NULL)
    {
        temp = temp->next;
        free(head);
        head = temp;
    }

    return head;
}

int main()
{
    vector<int> arr = {1, 2, 3, 4, 5};
    Node *head = convertArrToLL(arr);
    head = insertHead(head, 42);
    // head = deleteKthNode(head, 7);
    head = insertTail(head, 34);
    head = insertKthNode(head, 8, 3);
    head = deleteAllNode(head);
    printList(head);

    return 0;
}