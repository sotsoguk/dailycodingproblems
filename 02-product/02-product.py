# Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

# For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

# Follow-up: what if you can't use division?

from typing import List


def product_pos(numbers: List) -> List:
    prefix: List[int] = [1]*len(numbers)
    postfix: List[int] = [1] * len(numbers)
    result: List[int] = [0] * len(numbers)
    # create prefix and postfix products
    for i in range(1, len(numbers)):
        prefix[i] = prefix[i-1] * numbers[i-1]
    for i in range(len(numbers)-2, -1, -1):
        postfix[i] = postfix[i+1] * numbers[i+1]

    for i in range(0, len(numbers)):
        result[i] = prefix[i]*postfix[i]
    return result


def main():
    test1: List[int] = [1, 2, 3, 4, 5]
    test2: List[int] = [3, 2, 1]
    
    assert product_pos(test1) == [120, 60, 40, 30, 24]
    assert product_pos(test2) == [2, 3, 6]


if __name__ == "__main__":
    main()
