
import Typewriter from 'typewriter-effect';

export default function AboutMe() {
    return(
        <section id="AboutMe" className="about--me">
            
            <div>
                <img src="./images/profile_copy.jpg" alt ="AboutMe" className = "profile-pic"/>
            </div>
            <div className="my-name">
                <h1 className= "about-me-from-top">


                    <span className="about-me-title">heyo, i'm
                        <span className="darkblue-text"> keerthi </span>
                        <i class="icon hand peace outline icon-style"></i>
                    </span>{" "}
                    

                </h1>
            </div>
            {/* <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("GeeksForGeeks")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You")
                        .start();
                }}
            /> */}
            <div className="text-about-me">
                <ul class="text-list">
                    <p className ="margin-first-bullet">
                        <span class="blue-text"> Math and Computer Science</span> 
                        <span> @ </span>
                        <a href="https://ucsd.edu/" target="_blank">
                            <span class="purple-text">UC San Diego</span>
                        </a>
                        <i class=""></i>
                    </p>
                        
                    <p className ="text-bullet">
                        <span class="blue-text"> Director</span> 
                        <span> @ </span>
                        <a href="https://www.tritonhacks.org/" target="_blank">
                            <span class="purple-text">TritonHacks</span>
                        </a>
                    </p>

                    <p className ="text-bullet">
                        <span class="blue-text">Software Engineer</span> 
                        <span> @ UC San Diego </span>
                        <a href="https://blink.ucsd.edu/technology/ai/index.html" target="_blank">
                            <span class="purple-text">AI Team </span>
                        </a>
                    </p>
                    <p className ="text-bullet">
                        <a href="https://www.intel.com/content/www/us/en/homepage.html" target="_blank">
                            <span class="purple-text">Intel</span>
                        </a>
                        <span class="blue-text"> Ambassador </span> working w/ pre-release NUC 14Pro AI PC
                    </p>
                    <p className ="text-bullet">Technical 
                        <span class="blue-text"> Events Host </span> 
                        <span> @ </span>
                        <a href = "https://acmucsd.com/" target = "_blank">
                            <span class="purple-text">ACM</span> 
                        </a>
                        <span> UC San Diego</span>
                    </p>
                    <p className ="text-bullet"> <span class="green-text">Training</span> for <span class="orange-text">half-marathon</span></p>
                    <p className ="text-bullet"> <span class="green-text">Building </span> everyday to make a <span class="pink-text">ripple</span>!</p>
                </ul>
            </div>
        </section>
    )
}