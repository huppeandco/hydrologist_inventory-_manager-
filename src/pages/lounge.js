import { useEffect } from "react";
import { DefaulBtn, InlineHeader } from "../components/widgets";
import '../css/pages/lounge.css';


export function InlineBanner ({noBtn, img, text, btnText, children}) {
    return (
        <div style={{backgroundImage:  `url('${img}')`}} className="lounge-banner">
                {children}
                <h1>{text}</h1>
                {noBtn ? '' : <DefaulBtn title={btnText} noCap /> }
           </div>
    )
}

function Lounge () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="lounge">
           <InlineBanner />
           <div  className="lounge-features">
            <div className="lounge-feature">
                <div className="lounge-feature-img" >
                    <div className="img-container">

                    <img src="https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2023/06/two.jpg" />
                    </div>
                </div>
                <div className="lounge-feature-txt">
                    <h4>Feature 2</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="lounge-feature">
                
                <div className="lounge-feature-txt">
                    <h4>Feature 2</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="lounge-feature-img" >
                    <div className="img-container">

                    <img src="https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2023/06/two.jpg" />
                    </div>
                </div>
            </div>
            
           </div>
        </div>
    )
}

export default Lounge;