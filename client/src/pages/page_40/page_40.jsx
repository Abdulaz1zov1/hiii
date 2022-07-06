import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/til.png'
import Image00 from '../../images/kafedra/til-xaqida.jpg'
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
                            <h3>{context[lang].kafedra.twentythird}</h3>
                            <div class="tab">
                                <button class="tablinks" onClick={() => {
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabOne.current.classList.add("opened")
                                }} id="defaultOpen">Kafedira haqida
                                </button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabTwo.current.classList.add("opened")
                                }} id="defaultOpen">Kafedra tarixi</button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">   O‘quv uslubiy ishlar</button>
                            </div>
                            <div id="About" ref={tabOne} class="tabcontent opened">
                                <h3>Kafedira haqida</h3>
                                <img class="" src={Image00} alt="About us" />

                            </div>

                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <h3>Kafedra tarixi</h3>
                              <p>1991-yil may oyida O‘zR Prezidenti farmoniga asosan tashkil topgan Toshkent Kimyo-texnologiya instituti tarkibida dastlab “Chet tillari”  hamda “O‘zbek va rus tillari” kafedralari shakllangan edi. “Chet tillari” kafedrasiga 1991-1992-yillarda dots. V.D.Musayeva, 1992-1994-yillarda filologiya fanlari nomzodi S.N.Abdullayeva,                           1994-2005 - yillarda dots. I.G‘.Zoxidov rahbarlik qildilar. “O‘zbek va rus tillari” kafedrasini dots. H.Yo‘ldosheva boshqardi. 1996-yilda kafedralar birlashtirilib, “Tillar” kafedrasi deya atala boshlandi va kafedrani dots. I.G‘.Zoxidov boshqardi. 1997-yilda kafedra ikkiga ajraldi va “O‘zbek va rus tillari” kafedrasiga prof. H.Uzoqov, “Chet tillari” kafedrasiga dots. I.G‘.Zoxidov rahbarlik qildilar. 2001-yil “O‘zbek va rus tillari” kafedrasini p.f.n. F.Umarova boshqardi,      2002- yildan 2017- yilgacha kafedraga f.f.n., dots. G.S.Keldiyorova rahbarlik qildi. 2005 - yil sentyabr oyidan kafedralar birlashtirilib, “Tillar” kafedrasi deb nomlandi. 2017 yildan “Tillar” kafedrasidan “Chet tillari” sikli ajratildi. 2017- yil 8 -iyundan boshlab kafedraga filologiya fanlari nomzodi, dots. Tavaldiyeva Gulbaxar Nishanovna rahbarlik qilmoqda.</p>
                              <p>Kafedra o‘qituvchilari talabalarga saboq berish bilan birga ularda bilim olish ko‘nikmalarini o‘stirish, ma'naviy jihatdan barkamol bo‘lib yetishishlari uchun  mehnat qilmoqdalar. O‘qituvchilari tomonidan talabalarning og‘zaki va yozma nutq ko‘nikmalarini rivojlantirish bo‘yicha yangi pedagogik texnologiyalar asosida  fanlardan amaliy mashg‘ulotlar olib boriladi.

</p>
                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>   O‘quv uslubiy ishlar</h3>
                               <p>Kafedraning o‘quv jarayonida 2 ta fan nomzodi, 3 ta katta o‘qituvchi va o‘qituvchilar faoliyat ko‘rsatadi. </p>
                               <p>Kafedrada bakalavr yo‘nalishi bo‘yicha 3 ta, magistratura mutaxassisligi bo‘yicha 1 ta fan o‘qitiladi. Kafedra professor-o‘qituvchilari tomonidan barcha fanlar bo‘yicha takomillashgan o‘quv-uslubiy majmualar yaratilib, ular asosida axborot resurs bazasi shakllantirilgan. Professor-o‘qituvchilar tomonidan oxirgi yillarda 3 o‘quv qo‘llanmasi, 2 ma'ruza matnlari, o‘ndan ortiq uslubiy ko‘rsatmalar, 50 dan ortiq ilmiy-uslubiy maqolalar yaratilgan va chop etilgan.</p>
                               <p>“Kadrlar tayyorlash milliy dasturi”ni hayotga izchillik bilan tatbiq etish, kadrlar tayyorlash samaradorligini oshirish, ta'lim turlari o‘rtasidagi o‘zaro integratsiya jarayonini kuchaytirish va ular o‘rtasidagi uzviylik va uzluksizlikni ta'minlash maqsadida kafedra bilan O‘zbekiston Respublikasi Oliy va O‘rta maxsus ta'lim Vazirligi O‘rta maxsus kasb-hunar ta'limi tizimi kadrlari malakasini oshirish va ularni qayta tayyorlash instituti o‘rtasida hamkorlik shartnomasi tuzilgan.</p>
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
                                                f.f.n., dotsent <br />
                                                tel: +99890 9448164<br />
                                                E- mail:   gulbahor_tavaldiyeva@mail.ru
 <br />     
                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Tavaldieva Gulbaxar Nishanovna</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                        <li className="nav-ul-li active"><a href="">Tillar kafedrasi</a></li>
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
