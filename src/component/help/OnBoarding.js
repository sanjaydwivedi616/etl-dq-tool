import React, { Component } from 'react';
import img1 from "./image/img1.png"
import img2 from "./image/img2.png"
import img3 from "./image/img3.png"
import img4 from "./image/img4.png"
import img5 from "./image/img5.png"
import img6 from "./image/img6.png"
import img7 from "./image/img7.png"
import img8 from "./image/img8.png"
import img9 from "./image/img9.png"
import img10 from "./image/img10.png"
import img11 from "./image/img11.png"
import img12 from "./image/img12.png"
import img13 from "./image/img13.png"
import img14 from "./image/img14.png"
import img15 from "./image/img15.png"

class OnBoarding extends Component {
    render() {
        return (
            <div>
                <a href="#demo" className="btn btn-info" data-toggle="collapse">On Boarding document</a>
                <div id="demo" className="collapse onboardingImg">
                    <h3>Steps to process :</h3>
                    <h4>1.Raise the IT ticket to install Cisco AnyConnect client software VPN. once it is installed login to vpn as follows</h4>
                    <img src={img1} alt="vpn" />
                    <img src={img2} alt="vpn" />
                    <p>Based on on your two factor authentication given in your okta account profile settings will shown as follows (this one consider the SMS authentication)</p>
                    <img src={img3} alt="vpn" />
                    <p>After providing password and if authentication completed then will get following screen</p>
                    <img src={img4} alt="vpn" />
                    <h4>2.Login to <a href="https://mdsol.okta.com/app/UserHome" target="_blank" rel="noopener noreferrer"> https://mdsol.okta.com</a></h4 >
                    <p>Provide your userid(not full email)</p>
                    <p>Provide password "password*8"</p>
                    <p>It will ask to reset password, reset it.</p>
                    <h4>3.Login to following url medidata landing page</h4>
                    <a href="https://mdsol.okta.com/app/UserHome" target="_blank" rel="noopener noreferrer"> https://mdsol.okta.com</a>
                    <p> Will get following screenshot</p>
                    <img src={img5} alt="vpn" />
                    <p> Provide the username and password  and two factor - authentication.After authentication will get following landing page</p>
                    <img src={img6} alt="vpn" />
                    <h4>4.Click on gmail account from above landing page and make sure to provide the mdsol/medidata login credentials.</h4>
                    <img src={img7} alt="vpn" />
                    <h4>5. Verify the JIRA and google drive access same as above. Form google drive verify the access for team111 folder</h4>
                    <p> Sample screenshot for jira:</p>
                    <img src={img8} alt="vpn" />
                    <h4>6.Slack app register:</h4>
                    <p>From mdsol landing page, click on add apps icon and in search bar type the app name(slack) to register.</p>
                    <img src={img9} alt="vpn" />
                    <h4>7.Once the slack is approved ,  you will get a notification and the app will be listed in the Landing Page</h4>
                    <img src={img10} alt="vpn" />
                    <h4>8. GitHub account creation:</h4>
                    <p>Github instructions - <a href="https://mdsol.jiveon.com/docs/DOC-16296 " target="_blank" rel="noopener noreferrer"> https://mdsol.jiveon.com/docs/DOC-16296 </a></p>
                    <p>Make sure the mdsol mail - id as public.</p>
                    <p>And get the access to the Medidata organization in Github using the following method</p>
                    <p>Post a request in the #github - admins channel in Slack with your github username(eg glow - mdsol) and mdsol mail - id.</p>
                    < img src={img11} alt="vpn" />
                    <p>Once approved, cross verify the following link to have access or not for the repository.</p>
                    <a href="https://github.com/mdsol/meds-test/tree/master/meds-compare. " target="_blank" rel="noopener noreferrer">https://github.com/mdsol/meds-test/tree/master/meds-compare. </a>
                    <h4>9. AWS installation:</h4>
                    <p>In gmail account(mdsol), you will get the aws installation notification to download and  install.If your unable to install the same then raise the IT ticket to do the same.</p>
                    <img src={img12} alt="vpn" />
                    <p>On clicking the above link you will be redirected to following page to download the windows(as per system OS) aws workspace.</p>
                    <img src={img13} alt="vpn" />
                    <p>Try to install the downloaded software if not in the case raise the IT - Ticket to do the same.</p>
                    <p>After the installation verify, your are able to login or not  to aws using your credentials as per following screenshot.</p>
                    <img src={img14} alt="vpn" />
                    <img src={img15} alt="vpn" />
                </div >
            </div >
        );
    }
}

export default OnBoarding;