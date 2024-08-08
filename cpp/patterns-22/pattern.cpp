#include <bits/stdc++.h>
using namespace std;

void pattern1()
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }

    cout << endl;
}

void pattern2()
{
    for (int i = 1; i <= 5; i++)
    {
        for (int j = i; j >= 1; j--)
        {
            cout << "* ";
        }
        cout << endl;
    }

    cout << endl;
}

void pattern3()
{

    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << j << " ";
        }
        cout << endl;
    }

    cout << endl;
}

void pattern4()
{

    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << i << " ";
        }
        cout << endl;
    }

    cout << endl;
}

void pattern5()
{

    for (int i = 5; i >= 1; i--)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }

    cout << endl;
}

void pattern6()
{

    for (int i = 5; i >= 1; i--)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << j << " ";
        }
        cout << endl;
    }
}

void pattern7(int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < (n - i - 1); j++)
        {
            cout << " ";
        }

        for (int j = 0; j < (i * 2 + 1); j++)
        {
            cout << "*";
        }

        for (int j = 0; j < (n - i - 1); j++)
        {
            cout << " ";
        }
        cout << endl;
    }
}

void pattern8(int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < i; j++)
        {
            cout << " ";
        }

        for (int j = 0; j < 2 * n - (i * 2 + 1); j++)
        {
            cout << "*";
        }

        for (int j = 0; j < i; j++)
        {
            cout << " ";
        }
        cout << endl;
    }
}

void pattern9(int n)
{
    pattern7(n);
    pattern8(n);
}

void pattern10(int n)
{

    for (int i = 1; i <= (2 * n - 1); i++)
    {
        int stars = i;

        if (i > n)
            stars = 2 * n - i;

        for (int j = 1; j <= stars; j++)
        {
            cout << "*";
        }

        cout << endl;
    }
}

void pattern11(int n)
{

    int starts = 1;
    for (int i = 1; i <= n; i++)
    {

        if (i % 2 == 0)
            starts = 0;
        else
            starts = 1;

        for (int j = 1; j <= i; j++)
        {
            cout << starts;
            starts = 1 - starts;
        }

        cout << endl;
    }
}

void pattern12(int n)
{
    for (int i = 1; i <= n; i++)
    {

        // number
        for (int j = 1; j <= i; j++)
        {
            cout << j;
        }

        // space
        for (int j = 1; j <= (n - i) * 2; j++)
        {
            cout << " ";
        }

        // number
        for (int j = i; j >= 1; j--)
        {
            cout << j;
        }

        cout << endl;
    }
}

void pattern13(int n)
{

    int count = 1;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << count << " ";
            count++;
        }

        cout << endl;
    }
}

void pattern14(int n)
{
    for (int i = 0; i < n; i++)
    {
        for (char ch = 'A'; ch <= 'A' + i; ch++)
        {
            cout << ch << " ";
        }

        cout << endl;
    }
}

void pattern15(int n)
{
    for (int i = 0; i < n; i++)
    {

        for (char ch = 'A'; ch <= 'A' + (n - i - 1); ch++)
        {
            cout << ch << " ";
        }

        cout << endl;
    }
}

void pattern16(int n)
{
    for (int i = 0; i < n; i++)
    {
        char ch = 'A' + i;

        for (int j = 0; j <= i; j++)
        {
            cout << ch << " ";
        }

        cout << endl;
    }
}

void pattern17(int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < (n - i - 1); j++)
        {
            cout << " ";
        }

        char ch = 'A';
        int breakPoint = (i * 2 + 1) / 2;
        for (int j = 1; j <= (i * 2 + 1); j++)
        {
            cout << ch;

            if (j <= breakPoint)
                ch++;
            else
                ch--;
        }

        for (int j = 0; j < (n - i - 1); j++)
        {
            cout << " ";
        }
        cout << endl;
    }
}

void pattern18(int n)
{
    for (int i = 0; i < n; i++)
    {
        char ch = 'A' + (n - i - 1);
        for (int j = 0; j <= i; j++)
        {
            cout << ch << " ";
            ch++;
        }

        cout << endl;
    }
}

int main()
{
    // pattern1();
    // pattern2();
    // pattern3();
    // pattern4();
    // pattern5();
    // pattern6();
    // pattern7(5);
    // pattern8(5);
    // pattern9(5);
    // pattern10(5);
    // pattern11(5);
    // pattern12(9);
    // pattern13(5);
    // pattern14(5);
    // pattern15(5);
    // pattern16(5);
    // pattern17(5);
    pattern18(10);

    return 0;
}