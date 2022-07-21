import React,{Component} from 'react';
import '../asset/style/hero.css';


class Hero extends Component{

    

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
                        fontSize:'1.6rem'
                    },

                    heroParagraph: {

                        width:"70%",
                        marginLeft:'auto',
                        marginRight:'auto'

                    }


                
                }    
            
            return(

            <main>
                
               <section style={heroStyle.container} >
                <div>
                    <h1 style={heroStyle.heroHeader}>Bienvenue</h1>
                    <p style={heroStyle.heroParagraph}>

                        Nous réalisons pour vous un projet personnalisé et sur mesure dont vous resterez seul décideur à tous stade d’avancement du projet.

                    </p>
                </div>
               </section>
            </main>

            );
        }


}

export default Hero;
