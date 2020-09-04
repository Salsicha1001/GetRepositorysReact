import React from 'react';
import axios from 'axios';
import Item from '../components/item'

class Search extends React.Component {
    constructor(props) {
      super(props);
        this.state={
            data:[],
            user:'',
            img:''
        } 
      
    }
  
  
    handleSubmit=()=> {
      let user = document.getElementById("name").value
      if(user !== ''){
          axios.get(`https://api.github.com/users/${user}/repos`).then(({data})=>{
        this.setState({data:data, img:data[0].owner.avatar_url, user:data[0].owner.login})
       // console.log(this.state)  
    }).catch((err)=>{
      alert("Digite um usuario valido")
    })
  }else{
    alert("Digite um usuário")
  }
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
    
    render() {
     
        const {data}=this.state
        const user = this.state.user
        const img =this.state.img

      return (
          <div style={{ textAlign:'center'}} >
            <h2>Lista de Repositórios por usuários</h2>
                  <input type='text' onChange={this.myChangeHandler} id="name"/>
                  <button type='button' onClick={this.handleSubmit} >Procurar</button>
                 <h3 style={{marginLeft:'-68%', position:"relative"}}>{user}</h3>
                 <img src={img} alt="" style={{marginLeft:'-68%', borderRadius:'50%', width:'20%', position:'relative'}}></img>
                 <div style={{ marginTop:'-25%'}}>
                  {data.map(item=><Item key={item.id} {...item}></Item>)}
                  </div>
            
          </div>

      );
    }
  
  }
  
  export default Search;