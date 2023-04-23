import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonClick from './ButtonClick';
import OverviewBtn from './OverviewBtn';




function Cards(props){

  return(
    <div>
    {props.cards.map((cardsData, index) =>( 

<div class="row row-cols-1 row-cols-md-3 g-4" key={index} >
<div class="col">
<div class="card" >
  <img src={cardsData.Link} class="card-img-top" alt="..." height="260px"/>
  <div class="card-body">
    <h5 class="card-title">{cardsData.Title}</h5>
    <p class="card-text">{cardsData.Genre}</p>
    {cardsData.Age}
    <ButtonClick buttonHandler = {props.buttonHandler}/>
      <OverviewBtn />
  </div>
</div>
</div>
</div>)
)}
</div>
) 
}





export default Cards;