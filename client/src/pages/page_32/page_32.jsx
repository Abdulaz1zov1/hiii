import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/analitik.jpg'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'




function PageStaticOne() {
    const tabOne = useRef()
    const tabTwo = useRef()
    const tabThree = useRef()
    const { lang } = useContext(LanguageContext);
    return (
        <>
            <ParticlesBg color="#307ec7" type="cobweb" num={50} bg={true} />
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                <div className='page_main'>
                    <div class="row">
                        <div class="col-lg-10 col-md-12">
                            <h3>{context[lang].kafedra.fifteenth}</h3>
                            <div class="tab">
                                <button class="tablinks" onClick={() => {
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabOne.current.classList.add("opened")
                                }} id="defaultOpen">Kafedra haqida
                                </button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabTwo.current.classList.add("opened")
                                }} id="defaultOpen">Kadrlar tayyorlash</button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">Ilmiy yo’nalishlar</button>
                            </div>
                            <div id="About" ref={tabOne} class="tabcontent opened">
                                <h3>Kafedra haqida</h3>
                           <p>“Noorganik, analitik, fizikaviy va kolloid kimyo” kafedrasi umumta’lim kafedralaridan biri bо‘lib, o‘zining ta’lim va fan sohasidagi faoliyatini dunyodagi yetakchi oliy ta’lim muassasalari (Mendileyev nomidagi RKTU, QMTTU, Gubkina nomidagi NGI, Lomonosov nomidagi RDU, Xarkov politexnika instituti va boshqalar) va ilmiy guruhlari tomonidan foydalanib kelinayotgan samarador usullar asosida olib boradi. Bu esa о‘z navbatida, dunyoning yetakchi oliy ta’lim muassasalari, ilmiy tadqiqot institutlari (О‘zRFA UNKI, A.Sultanov nomidagi KFITI) va ishlab chiqarish korxonalari (Toshkent chinni zavodi, Muborak GQIZ, Shо‘rtan GQIZ, Qо‘ng‘irot SZ va boshqalar) bilan uzviy munosabatda bо‘lishini ta’minlaydi.</p>
                            </div>

                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <h3>Kadrlar tayyorlash</h3>
                               <p>Kafedra barcha ta’lim yо‘nalishlariga “Umumiy va noorganik kimyo”, 5310900–Metrologiya, standartlashtirish va mahsulot sifati menejmenti, 5311000–Texnologik jarayonlar va ishlab chiqarishni avtomatlashtirish va boshqarish, 5320300–Texnologik mashinalar va jihozlar, 5320400–Kimyoviy texnologiya (ishlab chiqarish turlari bо‘yicha), 5320500–Biotexnologiya, 5310100 – Energetika, 5321000–Oziq-ovqat texnologiyasi (mahsulot turlari bо‘yicha), 5322400 – Yog‘lar, efir moylari va parfyumeriya kosmetika mahsulotlari texnologiyasi, 5322500 – Vinochilik texnologiyasi, bijg‘ish mahsulotlari va alkogolsiz ichimliklar texnologiyasi, 5322700 – Konservalash texnologiyasi, 5322800 – Funksional ovqatlanish va bolalar mahsulotlari texnologiyasi, 5321300–Neft va neft-gazni qayta ishlash texnologiyasi, 5321400 – Neft-gaz kimyo sanoati texnologiyasi, 5322200 – Gazlarni chuqur qayta ishlash texnologiyasi, 5630100–Ekologiya va atrof-muhit muhofazasi bakalavriat ta’lim yо‘nalishlarining 2 kurs talabalariga “Analitik kimyo” va “Fizikaviy kimyo”, 3 kurs talabalariga “Kolloid kimyo” fanlaridan о‘quv mashg‘ulotlar olib boriladi.</p>
                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>Ilmiy yo’nalishlar</h3>
                             <p>Kafedrada olib borilayotgan ilmiy-tadqiqot ishlari kimyo texnologiya, qurilish materiallari, neft-gaz, qog‘oz sanoati va boshqa turdosh ishlab chiqarish korxonalarining muammolarini fizik-kimyoviy, kolloid-kimyoviy asoslarini о‘rganib yechimini topishga qaratilgan. Tadqiqot natijalari sanoat korxonalarida (Muborak GQIZ, SHо‘rtan GQIZ, Qо‘ng‘irot SZ va boshqalar) sinovlardan о‘tkazilib amaliyotda qо‘llanishi tashkil qilindi. Kafedrada 1-2-3-kurs talabalari tahsil olishiga qaramasdan, о‘quv yili boshida iqtidorli talabalar “Akademiklar H.R.Rustamov, K.S.Axmedov” nomidagi tо‘garaklarga tanlab olinadi, kafedra professor- о‘qituvchilari tomonidan ilmiy-tadqiqot ishlariga jalb qilish, internetdan kimyoga bag‘ishlangan yangi ma’lumotlar asosida sharhlar tayyorlab anjumanlarda ma’ruza qilish hamda Respublika Oliy о‘quv yurtlari talabalari orasida Respublika Olimpiadasida qatnashishga tayyorlash ishlarini olib boriladi.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-10">
                            <div class="teachers">
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image1} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">Kafedra boshlig'i</span>
                                                <span class="info">
                                                texnika fanlari bo‘yicha falsafa doktori (PhD), dotsent <br />
                                                Qabul kunlari: Har kuni 1400-1600 <br />
                                                Fax.: +998-71- 244-92-48 <br />
                                                Elektron manzil: nabievabduraxim5@gmail.com      
                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal"> Nabiyev Abduraxim Abduxamidovich</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                        <li className="nav-ul-li active"><a href="">Analitik, fizikaviy va kolloid kimyo kafedrasi</a></li>
                        <Link to={'/page/static/get/18'}>
                        <li className="nav-ul-li"><a href="">Ijtimoiy-siyosiy fanlar kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/19'}>
                        <li className="nav-ul-li"><a href="">Fizika va elektrotexnika kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/20'}>
                        <li className="nav-ul-li"><a href="">Biotexnologiya kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/21'}>
                        <li className="nav-ul-li"><a href="">Jismoniy tarbiya va sport kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/22'}>
                        <li className="nav-ul-li"><a href="">Informatika, avtomatlashtirish va boshqaruv kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/23'}>
                        <li className="nav-ul-li"><a href="">Oziq-ovqat sanoati mashina va jihozlari - Mexanika asoslari kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/24'}>
                        <li className="nav-ul-li"><a href="">Go’sht-sut va konserva mahsulotlar texnologiyasi kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/25'}>
                        <li className="nav-ul-li"><a href="">Oziq-ovqat mahsulotlari texnologiyasi kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/26'}>
                        <li className="nav-ul-li"><a href="">Organik kimyo va og’ir organik sintez texnologiyasi kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/27'}>
                        <li className="nav-ul-li"><a href="">Sellyuloza va yog`ochsozlik texnologiyasi kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/28'}>
                        <li className="nav-ul-li"><a href="">Yuqori molekulali birikmalar va plastmassalar kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/29'}>
                        <li className="nav-ul-li"><a href="">Neft gazni qayta ishlash kimyoviy texnologiyasi kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/30'}>
                        <li className="nav-ul-li"><a href="">Oliy matematika kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/31'}>
                        <li className="nav-ul-li"><a href="">Silikat materiallar, nodir va kamyob metallar texnologiyasi kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/33'}>
                        <li className="nav-ul-li"><a href="">Noorganik moddalar kimyoviy texnologiyasi kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/34'}>
                        <li className="nav-ul-li"><a href="">Kimyoviy texnologik jarayon va qurilmalar kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/35'}>
                        <li className="nav-ul-li"><a href="">Sanoat ekologiyasi kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/36'}>
                        <li className="nav-ul-li"><a href="">Umumiy va noorganik kimyo kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/37'}>
                        <li className="nav-ul-li"><a href="">Sаnоаt iqtisоdiyoti vа mеnеjmеnti kаfеdrаsi</a></li>
                        </Link>
                        <Link to={'/page/static/get/38'}>
                        <li className="nav-ul-li"><a href="">Mahsulot sifati menejmenti kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/39'}>
                        <li className="nav-ul-li"><a href="">Kasb ta’limi kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/40'}>
                        <li className="nav-ul-li"><a href="">Tillar kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/41'}>
                        <li className="nav-ul-li"><a href="">Xorijiy tillar kafedrasi</a></li>
                        </Link>
                        <Link to={'/page/static/get/42'}>
                        <li className="nav-ul-li"><a href="">Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi</a></li>
                        </Link>
                    </ul>
                    </div>
                    </div>
            </div>
            <Footer />
        </>
    );
}

export default PageStaticOne;
