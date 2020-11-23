import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SideNavbar from './components/SideNavbar/SideNavbar';
import BackDrop from './components/BackDrop/BackDrop';
import Banner from './components/Banner/Banner';
import About from './components/About/About';

import 'tachyons';

class App extends Component {
  constructor(){
    super()
    this.state={
        sideBarOpen: false,
        route:'home'
    }
  }


  handleSidebarOpen = () =>{
    this.setState({sideBarOpen:true})
  }

  handleSidebarClose = () =>{
    this.setState({sideBarOpen:false})
  }

  onRouteChange = (route) =>{
    this.setState({route:route})
  }

  render(){
     return (
      <div className="center">
         <Navigation open ={this.handleSidebarOpen} onRouteChange ={this.onRouteChange}/>
          {this.state.sideBarOpen 
              ? (
                  <div>
                    <BackDrop close={this.handleSidebarClose}/>
                  </div>
                )
              : null

          }
        <SideNavbar close={this.handleSidebarClose} sideBarOpen ={this.state.sideBarOpen} onRouteChange ={this.onRouteChange}/>
        {this.state.route ==='home'
          ? <Banner/>
          : <About/>

        }
         
         {
          /*
            <div>
           <h1 style ={{marginTop:'160px', marginLeft:'9px'}}>Hello React Devs...</h1>
         </div>
          */
         }
         
              
      </div>
      );
  }
 
}
export default App;

/*
    PART OF HOME
    
    <MissionStatement/>
    <Projects/>
    <MottoContactUs/>
    <Footer/>

    OTHER COMPONENTS
    
    <Current/>
    <Completed/>
    <Tenders/>
    <Careers/>
    <Contact/>



  */


