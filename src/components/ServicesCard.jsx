export default function ServicesCard({data}){
  return(
    <li className="services__card">
      <img src={data.img} alt={data.name} className="services__card-img" />
      <p className="services__card-name">{data.name}</p>
    </li>
  )
}