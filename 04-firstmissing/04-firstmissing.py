# In an array of numbers, find the first missing positive integer
# (duplicates and negatives can occur)

# Ex: [2,1,0] => 3
#     [3,4,1,-1] => 2

from typing import List

def findmissing_brute(input:List[int]):
    # observation: maximum missing number can be length+1 
    n = len(input) + 1
    for i in range(1,n+1):
        missing = True
        for elem in input:
            if (elem == i):
                missing = False
                break
        if  missing:
            return i
    return n

def findmissing_best(input):
    n = len(input)
    i = 0
    k= 0
    # first scan to move numbers to correct position
    while i < n:
        if input[i]>0 and input[i] <=n and input[input[i]-1] != input[i]:
            input[input[i]-1],input[i] = input[i],input[input[i]-1] 
        else:
            i += 1
    # second scan to identify missing number:
    for i, elem in enumerate(input):
        if (i+1) != elem: return i+1
    return n+1        
def main():
    t1 =[1,2,0]
    t2 = [3,4,-1,1]
    t3 = [2,-9,5,11,1,-10,7]
    print(findmissing_best(t1))
    print(findmissing_best(t2))
    print(findmissing_best(t3))
    # print(findmissing_best(t2))
    return 0

if __name__ == "__main__":
    main()