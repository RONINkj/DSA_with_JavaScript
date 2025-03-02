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

    removeEdge(vert1,vert2){
        if (this.adjacencyList[vert1] && this.adjacencyList[vert2]) {
            this.adjacencyList[vert1]=this.adjacencyList[vert1].filter(v=>v!== vert2)
            this.adjacencyList[vert2]=this.adjacencyList[vert2].filter(v=> v!==vert1)
            return true
        }
        return false;
    }

}

function Test(){
    let myGraph=new Graph();
    
    myGraph.addVertex("A");
    myGraph.addVertex("B");
    myGraph.addVertex("C");
    myGraph.addEdge("A", "B");
    myGraph.addEdge("B", "C");
    myGraph.addEdge("C", "A");
    myGraph.printGraph();
    myGraph.removeEdge("A", "B");

    myGraph.printGraph();
    
}
Test();