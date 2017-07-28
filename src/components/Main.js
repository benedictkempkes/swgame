import React from 'react';
import $ from 'jquery';
import { QuestionsView } from './QuestionsView';
import { SelectionsView } from './SelectionsView';
import { AnswersView } from './AnswersView';

const Questions = {
        species: 'What species are you?',
        gender: 'What gender are you?',
        height: 'How tall are you?',
        mass: 'How much do you weigh?',
        birth_year: 'When were you born?',
        homeworld: 'Where were you born?',
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
            possibleAnswers: [],
            rightAnswer: {},
            data: []
        };
        this.chooseQuestion = this.chooseQuestion.bind(this);
        this.getData = this.getData.bind(this);
    }
    componentDidMount(){
        this.getData('https://swapi.co/api/people/', true);
    }
    
    chooseQuestion(newQuestion) {
        const answers = this.state.data.map((object) =>
            object[newQuestion]
        );
        console.log(answers);
        this.setState({
            currentQuestion: Questions[newQuestion]
        });
    }
    
    getData(url, start){
        const dataResult = [];
        if(url){
            $.getJSON(url, function(data){
                const newData = this.state.data;
                for(var i = 0; i<data.results.length; i++){
                    newData.push(data.results[i]);
                }
                
                this.setState({
                    data: newData,
                });
                this.getData(data.next, start);
            }.bind(this));
        }else{
            if(start){
                this.startGame();
            }
        }
    }
    
    startGame(){
        let random = Math.floor((Math.random() * this.state.data.length) +1);
        console.log(random);
        const rightAnswer = this.state.data[random-1];
        console.log(rightAnswer);
        this.setState({
            rightAnswer: rightAnswer
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
                    <SelectionsView currentQuestion={this.state.currentQuestion} possibleAnswers={this.state.possibleAnswers}/>
                </div>
                <div className="col-md-4">
                    <h3>Answers</h3>
                    <AnswersView />
                    <p></p>
                </div>
            </div>
        );
    }
}