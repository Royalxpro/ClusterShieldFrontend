import React , {useEffect , useContext} from 'react'
import "../css/page css/HomePage.css"
import "../css/responsiveness/HomePage.css"
import oktaLogo from "../images/okta logo.svg"
import crowdStrikeLogo from "../images/crowdstrike logo.svg"
import googleLogo from "../images/google logo.svg"
import wizLogo from "../images/wiz logo.svg"
import user from "../images/user.svg"
import crowd from "../images/crowd.svg"
import okta from "../images/okta.svg"
import aws from "../images/aws.svg"
import forthSectionImage from "../images/forth-section.png"
import fifthSectionFirstImage from "../images/fifth-section-first-image.svg"
import fifthSectionSecondImage from "../images/fifth-section-second-image.png"
import tick from "../images/tick.svg"
import iso from "../images/iso.png"
import aicpa from "../images/aicpa.png"
import gdpr from "../images/gdpr.png"
import jira from "../images/jira.svg"
import jamf from "../images/jamf.svg"
import github from "../images/github.svg"
import ermetic from "../images/ermetic.svg"
import gitlab from "../images/gitlab.svg"
import wiz from "../images/wiz.svg"
import grafana from "../images/grafna.svg"
import azure from "../images/azure.svg"
import pageDuty from "../images/pagerDuty.svg"
import snowflake from "../images/snowflake.svg"
import sumologic from "../images/sumologic.svg"
import terraform from "../images/terraform.svg"
import { MyContext } from '../App'
import { Link } from 'react-router-dom'
export default function HomePage() {
    const{login , setLogin} = useContext(MyContext)
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    const deleteAuthentication = () => {
        localStorage.removeItem('token'); // Remove token
        setLogin(false); // Reset login state
        window.location.href = "/";
      };
    return (


        <div className='homepage'>
            <div className="homepage-landing-section">
                <div className="homepage-landing-section-top">
                    <h1><span>No-Code </span> Security</h1>
                    <p>Protect Your APIs and Web Applications with Advanced Key Security</p>
                    {login ?
                            <div className="hompage-landing-section-top-button-box">
                                <Link to="/dashboard" className="btn-a filled-btn">Dashboard</Link>
                                <button className="btn-a outline-btn" onClick={deleteAuthentication}>Logout</button>
                            </div>
                            :
                            <div className="hompage-landing-section-top-button-box">
                                <Link to="/login" className="btn-a filled-btn">Join Now</Link>
                                <Link to="/login" className="btn-a outline-btn">Sign Up</Link>
                            </div>
                    }
                </div>
                <div className="homepage-landing-section-middle">
                    <p>Native integrations for hundreds of platforms and thousands of APIs</p>
                </div>
                <div className="homepage-landing-section-bottom">
                    <div className="marquee">
                        <div className="marquee-content">
                            <div className="marquee-item">
                                <div className="marquee-item-img">
                                    <img src={grafana} alt="" />
                                </div>
                                <div className="marquee-item-content">
                                    <p>Grafana</p>
                                </div>
                            </div>
                            <div className="marquee-item">
                                <div className="marquee-item-img">
                                    <img src={jamf} alt="" />
                                </div>
                                <div className="marquee-item-content">
                                    <p>Jamf</p>
                                </div>
                            </div>
                            <div className="marquee-item">
                                <div className="marquee-item-img">
                                    <img src={wiz} alt="" />
                                </div>
                                <div className="marquee-item-content">
                                    <p>Wiz</p>
                                </div>
                            </div>
                            <div className="marquee-item">
                                <div className="marquee-item-img">
                                    <img src={jira} alt="" />
                                </div>
                                <div className="marquee-item-content">
                                    <p>Jira</p>
                                </div>
                            </div>
                            <div className="marquee-item">
                                <div className="marquee-item-img">
                                    <img src={github} alt="" />
                                </div>
                                <div className="marquee-item-content">
                                    <p>Github</p>
                                </div>
                            </div>
                            <div className="marquee-item">
                                <div className="marquee-item-img">
                                    <img src={gitlab} alt="" />
                                </div>
                                <div className="marquee-item-content">
                                    <p>GitLab</p>
                                </div>
                            </div>
                            <div className="marquee-item">
                                <div className="marquee-item-img">
                                    <img src={ermetic} alt="" />
                                </div>
                                <div className="marquee-item-content">
                                    <p>Ermetic</p>
                                </div>
                            </div>
                            <div className="marquee-item">
                                <div className="marquee-item-img">
                                    <img src={azure} alt="" />
                                </div>
                                <div className="marquee-item-content">
                                    <p>Azure</p>
                                </div>
                            </div>
                            <div className="marquee-item">
                                <div className="marquee-item-img">
                                    <img src={aws} alt="" />
                                </div>
                                <div className="marquee-item-content">
                                    <p>AWS</p>
                                </div>
                            </div>
                            <div className="marquee-item">
                                <div className="marquee-item-img">
                                    <img src={pageDuty} alt="" />
                                </div>
                                <div className="marquee-item-content">
                                    <p>PageDuty</p>
                                </div>
                            </div>
                            <div className="marquee-item">
                                <div className="marquee-item-img">
                                    <img src={snowflake} alt="" />
                                </div>
                                <div className="marquee-item-content">
                                    <p>SnowFlake</p>
                                </div>
                            </div>
                            <div className="marquee-item">
                                <div className="marquee-item-img">
                                    <img src={sumologic} alt="" />
                                </div>
                                <div className="marquee-item-content">
                                    <p>SumoLogic</p>
                                </div>
                            </div>
                            <div className="marquee-item">
                                <div className="marquee-item-img">
                                    <img src={terraform} alt="" />
                                </div>
                                <div className="marquee-item-content">
                                    <p>TerraForm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="homepage-second-section">
                <div className="homepage-second-section-left">
                    <p>Automation Library</p>
                    <h2><span>5000+</span> <br /> Security <br /> Automations</h2>
                    <p>Streamline operations with the world’s largest no-code security automation library.</p>
                </div>
                <div className="homepage-second-section-right">
                    <div className="homepage-second-section-right-card">
                        <div className="homepage-second-section-right-card-left">
                            <img src={oktaLogo} alt="" />
                        </div>
                        <div className="homepage-second-section-right-card-right">
                            <h4>Okta</h4>
                            <p><span>On Suspicious Activity</span> confirm with user they performed the action</p>
                        </div>
                    </div>

                    <div className="homepage-second-section-right-card">
                        <div className="homepage-second-section-right-card-left">
                            <img src={crowdStrikeLogo} alt="" />
                        </div>
                        <div className="homepage-second-section-right-card-right">
                            <h4>CrowdStrike</h4>
                            <p><span>Every 6 hours</span> check agents are installed for all Okta users</p>
                        </div>
                    </div>

                    <div className="homepage-second-section-right-card">
                        <div className="homepage-second-section-right-card-left">
                            <img src={googleLogo} alt="" />
                        </div>
                        <div className="homepage-second-section-right-card-right">
                            <h4>Google Drive</h4>
                            <p><span>Every Day at 00:00</span> clean up externally shared files and folders</p>
                        </div>
                    </div>

                    <div className="homepage-second-section-right-card">
                        <div className="homepage-second-section-right-card-left">
                            <img src={wizLogo} alt="" />
                        </div>
                        <div className="homepage-second-section-right-card-right">
                            <h4>Wiz</h4>
                            <p><span>On New Vulnerability Alert</span> notify engineering team in Slack</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="homepage-third-section">
                <h2>Find Your <span>Automation</span></h2>
                <select className='homepage-third-section-option'>
                    <option value="">Explore Use Cases</option>
                    <option value="">Compliance & Governance</option>
                    <option value="">Credentials Security</option>
                    <option value="">Network Security</option>
                    <option value="">SOC & Incident Response</option>
                    <option value="">Email Security</option>
                    <option value="">Endpoint Security</option>
                    <option value="">Identity & Access</option>
                </select>
                <div className="homepage-third-section-bottom">
                    <div className="homepage-third-section-bottom-card">
                        <div className="homepage-third-section-bottom-card-top">
                            <div className="homepage-third-section-bottom-card-top-box">
                                <img src={user} alt="" />
                            </div>
                            <hp>{'>'}</hp>
                            <div className="homepage-third-sect`ion-bottom-card-top-box">
                                <img src={crowd} alt="" />
                            </div>
                        </div>
                        <div className="homepage-third-section-bottom-card-middle">
                            <p>Schedule daily scan and enforce local admin policy</p>
                        </div>
                        <div className="homepage-third-section-bottom-card-bottom">
                            <p>Compliance & Governance</p>
                        </div>
                    </div>
                    <div className="homepage-third-section-bottom-card">
                        <div className="homepage-third-section-bottom-card-top">
                            <div className="homepage-third-section-bottom-card-top-box">
                                <img src={user} alt="" />
                            </div>
                            <hp>{'>'}</hp>
                            <div className="homepage-third-section-bottom-card-top-box">
                                <img src={okta} alt="" />
                            </div>
                        </div>
                        <div className="homepage-third-section-bottom-card-middle">
                            <p>Confirm with user when suspicious activity alert received</p>
                        </div>
                        <div className="homepage-third-section-bottom-card-bottom">
                            <p>Identity & Access</p>
                        </div>
                    </div>
                    <div className="homepage-third-section-bottom-card">
                        <div className="homepage-third-section-bottom-card-top">
                            <div className="homepage-third-section-bottom-card-top-box">
                                <img src={user} alt="" />
                            </div>
                            <hp>{'>'}</hp>
                            <div className="homepage-third-section-bottom-card-top-box">
                                <img src={crowd} alt="" />
                            </div>
                        </div>
                        <div className="homepage-third-section-bottom-card-middle">
                            <p>Schedule daily scan and enforce USB access</p>
                        </div>
                        <div className="homepage-third-section-bottom-card-bottom">
                            <p>Compliance & Governance</p>
                        </div>
                    </div>
                    <div className="homepage-third-section-bottom-card">
                        <div className="homepage-third-section-bottom-card-top">
                            <div className="homepage-third-section-bottom-card-top-box">
                                <img src={user} alt="" />
                            </div>
                            <p>&gt;</p>
                            <div className="homepage-third-section-bottom-card-top-box">
                                <img src={aws} alt="" />
                            </div>
                        </div>
                        <div className="homepage-third-section-bottom-card-middle">
                            <p>Validate security policy for new S3 bucket</p>
                        </div>
                        <div className="homepage-third-section-bottom-card-bottom">
                            <p>Cloud Security</p>
                        </div>
                    </div>
                </div>
                <div className="btn-a filled-btn">Explore 5000+ Automations</div>
            </div>



            <div className="homepage-forth-section">
                <div className="homepage-forth-section-top">
                    <h2>Automate Beyond the SOC</h2>
                    <p>Meet ClusterShield, the worlds most powerful no-code security platform. Take advantage of 5000+ no-code automations built by the cybersecurity community to help achieve your goals faster and protect your organization better.</p>
                    <Link to="/dashboard" className="btn-a outline-btn">Get Demo</Link>
                </div>
                <div className="homepage-forth-section-bottom">
                    <img src={forthSectionImage} alt="" />
                </div>
            </div>


            <div className="homepage-fifth-section">
                <div className="homepage-fifth-section-top">
                    <h2>Build Security Apps with  <br /><span>No-Code Automation</span></h2>
                    <p>Shift-left your security and operations workflows with 5000+ no-code automations.</p>
                </div>
                <div className="homepage-fifth-section-bottom" id="homepage-fifth-section-bottom-1">
                    <div className="homepage-fifth-section-bottom-left">
                        <img src={fifthSectionFirstImage} alt="" />
                    </div>
                    <div className="homepage-fifth-section-bottom-right">
                        <div className="btn-a filled-btn">App Platform</div>
                        <h2>Build <span> No-Code</span> Apps</h2>
                        <p>Define any security or infrastructure policy and enforce it using no-code automation.</p>
                        <div className="homepage-fifth-section-bottom-right-grid">
                            <div className="homepage-fifth-section-bottom-right-grid-items">
                                <img src={tick} alt="" />
                                <p>IFTTT</p>
                            </div>
                            <div className="homepage-fifth-section-bottom-right-grid-items">
                                <img src={tick} alt="" />
                                <p>On-demand</p>
                            </div>
                            <div className="homepage-fifth-section-bottom-right-grid-items">
                                <img src={tick} alt="" />
                                <p>Scheduled</p>
                            </div>
                            <div className="homepage-fifth-section-bottom-right-grid-items">
                                <img src={tick} alt="" />
                                <p>Polling</p>
                            </div>
                            <div className="homepage-fifth-section-bottom-right-grid-items">
                                <img src={tick} alt="" />
                                <p>Webhooks</p>
                            </div>
                            <div className="homepage-fifth-section-bottom-right-grid-items">
                                <img src={tick} alt="" />
                                <p>REST APIs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-fifth-section-bottom" id="homepage-fifth-section-bottom-2">
                    <div className="homepage-fifth-section-bottom-left">
                        <img src={fifthSectionSecondImage} alt="" />
                    </div>
                    <div className="homepage-fifth-section-bottom-right">
                        <div className="btn-a filled-btn">App Portal</div>
                        <h2><span>Self-Service</span> Apps</h2>
                        <p>Shift-left your security and platform operations by sharing convenient self-service apps with your organization.</p>
                        <Link to="/dashboard" className="btn-a filled-btn">Explore App Portal</Link>
                    </div>
                </div>
            </div>


            <div className="homepage-bottom-portion">
                <div className="homepage-security-section">
                    <h2>Security <span> & Compliance</span></h2>
                    <p>ClusterShield is committed to upholding the highest grade of industry security and compliance standards.</p>
                    <div className="homepage-security-section-images">
                        <img src={iso} alt="" />
                        <img src={gdpr} alt="" />
                        <img src={aicpa} alt="" />
                    </div>
                </div>
                <div className="homepage-automate-security-box">
                    <h2>Automate security <br /> operations <span>everywhere</span>.</h2>
                    <p>ClusterShield is secure, decentralized, and cloud-native. Get modern security and platform operations today.</p>
                    <Link to="/dashboard" className="btn-a filled-btn">Schedule A Demo</Link>
                </div>
            </div>


        </div>
    )
}
