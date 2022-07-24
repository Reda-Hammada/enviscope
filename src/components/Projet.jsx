import React,{Component}  from 'react';
import { Fragment } from 'react';
import Header from './Header';


class Projet extends Component { 


    render () {
        const data = require('../references/projet.json');
        console.log(data);
        return (

            <Fragment> 
                <Header />
                <section className="ultimateContainer">

                </section>
            </Fragment>
        )
    }
}


export default Projet;