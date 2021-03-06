import React from 'react';

class SearchBar extends React.Component {
    // Bellow Function Naming is community convection 
    // on (the element that change) (The event)
    // onInputChange(event){
    //     console.log(event.target.value)
    // }

  state = {term:'' }

  onFormSubmit = (event) => {
    event.preventDefault();
    // Invoking Callbacks in Children
    this.props.onSubmit(this.state.term)

  }

    render() {
      return (
        <div className="ui segment">
          <form onSubmit= {this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Image Search</label>
              {/* <input type="text" onChange={this.onInputChange} /> */}
              <input 
              type="text" 
              value={this.state.term} 
              onChange={(e) => this.setState({term: e.target.value})} 
              />

            </div>
          </form>
        </div>
      );
    }
  }

export default SearchBar;