import React,{Component}  from 'react';
import Header from './Header';
import Footer from './Footer';
import { Fragment } from 'react';

class References extends Component { 


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

        const data = require('../references/references.json');

        return (
            <Fragment >
                <Header />
                <section style={ultimateContainer} >
                    <h1 style={heading}>Références</h1>
                    <div className="container">
                      
                    {data.map((reference) =>(

                                <div style={dataContainer}>
                                    <p>{reference}</p><br />
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