class MaxStack:
    def __init__(self):
        self._data = []
        self._maxdata =[]

    def push(self,val:int) -> None:
        self._data.append(val)
        if self._maxdata:
            self._maxdata.append(max(val,self._maxdata[-1]))
        else:
            self._maxdata.append(val)

    def pop(self) -> int:
        if not self._data:
            return None
        self._maxdata.pop()
        return self._data.pop()

    def max(self) -> int:
        return self._maxdata[-1] if self._maxdata else None
    
    def __repr__(self) -> str:
        pass

def main():
    ms = MaxStack()
    ms.push(10)
    ms.push(20)
    print(ms.max())
    ms.push(12)
    print(ms.max())
    ms.push(25)
    print(ms.max())
    ms.pop()
    print(ms.max())
    ms.pop()
    print(ms.max())
    ms.pop()
    print(ms.max())
    ms.pop()
    print(ms.max())
if __name__ == "__main__":
    main()