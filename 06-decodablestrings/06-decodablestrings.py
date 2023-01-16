# from typing import str
def decode(input:str) -> int:
    n = len(input)
    count = [0 for _ in range(n+1)]
    count[0] = 1
    count[1] = 1
    for i in range(2,n+1):
        count[i] = 0
        if input[i-1] > '0':
            count[i] = count[i-1]
        if input[i-1] == '1' or (input[i-1] == '2' and input[i-2] <'7'):
            count[i] += count[i-2]
    return count[n]
def main():
    print(decode("11111"))

if __name__ == "__main__":
    main()