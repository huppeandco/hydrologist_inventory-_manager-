import { useContext, useState } from 'react'
import './dashboard.css'
import Inventory from './inventory';
import Image from './assets/hydrologist-logo.svg'
import DashBoardRouter from './dashbordRouter';
import { Link } from 'react-router-dom/dist';
import { DataContext } from './data';
import { SpinnerIcon } from './dashboardLogin';
import Orders from './orders';


const InventoryIcon = ({ onClick }) => (
    <svg onClick={onClick} fill="#000000" height="30px" width="30px" version="1.2" baseProfile="tiny" id="inventory" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 230" xmlSpace="preserve">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M61.2,106h37.4v31.2H61.2V106z M61.2,178.7h37.4v-31.2H61.2V178.7z M61.2,220.1h37.4v-31.2H61.2V220.1z M109.7,178.7H147v-31.2h-37.4V178.7z M109.7,220.1H147v-31.2h-37.4V220.1z M158.2,188.9v31.2h37.4v-31.2H158.2z M255,67.2L128.3,7.6L1.7,67.4 l7.9,16.5l16.1-7.7v144h18.2V75.6h169v144.8h18.2v-144l16.1,7.5L255,67.2z"></path>
        </g>
    </svg>
);


const OrdersIcon = ({ onClick }) => (
    <svg onClick={onClick} version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" width="30px" height="30px" fill="#000000">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <style type="text/css">
                {`
            .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .st1{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:3;}
            .st2{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
            .st3{fill:none;}
          `}
            </style>
            <line className="st0" x1="9" y1="29" x2="23" y2="29"></line>
            <path className="st0" d="M13,23c0,2.1-0.7,4.6-1.8,6"></path>
            <path className="st0" d="M20.8,29c-1.1-1.4-1.8-3.9-1.8-6"></path>
            <path className="st0" d="M13,18h5V7H3V6c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v15c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2v-8"></path>
            <circle className="st0" cx="22" cy="18" r="2"></circle>
            <circle className="st0" cx="11" cy="18" r="2"></circle>
            <polyline className="st0" points="18,18 18,10 23,10 26,14 26,18 24,18 "></polyline>
            <line className="st0" x1="4" y1="10" x2="13" y2="10"></line>
            <line className="st0" x1="2" y1="13" x2="11" y2="13"></line>
            <rect x="-288" y="-576" className="st3" width="536" height="680"></rect>
        </g>
    </svg>
);

const PageEditorIcon = ({ onClick }) => (
    <svg onClick={onClick} width="30px" height="30px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M40 33V42C40 43.1046 39.1046 44 38 44H31.5" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M40 16V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H16" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M16 16H30" stroke="#000000" strokeWidth="4" strokeLinecap="round"></path>
            <path d="M23 44L40 23" stroke="#000000" strokeWidth="4" strokeLinecap="round"></path>
            <path d="M16 24H24" stroke="#000000" strokeWidth="4" strokeLinecap="round"></path>
        </g>
    </svg>
);

const DriversIcon = ({ onClick }) => (
    <svg onClick={onClick} fill="#000000" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.005 512.005" xmlSpace="preserve">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <g>
                <g>
                    <path d="M405.336,42.671h-93.482l5.896-11.793c5.269-10.538,0.998-23.353-9.541-28.622s-23.353-0.998-28.622,9.541l-15.437,30.874h-16.297l-15.437-30.874c-5.269-10.538-18.083-14.81-28.622-9.541s-14.81,18.083-9.541,28.622l5.896,11.793h-93.482c-35.355,0-64,28.645-64,64v64v256v21.333c0,35.355,28.645,64,64,64h298.667c35.355,0,64-28.645,64-64v-21.333v-256v-64C469.336,71.316,440.691,42.671,405.336,42.671z M106.669,85.338h114.815l15.437,30.874c0.072,0.143,0.159,0.272,0.233,0.413c0.189,0.359,0.389,0.712,0.599,1.061c0.159,0.264,0.32,0.523,0.489,0.778c0.214,0.323,0.438,0.637,0.67,0.949c0.193,0.26,0.389,0.517,0.592,0.766c0.23,0.281,0.47,0.553,0.715,0.823c0.231,0.255,0.463,0.506,0.705,0.747c0.241,0.241,0.492,0.474,0.747,0.704c0.27,0.245,0.542,0.486,0.824,0.716c0.249,0.203,0.506,0.398,0.765,0.592c0.312,0.232,0.626,0.457,0.949,0.67c0.254,0.169,0.514,0.33,0.778,0.489c0.349,0.21,0.702,0.41,1.061,0.599c0.141,0.074,0.27,0.162,0.413,0.233c0.135,0.068,0.275,0.115,0.41,0.18c0.35,0.166,0.704,0.319,1.062,0.466c0.314,0.129,0.629,0.253,0.946,0.366c0.316,0.112,0.636,0.212,0.957,0.309c0.36,0.109,0.72,0.215,1.083,0.304c0.293,0.072,0.589,0.131,0.885,0.191c0.384,0.077,0.768,0.152,1.154,0.208c0.302,0.044,0.605,0.072,0.909,0.103c0.374,0.038,0.747,0.075,1.121,0.092c0.337,0.016,0.675,0.015,1.014,0.015c0.339,0,0.676,0.001,1.014-0.015c0.374-0.018,0.747-0.055,1.121-0.092c0.304-0.031,0.607-0.059,0.909-0.103c0.386-0.056,0.769-0.131,1.154-0.208c0.296-0.06,0.592-0.118,0.885-0.191c0.363-0.089,0.723-0.195,1.083-0.304c0.321-0.097,0.641-0.197,0.957-0.309c0.317-0.113,0.632-0.237,0.946-0.366c0.358-0.146,0.712-0.3,1.062-0.466c0.136-0.064,0.275-0.112,0.41-0.18c0.143-0.072,0.272-0.159,0.413-0.233c0.359-0.189,0.712-0.389,1.061-0.599c0.264-0.159,0.523-0.32,0.778-0.489c0.323-0.214,0.637-0.439,0.949-0.67c0.26-0.193,0.516-0.388,0.765-0.592c0.281-0.23,0.554-0.471,0.824-0.716c0.254-0.231,0.505-0.463,0.747-0.704c0.242-0.242,0.474-0.493,0.705-0.747c0.245-0.27,0.485-0.542,0.715-0.823c0.204-0.249,0.399-0.506,0.592-0.766c0.232-0.311,0.456-0.626,0.67-0.949c0.169-0.254,0.33-0.514,0.489-0.778c0.21-0.349,0.41-0.702,0.599-1.061c0.074-0.141,0.162-0.27,0.233-0.413l15.437-30.874h114.815c11.791,0,21.333,9.542,21.333,21.333v42.667H85.336v-42.667C85.336,94.88,94.878,85.338,106.669,85.338z M426.669,405.338 h-67.271c-6.293-20.019-21.266-36.834-41.27-48.197c14.38-15.274,23.208-35.834,23.208-58.469c0-47.131-38.202-85.333-85.333-85.333s-85.333,38.202-85.333,85.333c0,22.635,8.828,43.196,23.208,58.469c-20.004,11.364-34.977,28.178-41.27,48.197H85.336V192.005h341.333V405.338z M213.336,298.671 c0-23.567,19.099-42.667,42.667-42.667s42.667,19.099,42.667,42.667s-19.099,42.667-42.667,42.667 S213.336,322.239,213.336,298.671z M256.002,384.005c23.994,0,44.124,8.944,55.085,21.333H200.918 C211.879,392.948,232.009,384.005,256.002,384.005z M405.336,469.338H106.669c-11.791,0-21.333-9.542-21.333-21.333h85.333 h170.667h85.333C426.669,459.796,417.127,469.338,405.336,469.338z"></path>
                </g>
            </g>
        </g>
    </svg>
);

const UserIcon = ({ onClick }) => (
    <svg onClick={onClick} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M13 20V18C13 15.2386 10.7614 13 8 13C5.23858 13 3 15.2386 3 18V20H13ZM13 20H21V19C21 16.0545 18.7614 14 16 14C14.5867 14 13.3103 14.6255 12.4009 15.6311M11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </g>
    </svg>
);

const ProgramIcon = ({ onClick }) => (
    <svg onClick={onClick} fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M18,14c-.053,0-.1.014-.155.016L14.817,8.838a4,4,0,1,0-5.632,0L6.166,14.017C6.109,14.014,6.057,14,6,14a4,4,0,1,0,3.859,5h4.282A3.994,3.994,0,1,0,18,14Zm-3.859,3H9.859a3.994,3.994,0,0,0-1.731-2.376l2.793-4.79a3.589,3.589,0,0,0,2.161,0l2.8,4.786A3.989,3.989,0,0,0,14.141,17Z"></path>
        </g>
    </svg>
);
const OffersIcon = ({ onClick }) => (
    <svg onClick={onClick} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M16 18L19 15M19 15L22 18M19 15V21M22 10H2M22 12V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2V15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.0799 19 5.2 19H12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </g>
    </svg>
);

const BlogIcon = ({ onClick }) => (
    <svg onClick={onClick} fill="#000000" height="30px" width="30px" version="1.1" id="XMLID_225_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <g id="blog">
                <g>
                    <path d="M5,23c-2.2,0-4-1.8-4-4v-8h2v4.5C3.6,15.2,4.3,15,5,15c2.2,0,4,1.8,4,4S7.2,23,5,23z M5,17c-1.1,0-2,0.9-2,2s0.9,2,2,2 s2-0.9,2-2S6.1,17,5,17z M24,19h-2C22,9.6,14.4,2,5,2V0C15.5,0,24,8.5,24,19z M19,19h-2c0-6.6-5.4-12-12-12V5 C12.7,5,19,11.3,19,19z M14,19h-2c0-3.9-3.1-7-7-7v-2C10,10,14,14,14,19z"></path>
                </g>
            </g>
        </g>
    </svg>
);

const Logout = () => (
    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.25 5.25L9 4.5H18L18.75 5.25V18.75L18 19.5H9L8.25 18.75V16.5H9.75V18H17.25V6H9.75V7.5H8.25V5.25Z" fill="#080341"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.06068 12.7499L14.25 12.7499L14.25 11.2499L7.06068 11.2499L8.78035 9.53027L7.71969 8.46961L4.18936 11.9999L7.71969 15.5303L8.78035 14.4696L7.06068 12.7499Z" fill="#080341"></path>
        </g>
    </svg>
);

const DownArrow = () => (
    <svg width="8" height="8" viewBox="0 0 1024 1024" fill="#000000">
      <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"/>
    </svg>
  );
 
  const SearcIcon = () => (
    <svg fill="#000000" width="34" height="34" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3C13.488281 3 9 7.488281 9 13C9 15.394531 9.839844 17.589844 11.25 19.3125L3.28125 27.28125L4.71875 28.71875L12.6875 20.75C14.410156 22.160156 16.605469 23 19 23C24.511719 23 29 18.511719 29 13C29 7.488281 24.511719 3 19 3ZM19 5C23.429688 5 27 8.570313 27 13C27 17.429688 23.429688 21 19 21C14.570313 21 11 17.429688 11 13C11 8.570313 14.570313 5 19 5ZM18 9L18 12L15 12L15 14L18 14L18 17L20 17L20 14L23 14L23 12L20 12L20 9Z"/>
    </svg>
  );
  const TheFlare = () => (
    <svg width="64" height="64" viewBox="0 -70 256 256" xmlns="http://www.w3.org/2000/svg">
      <path d="M202.3569,50.394 L197.0459,48.27 C172.0849,104.434 72.7859,70.289 66.8109,86.997 C65.8149,98.283 121.0379,89.143 160.5169,91.056 C172.5559,91.639 178.5929,100.727 173.4809,115.54 L183.5499,115.571 C195.1649,79.362 232.2329,97.841 233.7819,85.891 C231.2369,78.034 191.1809,85.891 202.3569,50.394 Z" fill="#FFFFFF"/>
      <path d="M176.332,109.3483 C177.925,104.0373 177.394,98.7263 174.739,95.5393 C172.083,92.3523 168.365,90.2283 163.585,89.6973 L71.17,88.6343 C70.639,88.6343 70.108,88.1033 69.577,88.1033 C69.046,87.5723 69.046,87.0413 69.577,86.5103 C70.108,85.4483 70.639,84.9163 71.701,84.9163 L164.647,83.8543 C175.801,83.3233 187.486,74.2943 191.734,63.6723 L197.046,49.8633 C197.046,49.3313 197.577,48.8003 197.046,48.2693 C191.203,21.1823 166.772,0.9993 138.091,0.9993 C111.535,0.9993 88.697,17.9953 80.73,41.8963 C75.419,38.1783 69.046,36.0533 61.61,36.5853 C48.863,37.6473 38.772,48.2693 37.178,61.0163 C36.647,64.2033 37.178,67.3903 37.71,70.5763 C16.996,71.1073 0,88.1033 0,109.3483 C0,111.4723 0,113.0663 0.531,115.1903 C0.531,116.2533 1.593,116.7843 2.125,116.7843 L172.614,116.7843 C173.676,116.7843 174.739,116.2533 174.739,115.1903 L176.332,109.3483 ZM205.5436,49.8628 L202.8876,49.8628 C202.3566,49.8628 201.8256,50.3938 201.2946,50.9248 L197.5766,63.6718 C195.9836,68.9828 196.5146,74.2948 199.1706,77.4808 C201.8256,80.6678 205.5436,82.7918 210.3236,83.3238 L229.9756,84.3858 C230.5066,84.3858 231.0376,84.9168 231.5686,84.9168 C232.0996,85.4478 232.0996,85.9788 231.5686,86.5098 C231.0376,87.5728 230.5066,88.1038 229.4436,88.1038 L209.2616,89.1658 C198.1076,89.6968 186.4236,98.7258 182.1746,109.3478 L181.1116,114.1288 C180.5806,114.6598 181.1116,115.7218 182.1746,115.7218 L252.2826,115.7218 C253.3446,115.7218 253.8756,115.1908 253.8756,114.1288 C254.9376,109.8798 255.9996,105.0998 255.9996,100.3188 C255.9996,72.7008 233.1616,49.8628 205.5436,49.8628" fill="#000000"/>
    </svg>
  );
export default function Dashboard() {
    const [open, setOpen] = useState(-1);
    const [hovering, setHovering] = useState(false);
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState('inventory');
    const { name, setPassCode, getOrders } = useContext(DataContext);

    const [modProductQueryString, setModProductQueryString] = useState(null)


    const handleChange = (name) => {
        setContent('loading');
        setTimeout(() => {
            setContent(name);
        }, 1000);
    }
    const logOut = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setPassCode(false)
        }, 2000);
    }

    return (
        <div >
            <header style={{ position: 'fixed', top: 0, background: 'white', left: 0, width: '100%', height: 90, display: 'flex', alignItems: 'center', padding: 15, boxSizing: 'border-box', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>

                <img src={Image} style={{ width: 150, alignSelf: 'center', marginLeft: '20px', marginRight: 'auto' }} />
                <div style={{ alignSelf: 'flex-end', marginLeft: 'auto', marginRight: '15px' , display: 'flex', alignItems:'center', cursor: 'pointer'}}>
                    <TheFlare />
                    {/* <span >quick access</span> */}
                </div>
                <div style={{ alignSelf: 'flex-end',  marginRight: '40px' }}>
                    <h5 style={{ marginBlock: 0 }}>{name}</h5>
                    <button style={{ border: 'none', outline: 'none', background: 'transparent', cursor: 'pointer' }} onClick={logOut}>{loading ? <SpinnerIcon tint="#000000" /> : <Logout />} </button>
                </div>

            </header>
            <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className={`dashboard-taps ${hovering ? 'open' : ''}`} >
                <div className={`${(open === 1 && hovering) ? 'open' : 'closed'}`}>
                    <div>
                        <InventoryIcon onClick={() => { if (open != 1) setOpen(1); else setOpen(-1); handleChange('inventory');  }} />
                        <h4 onClick={() => { if (open != 1) setOpen(1); else setOpen(-1); handleChange('inventory')  }}>inventory</h4>
                        <DownArrow />
                    </div>

                    <div style={{ height: 100 }} className={`${(open === 1 && hovering) ? 'open' : 'closed'}`}>
                        <button onClick={() => {handleChange('inventory'); setHovering(false)}}>Products</button>
                        <button onClick={() => {handleChange('inventory-categoreized'); setHovering(false)}}>Categories</button>
                        <button onClick={() => {handleChange('upload-product'); setHovering(false)}}>Add new</button>
                    </div>

                </div>
                <div className={`${(open === 7 && hovering) ? 'open' : 'closed'}`}>
                    <div>
                        <PageEditorIcon onClick={() => { if (open != 7) setOpen(7); else setOpen(-1) }} />
                        <h4 onClick={() => { if (open != 7) setOpen(7); else setOpen(-1) }}>Manage Content</h4>
                        <DownArrow />
                    </div>
                    <div className={`${(open === 7 && hovering) ? 'open' : 'closed'}`} style={{ height: 140 }}>
                        <button>Pages</button>
                        <button>Header</button>
                        <button>Footer</button>
                        <button>Linking</button>

                    </div>

                </div>
                <div className={`${(open === 2 && hovering) ? 'open' : 'closed'}`}>
                    <div>
                        <OrdersIcon onClick={() => { if (open != 2) setOpen(2); else setOpen(-1) }} />
                        <h4 onClick={() => { if (open != 2) setOpen(2); else setOpen(-1);  }}>orders</h4>
                        <DownArrow />
                    </div>
                    <div style={{ height: 200 }} className={`${(open === 2 && hovering) ? 'open' : 'closed'}`}>
                        <button onClick={() =>{ setContent('orders-all'); setHovering(false)}}>procedding</button>
                        <button>on going</button>
                        <button onClick={() => {setContent('orders-delivered'); setHovering(false)}}>delivered</button>
                    </div>

                </div>

                <div className={`${(open === 3 && hovering) ? 'open' : 'closed'}`}>
                    <div>
                        <DriversIcon onClick={() => { if (open != 3) setOpen(3); else setOpen(-1) }} />
                        <h4 onClick={() => { if (open != 3) setOpen(3); else setOpen(-1) }}>Drivers</h4>
                        
                    </div>
                    <div className={`${(open === 3 && hovering) ? 'open' : 'closed'}`}>
                      

                    </div>
                </div>
                <div className={`${(open === 8 && hovering) ? 'open' : 'closed'}`}>

                    <div>
                        <UserIcon />
                        <h4>users</h4>
                    </div>
                    <div>

                    </div>
                </div>
                <div className={`${(open === 4 && hovering) ? 'open' : 'closed'}`}>
                    <div>
                        <OffersIcon onClick={() => { if (open != 4) setOpen(4); else setOpen(-1) }} />
                        <h4 onClick={() => setOpen(4)}>programs</h4>
                        <DownArrow />

                    </div>

                    <div className={`${(open === 4 && hovering) ? 'open' : 'closed'}`}>
                        <button>Recycling</button>
                        <button>Hydro Coins</button>
                        <button>Promo Code</button>
                        <button>create promo code</button>
                    </div>


                </div>
                <div className={`${(open === 5 && hovering) ? 'open' : 'closed'}`}>
                    <div>
                        <ProgramIcon onClick={() => { if (open != 5) setOpen(5); else setOpen(-1) }} />
                        <h4 onClick={() => setOpen(5)}>Offers</h4>
                        <DownArrow />
                    </div>
                    <div className={`${(open === 5 && hovering) ? 'open' : 'closed'}`}>
                        <button>Manage offers</button>
                        <button>Create Offer</button>
                    </div>

                </div>
                <div className={`${(open === 6 && hovering) ? 'open' : 'closed'}`}>
                    <div>
                        <BlogIcon onClick={() => { if (open != 6) setOpen(6); else setOpen(-1) }} />
                        <h4 onClick={() => setOpen(6)}>blogs</h4>
                        <DownArrow />
                    </div>
                    <div className={`${(open === 6 && hovering) ? 'open' : 'closed'}`}>
                        <button>  Create blog page </button>
                        <button>  Manage Blogs </button>
                    </div>

                </div>

            </div>
            <div className="dashboard-content">
                {content === 'inventory' && <Inventory setContent={setContent}  setModProductQueryString={setModProductQueryString} />} {/* modProductQueryString, setModProductQueryString */}
                {content === 'inventory-categoreized' && <Inventory categoriezed={true} setContent={setContent}  setModProductQueryString={setModProductQueryString} />}
                {content === 'mod-product' &&  <>
                <iframe src={`/admin${modProductQueryString}`} style={{ width: '100%', height: '100vh', border: 'none', outline: 'none', overflow: 'hidden' }}></iframe>
                    </>}
                {content === 'upload-product' &&
                    <>
                        <iframe src="/admin/pages/uploadProduct" style={{ width: '100%', height: '100vh', border: 'none', outline: 'none', overflow: 'hidden' }}></iframe>
                    </>}
                {content === 'loading' &&
                    <>
                        <div style={{ width: '100%', marginTop: 90, height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <SpinnerIcon tint={'#ff223f'} />
                        </div>
                    </>
                }
                {content === 'orders-all' &&
                    <Orders status={'proceeding/'} />
                }
                {content === 'orders-delivered' &&
                    <Orders status={'delivered/'}/>
                }
            </div>
        </div>
    )
}


