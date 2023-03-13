import React, { Component } from 'react'
import './style.css'

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allRandomImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.generateMeme = this.generateMeme.bind(this)
    }
    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name]: value
        })
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response=>{
            const {memes} = response.data
            console.log(memes[0])
            this.setState({
                allRandomImgs: memes
            })
        })
    }
    generateMeme(event){
        event.preventDefault()
        
        const randImg = Math.floor(Math.random() * this.state.allRandomImgs.length)
        this.setState({
            randomImg: this.state.allRandomImgs[randImg].url
        })
    }
    render(){
        return(
            <div>
                <form className='meme-form'>
                    <input name="topText" type="text" value={this.state.topText} onChange={this.handleChange}/>
                    <input name="bottomText" type="text" value={this.state.bottomText} onChange={this.handleChange}/>
                    <button onClick={this.generateMeme}>Gen</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImg} />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}
export default MemeGenerator