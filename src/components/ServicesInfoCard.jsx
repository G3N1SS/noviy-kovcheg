export default function ServicesInfoCard({img, name}){
  return(
    <li className="services-info__card">
      <img src={img} alt={name} className="services-info__card-img" />
    </li>
  )
}