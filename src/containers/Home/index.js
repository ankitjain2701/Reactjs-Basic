import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import RecentPosts from './RecentPosts';
import blogdata from '../../data/blog.json';
import Layout from '../../components/Layout';


const SideImage= props=>{
    return(
        <div style={{height:`${props.height}px`}}>
            <img src={props.src} alt=""/>
        </div> 
    );
}
const ImageGallary = props=>(  
    <div className="gallaryPost" style={props.gallaryStyle}>  
    <section style={{width:props.largeWidth}}>
      <div className="mainImageWrapper">  

{/*<img src={require('../../blogPostImages/'+ props.imagesArray[0])} alt=""/>*/}
      <img src={require('../../blogPostImages/girl.png')} alt=""/>
      </div> 
    </section>

    <section  className="sideImageWrapper" style={{width:props.smallWidth}}>
      {/*  {
            props.imagesArray.map(image=><SideImage 
                height={props.sideImageHeight}
                src={require('../../blogPostImages/'+ image)}
                alt=""/> )
        }*/}

        <SideImage height={props.sideImageHeight}
        src={require('../../blogPostImages/3.jpg')}
       //src={require('../../blogPostImages'+ props.imagesArray[2])} 
        />                 
        <SideImage height={props.sideImageHeight}
        src={require('../../blogPostImages/3.jpg')}
       //src={require('../../blogPostImages'+ props.imagesArray[2])} 
        /> 
        <SideImage height={props.sideImageHeight}
       src={require('../../blogPostImages/3.jpg')}
        /> 
    </section>
  </div>
        
);

const Home = props=> {
    const gallaryheight=450;
    const gallaryStyle={
        height:gallaryheight+'px',
        overflow:'hidden'
    } 
  
    const imgAr= blogdata.data.map(post=>post.blogImage)
   
    const sideImageHeight= gallaryheight/3;

    return(
        <div>
         <Card >
          
         <ImageGallary
            largeWidth="70%"
            smallWidth="30%"
            sideImageHeight={sideImageHeight}
            gallaryStyle={gallaryStyle}
            imagesArray={imgAr}
           />
         
         </Card>   
            <Layout>
                <RecentPosts style={{width:'70%' }}/>
                
            </Layout>
                 
        </div>
    );
}

export default Home;