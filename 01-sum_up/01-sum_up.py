# Given a list of numbers, return whether any two sums to k. For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

# Bonus: Can you do this in one pass?

from operator import truediv
from typing import List, Set


def sum_up(numbers: List, target: int) -> bool:
    # just use one pass
    seen: Set = set()
    for n in numbers:
        if (target - n) in seen:
            return True
        seen.add(n)
    return False

def main() -> int:
    test1 :List = [10,15,3,7]
    print(sum_up(test1,16))
    return 0


if __name__ == "__main__":
    main()
