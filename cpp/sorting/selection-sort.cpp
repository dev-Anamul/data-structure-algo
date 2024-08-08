void selection_sort(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        int mini = i;

        for (int j = i; j < n; j++)
        {
            if (arr[j] < arr[mini])
                mini = j;
        }

        int temp = arr[i];
        arr[i] = arr[mini];
        arr[mini] = temp;
    }
}