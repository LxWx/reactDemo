import React from 'react';
import Headers from './view/headers'
// import bgImg from './view/bgImg'
import Search from './view/search'
import Footer from './view/footer'
export class App extends React.Component {
  render() {
    return (
      <div>
        <Headers></Headers>
        <Search></Search>
        <Footer></Footer>
      </div>
    )
  }
}
export default App;
