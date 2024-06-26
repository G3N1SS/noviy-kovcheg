import Footer from "./Footer";
import HeaderContainer from "./HeaderContainer";
import { services } from "../utils/constants";
import ServicesCard from "./ServicesCard";
import { useEffect } from "react";

export default function Services({isScrolled, isScreenMid, isScreenSmall}){
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [])
  return(
    <>
      <HeaderContainer isScrolled={isScrolled} invert={(isScreenMid || isScreenSmall) ? false : true} isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>
      <section className="services">
        <div className="container container_services">
          <h2 className="services__title">Платные услуги дома торжеств “Новый Ковчег”</h2>
          <p className="services__title-caption">Администрация и сотрудники помогут вам с организацией мероприятия,мы сотрудничаем со множеством специалистов в различных областях</p>
          <ul className="services__card-list">
            {services.map((data)=>{
              return <ServicesCard key={data.name} data={data} />
            })}
          </ul>
        </div>
      </section>
      <Footer isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>
    </>
  )
}