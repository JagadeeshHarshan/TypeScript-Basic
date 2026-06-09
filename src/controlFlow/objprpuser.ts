const user = {name: "alice", age: 25, city: "delhi", active: true };

for (let key in user) {
    if (typeof user[key as keyof typeof user] ==="string") {console.log(`${key}: ${user[key as keyof typeof user]}`);}
}