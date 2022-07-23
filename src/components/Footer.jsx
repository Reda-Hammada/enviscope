import React,{Component} from 'react';

class Footer extends Component {

    render() {

        const footer = {

            backgroundColor:"#002060",
            color:"#FFF",
            height:"fit-content",
            width:"100%",
          
        }

        const container = {

            display:"flex",
            justifyContent:"space-around",
            width:"90%",
            flexWrap:"wrap",

           
        }


        const map = {

            width:"5%",
            marginTop:"5%",
            marginRight:"30%",
            marginBottom:"5%",
            

        }

        const assist = {
            marginTop:"5%",
            width:"30%",

        }

        const competences = {
            marginTop:"5%",
            width:"30%",

        }

        const list = {

            listStyleType:"none",
            textAlign:"start",
            paddingTop:"4%",
        }

        const li = {

            paddingTop:"2%",
        }
        return(
            <footer style={footer}>
                <div style={container}>
                    <div  style={assist}>
                        <h4>Assitance</h4>
                        <ul style={list}>
                            <li style={li}>Accueil</li>
                            <li style={li}>Références</li>
                            <li style={li}>Projet en cours</li>
                            
                        </ul>


                    </div>
                    <div style={competences}>
                        <h4>Compétences</h4>
                        <ul style={list}>
                            <li style={li}>Etudes d’impact sur l’environnement</li>
                            <li style={li}>Cartographie numérique et SIG</li>
                            <li style={li}>Diagnostics et Etudes de Faisabilité</li>
                            <li style={li}>Formation et accompagnement</li>
                        </ul>

                    </div>
                    <div style={map} >
                        <iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=35.773578,-5.810921&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>

            </footer>


        );
    };
}


export default Footer;