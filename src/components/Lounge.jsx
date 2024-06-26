import {lounges} from "../utils/constants"
import Card from "./Card"

export default function Lounge(){
  const offset = document.querySelectorAll('.lounge')
  console.log(offset.offsetHeight)
  return(
    <section className="lounge" id='interior'>
      <div className="container">
        <h2 className="lounge__title" onClick={() => console.log(window.scrollY)}>Наши залы</h2>
        <ul className="lounge__list">
          {lounges.map(data => {
            console.log(lounges.indexOf(data))
            return(
              <Card card={data} key={data.name} duration={(lounges.indexOf(data) + 3)*500}/>
            )
          })}
        </ul>
      </div>
    </section>
  )
}