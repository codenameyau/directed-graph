directed-graph
==============

node package for weighted directed graphs

###Installation

`npm install directed-graph --save`


##Quickstart

```javascript
var Graph = require('directed-graph');

// Either initialize and fill an empty graph
var graphA = new Graph();
graphA.addVertex('A');
graphA.addVertex('B');
graphA.addVertex('C');
graphA.addEdge('A', 'B');
graphA.addEdge('A', 'C');
graphA.addEdge('B', 'A');
graphA.addEdge('B', 'C');
graphA.addEdge('C', 'A');
graphA.addEdge('C', 'B');

// Or predefine a new graph
var graphB = new Graph({
  'A': ['B', 'C'],
  'B': ['A', 'C'],
  'C': ['A', 'B'],
});

// Both graphA and graphB function the same
graphA.setWeight('A', 'B', 10);
graphA.setWeight('B', 'A', 10);
graphA.addVertex('D');
graphA.addEdge('A', 'D');
console.log(graphA.pathExists('B', 'D'));
```

##Running Tests
Make sure to have mocha installed: `npm install -g mocha`

In project root directory, run: `mocha test`
