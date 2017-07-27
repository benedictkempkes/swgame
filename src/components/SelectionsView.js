import React from 'react';

export class SelectionsView extends React.Component {
    render() {
        return (
            <p>{this.props.currentQuestion}</p>
        );
    }
}