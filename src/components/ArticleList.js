import Article from "./Article";

function ArticleList(props){
    console.log(props.posts);
        
    return (
        <main >
            {
                props.posts.map((item) => {
                   return <Article key={item.id} title={item.title} date={item.date} preview={item.preview} minutes={item.minutes} />
                })
            }
            
        </main>
    );
}

export default ArticleList;