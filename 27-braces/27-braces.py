from collections import deque
from typing import Deque, Dict


def braces(input:str) -> bool:
    # the empty string is well-formed
    if len(input) == 0:
        return True
    # the number of tokens has to be even
    if len(input) %2 == 1:
        return False
    para_map :Dict[str,str] = {'(':')','[':']','{':'}'}
    open_para:set[str] = set(para_map.keys())
    stack:Deque = deque()
    for t in input:
        if t in open_para:
            stack.append(t)
        else:
            # a closing brace is the current token, so 3 cases
            # 1. Stack is empty => illegal string
            # 2. Top element on Stack does not match => illegal string
            # 3. Top element matches => carry on
            if len(stack) == 0 or para_map[stack.pop()] != t:
                return False

    return False if len(stack) != 0 else True

def main():
    assert braces("([])") == True
    assert braces("([)]") == False
    assert braces("((()") == False

if __name__ == "__main__":
    main()