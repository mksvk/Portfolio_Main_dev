import Lottie from "lottie-react";
import anime from "./profile.json";
import "./tailwindProfile.css"

const TailwindProfile = ()=>{

    return<> 
        
         <div className="w-1/2 main  my-10 text-lg flex flex-col items-center space-y-5">

            <div className=" sub rounded-full w-1/2">

                <div className="content">
                     <img alt="girl" className="w-40 rounded-full" src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" />
   <h1>M K S V Krishna Reddy</h1>
   <h1>Devloper...</h1>
   <p>B-TECH computer science in lovely professional university,jalandhar,punjab</p>
    <p>
    I'm a developer. I have a passion for web design and love to create for web and mobile devices.
    </p>
       
                </div>
                    
 </div>

  <div>
     <Lottie className="w-80 " animationData={anime} loop={true} /> 
  </div>
 
   
   </div>
     
    </>
}

export default TailwindProfile