import React,{Component}  from 'react';
import Header from './Header';
import Footer from './Footer';
import { Fragment } from 'react';
import axios from 'axios';

class References extends Component { 

        constructor(props){
            super(props);
            this.state = {

                references:[],
            }
        }

        componentDidMount(){

            let url = "https://enviscope.herokuapp.com/api/reference/";

            axios.get(url)

            .then(response =>{

                this.setState({

                    references:response.data,
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
            
            <Fragment >
                <Header />
                <section style={ultimateContainer} >
                    <h1 style={heading}>Références</h1>
                    <div className="container">
                      
                    {this.state.references.map((reference) =>(

                                <div style={dataContainer}>
                                    <p>{reference.year}: {reference.reference}</p><br />
                                </div>
                    ))}


                    </div>  

                </section>
                <Footer />            

            </Fragment>
        )
    }
}


export default References;