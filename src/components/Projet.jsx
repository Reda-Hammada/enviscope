import React,{Component}  from 'react';
import { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from "axios";

class Projet extends Component { 


    constructor(props){

        super(props);

        this.state = {

            projects:[],
        }
    }

    componentDidMount(){

        let url = "https://enviscope.herokuapp.com/api/projet";

         axios.get(url)

         .then(res=>{

            this.setState({

                projects:res.data,
            })
        })
    }

    render () {
        const dataContainer = {

            width:"70%",
            backgroundColor:"whiteSmoke",
            padding:"2% 4%",
            marginLeft:"15%",
            marginTop:"2%",
            
            fontSize:"1.2rem"

        }

        const ultimateContainer  = {

            marginBottom:"5%",
        }

        const heading = {

                marginTop:"3%",
                fontSize:"2rem",
                color:"#002060",
                textAlign:"center",
                width:"100%",
        }

      
        return (
            
            <Fragment> 
                <Header />
                <section style={ultimateContainer}>
                    <h1 style={heading}>Projets en cours</h1>
                       
                        <div >
                        {this.state.projects.map((projet) =>(
                            <div style={dataContainer}>
                              
                                     <p>En cours: {projet.project}</p>
                               
                            </div>
                                  ))}
                        </div>


                  
                </section>
                <Footer />
            </Fragment>
        )
    }
}


export default Projet;