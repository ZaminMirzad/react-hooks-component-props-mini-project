import Article from "./Article";

function ArticleList(props){
    return (
        <main>
            <Article article={props.articles} />
        </main>
    );
}

export default ArticleList;