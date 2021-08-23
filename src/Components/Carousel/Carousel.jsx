import React from 'react'
export default function Caroussel(){



return(
    <div id="carouselExampleCaptions" className="carousel slide" data-interval="false">
<div className="main-slider">
<h1>OUR VOLUNTEER SAYS</h1>
</div>
<span className="line2"></span>


<div className="content-slider">
  <div className="slider">
    <div className="mask">
      <ul>
        <li className="anim1">
          <div className="quote">A person's a person, no matter how small</div>
          <div className="source">- Dr. Seuss</div>
        </li>
        <li className="anim2">
          <div className="quote">Children must be taught how to think, not what to think</div>
          <div className="source">- Margaret Mead, cultural anthropologist</div>
        </li>
        <li className="anim3">
          <div className="quote">Children need models rather than critics</div>
          <div className="source">- Billy Graham, evangelist</div>
        </li>
        <li className="anim4">
          <div className="quote">We worry about what a child will become tomorrow, yet we forget that he is someone today.</div>
          <div className="source"> Stacia Tauscher, dancer and artist</div>
        </li>
        <li className="anim5">
          <div className="quote">Children are not things to be molded, but are people to be unfolded.</div>
          <div className="source"> Jess Lair, author</div>
        </li>
      </ul>
    
  </div>
</div>
</div>
</div>
)
}