import React from 'react'
import Header from './Header';
import MemeGenerator from './MemeGenerator';

class App extends React.Component{

    render(){
        return(
            <h1>
                <Header/>
                <MemeGenerator/>
            </h1>
        )
    }
}

export default App;