import '../css/footer.css'
import Payment from '../assets/payment-methods.jpg'
import One from '../assets/243938633_113642897744418_7887848159507796714_n.jpg'
import Two from '../assets/244135009_148091030872015_5755683038939290656_n.jpg'
import Three from '../assets/244329069_585356479258152_1104110547128380224_n.jpg'
import Four from '../assets/244333638_401996388042095_3623970907961241571_n.jpg'
import Five from '../assets/244334037_825235408165845_33872405974133954_n.jpg'
import Six from '../assets/244352078_268860578480217_8098470444965108750_n.jpg'
import { Link } from 'react-router-dom'

const PNG1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAhCAYAAAAoNdCeAAAAAXNSR0IArs4c6QAAAppJREFUSEvtlk9IVHEQxz/z3lt3o9JdV+qSp4gIq0NEXbpIZptgnfLktehgICpBfxErhFAREqLOXrJTCbmJ4aVLEXWw6BAFZadyd9WK1H2/N7Grq0utq65709/p9/jNzGfm+wZmhKzjH57a43qmBYgIVAJ29vsq70ZhHIg6lt0zW1v2MeMnmYszFGtB5E6BgOXyMKheck+Fe1IGaZgTjbWCdM17yIiivQbzBr/zZ5XVLJnNults7EOCNIPWzD9omxsJd4t/6MdeI/b7+Yr0phsJ31gzYBkHJxrrALkOGFtNldhD8fsinAd97kbCC5kUC5dWbQTkuCoPxBeNf1WoVOG0OVk+WDzMfCT7WbxelCcC4+JE4wawXE8rqQt/KzaMp7FdjiWp7vRSME0BXL+EqA5NFh02mgg6s5pIt94Ggo2qY88lToD4C5HUMnxJ1oXeLvrmk9EXjV9QuFcIaMHHuI6zk5rSWPo7H6wkGqvyVHqwKKgyVf1spsvP0SCpLs8PW0dFuV03aDcWW8dNGYui6KaMmzLmVWBdDfJafYHJqcqZYNk4hyW5otQFwUa/b3PmnCaUVqACmEDodkvcPqp3/FoWuiZYynjGa0bkIlCemVlZm3Mc1btuwOrNucOsCrYEaQbK0nstfLJUO5MB89A3Zzd4KlcEdi8kMIVq73/QvLDB6QrH57YBTcDWJYjcSgaC/VSLuzTy1fHNTDZ6oteyoL+BPjfpdFFfOpFzUmNxDI/6bAjwQZUO8zP0aHHy5vo5A2rb2xNnRUit7vsWTNJQLAbxeJFZ5caA/f/EeKfKbfMyNEC7eCt2XMagXS37aKJBhKu5YkrJUPygZ9GPcgDklQqdpjb4GJH08lrQURV7ePKMKJdBjyCMWR6NfwGIrsqkVl99KAAAAABJRU5ErkJggg==';
const PNG2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAhCAYAAAC803lsAAAAAXNSR0IArs4c6QAAAv1JREFUWEftl11rE0EUht+TnSSK+JEtkvoFUtRfoCDohUgxW7AoiPVCKqh3gmIVQa1gBVsFqRUF71RQvDAiKBW6kSK9UBD0F1QpglZbpLtVEZtkNkdms4mt7WaTtErAzuUwc+aZ9z3nzC6hkpHkiLZkfB+B94CwEYxVU7YThsF4w6BHzrdlD9BCmXLDU7kLtb6xvRSinmmH+wUgDHOO25ymuoflnBEMkmRNW2z3EOGoF3AEwC2E0CdzzhCi4qc7n5YLRUhrQA5NAA4DqFfTzLjhfI+1oYWcUkCBIFqfdd2DYBAuS2Q6kaj/UfKWqZFFApF2ME4DIBemST9WNYhrB1HSvRih1Uno98uRubBGS1n7iXEvD8MtpWzyVyTJEbHUHnJzgnBJJvSzlUAU1oqU1QXGGRCG5ddYg18C+4Jopt1K4LsARiRl1gXa4UepbOLIO5UzDDrgGDGl0LThCyJM6zGAXQA6paGfq0aNoiqmdRFAO4An0tB3VwaSsj66toSwVe7QX84K5Jm1BTm8cO1J6KsrAzEtVhsknJUwln+eDQjMLysEtE9uPEOf0YVS1uRBXsU0dFBuViAdHBKbbbePVA/ic4NKwURB4aoVmQfxNA+Sct6aShX4c32QwsHl+38na2psjeDQcSDXDNB6T171uXdBGnpXNfYI01Kv9nkAkfx+fguEeiXlriFR96EQs2hN2LQPMvgmgAUzHJiRhh6tEiT9G2JKhAkCHckasTtq1gXxIG57ywaY0O1o2dfQImmRZrtUaw6CKyZplGJwMlHNCW8ixkkA2/IAdEjBEFw7aDCvBHXLxLJTIHLfGTWCsr1skMlJz0wiNX4FYAU0IYk3kDDtboBPABiQidj2yRB/DcRNFQVjP88rQ1dJmGODKjGZ0Owk9KeV1n9VinibtJS1kxi9KoFJmJaqirAU2Xo0xkf/JQj6R+NChtXvSbaWQGrGmhpJ1pop35INrTE+Oqd9pH807t/QvDKpiRZfLNmpj95aVdYA5vLRywL8fqZH7xdimOt1y6DpFQAAAABJRU5ErkJggg=='
const PNG3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAhCAYAAABTERJSAAAAAXNSR0IArs4c6QAAAo1JREFUWEflmD1oFEEUgL93O7lDxJ89jUm0C0EbxUYhoI0guUQLCzGCEhtrA+k0sUhh1C5gahvFwhNBQbk7bRUsxEILG0mjpxd/9hJFxNzujswmd16O5H5CNi443e68mfnm/cy8N8JyLa3j1ubZ04I+iXAAza5l5Vr5KeTRvNTIfe/71rsMynztcKn9YWW+nZKYTK4JwEqwQl77esQb2HavWuQvTFpb1qbipAgXFgUKwE1iZFzfmyahfrWiiCWyv90NKmZ14zMAnAc6Tb/WTHk/7BEGxTPfFRgr49xYBNEI113mJ0h1/lw1wEoDc4WNivgYmotm/QBoIDlcgQlMI5IOYIUhL5W8s+YQNRNaOeesaG4vAOlBYzIhreNqS3E68BHhmptKjoYNUp5fZZ0JYBQh787Z3WJli0OCvgUUXJnvCcU09Uym4++MD2nknKis8wA4AUy4/cnL66WVKu1cAcaAh6JyzofARDEOu33J5+sO88Q5hM8zYyqjGW0AXLyd9Ld/qoVROec1mn3NQIrIcCllTzUjW5HJfulSWB+DaKrAJMTmiD27pjAmjP34MMIZYA/QVg+0IUxLu6wSTmTnejz8x6B3NztHODBGIzrxyoAIvPeRMc8rPeVY+wwigVtUt7J1QoFRGecSwlUDUlKlgxztmKmnnXBhss4bYK85O7x+25yydVvYMCY9aHM9t4vjOwo8mrWV0m8R/dnts/fXmuq/gomQmaLkwKwU2sZ/lmmh+oxZLzqHXnn3UbkOGp0tlf5xHVO9xYUcuNGt3fSkqxVccmtHLJ+JTqYXqRw4UtWB8bvo1E2LURCZijLgaVRrv9g+w7j4LUfwuI7R+7WjpVq7vEg0XiGqt/yP3mf+ALeL0Vbnj2ZQAAAAAElFTkSuQmCC'
function Footer () {
    
    function Wave () {
       return (
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
            </defs>
            <g className="parallax">
            <use  style={{animationDelay: '0ms'}} xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(84,217,210,0.7)"></use>
            <use style={{animationDelay: '200ms'}} xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(86,251,254,0.5)"></use>

            <use style={{animationDelay: '400ms'}} xlinkHref="#gentle-wave" x="8" y="5" fill="rgba(84,217,210,0.3)"></use>
            <use style={{animationDelay: '800ms'}} xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"></use>
            </g>

        </svg>
       )
    }

    function INSTAGRAM () {
        return (
            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M17.6361 7H17.6477" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        )
    }
    return (
        <div className='footer'>
            <h2 className='footer_title'>FOLLOW US ON INSTAGRAM</h2>
            <h4 className='footer_subtitle'>#THEHYDROLOGIST</h4>
            <div className='footer_instagram-images'>
                <div className='footer_instagram-image'>
                    <img src={One}/>
                    <INSTAGRAM />
                </div>
                <div className='footer_instagram-image'>
                    <img src={Two}/>
                    <INSTAGRAM />
                </div>
                <div className='footer_instagram-image'>
                    <img src={Three}/>
                    <INSTAGRAM />
                </div>
                <div className='footer_instagram-image'>
                    <img src={Four}/>
                    <INSTAGRAM />
                </div>
                <div className='footer_instagram-image'>
                    <img src={Five}/>
                    <INSTAGRAM />
                </div>
            </div>
            <div className='footer_info'>
                <div>
                    <img width="27" height="33" src={PNG1} />
                    <div>
                       <h5>FREE DELIVERY</h5>
                       <p>Enjoy the convenience of free delivery service and have your purchases delivered right to your doorstep</p> 
                    </div>
                </div>
                <div>
                    <img width="34" height="33" src={PNG2} />
                    <div>
                        <h5>ONLINE SUPPORT</h5>
                        <p>Get the online support you need, whenever and wherever you are, with just a few clicks.</p>
                    </div>
                </div>
                <div>
                    <img width="35" height="33" src={PNG3} />
                    <div>
                        <h5>SECURE PAYMENT</h5>
                        <p>Experience worry-free online shopping with our secure payment system that ensures your financial information is always protected.</p>
                    </div>
                </div>
            </div>
               <div className='footer_header'>
                    <Wave />
                    <h4>Can't live without it.</h4>
               </div>
                <div className='footer-contnet'>
                    <div>
                        <h4>CONTACT</h4>
                       <p> 6A STREET WAREHOUSE 2 ALQUOZ IND AREA 3 DUBAI, UAE.</p>
                       <p>+971 50 974 1624</p>
                       <p>CONTACTTHEHYDROLOGIST@GMAIL.COM</p>
                    </div>
                    <div>
                        <h4>INFORMATION</h4>
                       <Link to="/about"> ABOUT US </Link>
                       <Link to="/brands"> BRANDS </Link>
                       <Link to='/offers'> OFFERS </Link>
                       <Link to="/water"> WATER SOMMELIER </Link>
                       <Link to="/insights"> INSIGHTS </Link>
                       <Link to='/affiliate'> BECOME OUR AFFILIATE </Link>
                       <Link to='/carear'> CAREER </Link>
                       <Link to="/faqs">FAQ’S </Link>
                       <Link to="/sitemap"> SITE MAP </Link>
                       <Link to='./contact'>CONTACT US </Link>
                       <Link to="/program">LOYALTY PROGRAM </Link>
                       <Link to='recycling'> RECYCLING </Link>
                    </div>
                    <div>
                        <h4>CATEGORIES</h4>
                        <Link to='/products'> BEYOUTY</Link>
                        <Link to='/products/wellbeing'> WELL BEING</Link>
                        <Link to='/products/gensiswill'> GENESIS WILL</Link>
                        <Link to='products/yougster'> YOUNGSTER</Link>
                        <Link to='products/functional-drinks'> FUNCTIONAL DRINKS</Link>
                        <Link to='products/moms-cub'>MOMS-CLUB</Link>
                        <Link to='products/mixologsit'> MIXOLOGIST</Link>
                        <Link to='products/b-healthy'> B-HEALTHY</Link>
                        <Link to='products/leaves-beans'>LEAVES-BEANS</Link>
                        <Link to='products/essentials'> ESSENTIALS</Link>
                    </div>
                    <div>
                        <h4>MY ACCOUNT</h4>
                        <Link to="/login"> LOGIN</Link>
                        <Link to="/login">MY ACCOUNT</Link>
                        <p>ORDER HISTORY </p>
                    </div>
                </div>

                <h4 className='footer_follow'>FOLLOW US AND SUBSCRIBE </h4>
                <div className='footer-input'>
                    <input placeholder='Enter your email address here' type='text'  />
                    <button> SEND</button>
                </div>
                <div className='footer-links'>
                    <a href=''>FACEBOOK</a>
                    <a href=''>INSTAGRAM</a>
                    <a href=''>YOUTUBE</a>
                    <a href=''>LINKEDIN</a>
                </div>
                <div className='footer-end'>
                    <div className='footer-policy'>

                        <a href=''>RETURN POLICY</a>
                        <a href=''>PRIVACY POLICY</a>
                        <a href=''>DELIVERY POLICY</a>
                    
                    </div>
                        <img src={Payment} />
    
                    <p>Copyright © 2023 The Hydrologist</p>
                </div>
           
        </div>
    )
}


export default Footer;