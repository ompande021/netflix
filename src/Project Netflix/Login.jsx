import './Login.css'
import { Link } from 'react-router-dom'
const Login=()=>{
    
    return(
        <div>
        <section className='sec'>
                <div className='mainbox'>
                    <p id='p1'>Laughter. Tears. Thrills. Find it all on <br />Netflix.</p>
                    <p id='p2'>Endless entertainment start at just ₹149. Cancle anyrime.</p>
                    <p id='p3'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
                        <div id='in'><input type="email" placeholder='Email Address'></input></div>
                        <Link to={'/'}><button>Get Started ▷ </button></Link>
                    </div>
                </div>
        </section>
        <section className='sec2'> </section>
        </div>
    )
}
export default Login