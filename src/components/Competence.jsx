import React,{Component} from 'react';
import Competences from "./Competences";
import '../asset/style/competence.css';



class Competence extends Component {

    render(){

        const competence = {

            ultimateContainer:{
            
                width:"100%",
            
                backgroundColor: "#002060",
             

            },

            container:{

                display:"flex",
                flexDirection:"row",
                width:"100%",
                justifyContent:"space-evenly",
                paddingTop:'5%',
            },

            heading:{

                color:"#FFF",
                textAlign:"center",
                paddingTop:"2%",
            }

          
    
        }

        return (

            <section style={competence.ultimateContainer}>
                <h2 style={competence.heading}>NOS COMPETENCES</h2>
                <div className='container'  style={competence.container}>
                    <Competences   title='Etudes d’impact sur l’environnement' paragraph = "Nous menons des études d'impact sur divers projets: Carrières, Abattoirs, Unités de trituration, Dragage des sables, etc. Quelle que soit le niveau de maturité de ces projets, on propose une cartographie environnementale adaptée à chaque typologie." />
                    <Competences title = "Cartographie numérique et SIG" paragraph="La définition des enjeux et des phénomènes environnementaux est largement facilitée par les outils de cartographie et de SIG." />
                    <Competences title ="Diagnostics et Etudes de Faisabilité" paragraph = "Nous conduisons des diagnostics et des études de faisabilité dans chacun de nos domaines d’expertise. Nous menons également des études sur les déchets, l’eau et l’assainissement, les sols, la pollution, les risques naturels, etc." />
                    <Competences title ="Formation et accompagnement" paragraph="Le renforcement des capacités des acteurs constitue un élément essentiel des processus de développement. Les actions de formation menées par notre équipe portent sur nos domaines de compétences, à savoir: Cartographie et SIG, Topographie, GPS, SMQ-SME, etc. " />
                </div>


            </section>





        );
    }
    
}

export default Competence;