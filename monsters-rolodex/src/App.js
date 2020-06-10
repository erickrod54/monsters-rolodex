import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component{
constructor(){
    super();

    this.state = {
      monsters: [], 
      searchField: '' 
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

/**escribimos este metodo de 'handleChange' -que detecta
 * cambios en un input- porque vemos la oportunidad
 * de que puede ser utilizado mas de una vez en distintos
 * lugares -code stay dry-
 */

handleChange = (e) => {
  /**arrow function -' => '- tiene la caracteristica
   * de traernos las propiedades del contexto en el
   * que fueron escritas -para nuestro caso 'searchField'
   * - y ejecutar la funcionalidad que le pedimos-para 
   * nuestro caso 'setState'-
   */
  this.setState({searchField:e.target.value });
};

render(){

const { monsters, searchField} = this.state

const filterMonsters = monsters.filter(monsters =>
  monsters.name.toLowerCase().includes(searchField.toLowerCase())
  );

    return (
      <div className="App">
            <h1> Monsters Rolodex </h1>
            <SearchBox
              placeholder='search monsters'
              handleChange= {this.handleChange}
            />
        <CardList monsters = {filterMonsters} />
      </div>
    );
  }
}

export default App;