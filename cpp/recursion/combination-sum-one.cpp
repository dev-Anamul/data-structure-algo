#include <bits/stdc++.h>
using namespace std;

void findCombinations(int ind, int target, vector<int> &arr, vector<vector<int>> &ans, vector<int> &ds)
{
    if (ind == arr.size())
    {
        if (target == 0)
            ans.push_back(ds);
        return;
    }

    // pick condition
    if (arr[ind] <= target)
    {
        ds.push_back(arr[ind]);
        findCombinations(ind, target - arr[ind], arr, ans, ds);
        ds.pop_back();
    }

    // not pick
    findCombinations(ind + 1, target, arr, ans, ds);
}

int main()
{

    vector<int> arr = {10, 1, 2, 7, 6, 1, 5};
    vector<vector<int>> ans;
    vector<int> ds;
    int target = 8;

    findCombinations(0, target, arr, ans, ds);

    for (int i = 0; i < ans.size(); i++)
    {
        for (int j = 0; j < ans[i].size(); j++)
        {
            cout << ans[i][j] << " ";
        }

        cout << endl;
    }

    return 0;
}