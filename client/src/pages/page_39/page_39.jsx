import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/kasb.png'
import Image00 from '../../images/kafedra/kasb-xaqida.jpg'
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
                            <h3>{context[lang].kafedra.twentysecond}</h3>
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
                              <p>“Kasb ta’limi” kafedrasi 1999 yilda institut rektori buyrug‘iga asosan tashkil etildi. 5140900 “Kasb ta’limi” (oziq-ovqat va kimyoviy texnologiyasi) bakalavr yo‘nalishi bo‘yicha kafedraga O‘zbekistonda mavjud bo‘lgan kimyoviy va oziq-ovqat texnologiyasiga qarashli barcha KXKlari uchun maxsus fanlarni o‘qitish maqsadida o‘qituvchi kadrlar tayyorlash zimmasi yuklatilgan. 1999-2001 yillar kafedra mudiri lavozimida dos. Y.Maqsudov faoliyat ko‘rsatgan</p>
                              <p>Kafedra jamoasi birinchi vakillari sifatida dos.R.Xabibullaev, katta o‘qituvchi J.Soliev, Sh.Mirzalieva, S.Mirzaaxmedova hamda kabinet mudiri Yu.Qambarovalar kafedraga asos solganlar. Kafedraning birinchi bitiruvchi qaldirg‘ochlari 2003 yilda “Kasb ta’limi” yo‘nalishi bo‘yicha bakalavr darajasini egalladilar (“Kasb ta’limi” ozik-ovqat va kimyoviy texnologiyasi). 2001-2003 yillarda pedagogika fanlari doktori, professor X.X.Tillashev kafedra mudirligi vazifasini bajarib kelgan.</p>
                              <p>2003-2004 o‘quv yilida kafedrada “Kasb-hunar fanlarini o‘qitish metodikasi” mutaxassisligi bo‘yicha magistraturaga asos solinib, birinchi magistrlar qatorida 2005 yilda M.R.Muxitbekova, X.Ataxodjaev, S.Ravshanovlar magistrlik dissertatsiyalarini muvaffaqiyatli himoya qilib magistr akademik darajasini egallashga sazovor bo‘ldi.</p>
                              <p>2004 yildan kafedraga rahbarlik etish vazifasi yetuk pedagogik olim, pedagogika fanlari doktori, professor U.N. Nishonalievga topshirilgan. Bu davrda kafedra professor-o‘qituvchilari, uzluksiz ta’lim tizimida modulli o‘qitish texnologiyasini yaratish bo‘yicha ilmiy-tadqiqot ishlari olib borildi.</p>
                              <p>2005 yildan kafedra mudiri lavozimiga dos.R.Boboyarov tayinlandi.2007 yil mart oyidan – 2011 yil avgustgacha kafedraga kimyo fanlari nomzodi, dos.J.I. Alimjonova boshqardi.</p>
                              <p>2011 yil sentyabr oyidan boshlab kafedraga kimyo fanlari nomzodi, dos.Sh.T.Kangliev rahbarlik qildi.2017 yil 20 martdan buyon pedagogika fanlari nomzodi dos.G.Sh. Aripova kafedraga rahbarlik qilmoqda.</p>
                              <p>2008-2009 o‘quv yilida kafedraning ass.M.L.Aripova 2011-2012 o‘quv yilida nomzodlik dissertatsiyalarini muvaffaqiyatli himoya qildi. Kafedraning asosiy istiqbolli vazifalari qatoriga o‘quv jarayonining sifatini oshirish, fanlar bo‘yicha uslubiy ta’minot darajasini ko‘tarish, o‘quv-uslubiy ishlar borasida KHKlari bilan hamkorlik aloqalarini o‘rnatish, o‘quv jarayonini yanada samarali tashkil etish maqsadida “D.I. Mendeleev nomidagi Rossiya kimyo-texnologiya universiteti” ta’lim muassasi bilan professor-o‘qituvchilarning malakasini oshirish, stajirovkalar o‘tkazish, magistratura mutaxassisligi bo‘yicha tahsil olish, ta’lim muassasalariaro bir qancha maqsadli yo‘nalishlarda xamkorliklarni yo‘lga qo‘yish, bitiruvchi mutaxassislarni maqsadli tayyorlash, ta’lim va tarbiya sohasida ilmiy-tadqiqot ishlarini rivojlantirish, ma’naviy-ma’rifiy ishlarni yanada yuqori saviyaga ko‘tarish va boshqalar kiradi.</p>
                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>   O‘quv uslubiy ishlar</h3>
                                <p>Kafedraning o‘quv jarayonida 4 fan nomzodi,  3 katta o‘qituvchi va 5 assistent o‘qituvchilar faoliyat ko‘rsatadi. Kafedrada 1-4 kurslarda jami 117 bakalavr talabalar taxsil oladi.</p>
                                <p>2015, 2016, 2017, 2018 yillarda kafedra tomonidan 5111000- Kasb ta’limi (kimyoviy va oziq-ovqat texnologiyasi 2 ta) bo‘yicha Davlat Ta’lim Standartlari va malakaviy talablar yaratildi. Ushbu vazifani bajarish jarayonida 10 ta fanning namunaviy dasturlarini yaratish ustida ishlar olib borilmoqda. Kafedrada bakalavr yo‘nalishi bo‘yicha 10, magistratura mutaxassisligi bo‘yicha 3 fan o‘qitiladi. Kafedra professor-o‘qituvchilari tomonidan barcha fanlar bo‘yicha takomillashgan o‘quv-uslubiy majmualar yaratilib, ular asosida axborot resurs bazasi shakllantirilgan. Asosiy mutaxassis fanlaridan elektron darsliklar yaratilgan. Kafedra professor-o‘qituvchilari tomonidan oxirgi yillarda 8 o‘quv qo‘llanmasi, 10 ma’ruza matnlari, 8 dan ortiq uslubiy ko‘rsatmalar, 3 magistratura mutaxassisligi bo‘yicha namunaviy fan dasturlari, 12 dan ortiq ilmiy-uslubiy maqolalar yaratilgan va chop etilgan.</p>
                                <p>“Kadrlar tayyorlash milliy dasturi”ni hayotga izchillik bilan tatbiq etish, kadrlar tayyorlash samaradorligini oshirish, ta’lim turlari o‘rtasidagi o‘zaro integratsiya jarayonini kuchaytirish va ular o‘rtasidagi uzviylik va uzluksizlikni ta’minlash maqsadida kafedra bilan O‘zbekiston Respublikasi Oliy va O‘rta maxsus ta’lim Vazirligi O‘rta maxsus kasb-hunar ta’limi tizimi kadrlari malakasini oshirish va ularni qayta tayyorlash instituti bilan hamkorlik shartnomasi tuzilgan.</p>
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
                                                p.f.n., dotsent <br />
                                                tel: +99897 7116699<br />
                                                E- mail:   shuhgul@ mail.ru

 <br />     
                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Aripova Gulnora Shuxratullaevna</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                        <li className="nav-ul-li active"><a href="">Kasb ta’limi kafedrasi</a></li>
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
