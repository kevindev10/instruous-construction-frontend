import React,{Component} from 'react';
import './App.css';
import 'tachyons';

import Navigation from './components/Navigation/Navigation';
import SideNavbar from './components/SideNavbar/SideNavbar';
import BackDrop from './components/BackDrop/BackDrop';
import Home from './components/Home/Home'; 
import About from './components/About/About';
import Current from './components/Current/Current';
import Completed from './components/Completed/Completed';
import Tenders from './components/Tenders/Tenders';
import Careers from './components/Careers/Careers';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Ourpeople from './components/Ourpeople/Ourpeople';
import Awards from './components/Awards/Awards';
import Hseq from './components/Hseq/Hseq';
import Ourvalues from './components/Ourvalues/Ourvalues';
import Csr from './components/Csr/Csr';
import Currentone from './components/Currentone/Currentone';
import Currenttwo from './components/Currenttwo/Currenttwo';
import Completedone from './components/Completedone/Completedone';
import Completedtwo from './components/Completedtwo/Completedtwo';
import Completedthree from './components/Completedthree/Completedthree';
import Completedfour from './components/Completedfour/Completedfour';
import Completedfive from './components/Completedfive/Completedfive';









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
      <div className="center ">
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
          ? <Home/>
          :(
              this.state.route ==='about' 
              ? <About onRouteChange ={this.onRouteChange}/>
              : (
                  this.state.route ==='current' 
                  ? <Current/>
                  :(
                    this.state.route ==='completed'
                    ?<Completed/>
                    :(
                        this.state.route ==='tenders'
                        ? <Tenders/>
                        :(
                            this.state.route ==='careers'
                            ? <Careers/>
                            :(
                                this.state.route ==='contact'
                                ?<Contact/>
                                :(
                                  this.state.route ==='services'
                                  ?<Services onRouteChange ={this.onRouteChange} />
                                  :(
                                     this.state.route ==='ourpeople'
                                     ?<Ourpeople onRouteChange ={this.onRouteChange} />
                                     :(
                                      this.state.route ==='awards'
                                      ?<Awards onRouteChange ={this.onRouteChange} />
                                      :(
                                        this.state.route ==='hseq'
                                        ?<Hseq onRouteChange ={this.onRouteChange} />
                                        :(
                                          this.state.route ==='ourvalues'
                                          ?<Ourvalues onRouteChange ={this.onRouteChange}  />
                                          :(
                                            this.state.route ==='csr'
                                            ?<Csr onRouteChange ={this.onRouteChange}  />
                                            :(
                                              this.state.route ==='currentone'
                                              ?<Currentone />
                                              :(
                                                this.state.route ==='currenttwo'
                                                ?<Currenttwo  />
                                                :(
                                                  this.state.route ==='completedone'
                                                  ?<Completedone  />
                                                  :(
                                                    this.state.route ==='completedtwo'
                                                    ?<Completedtwo  />
                                                    :(
                                                      this.state.route ==='completedthree'
                                                      ?<Completedthree />
                                                      :(
                                                        this.state.route ==='completedfour'
                                                        ?<Completedfour  />
                                                        :(
                                                          this.state.route ==='completedfive'
                                                          ?<Completedfive />
                                                          :null
                                                          )
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                   )
                                 )
                               )
                          )
                      )
                    )
                )
            )
            

        }
        
         
        
              
      </div>
      );
  }
 
}
export default App;

/*
  

    OTHER COMPONENTS
    
    <Current/>
    <Completed/>
    <Tenders/>
    <Careers/>
    <Contact/>



  */


