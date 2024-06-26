import photo1 from '../images/photo1.png'
import photo2 from '../images/photo2.png'
import photo3 from '../images/photo3.png'
import photo4 from '../images/photo4.png'

export default function Interior(){
  return(
    <section className="interior">
      <h2 className="interior__title">Великолепный интерьер</h2>
      <div className="container container_interior">
        <div className="interior__photo-grid">
          <img src={photo1} alt="photo" className="interior__photo" />
          <img src={photo3} alt="photo" className="interior__photo" />
          <img src={photo2} alt="photo" className="interior__photo" />
          <img src={photo4} alt="photo" className="interior__photo" />
        </div>
        <p className="interior__text">Дом торжеств "Новый Ковчег" приглашает провести ваше торжество в своих роскошных залах. Совместить возможность созерцания красоты и замечатель-ной кухни не так-то просто, но нам это удалось! 
        Проведя ваше торжество в наших залах, вы насладитесь замечательными блюдами, попадёте в атмосферу роскоши и красоты. Тщательно анализированы и учтены все особенности проведения торжеств для вашего удобства и комфорта. Все элементы, которые вы увидите: цветовая гамма, освещение, интерьер помещения создавались по дизайну владельца заведения. Благодаря чему "Новый Ковчег" выглядит торжественно и пробуждает самые возвышенные чувства восторга.</p>
      </div>
    </section>
  )
}