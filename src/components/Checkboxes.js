import React from 'react';

export class Checkboxes extends React.Component {
    render() {
        const possibleAnswers = this.props.answers;
        return (
            <div>
                <p>{possibleAnswers[0]}</p>
            </div>
        );
    }
}