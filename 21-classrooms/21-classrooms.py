def calc_rooms(input):
    ts = []
    for i in input:
        ts.append((i[0],1))
        ts.append((i[1],-1))
    ts.sort(key=lambda x:x[0])
    max_rooms = 0
    curr_rooms = 0
    for i in ts:
        curr_rooms += i[1]
        max_rooms = max(max_rooms,curr_rooms)
    return max_rooms
        
    
def main():
    testdata = [(30,75),(0,50),(60,150)]
    print(calc_rooms(testdata))
    return



if __name__ == "__main__":
    main()