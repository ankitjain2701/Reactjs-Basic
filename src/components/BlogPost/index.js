import React,{useState,useEffect} from 'react';
import "./style.css";
import Card from '../UI/Card';
import blogpostdata from '../../data/blog.json';


/**
* @author
* @function BlogPost

**/

const BlogPost= (props) => {
  
    const[post,setPost]= useState({
            id:"" ,
            blogCategory:"" ,
            blogTitle:"",
            slug:"",
            postedOn:"",
            author: "",
            blogImage:"",
            blogText:""
    });
    const[slug,setSlug]=useState('');
    //console.log(props);
    useEffect(()=>{
        const slug=props.match.params.slug;
        const post=blogpostdata.data.find(post =>post.slug==slug);
        setPost(post);
        setSlug(slug);
    },[post,props.match.params.slug]); 
    
    if(post.blogImage="")
        return null;
    
   
    
  return(
    <div className="blogPostContainer">
        <Card>
            <div className="blogHeader">
            <span className="blogCategory">{post.blogCategory}</span>
            <h1 className="postTitle">{post.blogTitle}</h1>
            <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
            </div>
          <div className="PostimageContainer">
          <img src={require( `../../blogPostImages/girl.png`)} alt="Post Image"/>
          {/*<img src={require('../../blogPostImages/'+ post.blogImage)} alt="Post Image"/>
  */}
            
          </div>  
          <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p>l{post.blogText} </p>
          </div>
        </Card>
    </div>   
   )

 }

export default BlogPost;
