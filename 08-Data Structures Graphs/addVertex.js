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

}

function Test(){
    let myGraph=new Graph();
    console.log(myGraph.addVertex('A'));
    console.log(myGraph.addVertex('A'));     
    myGraph.printGraph();
    
}
Test();