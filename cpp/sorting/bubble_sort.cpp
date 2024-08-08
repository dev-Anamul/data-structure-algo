void bubble_sort(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        bool is_swap = false;

        for (int j = 1; j < n - i; j++)
        {
            if (arr[j - 1] > arr[j])
            {
                int temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;

                is_swap = true;
            }
        }

        if (!is_swap)
            break;
    }
}