import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/silluza.png'
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
                            <h3>{context[lang].kafedra.tenth}</h3>
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
                                }} id="defaultOpen">Kafedraning o'quv-uslubiy ishlari</button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">Kafedra ilmiy ishlari</button>
                            </div>
                            <div id="About" ref={tabOne} class="tabcontent opened">
                                <h3>Kafedra haqida</h3>
                                <p> “Sellulloza va yogʻochsozlik texnologiyasi” kafedrasi 2004-yil 4-martda Toshkent kimyo-texnologiya instituning rektori buyrugʻi asosida tashkil etilgan.</p>
                                <p>Hozirgi mustaqil Oʻzbekistonning iqtisodiyot rivojlanishida tayyorlanayotgan yosh kadrlarning ahamiyati juda katta. Shu ma’noda nafaqat Oʻzbekistonda, balki Oʻrta Osiyoda yagona boʻlgan “Sellyuloza va yogʻochsozlik texnologiyasi” kafedrasida bakalavriatura va magistratura mutaxasisliklari boʻyicha kadrlar tayyorlanadi. Kafedrada yuqori malakali, tajribali professor va dotsentlar faoliyat koʻrsatmoqda, ular har bir bitiruvchining yaxshi mutaxassis bo‘lishi uchun alohida yondashib ishlaydilar.</p>
                            </div>

                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <h3>Kafedraning o'quv-uslubiy ishlari</h3>
                                <p>Kafedra hodimlari tomonidan 500 dan ortiq ilmiy maqola va 550 tadan ortiq mualliflik, jumladan xalqaro guvohnoma va patentlar olingan. Ularning ilmiy maqolalari Rossiya, AQSh, Xitoy, Ruminiya, Turkiya, Shvedsariya, Italiya davlatlarida chop etilgan.</p>
                                <p>5320300-texnologik mashina va jihozlar (sellyuloza-qogʻoz), 5320300-texnologik mashina va jihozlar (yogʻochsozlik texnologiyasi), 5А320306-sellyuloza – qogʻoz ishlab chiqarish texnologiyasi va jaraayonlari texnologiyasi, 5А320307- yogʻochga ishlov berish texnologiyasi va yogʻochsozlik mutaxasisligi bo‘yicha davlat ta’lim standartlari yaratildi. Barcha mutaxasislik fanlaridan ishchi reja tuzilgan bo‘lib, unda o‘tiladigan ma’ruza, laboratoriya va seminar mashgʻulotlarini kalendar rejalari, reyting jadvallari o‘z aksini topgan. Mutaxasislik fanlaridan laboratoriya va seminar mashgʻulotlarini o‘tkazish uchun lotin va ingliz grafikasida metodik qo‘llanmalar tayyorlangan.</p>

                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>Kafedra ilmiy ishlari</h3>
                                <p>Kafedra hodimlari tomonidan mahalliy xom-ashyolar asosida import o‘rnini bosuvchi eksportbop mahsulotlar olish uchun chiqindisiz, ekologik toza, resurslarni tejaydigan yangi texnologiya yaratish mavzusida ilmiy-tadqiqot ishlari olib borilmoqda.</p>
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
                                                    k.f.d., dots.
                                                    <br />
                                                    Qabul vaqti: Chorshanba (1400-1500 gacha)
                                                    <br />
                                                    telefonlar: 90 918-25-64
                                                    <br />
                                                    E-mail  khusenov_82@mail.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">   A.Sh.Xusenov</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                        <li className="nav-ul-li active"><a href="">Sellyuloza va yog`ochsozlik texnologiyasi kafedrasi</a></li>
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
                        <Link to={'/page/static/get/32'}>
                        <li className="nav-ul-li"><a href="">Analitik, fizikaviy va kolloid kimyo kafedrasi</a></li>
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
