from random import choices
from typing import List
from functools import cmp_to_key
# start with the 2-type version
# array consists of 2 type of data 'R'/'G'
def sort2(input: List[str]) -> List[str]:
    low, high = 0, len(input) - 1
    while low != high:
        # we start at the front
        # if an 'R' is at this place, everthing ist okay
        if input[low] == 'R':
            low += 1
        else:
            input[low],input[high] = input[high], input[low]
            high -= 1
    return input

def sort3(input:List[str]) -> List[str]:
    low,mid,high = 0,0,len(input) - 1
    while mid <=high:
        if input[mid] == 'R':
            input[low],input[mid] = input[mid],input[low]
            low += 1
            mid += 1
        elif input[mid] == 'G':
            mid +=1
        else:
            input[mid],input[high] = input[high],input[mid]
            high -=1
    return input
def main():
    test1 = choices(['R','G'],k=20)
    print(sort2(test1))
    test2 = choices(['R','G','B'],k=30)
    test3 = choices(['R','G','B'],k=30)
    print(sort3(test2))

    ##
    def compareRGB(c1,c2):
        if c1 == 'R':
            return -1
        elif c2 == 'R':
            return 1
        elif c1 == 'G' and c2 == 'B':
            return -1
        else:
            return 1
    cmpKey = cmp_to_key(compareRGB)

    print(sorted(test3,key = cmpKey))
    return 0


if __name__ == "__main__":
    main()