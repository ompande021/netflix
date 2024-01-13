import './Footer.css'
const Footer=()=>{
    return(
        <footer className='footer'>
        <div id="media">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
        </div>
        <table>
            <tbody>
                <tr>
                    <td>Descriptive Audio</td>
                    <td>Investor Relations</td>
                    <td>Legal Notices</td>
                    <td>Press</td>
                </tr>
                <tr>
                    <td>Help Center</td>
                    <td>Employment</td>
                    <td>Cookie Preferences</td>
                    <td>Privacy</td>
                </tr>
                <tr>
                    <td>Gift cards</td>
                    <td>Terms of use</td>
                    <td>Corporate Information</td>
                    <td>Contact us</td>
                </tr>
            </tbody>
        </table>
        <span>Service code</span>
        <p><i class="fa-regular fa-copyright"></i>1997-2024 Netflix, Inc.</p>
    </footer>
    )
}
export default Footer