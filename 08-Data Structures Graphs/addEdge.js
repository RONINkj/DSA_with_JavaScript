class Graph{
    constructor(){
        this.adjacencyList={};
    }
    printGraph() {
        if (Object.keys(this.adjacencyList).length !== 0) {
            console.log("{");
            for (const [key, value] of Object.entries(this.adjacencyList)) {
                console.log(" ", `${key}: ${value}`);
            }
            console.log("}");
        } else {
            console.log("{}");
        }
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
            return true;
        }
        return false;
    }
    addEdge(vert1,vert2){
        if(this.adjacencyList[vert1] && this.adjacencyList[vert2]){
            this.adjacencyList[vert1].push(vert2);
            this.adjacencyList[vert2].push(vert1);
            return true;
        }
        return false;
    }

}

function Test(){
    let myGraph=new Graph();
    console.log(myGraph.addVertex(1));
    console.log(myGraph.addVertex(2));
    console.log(myGraph.addEdge('1','2'));     
    myGraph.printGraph();
    
}
Test();