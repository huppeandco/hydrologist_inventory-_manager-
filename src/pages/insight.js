import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../data";
import { LangContext } from "../data/lang";
import { useEffect, useLayoutEffect } from "react";
import '../css/pages/insight.css'
import axios from "axios";
import { Facebook, Linkedin, Twitter } from "../components/floatSocial";
import { useState } from "react";
const apiUrl = 'https://thehydrologist.com/api/get-page.php';
function Insight () {
    const { id } = useParams();
    const numericId = id.substring(1);
    const idAsInteger = parseInt(numericId, 10);
    const insights = useContext(DataContext).insights;
    const [insighData, setInsightsData ] = useState(null)
    const lang = useContext(LangContext).lang

    let setNavigator = useContext(DataContext).setNavIndictorState;
    
   
    useEffect(() => {
       
        console.log("useEffect fired")
        window.scrollTo(0,0);
            axios.get(apiUrl, {
              params: {
                pageName: 'insights',
                lang
              }
            })
              .then(response => {
              
              setInsightsData(response.data[0])
        
              })
              .catch(error => {
                console.error('Error retrieving page data:', error);
              });
              return () => {
                setNavigator("")
              };
       
    }, []);
    useEffect(() => {
        setNavigator(insighData?.header)
       
    }, [insighData])

    return(
        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
           {insighData ? ( <div className="insight-container">
            <h1>{insighData?.header}</h1>
            <div className="insight_date-authter"> 
                <img src="https://secure.gravatar.com/avatar/d8d50549f6bd6645d9d301b20663472c?s=32&d=mm&r=g" /> 
                <p>By{insighData.aurther}</p> <span>|</span>
                <time>{insighData.date}</time>  <span>|</span>
                <p> 0 comments</p>
            </div>
            <img style={{alignSelf: 'flex-start'}} src={insighData?.img} />
            <p>{insighData?.ftxt}</p>
            <p className="insight-quota">
                {insighData?.quote}
            </p>
            <p>{insighData.stxt}</p>
            <p className="insight_second-title">{insighData?.stitle}</p>
            <p>{insighData?.ttxt}</p>
            <img src="https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/single-blog-1-600x420.jpg" />
            <p style={{marginBottom: '2rem', marginTop: 0,textAlign: 'center' }}>Producing the highest quality products</p>
            <p>{insighData?.ltxt}</p>
            <div className="insight-share">
                <p>share:</p>
                <Facebook />
                <Twitter />
                <Linkedin />
            </div>
            <div className="insight_prev-next">
                <div>
                    <Link to={insights[idAsInteger - 2 ]?.url}>
                    <p>PERVIOUS</p>
                    <p>{insights[idAsInteger - 2 ]?.header}</p>
                    </Link>
                </div>
                <div>
                    <Link to={insights[idAsInteger]?.url}>
                    <p>NEXT</p>
                    <p>{insights[idAsInteger]?.header   }</p>
                    </Link>
                </div>
            </div>
            <div className="insight_related-posts">
                <h4>Related Posts</h4>
                <div>

                {
                    insights.map((i,index) => {
                        return(
                            <div key={index}>
                                <img src={i.img} />
                                <p>{i.header}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="insight_leave-replay">
                <h4> Leave a Replay</h4>
            </div>
            </div>) : <><h1>no Data 😭🥹</h1></>}
        </div>
    )
}

export default Insight;