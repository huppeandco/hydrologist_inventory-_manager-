import { useEffect } from "react";
import { DefaulBtn, InlineHeader } from "../components/widgets";
import '../css/pages/carear.css'


const img = 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2023/06/career.jpg';

function Carear () {
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    return (
        <div className="carear">
            <InlineHeader title="Carear" />
            <div className="carear-top">
                <img src={img} />
                <div>
                    <p>
                    At Hydrologist, we prioritize merit and professional expertise when selecting and appointing talented individuals. However, it has come to our attention that some individuals/entities are falsely impersonating or representing themselves as representatives of Hydrologist. They are deceitfully requesting money, claiming to offer employment through the circulation of counterfeit job offer letters, while using the name and logo of Hydrologist We strongly caution against engaging with such fraudulent activities.
                    </p>
                </div>
                
            </div>
            <div className="carear-bottom">
                <h2>Why Hydrologist</h2>
                <div>
                    <p>At the core of our leadership philosophy is the belief that empowering and enabling people is essential. We strive to cultivate a culture that values and empowers our team members.</p>
                    <h4>Empowerment</h4>
                </div>
                <div>
                    <h4>Innovation</h4>
                    <p>We consider investing in innovation as an enduring commitment to drive ongoing enhancements in our endeavors. Innovation lies at the core of Hydrologist operations, playing a pivotal role in transforming our business value chain.</p>
                </div>
                <div>
                    <p>Hydrologist’s unwavering commitment to our core values lays the groundwork for continuous learning. We proactively empower our employees to tackle future challenges and cultivate a robust leadership pipeline. Through seamless learning experiences, we equip our team to achieve exceptional outcomes.</p>
                    <h4>Development and Advancement</h4>
                </div>
                <div>
                    <h4> Variety </h4>
                    <p>We embrace a multitude of genders, ages, and cultures, understanding that diverse individuals contribute unique viewpoints, ideas, and expertise. Together, they form the collective strength of our organization.</p>
                </div>
            </div>
            <div className="join-form">
                <h2>Join Our Team</h2>
                <form>
                   <div className="carear-form-container">
                   <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Mobile"/>
                    <input type="text" placeholder="Year of experience"/>
                    <input type="text" placeholder="Position Applied For" />
                    <input type="file" />
                    <textarea  cols="40" rows="10" ></textarea>
                   </div>
                    <DefaulBtn title="submit" secondary styles={{alignSelf: 'flex-start'}}/>
                </form>
            </div>
            <div className="carear-notice">
           <p> Notice: Kindly exercise caution regarding counterfeit job offers from individuals or entities falsely claiming to represent The Hydrologist, who may request monetary or non-monetary payments. Please be aware that our company does not require any fees during the recruitment process.</p>
            </div>
        </div>
    )
}

export default Carear;