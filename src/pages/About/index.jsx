import { useParams } from "react-router-dom";

const About = () =>{
    const { id } = useParams();
    return (
        <div>
            <h1>ABOUT</h1>
            <p>This is the about page { id }</p>
        </div>
    )
}

export default About;