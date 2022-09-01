from collections import deque
from typing import Deque, Optional


class Node:

    def __init__(self, val:int, left = None, right = None) -> None:
        self.val = val
        self.left = left
        self.right = right


def serialize_bt(node:Node) -> str:
    if node.right is None and node.left is None:
        return f"'{node.val}','None','None'"
    elif node.left is None and node.right is not None:
        return f"'{node.val}','None',{serialize_bt(node.right)}"
    elif node.left is not None and node.right is None:
        return f"'{node.val}',{serialize_bt(node.left)},'None'"
    else:
        return f"'{node.val}',{serialize_bt(node.left)},{serialize_bt(node.right)}"

def serialize(root:Node) -> str:
    return serialize_bt(root)

def deserialize_bt(node:Node, q:Deque[Node]) ->Node:
    left = q.popleft().strip("'")
    if left != "None":
        node.left = Node(left)
        node.left = deserialize_bt(node.left,q)
    right = q.pop().strip("'")
    if right != "None":
        node.right = Node(right)
        node.right = deserialize_bt(node.right,q)
    return node

def deserialize(s:str) -> Node:
    data = s.split(",")
    q = deque()
    for n in data:
        q.append(n)
    print(q)
    # print(q.pop().strip("'"))
    tree = Node((q.popleft().strip("'")))
    print(tree.val)
    return deserialize_bt(tree,q)
def main():
    root:Node = Node(1)
    root.left = Node(2,Node(3),Node(4))
    root.right = Node(5)
    tree_s = serialize(root)
    print(tree_s)
    tree_r = deserialize(tree_s)
    print(tree_r.left.val)

if __name__ == "__main__":
    main()