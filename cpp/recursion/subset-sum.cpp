#include <bits/stdc++.h>
using namespace std;

void subSum(int ind, int s, vector<int> &arr, vector<int> &ans)
{
    if (ind >= arr.size())
    {
        ans.push_back(s);
        return;
    }

    // take condition
    subSum(ind + 1, s + arr[ind], arr, ans);

    // not take condition
    subSum(ind + 1, s, arr, ans);
}

int main()
{

    vector<int> arr = {1, 2};
    vector<int> ans;

    subSum(0, 0, arr, ans);

    for (int i = 0; i < ans.size(); i++)
    {
        cout << ans[i] << " ";
    }

    return 0;
}