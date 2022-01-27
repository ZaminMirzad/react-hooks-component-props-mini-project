function Article(props){
    console.log(props.article.title)
    return(
        <div key={props.article[1]}>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
        </div>
    );
}

export default Article;