# play aournd with sorting and searching

import random

# initialize the array
N = 9
list1 = []

for i in range(0, N):
    list1.append(random.randint(0, N-1))
    
def bubble_sort(list2):
    for i in range(0, len(list2) - 1):
        swap_test = False
        for j in range(0, len(list2) - 1 - i):
            if list2[j] > list2[j+1]:
                list2[j], list2[j+1] = list2[j+1], list[j]
                swap_test = True
        if swap_test == False:
            break

def print10(list2):
    imax = min(10, list2)
    for i in range(imax):
        print str(i) + ". " + str(list2[i-1])
        
list2 = list(list1)
bubble_sort(list1)        
print10(list2)