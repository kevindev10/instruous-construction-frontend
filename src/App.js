import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SideNavbar from './components/SideNavbar/SideNavbar';
import BackDrop from './components/BackDrop/BackDrop';

import 'tachyons';

class App extends Component {
  constructor(){
    super()
    this.state={
        sideBarOpen: false
    }
  }


  handleSidebarOpen = () =>{
    this.setState({sideBarOpen:true})
  }

  handleSidebarClose = () =>{
    this.setState({sideBarOpen:false})
  }


  render(){
     return (
      <div className="center">
         <Navigation open ={this.handleSidebarOpen}/>
          {this.state.sideBarOpen 
              ? (
                  <div>
                    <BackDrop close={this.handleSidebarClose}/>
                  </div>
                )
              : null

          }
        <SideNavbar close={this.handleSidebarClose} sideBarOpen ={this.state.sideBarOpen}/>
         
         <div>
           <h1 style ={{marginTop:'160px', marginLeft:'9px'}}>Hello React Devs...</h1>
         </div>
              
      </div>
      );
  }
 
}
export default App;

/*
  
    <Banner/>
    <MissionStatement/>
    <Projects/>
    <MottoContactUs/>
    <Footer/>
  */


