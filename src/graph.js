import React, { Component } from 'react';
import Graph from "react-graph-vis";

const options = {
    layout: {
        hierarchical: false
    },
    edges: {
        color: "#000000"
    }
};

const events = {
    select: function(event) {
        var { nodes, edges } = event;
        console.log("Selected nodes:");
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
    }
};

class DollarGraph extends Component {

    graph = ()=>{
        let id = 0;
        return {
            nodes: this.props.weights.map(weight => {id++;return {id:id, label:weight, color:"#000000"};}),
            edges: [{from: 1, to: 2}]
        };
    };

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Graph graph={this.graph()} options={options} events={events} style={{ height: "640px" }} />

        );
    }
}

export default DollarGraph;