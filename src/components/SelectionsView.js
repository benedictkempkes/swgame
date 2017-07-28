import React from 'react';
import { Checkboxes } from './Checkboxes';

export class SelectionsView extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.currentQuestion}</p>
                <p>{this.props.possibleAnswers}</p>
                <Checkboxes answers={[1,2,3]}/>
            </div>
        );
    }
}