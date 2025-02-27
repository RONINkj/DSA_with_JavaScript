class HashTable{
    constructor(size=7){
        this.dataMap=new Array(size)
    }
    _hash(key){
        let hash=0;
        for (let i = 0; i < key.length; i++) {
            hash=(hash+key.charCodeAt(i)*23)% this.dataMap.length;
        }
        return hash;
    }
    printTable() {
        for (let i = 0; i < this.dataMap.length; i++) {
            console.log(i, ": ", this.dataMap[i]);
        }
    }
    set(key,value){
        let index=this._hash(key);
        if(!this.dataMap[index]){
            this.dataMap[index]=[];
        }
        this.dataMap[index].push([key,value]);
        return this;
    }
}
function test() {
    let myHashTable = new HashTable();
    myHashTable.set('lumber',70);
    myHashTable.set('washers',70);
    myHashTable.set('bolts',70);
    myHashTable.printTable();  
}


test();

