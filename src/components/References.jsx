import React,{Component}  from 'react';
import Header from './Header';
import { Fragment } from 'react';

class References extends Component { 


    render () {

        const data = require('../references/references.json');
        console.log(data);
        

        return (
            <Fragment >
                <Header />
                <section >
                    <h1>Références</h1>
                    <div className="container">
                    </div>
                </section>
            </Fragment>
            
        )
    }
}


export default References;