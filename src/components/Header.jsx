import React,{Component, Fragment} from 'react';
import '../asset/style/header.css'
import Logo from '../asset/images/logo.jpg';
import image from '../asset/images/BE.jpg';




class Header extends Component {


    state = {

        showList: false 
    }

    onShow = () => {

        this.setState({showList: !this.state.showList});
        console.log('it worked');
    }
    
    render(){

                   const background = {

                    backgroundImage:`url(${image})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    height:"80vh",
                    width:"100%"
                    
                }
                        

       return(

        <header className='ultimate_container'>
            <nav className='nav_bar'>
                <div>

                    <img src={Logo} alt= 'enviscope logo' />

                </div>
                <div className='burger_bar'>
                    <i onClick={this.onShow} class="fa-solid fa-bars"></i>

                </div>

                  
               
                    <ul className='nav_list'>
                        <Fragment >

                            <a href='./App.js'><li>ACCUEIL</li></a>
                            <a href="#competences"><li>NOS COMPETENCES</li></a>
                            <a href='./References.js'><li>NOS RÉFÉRENCES</li></a>
                            <li>PROJET EN COURS</li>
                            <li>CONTACT</li>

                        </ Fragment>

                        </ul>

               
            
            </nav>

            <nav  className='nav_mobile'>
                    {this.state.showList ?(
                    <div className='list'>
                    <ul>
                        <li>ACCUEIL</li>
                        <li><a href="#competences">NOS COMPETENCES</a></li>
                        <li>NOS RÉFÉRENCES</li>
                        <li>PROJET EN COURS</li>
                        <li>CONTACT</li>


                    </ul>
                    </div>
                    ) :null}
                </nav>

                <section  style={background}   >
                    <div >
                    </div>

                </section>

            
        </header>

       )
    }
}

export default Header;