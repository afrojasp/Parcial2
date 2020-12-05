import React from 'react';



export default class Item extends React.Component {

  	render() {
  		return (
  			<tr>
  				<th scope="row">{this.props.item.id}</th>
      			  <td><img src={this.props.item.ThumbnailImage}/></td>
                  <td>{this.props.item.name}</td>
                  <td>{this.props.item.description}</td>
                  <td>{this.props.item.height}</td>
                  <td>{this.props.item.weight}</td>
                  <td>{this.props.item.type}</td>
                  
  				
  			</tr>
  		);
	}
}