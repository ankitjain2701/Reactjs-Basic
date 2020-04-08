import React,{useState,useEffect} from 'react';
import "./style.css";
import Card from '../UI/Card';
import blogpostdata from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const[posts,setPosts]= useState([]);
  //console.log(props);

  useEffect(()=>{
      const posts=blogpostdata.data;
      setPosts(posts); 
  },[posts]);   

  return(
  <div className="sidebarContainer" style={{ width:props.width }}>
    <Card  style={{marginBottom:'20px',padding:'20px',boxSizing: 'border-box' }}>
       <div className="cardHeader">
        <span>About US</span>
       </div>
       <div className="sidebarimageContainer">
      <img src={require('../../blogPostImages/Aboutus.jpg')} alt="Post Image"/>
    </div>
    <div className="cardBody">
      <p className="personalBio">My Name is Ankit jain. Think Big and Achieve Big</p>
    
    </div>
    </Card>

    <Card style={{marginBottom:'20px',padding:'20px',boxSizing: 'border-box' }}>
       <div className="cardHeader">
        <span>Social Network</span>
       </div>
    </Card>

    <Card style={{marginBottom:'20px',padding: '20px',boxSizing: 'border-box' }}>
      <div className="cardHeader">
          <span>Recent Post</span>
      </div>

      <div className="recentPosts">

        {
          posts.map(post =>{
            return(
              <NavLink key={post.id} to={`/post/${post.slug}`}>
              <div className="recentPost">
                <h3 >{post.blogTitle}</h3>
                <span >{post.postedOn}</span>
              </div>
              </NavLink>
              

            ); 
          })
        }

      </div>

    </Card>    
  </div>
    
   )

 }

export default Sidebar