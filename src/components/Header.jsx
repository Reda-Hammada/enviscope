import React,{Component, Fragment} from 'react';
import '../asset/style/header.css'
import Logo from '../asset/images/logo.jpg';



class Header extends Component {


    state = {

        showList: false 
    }

    onShow = () => {

        this.setState({showList: !this.state.showList});
        console.log('it worked');
    }
    
    render(){


       return(

        <header>
            <nav className='nav_bar'>
                <div>

                    <img src={Logo} alt= 'enviscope logo' />

                </div>
                <div className='burger_bar'>
                    <i onClick={this.onShow} class="fa-solid fa-bars"></i>

                </div>

                  
               
                    <ul className='nav_list'>
                        <Fragment >
                            <li>ACCUEIL</li>
                            <li>NOS COMPETENCES</li>
                            <li>NOS RÉFÉRENCES</li>
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
                        <li>NOS COMPETENCES</li>
                        <li>NOS RÉFÉRENCES</li>
                        <li>PROJET EN COURS</li>
                        <li>CONTACT</li>


                    </ul>
                    </div>
                    ) :null}
                </nav>

            
        </header>

       )
    }
}

export default Header;