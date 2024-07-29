import LoaderGif from '../assets/loader_animation.gif';

function FlashScreen() {
    /* const [cls, setCls ] = useState('');
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCls('scale-animation');
          }, 400);
      
          return () => clearTimeout(timeout);
    }, []) */
    return (
      <div className={`flash-screen `}  >
     {/*    <circle cx="100" cy="100" r="60" stroke="#ddd" stroke-width="10" fill="none" /> */}
         
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>

        <defs>
          {/* Define the linear gradient */}
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(77,129,205,1)" />
            <stop offset="100%" stopColor="rgba(4,188,242,1)" />
          </linearGradient>
        </defs>
       
        <circle id="progressCircle" cx="100" cy="100" r="60" stroke="url(#progressGradient)" stroke-width="10" fill="none" 
            stroke-dasharray="377" stroke-dashoffset="377">
            <animate attributeName="stroke-dashoffset" from="377" to="0" dur="1s" fill="freeze" />
        </circle>
    </svg>

        <img src={LoaderGif} style={{width: '100px', height: '100px'}}/>
      </div>
    );
  }


  export default FlashScreen;