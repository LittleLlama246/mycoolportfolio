import Navbar from "./Navbar";
import llama from "../images/llama.png"

const Resume = () => {
  return (
    <div>
      <Navbar/>
      <img src={llama} width="100%"></img>
    </div>
  );
};
  
export default Resume;