import { useEffect } from 'react';
import { DefaulBtn } from '../components/widgets'
import '../css/pages/contact.css'


function Contact () {
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
    return (
        <div className="contact">
            <h1>Keep In Touch with Us</h1>
            <p>We’re talking about clean beauty gift sets, of course – and we’ve got a bouquet of beauties for yourself or someone you love.</p>
        
           <div className='contact-action'>
            <div className='send-message'>
                    <h2>Send a Message</h2>
                    <form className='contact-form'>
                    <div>
                        <input type='text' />
                        <input type='text' />
                    </div>
                    <textarea style={{minHeight: "200px"}} cols='30' rows="30" ></textarea>
                    <DefaulBtn secondary noCap title="Submit" styles={{alignSelf: 'flex-start', marginLeft: '3%'}}/>
                    </form>
                </div>
                <div className='contact-info'>
                    <h5>Address</h5>
                    <p>6A Street Warehouse 2 <br /> Alquoz Ind Area 3 <br /> Dubai, UAE.</p>
                    <h5> Contact</h5>
                    <p>+971 50 974 1624 contactthehydrologist@gmail.com</p>
                </div>
           </div>
        </div>
    )
}

export default Contact;