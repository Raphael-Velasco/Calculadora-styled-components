import React, {Component} from 'react'
import styled from "styled-components";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
`;
const Div = styled.div`
  height:100vh;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  background-color:green;

`
const Input = styled.input`
  border-radius:10px 10px 10px 10px;

` 
const Button = styled.button`
border-radius:10px 10px 10px 10px;

`

class calculator extends Component{

  state = {
    n1: "",
    n2: "",
    result:0
  }

  minus = () => {
    let{n1, n2} = this.state
    if((n1 && n2) !== (null || "")){
      this.setState({
        result: n1 - n2,
        sinal:"-"
      })
    }else{
      this.setState({
        result: "Digite um valor nos inputs"
      })
    }
  }
  add = () => {
    let{n1, n2} = this.state
    if((n1 && n2) !== (null || "")){
      this.setState({
        result: n1 + n2,
        sinal:"+"
      })
    }else{
      this.setState({
        result: "Digite um valor nos inputs"
      })
    }
  }
  mult = () => {
    let{n1, n2} = this.state
    if((n1 && n2) !== (null || "")){
      this.setState({
        result: n1 * n2,
        sinal:"*"
      })
    }else{
      this.setState({
        result: "Digite um valor nos inputs"
      })
    }
  }

  div = () => {
    let{n1, n2} = this.state
    if((n1 && n2) !== (null || "")){
      this.setState({
        result: n1 / n2,
        sinal:"/"
      })
    }else{
      this.setState({
        result: "Digite um valor nos inputs"
      })
    }
}
  clear = () => {
    let {n1, n2} = this.state
    if((n1 && n2) !== (null || "" || 0)){
      this.setState({
        result: 0,
        n1: "",
        n2: "",
        sinal:""
      })
    }
  }
  handleChangeN1 = (event) => {
    this.setState({
      n1: Number( event.target.value),
    })
  }
  handleChangeN2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    })
  }

  render() {
    let {result, n1, n2, sinal} = this.state
    return(
      <Div className="container">
        <h1>React Calc App</h1>
        <h3>{result}</h3>
        <Input value={n1} onChange={this.handleChangeN1}   type="number" name="number 1"/>
        <h3>{sinal}</h3>
        <Input value={n2} onChange={this.handleChangeN2}  type="number" name="number 2"/>
        <div className="container2">
        <Button onClick={this.minus}>-</Button>
        <Button onClick={this.mult}>*</Button>
        <Button onClick={this.add}>+</Button>
        <Button onClick={this.div}>/</Button>
        <Button className="clear" onClick={this.clear}>Limpar</Button>
        </div>
      </Div>
    )
  }
}

    
  

export default calculator