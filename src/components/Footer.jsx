import React,{Component} from 'react';

class Footer extends Component {

    render() {

        const footer = {

            backgroundColor:"#002060",
            color:"#FFF",
            display:"flex",
            justifyContent:"space-around",
            witdth:"100%",
            flexWrap:"wrap",
            
            height:"fit-content",

        }


        const map = {

            width:"5%",
            marginTop:"5%",
            marginRight:"20%",
            marginBottom:"5%",

        }

        const assist = {
            marginTop:"5%",
            textAlign:"center",

        }

        const competences = {
            marginTop:"5%",
        }

        const list = {

            listStyleType:"none",
            textAlign:"start",
            paddingTop:"2%",
        }
        return(
            <footer style={footer}>
                <div  style={assist}>
                    <h4>Assitance</h4>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>


                </div>
                <div style={competences}>
                    <h4>Compétences</h4>
                    <ul style={list}>
                        <li>Etudes d’impact sur l’environnement</li>
                        <li>Cartographie numérique et SIG</li>
                        <li>Diagnostics et Etudes de Faisabilité</li>
                        <li></li>
                    </ul>

                </div>
                <div style={map} >
                    <iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=35.773578,-5.810921&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>

            </footer>


        );
    };
}


export default Footer;