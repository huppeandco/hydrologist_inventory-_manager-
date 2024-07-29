import { useEffect } from 'react';
import { InlineHeader } from '../components/widgets'
import '../css/pages/faqs.css'
import { useState } from 'react';

const faqs = [
    {
        title: 'hydrologist',
        faq: [
            {q: 'WHAT IS THE HYDROLOGIST PHILOSOPHY?', a: 'Hydrologist is a revolutionary premium beverage ordering plateform offering tailored recommendation according to your needs '},
            {q: 'WHAT IS THE HYDROLOGIST PHILOSOPHY?IS HYDROLOGIST PREMIUM WATERS AVAILABLE WHOLESALE?', a: 'Absolutely. Hydrologist’s wholesale program is designed by and for retailers and businesses who see the value in carrying our product on their shelves. Please reach out to us at service@hydrologistwater.com. One of our reps will get in touch within 24 hours to talk in detail about qualifying for our wholesale program and the value it has delivered to our partners across the UAE.'},
            {q: 'ARE HYDROLOGIST BOTTLES RECYCLABLE?', a: 'Yes! After about 6 to 8 refills of our bottle, please recycle the bottle. In our everyday pursuits, HYDROLOGIST strives to make water better for people and our planet.'},
            {q: 'HOW CAN I BUY FROM HYDROLOGIST?', a: 'you can buy in our online store and have it delivered to your doorstep.'},
            {q: 'WHERE IS HYDROLOGIST LOCATED?', a: 'Our shop is at “xxxxx” you can also use this googlemaps link for direction “link” / Hydrologist is 100% digital, you can order whatever you need, but no worries we have return policy for orders over 50 AED'},

        ]
    },
    {
        title: 'SHIPPING & DELIVERY',
        faq: [
            {q: 'SHIPPING & DELIVERY', a: 'Unfortunately, we currently aren’t able to ship outside the UAE. But we’re working on it. Sign up to receive our emails for news and discounts or through our social media channels and when we have a good, sustainable shipping solution, we’ll let you know.'},
            {q: 'HOW LONG DOES THE DELIVERY TAKE?', a: 'The delivery usually takes 4 to  6 work days, you could also check the status of your package on your “Orders” tab'},
            {q: 'IS THERE A FEE CHARGED FOR DELIVERY ORDERS ?', a: 'The delivery costs x AED / It depends on your location, It’s free for Dubai and it costs x AED for other countries            '},
            {q: 'WHAT ARE THE SHIPPING OPTIONS?', a: 'Hydrologist offers Local and international shipping and same-day delivery if the order is urgent'},

        ]
    },
    {
        title: 'RETURN & REFUND POLICY',
        faq: [
            {q: 'WHAT IS YOUR RETURN PHILOSOPHY?', a: 'We want you to LOVE the products you purchase from us, but if you are not entirely satisfied with your purchase, we are here and ready to help. You have 30 days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. To complete your return, we require a receipt or proof of purchase along with a brief description of why you are making the return. If your product unfortunately arrived damaged, please submit a picture of the damage and a brief description of the damage.            '},
            {q: 'WHAT IS YOUR REFEND POLICY?', a: 'Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the status of your refund after inspecting the item. If approved, your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days, depending on your card issuer’s policies.   For further details, please go to www.hydrologist.com. We’re ready to help keep your Hydro experience the most enjoyable it can be!'},
            {q: 'WHAT IF I RECEIVED THE WRONG PRODUCT ?', a: 'If you received the wrong item, please contact our customer service at XXXX or email us at Delivery@Hydrologist.com. We will gladly replace your shipment with the appropriate item free of charge.'},
            {q: '', a: ''},
            
        ]
    },
    {
        title: 'ACCOUNT',
        faq: [
            {q: 'HOW DO I CREATE A NEW ACCOUNT ?', a: 'loream ul ul ul'},
            {q: 'I FORGOT MY PASSWORD, WHAT SHOULD I DO?', a: 'There’s an option to recover your password once you click the “Login / Register” link at the top right of the page. Just click on that, provide the email address you used when you originally signed up, and we’ll send you an email to recover your password.'},
            {q: 'HOW DO I EDIT ACCOUNT INFORMATIONS?', a: 'Once you sign in, hover over your account login at the top right of the screen and a dropdown menu will appear. Just click “Account Dashboard” and you can edit your information and preferences.'},
        ]
    }
    ,
    {
        title: 'ORDER & DELIVERY',
        faq: [
            {q: 'WHAT HAPPENS TO MY ORDER IF I’M NOT HOME ?', a: 'If no one is at the address when delivery is attempted, we will leave the package in a secure location. If no secure location is available, or the delivery requires someone to be present, Hydrologist will leave a “We missed you” card. We’ll make three delivery attempts on consecutive days.'},
            {q: 'WHAT DO I DO IF I NEVER RECEIVED MY ORDER? ', a: 'Within 5-6 working days after placing a successfully placed your order, you’ll receive a tracking number from our courier. If you have not received your delivery Tracking Number, please contact us and we will look into this for you immediately. '},
            {q: 'HOW DO I MODIFY MY ORDER ONCE IT’S BEEN PLACED?   ', a: 'If you have signed up for “My Account” while placing your order, you will be able to update your delivery address information within your account. Upon updating, your next order will automatically ship to your new address. To modify other components of your recurring or subscription order, such as quantities, delivery dates, etc., Please send an email to Delivery@Hydrologist.com or call xxxxx'},
        ]
    }
    ,
    {
        title: 'PAYEMENT',
        faq: [
            {q: 'DO YOU ACCEPT INTERNATIONAL CREDIT CARD ?', a: ' Hydrologist accepts a select number of international credit cards : x, y , z ….'},
            {q: 'WHAT PAYMENT METHODS DO YOU ACCEPT ?', a: 'We accept the following payment methods: Credit card (Visa, MasterCard, American Express…)/ PayPal/ Apple Pay ….'},
           
        ]
    }
]
function FAQS () {
   const [openedFaq, setOpenFaq ] = useState(false);
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    const HandleToggleFaq = (id) => {
        setOpenFaq(!openedFaq);
    }
    return (
        <div className='faqs'>
            <InlineHeader title="Frequently Asked Questions" />
            <div className='faqs-container'>
                <div className='faq-image-container'>
                    <img src='https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2022/08/banner_blue.jpg' />
                </div>
                <div className='faqs-wrapper'>
                    {faqs.map((element) => {
                        return(
                            <div className='faq-element'> 
                            <h4>{element.title}</h4>
                            <div>
                                {element.faq.map((qa) => {
                                    return(
                                        <div className='faq-q-a ' onClick={HandleToggleFaq}>
                                            <p>{qa.q}</p>
                                            <p className={`${openedFaq ? 'open-faq-a': ''}`}><span>{qa.a}</span></p>
                                        </div>
                                    )
                                })}
                            </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default FAQS;
