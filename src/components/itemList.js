import React from 'react';
import Item from "./Item";
import axios from 'axios';

export default class itemList extends React.Component {

  constructor(){
    super()
    this.espanol = [];
  }
  
  
  state ={
    dataEs: []
  };
  
  
  async obtenerJsonEs() {
    if(navigator)
    await fetch(`https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/e2bc20df02828d297f99558551e37959ac97a6f8/pokemon-es.json`)
          .then(res => res.json())
          .then(dataEs=>{
            this.espanol = dataEs
            this.setState({dataEs})
            if(this.espanol.length > 0){
              localStorage.setItem('pokeEsp', this.espanol)
            }
            
          } )
  };



  render() {
    if(this.state.dataEs.length == 0){
      this.obtenerJsonEs();
    }
    //this.obtenerJsonEs();
    //console.log(this.state.dataEs)
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Height</th>
              <th scope="col">Weight</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
              {this.state.dataEs.map( (e,i) => <Item key={i} item={e}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}
