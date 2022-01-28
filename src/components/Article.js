
function Article({title,date, minutes, preview}){
    
    const showDate = (date===undefined) ? "January 1, 1970" : date;
    // console.log(title);

    return(
        <article >
            <h3>{title}</h3>
            <small>{showDate} | {minutes} mins to read</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;