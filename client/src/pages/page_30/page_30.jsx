import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/matem.png'
import Image00 from '../../images/kafedra/mat-xaqida.jpg'
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
                            <h3>{context[lang].kafedra.thirteenth}</h3>
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
                                }} id="defaultOpen">O'quv-uslubiy ishlar</button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">Kafedra ilmiy ishlari</button>
                            </div>
                            <div id="About" ref={tabOne} class="tabcontent opened">
                                <h3>Kafedra haqida</h3>
                                <p>   Toshkent kimyo texnologiya instituti «Oliy matematika» kafedrasi 1991 yilda 6 may 1991 yildagi O‘zbekiston Respublikasi Prezidentining UP-203 raqamli farmoniga ko‘ra Toshkent kimyo-texnologiya instituti tashkil etilgan kundan boshlab faoliyat ko‘rsatib kelmoqda. Keyingi yillarda kafedraga bir kator respublikamizdagi saloxiyatli matematiklar raxbarlik kilishgan: 1991-1992 yillarda prof.Sh.Narimov, 1992-1993 yillarda dos.N.Raximova, 1993-1995 yillarda dos.J.Ibodov, 1995-1996 yillarda dos.S.Abdunazarov, 1996-2001 yillarda dos.U.Raxmonov, 2001-2002 yillarda dos.O.Matchonov, 2002-2004 yillarda dos.D.Raximov, 2004-2007 yillarda dos.R.Maksudov, 2007-2011 yillarda yana prof.Sh.Narimov. 2011-2017 yil iyulgacha  dos.I.Iskanadjiev, 2017 yil iyuldan hozirgi kungacha prof I.I. Safarov  mudirlik kilmokda. Hozirgi kunda kafedrada 1 nafar fizika-matematika fanlari doktori, professorlar, 5 nafar fizika-matematika fanlari nomzodi, 2 nafar katta o‘qituvchi va 5 nafar assistentlar faoliyat ko‘rsatmoqda. Kafedra jamoasi talabalarga “Matematika” , “Iqtisodchilar uchun matematika ” va “Iqtisodiy matematika ” fanlaridan ma’ruza, amaliy va mustakil ta’lim mashg‘ulotlarini olib bormokdalar.</p>
                            </div>
                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <h3>O'quv-uslubiy ishlar</h3>
                                <p> Kafedrada o‘qitiladigan fanlar: “Matematika” va “Iktisodchilar uchun matematika”, “Iktisodiy matematika” bo‘yicha barcha yo‘nalishlardagi talabalar uchun namunaviy dasturlar ishlab chiqilgan, o‘quv-uslubiy majmualar yaratilgan. Oxirgi yillarda kafedra professor-o‘qituvchilari tomonidan 2 ta darslik, 3ta o‘quv  qo‘llanmalar chop etildi. 2016-2017 o‘quv yilida kafedrada  chet el adabiyotlariga asoslangan  o‘quv qo‘lanma tayorlandi. Chop etish uchun muvoffiqlashtirish   va rejalashtirish qo‘mitasiga  topshirildi.  Matematika fanining barcha  mavzulari bo‘yicha  testlar banki yaratilgan. Kafedramiz o‘z ilmiy salohiyati bilan oliy o‘quv yurtlarining turdosh kafedralariga ilmiy va uslubiy yordam ko‘rsatib kelmokda.</p>
                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h4>O'qitiladigan fanlar</h4>
                                <p>Bakalavriatura bo‘yicha o‘qitiladigan fanlar:</p>
                                <p>Matematika  2. Iktisodchilar uchun matematika 3.Iktisodiy matematika</p>
                                <p> KAFEDRANING TASHQI ILMIY VA AMALIY ALOQALARI</p>
                                <p>Kafedra O‘zbekiston Respublikasi Fanlar Akademiyasining Matematika va Mexanika institutlari, O‘zbekiston Milliy Universiteti, Toshkent Davlat Texnika Universiteti, Buxoro muxandislik texnologiya inistituti bilan ilmiy aloqalar o‘rnatgan. Shu bilan birga kafedra Moskva davlat universiteti, Moskva aviatsiya inistituti ,  AQShning Nyu-Yorkdagi Buffalo Davlat Universiteti hamda Kornell Universitetlari bilan ilmiy alokalar o‘rnatgan.</p>
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

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal"> Safarov Ismoil Ibroximovich</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                        <li className="nav-ul-li active"><a href="">Oliy matematika kafedrasi</a></li>
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
