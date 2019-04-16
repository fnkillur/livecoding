import React, {Component} from 'react';
import './list.css';

class List extends Component {

    state = {
        isModify: -1
    }

    toggleItem(itemIndex) {
        this.setState({
            isModify: itemIndex
        });
    }

    renderItem() {
        return this.props.cards && this.props.cards.filter(val => val.listIndex === this.props.listIndex).map(com => {
            return (<div key={com.index} className={'item' + this.state.isModify === com.index && 'item-none' || ''} onClick={() => this.toggleItem(com.index)}>
                {!this.props.isFirst && <button
                    onClick={() => this.props.handleMove(this.props.listIndex - 1, com.index)}>＜</button>}
                {com.contents}
                {!this.props.isLast && <button
                    onClick={() => this.props.handleMove(this.props.listIndex + 1, com.index)}>＞</button>}
                <input type='text' className='item item-none'/>
            </div>);
        });
    }

    render() {
        return (
            <div className='list'>
                <section className='title'>{this.props.title}</section>
                <section className='item-list'>
                    {this.renderItem()}
                    <div className='item'>
                        <button onClick={() => this.props.handleAdd(this.props.listIndex)}>+</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default List;