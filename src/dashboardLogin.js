import { useContext, useState } from 'react';
import Image from './assets/hydrologist-logo.svg'
import axios from 'axios';
import { DataContext } from './data';


export const SpinnerIcon = ({tint}) => (
    <svg fill="#3d87ff" width="34px" height="34px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke={tint} style={{ animation: 'spin 1s linear infinite' }}>
        <style>
            {`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}
        </style>
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <title>spinner-one-third</title>
            <path d="M16 1.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0c7.318 0.001 13.25 5.933 13.25 13.251 0 3.659-1.483 6.972-3.881 9.37v0c-0.14 0.136-0.227 0.327-0.227 0.537 0 0.414 0.336 0.75 0.75 0.75 0.212 0 0.403-0.088 0.539-0.228l0-0c2.668-2.669 4.318-6.356 4.318-10.428 0-8.146-6.604-14.751-14.75-14.751h-0z"></path>
        </g>
    </svg>
);
export default function DashboardLogin({ handleScerte, secret, handlelclick }) {

    const { setPassCode, setName } = useContext(DataContext);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState('');
    const [values, setValues] = useState({username: '', password: ''})
    async function handleLogin(e) {
        e.preventDefault(); 
        setLoading(true);
        try {
            // Create FormData object and append username and password
            const data = new FormData();
            data.append('username', values.username);
            data.append('password', values.password);

            // Optional headers if needed
            const headers = {
                'Content-Type': 'multipart/form-data',
                // Add other headers if necessary
            };

            // Sending the POST request using Axios
            const response = await axios.post('https://api.thehydrologist.com/auth.php', data, { headers });
            // Handle success

            if (response.data == 'success') {
                setLoading(false);
                setPassCode(true);
                setName(values.username);
            } else {
                setLoading(false);
                setError(response.data);
            }
        } catch (error) {
            // Handle error
            console.error('Error:', error);
        }
    }
    const handleChange = (e) => {
        
            const { name, value } = e.target;
            setValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        
    }

   
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', background: '#80808070' }}>
            <p style={{marginTop: '2rem', marginBottom: 10, letterSpacing: 4}}>Login</p>

            <form onSubmit={(e) => {handleLogin(e) }} style={{ display: 'flex', flexDirection: 'column', width: 300, padding: 25, background: 'white', paddingBlock: '4rem', textAlign: 'left', borderRadius: 4, marginBottom: '2rem', marginTop: 10, border: '1px solid #00000063' }}>
                <label>User Name</label>
                <input style={{ padding: '1rem', outline: 'none', border: 'none', backgroundColor: 'rgb(225 225 225 / 22%)', marginBlock: 10, borderRadius: 4, border: '1px solid #011ea461' }} type='text' onChange={handleChange} value={values.username} name='username'  />
                <label>Password</label>
                <input style={{ padding: '1rem', outline: 'none', backgroundColor: 'rgb(225 225 225 / 22%)', marginBlock: 10, borderRadius: 4, border: '1px solid #011ea461' }} type='password' onChange={handleChange} value={values.password} name='password' />
                <div style={{ display: 'flex' }}>
                    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p>Remember me</p>
                        <input type="checkbox" />
                    </label>
                    <button style={{ padding: '1rem', outline: 'none',  cursor: 'pointer', marginLeft: 'auto', background: '#2271b1', borderRadius: 4, color: 'white', fontWeight: 700, width: 100, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => handleLogin(e)}>
                        {loading ? <SpinnerIcon tint="#ffffff"/> : 'Login'}
                    </button>
                </div>


            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button style={{ textDecoration: 'underline', color: 'blueviolet', border: 'none', outline: 'none', background: 'transparent', cursor: 'pointer', width: '300px', textAlign: 'left' }} onClick={() => setVisible(!visible)}> grant access ?</button>
           { visible && <div style={{ width: 300, background: 'white', borderRadius: 4, padding: 25, marginTop: 10 }}>
                <label style={{width: '100%', textAlign: 'left', display: 'block', marginBottom: 10}}> enter email</label>
                <input type='text' style={{ border: '1px solid #011ea461', padding: '1rem', outline: 'none', backgroundColor: 'rgb(225 225 225 / 22%)', width: '100%', boxSizing: 'border-box', borderRadius: 4 }} />
            </div>}
            <p style={{ width: '300px', textAlign: 'left' }}> ← Go to The Hydrologist</p>
        </div>
    )
}