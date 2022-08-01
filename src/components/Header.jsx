import React,{Component, Fragment} from 'react';
import '../asset/style/header.css'
import Logo from '../asset/images/logo.jpg';
import image from '../asset/images/BE.jpg';
import {Link} from 'react-router-dom';




class Header extends Component {


    state = {

        showList: false 
    }

    onShow = () => {

        this.setState({showList: !this.state.showList});
    }
    
    constructor(props) {

        super(props)
    }
    render(){

                   const background = {

                    backgroundImage:`url(${image})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    height:"80vh",
                    width:"100wh"
                    
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

                        <li><Link to='/'>ACCUEIL</ Link></li>
                            <a href="#competences"><li>NOS COMPETENCES</li></a>
                            <li><Link to='/references'>REFERECNES</ Link></li>
                            <li><Link to='/projet'>PROJET EN COURS</ Link></li>
                            <a href="#contact"><li>CONTACT</li></a>

                        </ Fragment>

                        </ul>

               
            
            </nav>

            <nav  className='nav_mobile'>
                    {this.state.showList ?(
                    <div className='list'>
                    <ul>
                        <li><Link to='/'>ACCUEIL</ Link></li>
                        <li><a href="#competences">NOS COMPETENCES</a></li>
                        <li><Link to='/references'>REFERECNES</ Link></li>
                        <li><Link to='/projet'>PROJET EN COURS</ Link></li>
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