import React from 'react';
import SearchBar from './SearchBar';


class App extends React.Component {
  onSearchSubmit(term){
    console.log(term)
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        {/* {We can call above onSubmit anything it a PROP} */}
      </div>
    );
  }
}

export default App;