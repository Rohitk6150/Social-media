import { useContext} from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList=()=>{
   const{postList,fetching} = useContext(PostListData);
    //const [fetching, setFetching] = useState(false);

   // useEffect(() => {
   //    setFetching(true);
   //    const controller = new AbortController();
   //    const signal = controller.signal;

   //    fetch("https://dummyjson.com/posts" , {signal})
   //    .then(res => res.json())
   //    .then(data => {
   //       addInitialPosts(data.posts);
   //       setFetching(false);
   //    });
   //    return () => {
   //       controller.abort();
   //    }
   // } , []);
//    const handleGetPostsClick =() =>{
//      fetch('https://dummyjson.com/posts')
// .then(res => res.json())
// .then(data => {addInitialPosts(data.posts)});
// }
// );
//    }
    
   return(
        <>
        {fetching && <LoadingSpinner></LoadingSpinner>}
        {!fetching && postList.length === 0 && (<WelcomeMessage></WelcomeMessage>)}
        {!fetching && postList.map((post)=>
            <Post key={post.id} post={post}></Post>
    )}
        </>
    );
};

export default PostList;

//  fetch('https://dummyjson.com/posts')
// .then(res => res.json())
// .then(data => {
//     const homes = Promise.resolve();
//     homes( data =>
//       {addInitialPosts(data.posts)});
