import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';

// use class if you need to introduce state or if you need lifecycle methods of component
class App extends React.Component {
  state = { 
    pageHeader: 'Naming Contests',
    contests: []
  };
  componentDidMount() {
    // ajax ...
    axios.get('/api/contests')
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error)

  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>  
    );
  };
};

export default App;