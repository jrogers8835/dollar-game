import React, { Component } from 'react';
import GameGraph from '../GameGraph/GameGraph.js';
import _ from 'lodash';

class GameBoard extends Component {
    constructor(props){
        super(props);
        this.state = {weights:[1,2,3,4,5], nodeCount:1};
    }

    handleClick() {
        this.setState({weights:[]});
        let workingWeights=[];
        // =this.state.weights;
        // workingWeights.push(_.random(0,100));
        let nodesCount = _.random(0,10);
        let money = nodesCount*2;
        for(let i=0; i< nodesCount; i++){
            workingWeights.push(i);
        }
        this.setState({weights:workingWeights});
        this.setState({nodeCount:nodesCount});
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.handleClick(this.state.weights)}>test</button>
                <GameGraph weights={this.state.weights} nodeCount={this.state.nodeCount}></GameGraph>
            </div>
        );
    }
}

export default GameBoard;