import { useContext} from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList=()=>{
<<<<<<< HEAD
   const{postList, fetching} = useContext(PostListData);
=======
   const{postList, addInitialPosts} = useContext(PostListData);
   const handleGetPostsClick =() =>{
     fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(data => {addInitialPosts(data.posts)});
}
);
   }
>>>>>>> 0ef4a343b5c7bce22055c54e080071b71558c4a4
    
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
