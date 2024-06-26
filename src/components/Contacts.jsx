import addressicon from '../images/addressicon.svg'
import phoneicon from '../images/phoneicon.svg'
import emailicon from '../images/emailicon.svg'
import tg from  '../images/tg.png'
import vk from  '../images/vk.png'
import ig from  '../images/ig.png'

export default function Contacts(){
  return(
    <section className="contacts" id='contacts'>
      <h2 className="contacts__title">Контакты</h2>
      <div className="container container_contacts">
        <ul className="contacts__address-list">
          <li className="contacts__address-link">
            <div className="contacts__address-title-box">
              <img src={addressicon} alt="icon" className="contacts__address-title-icon" />
              <h3 className="contacts__address-title">Адрес</h3>
            </div>
            <p className="contacts__address-text">Тульская область, г.Кимовск, мкрн Строитель, дом 5, строение 1</p>
          </li>
          <li className="contacts__address-link">
            <div className="contacts__address-title-box">
              <img src={phoneicon} alt="icon" className="contacts__address-title-icon" />
              <h3 className="contacts__address-title">Телефон</h3>
            </div>
            <p className="contacts__address-text">+7 (906) 620 10-20</p>
            <p className="contacts__address-text">+7 (953) 972 87-27</p>
          </li>
          <li className="contacts__address-link">
            <div className="contacts__address-title-box">
              <img src={emailicon} alt="icon" className="contacts__address-title-icon" />
              <h3 className="contacts__address-title">Email</h3>
            </div>
            <p className="contacts__address-text">noevkovcheg.2014@mail.ru</p>
          </li>
          <li className="contacts__address-link">
            <a href="https://vk.com/noevkovcheg2015" className="contacts__btn" target='_blank'><img src={vk} alt="vk" className="contacts__btn-img"/></a>
            <a href="" className="contacts__btn" target='_blank'><img src={tg} alt="tg" className="contacts__btn-img"/></a>
            <a href="" className="contacts__btn" target='_blank'><img src={ig} alt="ig" className="contacts__btn-img"/></a>
          </li>
        </ul>
        <iframe src="https://yandex.ru/map-widget/v1/?ll=38.547397%2C54.000815&mode=search&oid=1734608590&ol=biz&sctx=ZAAAAAgBEAAaKAoSCc0iFFtBJUNAEfYM4ZhlAUtAEhIJPgXAeAYN1z8RHCjwTj49wj8iBgABAgMEBSgKOABAzVRIAWoCcnWdAc3MTD2gAQCoAQC9AU5%2Br7zCAQXOjZC7BoICJtC90L7QstGL0Lkg0LrQvtCy0YfQtdCzINC60LjQvNC%2B0LLRgdC6igIAkgIFMTA4MjmaAgxkZXNrdG9wLW1hcHM%3D&sll=38.547397%2C54.000815&source=serp_navig&sspn=0.011286%2C0.004005&text=%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%BA%D0%BE%D0%B2%D1%87%D0%B5%D0%B3%20%D0%BA%D0%B8%D0%BC%D0%BE%D0%B2%D1%81%D0%BA&z=17.4" className={`contacts__map`} data-aos='zoom-in' data-aos-once="true"></iframe>
      </div>
    </section>
  )
}