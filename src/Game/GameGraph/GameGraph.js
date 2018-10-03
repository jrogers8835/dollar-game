import React, {Component} from 'react';
import Graph from "react-graph-vis";
import _ from 'lodash';

const options = {
    layout: {
        hierarchical: false
    },
    edges: {
        color: "#000000"
    }
};

class GameGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {graph: {nodes:[],edges:[]}};
    }

    componentDidMount(){
        this.setState({graph:this.graph()});
    }

    componentWillReceiveProps(){
        this.setState({graph:this.graph()});
    }

    events = {
        select: (event) => {
            var {nodes, edges} = event;
            console.log(event);
            console.log(nodes);
            console.log(edges);
            var currentGraph = this.state.graph;
            var newValue = `${(currentGraph.nodes[nodes[0]-1].label)-2}`;
            console.log(newValue);
            currentGraph.nodes[nodes[0]-1].label = newValue;
            this.setState({graph:currentGraph});
            console.log(currentGraph);
            console.log(this.state.graph);
            this.forceUpdate();
            console.log(this);-
        }
    };

    graph = () => {
        let {nodeCount} = this.props;
        let id = 0;
        let e =_.range(nodeCount)
            .map(number => {
                return {from: number, to: number+1};
            });
        e.push({from:nodeCount, to: 1});
        let runningTotal = 0;
        var returnObject ={
            nodes: _.range(nodeCount).map(() => {
                id++;
                var newWeight = _.random((0-(nodeCount)),nodeCount);
                runningTotal+=newWeight;
                return {id: id, label: `${newWeight}`, color: "#999999"};
            }),
            edges: e
        };

        runningTotal-=returnObject.nodes[nodeCount-1].label;

        returnObject.nodes[nodeCount-1].label=`${0-runningTotal+5}`;

        return returnObject;
    };

    render() {
        return (
            <Graph graph={this.state.graph} options={options} events={this.events} style={{height: "640px"}}/>

        );
    }
}

export default GameGraph;