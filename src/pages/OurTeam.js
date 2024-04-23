import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/ourteam.css"

export default function() {
    return (
        <>
            <Header/>
            <div className = "header-our-team">
                <h1 className = "our-team-main-header-text">MEET THE TEAM</h1>
                <p className = "team-description">Our team is composed of UC Berkeley undergraduates of all levels who are passionate about social good and supporting the local communities at Berkeley. </p>
                {/* Honestly I dont like the description here. If they want it then put it */}
             </div>
    <div class = "full-cards-wrapper">
        <div class = "big-card-wrapper-first">
            <div class = "big-card-wrapper-second">
                <div class="card-wrapper flip-right">
                    <div class="card">
                        <div class = "front">
                            <img src= {require("./SampleHeadshot.jpeg")} alt="USMO donation smiling photo" style ={{}}>
                            </img>
                            <h1> John Doe</h1>
                            <h2> Senior Advisor</h2> 
                            {/* text is texting !*/ }                   
                        </div>
                        <div class = "back"> 
                            <div class = "back-text-wrapper">
                                <h2> Senior Advisor</h2>
                                <h1> John Doe</h1>
                                <p> Hi, I’m John! I’m the Senior Advisor for USMO, I do senior advisor things.  My hobbies include Kneading, Snorking, i dont know, something to fill space. There is so much space to fill actually its ok we’ll get them to do little writeups that fill enough space :D I think that would be great anyway i am just ramble typing ramble ramble ramble im sitting in moffit lvl 1 rn the sacremento kings just eliminated the golden state warriors this is crazy</p>
                            </div> 
                            <div class = "icons-box"> 
                                <img src= {require("../images/instaIcon.png")} alt="USMO donation smiling photo" style ={{}}></img>                       
                                <img src= {require("../images/linkedinIcon.png")} alt="USMO donation smiling photo" style ={{}}></img> 
                                <img src= {require("../images/githubIcon.png")} alt="USMO donation smiling photo" style ={{}}></img>                                             
                            </div>
                        </div>
                    </div>
                    {/* Should be ok */}
                </div>
                <div class="card-wrapper flip-right">
                    <div class="card">
                        <div class = "front">
                            <img src= {require("./SampleHeadshot.jpeg")} alt="USMO donation smiling photo" style ={{}}>
                            </img>
                            <h1> John Doe 2</h1>
                            <h2> Senior Advisor</h2>                     
                        </div>
                        <div class = "back"> 
                            <div class = "back-text-wrapper">
                                <h2> Senior Advisor</h2>
                                <h1> John Doe</h1>
                                <p> Hi, I’m John! I’m the Senior Advisor for USMO, I do senior advisor things.  My hobbies include Kneading, Snorking, i dont know, something to fill space. There is so much space to fill actually its ok we’ll get them to do little writeups that fill enough space :D I think that would be great anyway i am just ramble typing ramble ramble ramble im sitting in moffit lvl 1 rn the sacremento kings just eliminated the golden state warriors this is crazy</p>
                            </div> 
                            <div class = "icons-box"> 
                                {/* <img src= {require("./SampleHeadshot.jpeg")} alt="USMO donation smiling photo" style ={{}}> </img> */}                        
                            </div>
                        </div>
                    </div>
                    {/* Should be ok */}
                </div>
                <div class="card-wrapper flip-right">
                    <div class="card">
                        <div class = "front">
                            <img src= {require("./SampleHeadshot.jpeg")} alt="USMO donation smiling photo" style ={{}}>
                            </img>
                            <h1> John Doe 3</h1>
                            <h2> Senior Advisor</h2> 
                        </div>
                        <div class = "back"> 
                            <div class = "back-text-wrapper">
                                <h2> Senior Advisor</h2>
                                <h1> John Doe</h1>
                                <p> Hi, I’m John! I’m the Senior Advisor for USMO, I do senior advisor things.  My hobbies include Kneading, Snorking, i dont know, something to fill space. There is so much space to fill actually its ok we’ll get them to do little writeups that fill enough space :D I think that would be great anyway i am just ramble typing ramble ramble ramble im sitting in moffit lvl 1 rn the sacremento kings just eliminated the golden state warriors this is crazy</p>
                            </div> 
                            <div class = "icons-box"> 
                                {/* <img src= {require("./SampleHeadshot.jpeg")} alt="USMO donation smiling photo" style ={{}}> </img> */}                        
                            </div>
                        </div>
                    </div>
                    {/* Should be ok */}
                </div>
            </div>
            <div class = "big-card-wrapper-second">
                <div class="card-wrapper flip-right">
                    <div class="card">
                        <div class = "front">
                            <img src= {require("./SampleHeadshot.jpeg")} alt="USMO donation smiling photo" style ={{}}>
                            </img>
                            <h1> John Doe 4</h1>
                            <h2> Senior Advisor</h2> 
                            {/* */ }
                        </div>
                        <div class = "back"> 
                            <div class = "back-text-wrapper">
                                <h2> Senior Advisor</h2>
                                <h1> John Doe</h1>
                                <p> Hi, I’m John! I’m the Senior Advisor for USMO, I do senior advisor things.  My hobbies include Kneading, Snorking, i dont know, something to fill space. There is so much space to fill actually its ok we’ll get them to do little writeups that fill enough space :D I think that would be great anyway i am just ramble typing ramble ramble ramble im sitting in moffit lvl 1 rn the sacremento kings just eliminated the golden state warriors this is crazy</p>
                            </div> 
                            <div class = "icons-box"> 
                                {/* <img src= {require("./SampleHeadshot.jpeg")} alt="USMO donation smiling photo" style ={{}}> </img> */}                        
                            </div>
                        </div>
                    </div>
                    {/* Should be ok */}
                </div>
                <div class="card-wrapper flip-right">
                    <div class="card">
                        <div class = "front">
                            <img src= {require("./SampleHeadshot.jpeg")} alt="USMO donation smiling photo" style ={{}}>
                            </img>
                            <h1> John Doe 5</h1>
                            <h2> Senior Advisor</h2> 
                        </div>
                        <div class = "back">
                        <div class = "back-text-wrapper">
                            <h2> Senior Advisor</h2>
                            <h1> John Doe</h1>
                            <p> Hi, I’m John! I’m the Senior Advisor for USMO, I do senior advisor things.  My hobbies include Kneading, Snorking, i dont know, something to fill space. There is so much space to fill actually its ok we’ll get them to do little writeups that fill enough space :D I think that would be great anyway i am just ramble typing ramble ramble ramble im sitting in moffit lvl 1 rn the sacremento kings just eliminated the golden state warriors this is crazy</p>
                        </div> 
                        <div class = "icons-box"> 
                            {/* <img src= {require("./SampleHeadshot.jpeg")} alt="USMO donation smiling photo" style ={{}}> </img> */}                        
                        </div>
                        </div>
                    </div>
                    {/* Should be ok */}
                </div>
                <div class="card-wrapper flip-right">
                    <div class="card">
                        <div class = "front">
                            <img src= {require("./SampleHeadshot.jpeg")} alt="USMO donation smiling photo" style ={{}}></img>
                            <h1> John Doe 6</h1>
                            <h2> Senior Advisor</h2> 
                        </div>
                        <div class = "back"> 
                            <div class = "back-text-wrapper">
                                <h2> Senior Advisor</h2>
                                <h1> John Doe</h1>
                                <p> Hi, I’m John! I’m the Senior Advisor for USMO, I do senior advisor things.  My hobbies include Kneading, Snorking, i dont know, something to fill space. There is so much space to fill actually its ok we’ll get them to do little writeups that fill enough space :D I think that would be great anyway i am just ramble typing ramble ramble ramble im sitting in moffit lvl 1 rn the sacremento kings just eliminated the golden state warriors this is crazy</p>
                            </div> 
                            <div class = "icons-box"> 
                                {/* <img src= {require("./SampleHeadshot.jpeg")} alt="USMO donation smiling photo" style ={{}}> </img> */}                        
                            </div>
                        </div>
                    </div>
                    {/* Should be ok */}
                </div>
            </div>
        </div>
    </div>
    <Footer/>
        </>
    )
}