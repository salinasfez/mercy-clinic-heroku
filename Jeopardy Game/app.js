

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            url: 'http://jservice.io/api/random',
            score: 0,
            isRevealed: false
        }
    }
    handleRequest = () => {
        
        this.setState({url: this.state.url}, 
            () => {
                fetch(this.state.url).then(request => {
                    return request.json();
                }).then(json => {
                    this.setState({
                        value: json[0].value,
                        answer: json[0].answer,
                        question: json[0].question,
                        category: json[0].category.title
                        
                    })
                }), err => console.log(err)
            })

    }
    toggleQuestion = () => {
        this.setState({ showQuestion: !this.state.showQuestion })
    }
    render(){
        return(
            <React.Fragment>
                <h1>Welcome to Jeopardy!</h1> 
                <h3>Score: <span>{this.state.score}</span> </h3>
                <button id="decrease" onClick={() => this.setState({score: this.state.score - this.state.value})}>Decrease</button>
                <button id="increase" onClick={() => this.setState({score: this.state.score + this.state.value})}>Increase</button>
                <button id="reset" onClick={() => this.setState({score: 0})}>Reset</button> 
                <h3>Let's Play</h3>
                <button id="get-question" onClick={() => this.handleRequest(this.state.question)}>Get Question</button>
                <h3>Category: <span>{this.state.category}</span></h3>
                <h3>Points: <span>{this.state.value}</span></h3>  
                <h3>Answer: <span>{this.state.question}</span></h3>
                <button id="reveal" onClick={this.toggleQuestion}>Click to Reveal Question</button>
                {this.state.showQuestion ? <h3>What is {this.state.answer}</h3> : <h3>{!this.state.answer}</h3>}
                {/* <h3>What is {this.state.answer}</h3> */}
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)