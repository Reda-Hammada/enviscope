import React,{Component} from 'react';
import '../asset/style/competences.css'


class Competences  extends Component {


  

    render(){

        const  competenceContainer = {

            container:{
            width: "40%",
            marginRight:"1.8%",
            marginBottom:"5%",
            backgroundColor:"#FFF",
            borderRadius:"5px",
            padding:'3% 1%',
            marginLeft:"4%",
            fontSize:"1rem",
            textAlign:"start",
            


        },

        heading:{

            paddingBottom:"6%",
            fontSize:"1.2rem",
            color:"#002060",

        },

        paragraph:{
            fontSize:"1rem",
        }

    }

        return (

                <div id="competences"  className='container'style={competenceContainer.container}>
                       <h3 className='heading3' style={competenceContainer.heading}>{this.props.title}</h3>
                        <p style={competenceContainer.paragraph}>{this.props.paragraph}</p>
                </div>
             
                

        )
    }
}


export default Competences; 