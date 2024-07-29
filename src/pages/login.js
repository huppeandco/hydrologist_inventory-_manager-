import { useState , useEffect} from 'react';
import { DefaulBtn, InlineHeader } from '../components/widgets';
import '../css/pages/login.css';
import axios from 'axios';
import { useContext } from 'react';
import { DataContext } from '../data';
import { useNavigate } from 'react-router-dom';


function Login () {
    const title = 'My Account';
   /*  const [usrName, setUsrName ] = useState('');
    const [password, setPassword ] = useState(''); */
    const [loader, setLoader ] = useState(false);
    const navigator = useNavigate();
    const Context = useContext(DataContext);
    const setUsrID = Context.setUsrID;
    const setLogin = Context.setLogin;
    const login = Context.login;
    const [values, setValues ] = useState({
        usrName: '',
        password: ''
    })
    

      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      }
    const handleLogin = (e) => {
        setLoader(true);
        e.preventDefault();
        async function fetchUser() {
            try {
              const response = await axios.post('https://thehydrologist.com/api/auth-user-token.php', {
                username: values.usrName,
                password: values.password
              });
      
              const userData = response.data;
              if(userData.username) {
                setUsrID(userData.id);
                setLoader(false);
                setLogin(true);
                navigator('/');
                console.log(login);
              }
               // Log the user data
            } catch (error) {
              console.error('Error fetching user:', error);
            }
          }
      
          fetchUser();
        
    }

    useEffect(() => {
      window.scrollTo(0,0);
    }, [])
    return (
        <div className='login'>
            {loader && <div className='upload-page-loader' > 
            <div class="spinner-loader"></div>
            </div>}
            <InlineHeader title={title} />
            <div className='login-register'>
                <div className='account-login'>
                    <h2>Login</h2>
                    <form className='account-login-wrapper'>
                    <label>EMAIL ADDRESS <span>*</span></label>
                    <input type='text' value={values.usrName} name='usrName' onChange={handleChange}/>
                    <label>PASSWORD <span>*</span></label>
                    <input type='text' value={values.password} name='password'  onChange={handleChange}/>
                    <label className='mr-b'>
                        <input  value="Remmber me" type='checkbox' />
                        Remmber me
                    </label>
                    <DefaulBtn title="Login" secondary onpress={handleLogin} />
                    <p>lost your password</p>
                    </form>
                </div>
               
                <div className='account-register'>
                    <h2>Register</h2>
                    <form className='account-register-wrapper '>
                        <label>EMAIL ADDRESS <span>*</span></label>
                        <input type='text' />
                        <p>A link to set a new password will be sent to your email address.</p>

<p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                        <DefaulBtn title="Register" secondary/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login ;
