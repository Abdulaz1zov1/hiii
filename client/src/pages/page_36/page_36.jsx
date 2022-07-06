import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/umimiy-mudr.png'
import Image00 from '../../images/kafedra/umumiy.jpg'
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
                <div className="mainss">
                <div className='page_main'>
                    <div class="row">
                        <div class="col-lg-10 col-md-12">
                            <h3>{context[lang].kafedra.nineteenth}</h3>
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
                                }} id="defaultOpen">Kafedra tarixi</button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">Ilmiy yo'nalishlar</button>
                            </div>
                            <div id="About" ref={tabOne} class="tabcontent opened">
                                <h3>Kafedra haqida</h3>
                                <p>“Umumiy va noorganik kimyo” kafedrasi О‘rta Osiyo jumxuriyatlarida kimyo fanining dastlabki targ‘ibotchilaridan biri bо‘lgan professor A.M. Rostovskiy tashabbusi bilan Toshkent Politexnika Institutining “Kimyo-texnologiyasi” fakulteti qoshida tashkil etilgan.</p>

                            </div>

                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <h3>Kafedra tarixi</h3>
                                <p>Kafedra tashkil qilinganda unga mudirlik qilish dastlab V.A. Novikovga (1935), sо‘ngra professorlardan N.L. Karavayev, X.R. Raximov, X.R. Rustamov, dotsentlardan X.B. Medinskiy, Y.I. Ibroximov, K.A. Azamov, prof.F.Q.Qurbonov, prof. A.X. Ismoilov, prof. Q.A. Axmerov, dots. A.Jalilovlarga topshirilgan. 2011 yildan boshlab kafedraga dots. Qodirov Orifjon Sharifovich, Abduraximov Anvar Abdurahmonovich mudirlik qilgan. Hozirgi kunda kafedra mudiri lavozimida prof. Sidikov A.S. faoliyat yuritmoqda. Kafedrada 9 nafar о‘qituvchi, shu jumladan 2 nafar fan doktori, 2 nafar fan nomzodi, 2 nafar katta о‘qituvchi, 3 nafar assistent ishlaydi. Kafedra institutning barcha fakultetlari talabalariga “Umumiy va noorganik kimyo” fanining asoslarini о‘rgatmoqda.</p>
                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>Ilmiy yo'nalishlar</h3>
                                <p>Axmerov Qudrat N6-062 sonli “Mahalliy xom-ashyolar asosida yangi ion almashtiruvchi smolalalar sintez qilish, xossalarini о‘rganish va texnologiyasini yaratish” mavzusidagi grant ishida ishtirok etdi.</p>
                                <p> “Umumiy va noorganik kimyo” kafedrasida 2012/2014 yillarga mо‘ljallangan Davlat granti asosida ITD-12-18 “Sanoat chiqindilari asosida olovbardosh (1000-1400°C) yelimlarni sintez qilish va ishlab chiqarish texnologiyasini yaratish” mavzusi bо‘yicha amaliy ITI olib borildi, ilmiy rahbar dots. A.Jalilov.</p>
                                <p>Badalbayeva Iltifot - ITD-6 Respublikaning mineral xom ashyo resurslarini, kimyo, oziq-ovqat, yengil sanoat va qishloq xо‘jalik mahsulotlari hamda chiqindilarini ishlab chiqarish, qayta ishlash, saqlash va ulardan foydalanishning resurstejamkor, ekologik xavfsiz inovatsion texnologiyalarini ishlab chiqish.  Razrabotka resurso- i energosberegayushey texnologii proizvodstvarasshiryayushegosya i napryagayushego sementov na osnove alitovix sulfoklinkerov s ispolzovaniyem v kachestve sirya texnogennix otxodov promishlennosti (zoloshlakov, fosfogipsa) i alunita. 2012/2014 yillarga mо‘ljallangan Davlat granti asosida ITD-13-18 “Olmaliq tog` metallurgiya kombinatining qo`rg`oshin va sink boyitish fabrikalarining chiqindilarini qayta ishlab ulardan ikkilamchi qimmatli metallar sanoat mahsulotini hamda portlandsement olish texnologiyasi majmuasini yaratish” mavzusi bо‘yicha amaliy ITI olib borildi.</p>
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
                                                    Kimyo fanlari doktori <br />
                                                    Qabul kunlari: Dushanba, Chorshanba, Juma 1400-1600<br />
                                                    Elektron manzil: sidikov_a@mail.ru <br />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Sidikov Abdujalol Sidikovich</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                        <li className="nav-ul-li active"><a href="">Umumiy va noorganik kimyo kafedrasi</a></li>
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
