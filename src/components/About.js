
function About(props){
    return (
        <aside>
            <img src={props.image} placeholder="https://via.placeholder.com/215" alt="blog logo"/>
            <p>{props.about}</p>
        </aside>
    );  
}

export default About;