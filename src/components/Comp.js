import React,{Component} from 'react';


class Comp  extends Component {


    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
          
        };
    }

    componentDidMount(){

    fetch("http://localhost/enviscope-dashboard/api/competence")


    .then((res)=> res.json())
    .then((json)=>{

        this.setState({
            items: json,
        });
    })

    console.log(this.state);
}
    render(){
            const {items} = this.state;
       return (

            items.map((item) =>(

                <div>

                    <p>{item.body}</p>
                </div>
                )
            )
           
       )
    }
}

export default Comp; 