import React from 'react';

export class QuestionsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e){
        const target = e.target.value;
        this.props.chooseQuestion(target);
    }
    render() {
        const data = Object.getOwnPropertyNames(this.props.data);
        const dataItems = data.map( (value, index) => 
            <button value={value} key={index} onClick={this.handleClick}>{value}</button>
        );
        return (
            <div className="questions">
                <h3>Select a question</h3>
                <div className="btn-group">
                    {dataItems}
                </div>
            </div>
        );
    }
}