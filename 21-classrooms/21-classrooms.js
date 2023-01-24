let classrooms = (tt) =>{
    let rooms ={}
    for (let [s,e] of tt){
        if (! (s in rooms)) rooms[s] = 0;
        rooms[s] += 1;
        if (! (e in rooms)) rooms[e] = 0;
        rooms[e] -= 1;
    }
    const sortObject = o => Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {})
    console.log(sortObject(rooms));
    let maxRooms =0, currRooms = 0;
    let vals = Object.values(sortObject(rooms));
    
    vals.forEach((v) =>{
        currRooms += v;
        maxRooms = Math.max(maxRooms,currRooms);
    })
    return maxRooms;
    
}


let test = [[30,75],[0,50],[60,150]]
console.log(classrooms(test));

// let t1 = {'1':0,'2':1};

// console.log(t1[2]+=1);