/*
Data structures are fundamental concept in computer science that allow us to organize and manage data effciently.
Graphs are one of the most verstaile and widley used data structures .here;s an overview of graphs  and thair key concept.

----What is a Graph?
--A  graph is a collection of nodes (also called vertices) and edges that connect pairs of nodes .Graphs are used to reperesent network of all kinds, 
such as social networks, computer networks and tranportion systems.

----Key Concepts in Graphs
1-- vertices and edges :
-Vertex: A fundamental unit of graphs. it can represent an entity or an object.
-Edge: A connection between two vertices. it can be directed or undirected.

2-- Directed vs undirected Graphs:
-Undirected Graphs :The Edges have no orientation.the edge (u,v)is the same as (v,u).
-Directed Graphs(Digraph): The edges have a direction. the edge (u,v) is different from (u,v).

3--Weighted vs unweightedGraphs:
-Undweighted Graphs: all edges have the same weight(usually 1)
-weighted graphs: Edges have different wieght, represent costs or distances.

4--Degree of  a vetex:
-In an undirected graph,the degree of vertex is the number of edges connected to it.
-in a directed graphs, a vertex has  an in-degree(number of incoming edges ) and an out-degree(number of outgoing edges).

5-- Graph Representations:
-Adjacency Matrix: A 2D array where the cell at row i and column j indicates the presence (and possibly the weight) of an edge
between vertex i and vertex j.
-Adjacency List: An array or a hash map of linked lists. Each vertex has a list of adjacent vertices.

6--Graph Traversal Algorithms:
-Depth-First Search (DFS): Explores as far as possible along each branch before backtracking.
-Breadth-First Search (BFS): Explores all neighbors at the present depth before moving on to vertices at the next depth level.

7--Shortest Path Algorithms:

--Dijkstra's Algorithm: Finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative weights.
Bellman-Ford Algorithm: Finds the shortest path from a single source vertex to all other vertices in a weighted graph, handling negative weights.
--A Algorithm*: Uses heuristics to find the shortest path in a weighted graph, often used in pathfinding and game development.

8--Minimum Spanning Tree (MST):

--A subset of the edges that connects all the vertices together without any cycles and with the minimum possible total edge weight.
--Kruskal's Algorithm and Prim's Algorithm are commonly used to find the MST.

*/