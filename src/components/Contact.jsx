import React,{Component, Fragment} from 'react';
import phone from '../asset/images/phone.png';
import email from '../asset/images/email.png';
import fax from '../asset/images/fax.png';
import address from '../asset/images/adress.png';

class Contact extends Component{
    
    render(){

        const contact = {

            ultimateContainer : {

                backgroundColor :"#fff",
                marginBottom:"5%"

            },


            heading: {
                fontSize: "2rem",
                marginBottom: "1%",

            },

            paragraph:{

                fontSize: "1.3rem",


            },

            headpara: {

                textAlign:"center",
                width:"100%",
                marginTop:"4%",
                color:"#002060",
                paddingBottom:'4%',
            },

            contactsContainer : {
                width:"100%",
                flexWrap:"wrap",
                display:"flex",
                textAlign: "center", 
                justifyContent:"space-evenly"
            },

            img :{

                


            }
            , 


            a:{

                textDecoration:"none",
                color:"#002060"
            }
            , contacts: {

                width:"40%",
                marginTop:"2%",

            }

            ,contactsHeadPara : {
                paddingTop: '2%',
            }
        }

        return (

            <section id="contact" style={contact.ultimateContainer} className="contact_section">
                <div style={contact.headpara}>
                    <h2 style={contact.heading}>Entrer en contact</h2>
                    <p style={contact.paragraph}>Nous croyons que la durabilité est d'une importance vitale.</p>
                </div>
                <div style={contact.contactsContainer}>
                    <div style={contact.contacts}>
                        <img src={address} alt='address icon' />
                        <h3 style={contact.contactsHeadPara}>ADRESSE</h3>
                        <p style={contact.contactsHeadPara}>Rue El Kindy, Résidence Bennis, RDC N°9, Tanger</p>
                    </div>
                    <div  style={contact.contacts}  >
                    <img src={phone} alt='phone icon' />

                        <h3 style={contact.contactsHeadPara}>NUMÉRO DE TÉLÉPHONE</h3>
                        <p style={contact.contactsHeadPara}>06.19.20.62.91 </p>
                    </div>
                    <div  style={contact.contacts}>
                    <img src={fax} alt='fax icon' />

                        <h3 style={contact.contactsHeadPara}>FAX</h3>
                        <p style={contact.contactsHeadPara}>05.39.34.08.67</p>
                    </div>
                    <div  style={contact.contacts}>
                    <img src={email} alt='email icon' />

                        <h3 style={contact.contactsHeadPara}>E-MAIL</h3>
                        <p style={contact.contactsHeadPara}><a  style={contact.a} href="mailto:enviscope@gmail.com">enviscope@gmail.com</a></p>
                    </div>
                </div>
            
            </section>

        )
    }
}


export default Contact;