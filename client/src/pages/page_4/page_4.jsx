import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import Image from '../../images/7ba0791499_1541489244.jpg'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'


function PageStaticOne() {
    const tabOne = useRef()
    const tabTwo = useRef()
    const tabThree = useRef()
    const { lang } = useContext(LanguageContext);
    return (
        <>
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                <div className='page_main page_4'>
                    <div className="container-fluid">
                        <div class="row">
                            <div class="col-lg-10 col-md-12">
                                <h3>{context[lang].centre.nineth}</h3>
                                <div class="tab">
                                    <button class="tablinks" onClick={() => {
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabOne.current.classList.add("opened")
                                    }} id="defaultOpen">Bo'lim haqida</button>
                                    <button class="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabTwo.current.classList.add("opened")
                                    }} id="defaultOpen">Bizning
                                        maqsadimiz</button>
                                    <button class="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.add("opened")
                                    }} id="defaultOpen">Bizning
                                        vazifamiz</button>
                                </div>
                                <div id="About" ref={tabOne} class="tabcontent opened">
                                    <h3>Bo'lim haqida</h3>
                                    <p>Ilmiy  innovatsion  ishlanmalarni  tijoratlashtirish  bo’limi (IIITB) –O’zbekiston Respublikasi Prezidentining 2018 yil 7 maydagi “Iqtisodiyot tarmoqlari va soxalariga innivatsiyalarni joriy etish mexanizmlarini takomillashtirish bo’yicha qo’shimcha chora tadbirlar to’g’risida”gi PQ-3698-sonli qaroriga asosan 2018 yil 1 avgustdan tashkil etildi.<br />
                                        O’zbekiston Respublikasi Prezidentining 2018 yil 14 iyuldagi “Ilmiy va ilmiy-texnikaviy faoliyat natijalarini tijoratlashtirish samaradorligini oshirish bo’yicha qo’shimcha chora-tadbirlar to’g’risida”gi PQ-3855-sonli qaroriga asosan institutda innivatsion jamg’arma ochildi. Innivatsion jamg’armaga tushgan mablag’larni to’g’ri taqsimlanishini olib borish uchun Innovatsion Kengash tuzildi.
                                        <br />
                                        Ilmiy  innovatsion  ishlanmalarni  tijoratlashtirish  bo’limi innovatsion ishlanmalardan tushgan mablag’lar, to’lov shartnoma xisobidan tushgan mablag’ning 5% (oylik, stipendiya va boshqa xarajatlarni qoplangandan so’ng) xamda xomiylar xisobidan  o’z faoliyatini olib boradi.</p>
                                </div>

                                <div id="Functions" ref={tabTwo} class="tabcontent">
                                    <h3>Bizning maqsadimiz</h3>
                                    <p>Asosiy maqsadi: Ilmiy innovatsion ishlanmalarni yaratish, sinovadan o’tkazish, tijoratlashtirish va ishlab chiqarishga joriy qilishdan  iborat.</p>
                                </div>

                                <div id="Management" ref={tabThree} class="tabcontent">
                                    <h3>Bizning vazifamiz</h3>
                                    <p>TKTI xodimlarining ilmiy-tadqiqot ishlari natijalarini litsenziya shartnomalari tuzib transfer qilish va kichik korxonalar yaratish ishlari bo’yicha faoliyat olib boradi. Ishlab chiqarishga tayyor ishlanmalarni tijoratlashtirish uchun investorlarni, hamkorlarni jalb qiladi. Ishlab chiqarish korxonalari bilan birgalikda professor o’qituvchilar tomonidan tayyorlangan yangi texnologiya hamda yangi maxsulotlar ishlab chiqarish uchun hamkorlikda aloqalar olib boradi. Bitiruvchi va iqtidorli yoshlarni innovatsion ishlanmalar, texnologik loyixalar startaplarga jalb etadi. O’zbekiston Respublikasi Fanlar Akademiyasi ilmiy tadqiqot institutlari, “O’zkimyosanoat” AJ va “O’zqurilishmateriallari” AJ va boshqa ishlab chiqarish korxonalari o’rtasida o’zaro manfatli innivatsion xamkorlikni yo’lga qo’yadi. Innovatsion ishlanmalarni patentlashtirish, sertifikatlash ishlarini tizimli ravishda takomillashtirish, bu yo’nalishda konsalting xizmatlarini joriy etish. Isntitutdagi ilmiy ishlanmalar natijalarini xalqaro miqyosida targ’ib qilishdan iborat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10">
                                <div class="teachers justify-content-between">
                                    <div class="wrapper-personal">
                                        <div class="photo-personal">
                                            <img class="images-personal w-100" src={Image} alt="About us" />
                                            <div class="photo__large">
                                                <div class="bg-text">
                                                    <span class="degree">Bo'lim boshlig'i</span>
                                                    <span class="info">Adilov  Ravshan  Irkinivich

                                                        Ilmiy darajasi: Texnika fanlari nomzodi

                                                        Ilmiy unvoni: Dotsent

                                                        Lavozimi: Ilmiy  innovatsion  ishlanmalarni  tijoratlashtirish  bo’limi boshlig’i</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="fullname-personal">Adilov  Ravshan  Irkinivich</h6>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Bo`limlar</p></li>
                        <li className="nav-ul-li active"><a href="">Ilmiy innovatsion ishlanmalarni tijoratlashtirish bo’limi</a></li>
                        <Link to={'/page/static/get/8'}>
                        <li className="nav-ul-li"><a href="">Marketing va talabalar amaliyoti boʻlimi</a></li>
                        </Link>
                        <Link to={'/page/static/get/9'}>
                        <li className="nav-ul-li"><a href="">Jismoniy va yuridik shaxslarning murojaatlari bilan ishlash, nazorat va monitoring bo'limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/15'}>
                        <li className="nav-ul-li"><a href="">Xalqaro aloqalar bo`limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/13'}>
                        <li className="nav-ul-li"><a href="">Ta’lim sifatini nazorat qilish bo‘limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/10'}>
                        <li className="nav-ul-li"><a href="">O‘quv-uslubiy bo‘limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/7'}>
                        <li className="nav-ul-li"><a href="">Magistratura bo‘limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/6'}>
                        <li className="nav-ul-li"><a href="">Kadrlar bo'limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/12'}>
                        <li className="nav-ul-li"><a href="">Sirtqi bo'lim</a></li>
                        </Link>
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Markazlar</p></li>
                        <Link to={'/page/static/get/11'}>
                        <li className="nav-ul-li"><a href="">Raqamli ta'lim texnologiyalari markazi</a></li>
                        </Link>
                        <Link to={'/page/static/get/14'}>
                        <li className="nav-ul-li"><a href="">TKTI huzuridagi “Pedagogik kadrlarni qayta tayyorlash va malakasini oshirish” tarmoq markazi</a></li>
                        </Link>
                        <Link to={'/page/static/get/5'}>
                        <li className="nav-ul-li"><a href="">Innovasion markazi</a></li>
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
