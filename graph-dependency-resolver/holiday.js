

const routes = require('./data.js')

class Holiday {
    constructor(routes) {
        this.routes = routes
    }
    
    makeGraph(planToSolve) {
        const currentPlan = this.routes[planToSolve]
        let graph = []

        for(var destination in currentPlan) {
            const dependencies = currentPlan[destination];
            // if dependencies exist
            if (dependencies.length !== 0) {
                // check if dependent was added already
                const index = graph.findIndex((x) => x === destination)
                if (index !== -1) {
                    // if so, add the dependency before that
                    graph.splice(index, 0, dependencies[0])
                }              
                if (graph.indexOf(dependencies[0]) === -1) {
                    // add dependency even if destination was not added yet
                    graph.push(dependencies[0])
                }
            }
            
            if (graph.indexOf(destination) === -1) {
                // because you'll add that in this step
                graph.push(destination)
            }
        }
        console.log(graph)
    }
}

const test = new Holiday(routes);
test.makeGraph("test1");
test.makeGraph("test2");
test.makeGraph("test3");
test.makeGraph("test4");

module.exports = Holiday;