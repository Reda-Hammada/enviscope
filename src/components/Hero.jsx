import React,{Component} from 'react';
import image from '../asset/images/eng.jpg';
import '../asset/style/hero.css';


class Hero extends Component{

 

        render(){

           
            const imageStyle = {

                backgroundImage:`url(${image})`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"contain",
                height:"100vh",
                width:"100wh"
                
                
            }
            const container = {

                
            }

            return(

            <main>
                <section  style={imageStyle}   >
                    <div >

                    </div>

                </section>
            </main>

            );
        }


}

export default Hero;
