// Home.js
import React, { useEffect } from 'react';
import gsap from 'gsap';
import RecipeReviewCard from './Cards';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useEffect(() => {
    // Create a GSAP timeline for the scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-content", // Element that triggers the animation
        start: "top center", // When to start the animation
        end: "bottom center", // When to end the animation
        scrub: true, // Smooth scrubbing effect
      }
    });

    // Add zoom-in effect to the image and fade-in effect to the text
    tl.to(".home-image", { scale: 1.2, duration: 1 });
    tl.from(".home-title", { opacity: 1, y: 50, duration: 0.5 }, "-=0.5");
    tl.from(".home-description", { opacity: 1, y: 30, duration: 0.5 }, "-=0.5");

    // Clean up the ScrollTrigger when the component is unmounted
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div style={{padding:"20px",display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
      <img src='https://img.freepik.com/free-photo/various-vegetables-black-table-with-space-message_1220-616.jpg?w=1380&t=st=1707128229~exp=1707128829~hmac=71a378f17a98cd0842b531c00d44c336e0ff5f3f3531920de5465200b2519bea' className='home-img' alt='resturant' style={{height:"500px",width:"1000px", borderRadius:"20px"}}/>
      <div className="text-container" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "#fff" }}>
        <h1 className="home-title" style={{ cursor: "pointer" , color:"#FFD700"}}>Welcome to Our Kitchen</h1>
        <p className="home-description" style={{ cursor: "pointer",color:"#FFD700" }}>Explore the amazing recipes of our Kitchen</p>
      </div>
      <RecipeReviewCard/>
    </div>
  );
};

export default Home;
