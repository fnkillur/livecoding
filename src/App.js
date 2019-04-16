import React, {Component} from 'react';
import './App.css';
import List from './components/List';

class App extends Component {

    state = {
        list: [{index: 0, title: 'A'}, {index: 1, title: 'B'}, {index: 2, title: 'C'}, {index: 3, title: 'D'}],
        cards: [],
        cardIndex: 0
    }

    handleAdd(listIndex) {
        let contents = prompt('내용을 입력하세요.');
        this.setState({
            cards: [...this.state.cards, {index: this.state.cardIndex, listIndex, contents}],
            cardIndex: this.state.cardIndex + 1
        });
    }

    handleMove(listIndex, cardIndex) {
        let changeCard = {
            index: cardIndex,
            listIndex,
            contents: this.state.cards.find(val => val.index === cardIndex).contents
        };

        this.setState({
            cards: [...this.state.cards.filter(val => val.index !== cardIndex), changeCard]
        });
    }

    render() {
        return (
            <div className="App">
                {this.state.list.map((com, i) => {
                    return <List
                        key={com.index}
                        title={com.title}
                        listIndex={com.index}
                        cards={this.state.cards}
                        handleAdd={this.handleAdd.bind(this)}
                        isFirst={i === 0}
                        isLast={i === this.state.list.length - 1}
                        handleMove={this.handleMove.bind(this)}
                    />
                })}
            </div>
        );
    }
}

export default App;
