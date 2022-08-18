def swap(arr, index_1, index_2):
    temp = arr[index_1]
    arr[index_1] = arr[index_2]
    arr[index_2] = temp

def bubble_sort(arr):
    iteration_count = 0
    for i in range(len(arr)):
        # iterate through unplaced elements
        pass