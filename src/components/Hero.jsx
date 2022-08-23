import React,{Component} from 'react';
import '../asset/style/hero.css';
import axios from 'axios';


class Hero extends Component{

    constructor(props){

        super(props);

       this.state = {

            bienvenue:[],
        };

    }
        componentDidMount(){
            
            let url ="https://enviscope.herokuapp.com/api/bienvenue";

            axios.get(url)

            .then( response => {

                this.setState({ 

                    bienvenue:response.data
                
                });
            })

        }


        render(){

           
                const heroStyle = {

                    container: {
                    textAlign: 'center',
                    width: "100%",
                    height:"fit-content",
                    padding: "5% 5%",
                    backgroundColor:"whiteSmoke"
                

                    }, 


                    heroHeader: {

                        marginBottom:"3%",
                        fontWeight:"lighter",
                        fontSize:'2rem'
                    },

                    heroParagraph: {

                        width:"70%",
                        marginLeft:'auto',
                        marginRight:'auto',
                        fontSize:'1.4rem',

                    }


                
                }    
            
            return(

            <main>
                
               <section style={heroStyle.container} >
                <div>
                    <h1 style={heroStyle.heroHeader}>Bienvenue</h1>
                    <p style={heroStyle.heroParagraph}>

                        {
                            this.state.bienvenue
                            .map(bienvenue =>
                                
                                <p>{bienvenue.bien}</p>
                                
                                )
                        }
                    </p>
                </div>
               </section>
            </main>

            );
        }


}

export default Hero;
