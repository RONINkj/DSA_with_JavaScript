/*
----Hash Tables

--A hash table is a data structure that provides efficient key-value pair storage and retrieval.It uses a hash function to 
compute an index into an array of buckets or slots, from which the desired value can be found. Here's a basic overview of how hash tables work:

--Hash Function:
This function takes a key as input and produces a hash code, which is then used to determine the index in the array where the value should be stored.

--Buckets/Slots: The array where the data is stored. Each slot can hold a key-value pair.

--Collision Handling: Since multiple keys can hash to the same index, hash tables need a strategy to handle collisions. Common methods include:

--Chaining: Each slot contains a linked list of entries that hash to the same index.
--Open Addressing: If a collision occurs, the algorithm searches for the next available slot using a probing sequence.
----Operations:

--Insertion: Add a key-value pair to the hash table.
--Deletion: Remove a key-value pair from the hash table.
--Lookup: Retrieve the value associated with a given key.
--Performance: Hash tables offer average-case constant time complexity, O(1), for insertion, deletion, and lookup operations. However,
in the worst case, these operations can degrade to O(n) if many collisions occur.


----Collisions
in hash tables occur when two different keys hash to the same index in the underlying array. Since hash tables rely on the hash function to 
map keys to indices, collisions are inevitable due to the limited number of indices compared to the possible number of keys. Here are some common 
strategies to handle collisions:

--Chaining:

Each slot in the hash table contains a linked list (or another data structure like a binary search tree) of entries that hash to the same index.
When a collision occurs, the new key-value pair is added to the list at that index.
This method is simple to implement but can lead to increased memory usage if many collisions occur.

--Open Addressing:

All entries are stored in the array itself. When a collision occurs, the algorithm searches for the next available slot using a probing sequence.
-Common probing techniques include:
--Linear Probing: Sequentially checks the next slot until an empty one is found.

--Quadratic Probing: Checks slots at a quadratic interval (e.g., 1, 4, 9 slots away).
--Double Hashing: Uses a second hash function to determine the interval for probing.

-Open addressing can be more space-efficient than chaining but may suffer from clustering, where multiple keys hash to the same cluster of slots.

--Rehashing:
When the load factor (the ratio of the number of entries to the number of slots) exceeds a certain threshold, the hash table is resized, and all 
entries are rehashed into the new table.
This helps maintain the efficiency of the hash table by reducing the number of collisions.

--Perfect Hashing:
-Uses a two-level hashing scheme to ensure that there are no collisions.
-The first hash function maps keys to secondary hash tables, and the second hash function maps keys to slots within those tables.
-This method guarantees constant time complexity for lookups but is more complex to implement.

*/ 