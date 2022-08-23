import React,{Component} from 'react';
import '../asset/style/competence.css';
import Fragment from 'react';
import axios from 'axios';



class Competence extends Component {


    constructor(props){
        super(props);
        this.state = {

            competences:[],
        }
  
    }

    componentDidMount(){

        let url = "https://enviscope.herokuapp.com/api/competence/";
        
        axios.get(url)
    

        .then(response => {

            this.setState({

                competences: response.data,
            })
        })


    }

    render(){

        const competence = {

            ultimateContainer:{
                
                width:"100%",
                backgroundColor: "#002060",
             
              
             

            },

      
            heading:{

                color:"#fff",
                textAlign:"center",
                paddingTop:"2%",
                marginBottom:"4%",

            },


         

            paragraph:{

            },

          container:{

            display:"flex",
            justifyContent:"space-evenly",
            width:"90%",
            flexWrap:"wrap",
            marginRight:"auto",
            height:"fit-content",
            marginLeft:"auto"



          },

        

    }


    const subContainer ={

        width:"40%",
        backgroundColor:"#fff",
        borderRadius:"5px",
        paddingTop:"2%",
        paddingLeft:"2%",
        marginBottom:"10%",
        textAlign:"center"


        
      
    }

    const title = {

        marginBottom:"2%",
        color:"#002060",
       
    
    }

    const paragraph = {

        marginBottom:"5%",
        marginRight:"5%",
       
    }

    

        return (


                
            <section style={competence.ultimateContainer}>
                <h2 style={competence.heading}>NOS COMPETENCES</h2>

                <div style={competence.container}>

                    {
                        
                    this.state.competences.map(competence => 
                            <div style={subContainer}>
                                <h3 style={title} >{competence.title}</h3>   
                                <p style={paragraph}>{competence.body}</p>  
                            </div>                  

                    )}   
                </div>
            </section>



        );
    }
    
}

export default Competence;