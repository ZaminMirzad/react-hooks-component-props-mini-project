
function About(props){
    const {image, about} = props;
    const imgsrc = image===undefined? "https://via.placeholder.com/215" : image;
    return (
        <aside>
            <img src={imgsrc} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    );  
}

export default About;