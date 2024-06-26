import HeaderContainer from "./HeaderContainer";
import ServicesCard from "./ServicesCard";

export default function ServicesInfo({isScrolled, array, isScreenMid}){
  return(
    <>
      <HeaderContainer isScrolled={isScrolled} isScreenMid={isScreenMid}/>
      <section className="services-info">
        <div className="container container_services-info">
          <h3 className="services-info__title">{array.title}</h3>
          <ul className="services-info__grid">
            {array.map((data) => {
              return <ServicesCard img={data.img} name={data.name} key={data.name}/>
            })}
          </ul>
          <p className="services-info__text">{array.text}</p>
        </div>
      </section>
    </>
  )
}