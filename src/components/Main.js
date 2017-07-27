import React from 'react';
import $ from 'jquery';
import { QuestionsView } from './QuestionsView';
import { SelectionsView } from './SelectionsView';
import { AnswersView } from './AnswersView';

const Questions = {
        age: 'How old are you?',
        height: 'How tall are you?',
        mass: 'How much do you weigh?',
        birth_year: 'When were you born?',
        gender: 'What gender are you?',
        homeworld: 'Where were you born?',
        species: 'What species are you?',
        hair_color: 'What hair color do you have?',
        skin_color: 'What skin color do you have?',
        eye_color: 'What eye color do you have?',
        films: 'Do you play in this movie?'
};

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 'Select a question!',
            data: []
        };
        this.chooseQuestion = this.chooseQuestion.bind(this);
    }
    
    componentDidMount(){
        $.getJSON('https://swapi.co/api/people/', function(data){
            console.log(data.results);
        });
    }
    
    chooseQuestion(newQuestion) {
        this.setState({
            currentQuestion: Questions[newQuestion]
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <QuestionsView data={Questions} chooseQuestion={this.chooseQuestion}/>
                </div>
                <div className="col-md-4">
                    <h3>Questions</h3>
                    <SelectionsView currentQuestion={this.state.currentQuestion}/>
                </div>
                <div className="col-md-4">
                    <h3>Answers</h3>
                    <AnswersView />
                    <p>{this.state.data}</p>
                </div>
            </div>
        );
    }
}