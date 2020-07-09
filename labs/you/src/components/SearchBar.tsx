import React, {Component as Comp} from 'react';
import {SeacrhBarProps, SearchBarState} from './Types';


export default class extends Comp<SeacrhBarProps, SearchBarState> {


    constructor(props: SeacrhBarProps) {
        super(props);
        this.state = {
            term: props.dfltVl
        };
    }

    onInputChange(term: string) {
        this.setState({
            term
        });
        this.props.onSearchTermChange(term);
    }

    render() {
        return (<div className="search-bar">
            <input
                value={this.state.term}
                onChange={e => this.onInputChange(e.target.value)}
            />
        </div>);
    }
}
