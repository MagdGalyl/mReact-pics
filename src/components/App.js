import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
  state = { images : [] };

  onSearchSubmit = async (term) => {
    //console.log(term) // this is the term in SearchBar State

    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params: { query: term },
      headers:{
        Authorization: 'Client-ID l2Ze-91PBtcuM7Qvnepu2BfWGG_aD_WSBb__cj706mw'
      }
    });
    // console.log(this);
    this.setState({ images: response.data.results });

    // NORMAL PROMISE METHOD without Async
    // .then((response) => {
    //   console.log(response)
    //   console.log(response.data.results)
    // })
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        {/* {We can call above onSubmit anything it a PROP} */}
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;