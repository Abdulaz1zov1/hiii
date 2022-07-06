import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/xorijiy.png'
import Image00 from '../../images/kafedra/xorijiy-xaqida.jpg'
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
                            <h3>{context[lang].kafedra.twentyfourth}</h3>
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
                              <p> “Chet tillari” sikli 2017 yil 11 yanvardagi institut rektorining 15 sonli buyrug’i bilan “Tillar” kafedrasidan sikl sifatida ajratildi va unga kafedra maqomi berildi. Sikl raxbari etib Sh.R. Adilova tayinlandi.</p>
                              <p> Sikl o’qituvchilari talabalarning ingliz, nemis tillaridagi og’zaki va yozma nutq ko’nikmaklarini rivojlantirish, tili o’rganilayotgan mamlakatlarning siyosiy, madaniy va ijtimoiy hayoti haqida to’liq ma’lumot berish hamda ularning ma’naviy jihatdfan barkamol bo’lib yetishishlari yo’lida samarali mehnat qilmoqdalar.</p>
                              <p>Sikl yuklamasiga kiritilgan ingliz va nemis tili fanlari instritutning Ilmiy-uslubiy kengashi tomonidan tasdiqlangan dastur asosida o’qitiladi. Ta’lim jarayonida talabalarning mutaxassislik yo’nalishlari va til bilish darajasiga ham e’tibor beriladi. Talabalar CEFR talablari asosida bilimlariga ko’ra turli nim guruxlarga ajratilib, darsliklar ham ularning bilim darajalariga qarab tanlanadi.</p>

                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>   O‘quv uslubiy ishlar</h3>
                               <p> Siklda ingliz tili, nemis tili fanlari o’qitiladi va barcha bakalavriat va magistratura yo’nalishlari uchun fanlar bo’yicha o’quv-ishchi dasturlari, o’quv-uslubiy majmualar tuzilgan. Sikl istiqbol rejasida o’quv-uslubiy qo’llanmalar, o’qitiladigan tillar bo’yicha mutaxassislik atamalari lug’atini tuzish, ingliz va nemis tillarini o’rgatish bo’yicha electron qo’llanmalar, multimediyalar tayyorlash, institut tomonidan amalga oshirilayotgan turli innovatsion loyihalarda qatnashish belgilangan.</p>
                               <p>Ilmiy tadqiqot ishlari</p>
                               <p>Sikl a’zolari xalqaro, respublika va oily o’quv yurtlariaro o’tkaziladigan ilmiy-texnikaviy va ilmiy-uslubiy anjumanlarda o’z ma’ruzalari bilan faol qatnashadilar. OAK tasarrufidagi ilmiy jurnallarda ilmiy maqolalar chop etib kelmoqdalar. Shuningdek, sikl o’qituvchilari rahbarligidagi talabalar ma’ruzalari ilmiy-texnik anjumanlarda yuqori o’rinlarni egallab kelmoqdalar.</p>
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
                                                <span class="degree">„Chet  tillari“  sikli</span>
                                                <span class="info">
                                                ingliz tili  o’qituvchisi <br />
                                                Elektron  adres:  nuriddin83@mail.ru
 <br />     
                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Abdullayev Nuriddin Baxriddinovich</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                        <li className="nav-ul-li active"><a href="">Xorijiy tillar kafedrasi</a></li>
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
                        <Link to={'/page/static/get/40'}>
                        <li className="nav-ul-li"><a href="">Tillar kafedrasi</a></li>
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
