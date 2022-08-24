def rle_encode(input: str) -> str:
    if not input:
        return ""
    curr_char = input[0]
    prev_char = ''
    cnt = 1
    output = []
    for i in range(1, len(input)):
        prev_char = curr_char
        curr_char = input[i]
        if prev_char == curr_char:
            cnt += 1
        else:
            output.append(str(cnt)+prev_char)
            cnt = 1
    output.append(str(cnt)+curr_char)
    return "".join(output)


def rle_decode(input: str) -> str:
    output = []
    cnt = 0
    for c in input:
        if c.isdigit():
            cnt = cnt * 10 + int(c)
        else:
            output.append(c*cnt)
            cnt = 0

    return "".join(output)


def main():
    t1 = rle_encode("AABBBCCD")
    print(rle_decode(t1))


if __name__ == "__main__":
    main()
