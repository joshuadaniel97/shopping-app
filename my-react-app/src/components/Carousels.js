import React from 'react'

function Carousels() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div class="carousel-item active">
        <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt054c12973dc65d3e/60db71928491e60f790b1b87/f61138da5e0a3af7c7c83b6166f1cb03dbfee30f.jpg?auto=webp&format=pjpg&width=3840&quality=60" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://i0.wp.com/news.xbox.com/en-us/wp-content/uploads/sites/2/2020/03/XboxSeriesXTech_Inline1.jpg?resize=1920%2C1080&ssl=1" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://www.kreedon.com/wp-content/uploads/2022/10/high-gaming-pc.jpg" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousels
