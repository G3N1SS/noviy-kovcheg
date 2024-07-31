import {lounges} from "../utils/constants"
import Card from "./Card"

export default function Lounge(){
  return(
    <section className="lounge" id='interior'>
      <div className="container">
        <h2 className="lounge__title">Наши залы</h2>
        <ul className="lounge__list">
          {lounges.map(data => {
            return(
              <Card card={data} key={data.name} duration={(lounges.indexOf(data) + 3)*500}/>
            )
          })}
        </ul>
      </div>
    </section>
  )
}