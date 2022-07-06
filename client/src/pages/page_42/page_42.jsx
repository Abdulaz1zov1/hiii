import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/enologiya.jpg'
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
                            <h3>{context[lang].kafedra.twentyfifth}</h3>
                            <div class="tab">
                                <button class="tablinks" onClick={() => {
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabOne.current.classList.add("opened")
                                }} id="defaultOpen">Kafedira tarixi
                                </button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabTwo.current.classList.add("opened")
                                }} id="defaultOpen">Kafedra ilmiy-tadqiqot ishlari</button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">    Kafedirani ilmiy aloqalari</button>
                            </div>
                            <div id="About" ref={tabOne} class="tabcontent opened">
                                <h3>Kafedira tarixi</h3>
                                <p>O‘zbekiston Respublikasi Prezidentining 2018 yil 28 fevraldagi „Vinochilik sohasini va alkogolli mahsulotlarni realizatsiya qilishni tubdan takomillashtirish chora-tadbirlari to‘g‘risida“gi PQ-3573 sonli qarorining 17- va 19-bandlarida keltirilgan vazifalarni ijrosini ta’minlash maqsadida TKTI rektorining 15 avgust 2018 yildagi 611-sonli Institutda “Vinochilik texnologiyasi va sanoat uzumchiligi” fakultetini tashkil etish to‘g‘risida buyrug‘iga asosan “Vinochilik texnologiyasi va sanoat uzumchiligi” fakulteti tasarrufida “Oziq-ovqat mahsulotlari texnologiyasi” kafedrasining “Qand va bijg‘ish mahsulotlari texnologiyasi” sikli asosida 2018-2019 o‘quv yilidan boshlab “ENOLOGIYA” kafedrasi tashkil etildi.</p>
                                <p>«Vinochilik va bijg’ish mahsulotlari texnologiyasi” kafedrasi 1938 yilda O’rta Osiyo Davlat universitetida katta olim professor M.A.Xovrenko tashabusligida tashkil etilgan va o’zi raxbarlik qilgan. 1940 yilda kafedra O`rta Osiyo industrial institutiga o`tkazilgan. 1941 yildan 1958 yillarda kafedrani dots. Motalev S.V., 1958 yildan 1960 yillarda prof. I.F.Zelikman boshqarib kelishgan.</p>
                                <p>1960-1990 yillarda kafedrani dotsent S.X.Abdurazaqova, 1990-1995 yillarda dots. S.U.Umarov, 1995-2003 yillarda dots. Sapaeva Z.Sh.,  2003-2011 yillarda dots. X.T.Xasanov boshqarib kelishgan. Kafedra yuqori malakali professor- o’qituvchilar bilan ta’minlangan. Kafedra tashkil bo`lgandan buyon 10 ta dan ortiq fan doktorlari, 25 ta dan ortiq fan nomzodlari, 2000ga yaqin vino, spirt, pivo hamda alkogolsiz ichimliklar ishlab chiqarish texnologiyasi bo`yicha mutaxassislar tayyorlangan. Bundan tashqari sut-go’sht, konserva va qand ishlab chiqarish bo’yicha ham yetuk kadrlar tayyorlangan. Kafedra laboratoriyalari mikrobiologiya, biokimyo, tehno-kimyoviy nazorat, avtoklav, zamonaviy biorganik laboratoriya jihozlari bilan ta`minlangan.</p>
                                <p>Har qanday mutaxassis o‘ziga mansub sanoatni rivojlantirish, takomillashtirish harakatida bo‘lishi tabiiy xoldir. Shu sohaning zaxmatkashlari kechayu-kunduz izlanishdadirlar. Bunday yutuqlarga o‘z xissasini qo‘shgan tarmoq tashkilotlari va uni davom ettirgan soha xodimlari shu kafedrani tamomlagan mutaxassislardir.</p>
                                <p>Kafedra bitiruvchilari ichida olimlar, yirik korhonar rahbarlari va vazirlik hodimlari bor. Shulardan, fan doktorlari: Y.L.Rogosov, N.Korolkov, S.H Abdurazakova, S.M.Turobjonov, B.Qasimhodjaev, H.T.Salomov, N.K.Mo’minov D.T.Mirzarahmetova va boshqalar.  Mazkur kafedrasi bitiruvchilari ishlab chiqarishni turli sohalarida yuqori lavozimlarda faoliyat ko`rsatishgan: Abdullaev O.A., Musurmanov B., Ma’rupov J.,  Otabekov Sh.I., Avakov V.S., Saidaxmedova R.B., Saidjalolov S.B.,  Topilov Z., Yusupova M.X.,  Mamadjanov G‘.X., Efremov A.N., Abdullaev A.O., Ilyasov T.M., Islomov M.I., Ortiqova X.T., Qosimxo‘jaeva D.A., To‘ychiev R., Ishmuxamedova S.</p>
                                <p>1999 yilda kafedra nomi «Qand va bijg’ish mahsulotlari texnologiyasi»ga o`zgartirilgan. 2011 yilda kafedra “Yog’-moy va don mahsulotlari texnologiyasi” kafedrasi bilan birlashtirilib, “Oziq-ovqat mahsulotlari texnologiyasi” kafedrasi deb yuritila boshlagan. 2011-2016 yillarda t.f.n., dots Serkayev Q.P., 2016-2018 yillarda t.f.n. Abdullayev U.K. kafedra mudiri vazifasini bajardilar.</p>
                                <p>Kafedraning Oziq-ovqat mahsulotlari texnologiyasi (Qand va bijg’ish mahsulotlari texnologiyasi) yo`nalishi bo’yicha bakalavrlar hamda 5A321001 « Oziq-ovqat mahsulotlarini ishlab chiqarish va qayta ishlash  texnologiyasi» (Vino va spirt ishlab chiqarish texnologiyasi) mutaxassisligi bo`yicha magistrlar tayyorlanyapti.</p>

                            </div>

                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <h3>Kafedra ilmiy-tadqiqot ishlari</h3>
                             <p>Kafedra professor o’qituvchilari malakali muxandis-texnolog, bakalavr va magistrlar tayyorlash bilan bir qatorda ilmiy ishlar olib bormoqdalar.</p>
                             <p>Bakalavriatura yo’nalishlar</p>
                             <p>5321000 - Oziq-ovqat texnologiyasi (bijg’ish mahsulotlari texnologiyasi)</p>
                             <p>5321000– Oziq-ovqat texnologiyasi (bijg‘ish mahsulotlari va alkogolsiz ichimliklar texnologiyasi)</p>
                             <p>5322600 – Vinochilik texnologiyasi</p>
                             <p>5322500 – Bijg’ish mahsulotlari va alkogolsiz ichimliklar texnologiyasi</p>
                             <p>5610100 – Xizmatlar sohasi, ovqatlanishni tashkil etish va servis</p>

                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>   Kafedirani ilmiy aloqalari</h3>
                               <p>Kafedra faoliyatida tarbiyaviy ishlarga ham katta e’tibor berilmoqda. Yosh avlodni ma’naviy-axloqiy tarbiyalashda, xalqning boy milliy madaniy-tarixiy an’analariga, urf-odatlariga hamda umumbashariy qadriyatlariga asoslangan samarali-tashkiliy, pedagogik shakl va vositalar ishlab chikilib, amaliyotga joriy etilmoqda. Shaxsni tarbiyalash va uni har tomonlama kamol toptirishning ustvorligini ta’minlash, umumiy hamda pedagogik madaniyatni oshirish maqsadida, talabalar orasidagi ma’rifiy ishlar takomillashtirib borilmoqda. Kafedra xodimlari har bir guruh talabalari orasida muntazam ravishda tarbiyaviy va ma’naviy-ma’rifiy ishlar olib boradilar.</p>
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
                                                <span class="degree">Kafedra mudiri</span>
                                                <span class="info">
                                                Texnika fanlari bo’yicha falsafa doktori (PhD) <br />
                                                Qabul kunlari: Seshanba, Payshanba 14:00-16:00 <br />
                                                Elektron pochta: bmait@tcti.uz    
                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Boboyev Akmal Xatamovich</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                        <li className="nav-ul-li active"><a href="">Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi</a></li>
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
                        <Link to={'/page/static/get/41'}>
                        <li className="nav-ul-li"><a href="">Xorijiy tillar kafedrasi</a></li>
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
