import { useEffect } from 'react';
import { InlineHeader, InsightsComponent } from '../components/widgets';
import '../css/pages/insights.css';

function Insights ({data}) {
    
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
    return (
        <div className='insights-page'>
            <InlineHeader title="Insights" />
            <InsightsComponent data={data} />
        </div>
    )
}


export default Insights;