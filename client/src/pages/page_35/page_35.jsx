import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/sanoat.jpg'
// import Image00 from '../../images/kafedra/sanoat-xaq.jpg'
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
                                <h3>{context[lang].kafedra.eighteenth}</h3>
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
                                    }} id="defaultOpen">O'quv uslubiy ishlar</button>
                                </div>
                                <div id="About" ref={tabOne} class="tabcontent opened">
                                    <h3>Kafedra haqida</h3>
                                    <p>??Atrof-muhitni muhofaza qilish va oqova suvlarni tozalash?? kafedrasi 1980 yil ?????zbekistan Respublikasi Fanlar Akademiyasining akademigi Axmedov K.S. tashabbusi bilan Toshkent Politexnika Institutining ???Kimyo-texnologiyasi??? fakulteti qoshida tashkil etilgan.</p>
                                    <p>1980 yildan 1991 yilgacha dots.Abduganiyev B.M. ushbu kafedraga mudirlik qilgan. Kafedrada yukori malakali ?????qituvchilar va ilmiy xodimlar k.f.n. dots. Shin L.D., t.f.n., kat.?????q. Xidoyatov K., kat.?????q. Kelginbayeva S. V., k.f.n. ass.Niyazova M.M., k.f.n. ass. Aronova N., k.f.n. ass.Adilova K.M., k.f.n. k.i.x. Satayev I.K., k.f.n. k.i.x. Beysenbayev O.K., ilmiy xodimlar Xabibullina N., Muxamedov K.G., Xasanova M.S., Mavlyankariyeva M.A., Usmanxodjayeva I.T. faoliyat k?????rsatib kelgan.</p>
                                    <p>1988 yildan boshlab esa kafedrada 2513 ??Atrof-muhitni muhofaza qilish va tabiiy resurslardan oqilona foydalanish?? sohasida malakali mutaxassislar tayyorlana boshlandi.</p>

                                </div>

                                <div id="Functions" ref={tabTwo} class="tabcontent">
                                    <h3>Kafedra tarixi</h3>
                                    <p>Kafedrada 1993-1997 yilgacha quyidagi sohalar b?????yicha mutaxassislar tayyorlandi:</p>
                                    <p>??? Suv resurslaridan oqilona foydalanish va sanoat oqova suvlarini tozalash;</p>
                                    <p>??? Sanoat chikindilarini rekuperatsiya qilish.</p>
                                    <p>Kafedra 1993 yilda akad. Mirkomilov T.M. boshchiligida ??Sanoat ekologiyasi?? nomi bilan yuritila boshlandi.
                                        1996 yil 1 sentabrdan boshlab kafedraga k.f.n., dots.Tursunov T.T. raxbarlik qila boshlagan.
                                        1997 yildan boshlab 5850100 ??Atrof muhit muhofazasi?? y?????nalishi b?????yicha bakalavrlar tayyorlanayapti.
                                        1999 yildan boshlab 5A850101 ???Atrof-muhit muxofazasi??? mutaxassisligi b?????yicha magistrlar qabul qilina boshlandi.</p>
                                    <p>2020 yildan boshlab Phd dotsent Igitov Farrux Baxtiyorovich raxbarlik qilib kelmoqda.</p>
                                    <p>Toshkent kimyo-texnologiya instituti ???Sanoat ekologiyasi??? kafedrasida chiqindisiz texnologik jarayonlarni takomillashtirish, sanoat oqova suvlarini tozalash, atmosfera havosini zaharli gazlardan tozalashga qaratilgan bir qator ilmiy tadqiqot ishlari olib borilmoqda. Professor R.??. Nazirova, professor T.T.Tursunovlar ilmiy rahbarliklarida furan birikmalari asosida ion-almashtirgich polimerlarni sintez qilish va ularni qo??llashning aniq ob??ektlarini izlash borasida ilmiy izlanishlar olib borilmoqda. Kimyo fanlari doktori X.L.Pulatov, kimyo fanlari doktori, professor Sh.??.Mutalovlar ilmiy rahbarliklarida ???Mahalliy xom-ashyolar asosida ion almashinuvchi polimerlar olish va uni atrof muhitni-muhofaza qilish sohasida qo??llash??? mavzusida ilmiy tadqiqot ishlari amalga oshirilmoqda. Sanoat oqova suvlarini tozalashga mo??ljallangan ion-almashinuvchi polimerlarning asosiy qismi respublikamizga chet davlatlaridan keltiriladi. Bu esa ishlab chiqarilayotgan mahsulotning tannarhiga salbiy ta??sir ko??rsatadi. ???Sanoat ekologiyasi??? kafedrasida olib borilgan ilmiy izlanishlar natijasida, mahalliy xom-ashyolar asosida ion-almashinuvchi polimerlar olindi. Hozirgi kunda bu polimerlar, chet davlatlaridan keltirilayotgan ion-almashinuvchi polimerlar o??rniga sanoat oqova suvlarini tozalashda qo??llanilib, iqtisodiy samaradorlikka erishilmoqda. Kafedrada sintez qilingan polimerlarni ???Suvsoz??? Davlat unitar korxonasiga qarashli Salar aeratsiya stantsiyasi oqova suvlarini tozalashda qo??llanilishi natijasida bu korxonaga yillik 106 mln. so??m iqtisodiy foyda keltirilgan. Ilmiy tadqiqotlar natijasida kafedrada 8 ta fan nomzodi, 4 nafar fan doktorlari o??z dissertatsiya ishlarini muvaffaqqiyatli himoya qildilar va hozirgi kunda O??zbekiston Respublikasi Oliy va O??rta maxsus ta??lim vazirligi tizimida rahbar lavozimlarida samarali mehnat qilmoqdalar. 2017-2020 yillar davomida kafedra olimlari jamoasining ilmiy izlanishlari natijasida O??zbekiston Respublikasi Intellektual mulk agentligi tomonidan 5 ta ixtiroga davlat patenti olindi. ??trof muhit-muhofazasiga oid 10 ta darslik, 8 ta o??quv qo??llanma, 5 ta monografiyalar chop ettirildi. Kafedrada professor S.R.Sayfutdinov ilmiy rahbarligida ???Tsellyuloza sanoatida hosil bo??layotgan oqova suvlarni tozalash??? mavzusida ham ilmiy izlanishlar olib borilmoqda. Yurtimizda barcha sohalar rivoji uchun yaratib berilayotgan keng imkoniyatlardan foydalanib, kafedra jamoasi kelajakda o??z oldiga katta maqsadlar qo??ygan. Talabalarga bilim berish jarayonida hozirgi kundagi ilm-fan yutuqlaridan foydalanish, fan bilan ishlab chiqarish o??rtasidagi integratsiyani rivojlantirish, yurtimizda atrof muhit-muhofazasiga doir amalga oshirilayotgan ishlarda o??z hissamizni qo??shish eng oliy maqsadimizdir.</p>
                                </div>

                                <div id="Management" ref={tabThree} class="tabcontent">
                                    <h3>O'quv uslubiy ishlar</h3>
                                    <p>Kafedrada 5850100 ??????Atrof muhit muhofazasi??? bakalavriat y?????nalishi va 5A850101 ??? ???Atrof muhit muhofazasi??? magistratura mutahassisligi b?????yicha Dalvat ta???lim standartlari yaratildi, ???Ekologiya???, ???Mexnatni muhofaza qilish???, ???Fuqaro muhofazasi??? kabi umumkasbiy fanlar va bakalavriatura va magistratura barcha mutahassislik fanlaridan namunaviy dasturlar, ?????quv-uslubiy majmualar yaratildi. Oxirgi yillarda kafedra professor-?????qituvchilari tomonidan 4 ta darslik, 50 dan ortiq ?????quv-uslubiy q?????llanmalar chop etildi.</p>
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
                                                        PhD Dotsent <br />
                                                        Qabul kunlari: seshanba va payshanba kunlari soat 14:00-15:00<br />
                                                        Elektron adres: farruhigitov@gmail.com <br />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="fullname-personal">Igitov Farruh Baxtiyarovich</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                            <li className="nav-ul-li active"><a href=" ">Sanoat ekologiyasi kafedrasi</a></li>
                            <Link to={'/page/static/get/18'}>
                                <li className="nav-ul-li"><a href=" ">Ijtimoiy-siyosiy fanlar kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/19'}>
                                <li className="nav-ul-li"><a href=" ">Fizika va elektrotexnika kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/20'}>
                                <li className="nav-ul-li"><a href=" ">Biotexnologiya kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/21'}>
                                <li className="nav-ul-li"><a href=" ">Jismoniy tarbiya va sport kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/22'}>
                                <li className="nav-ul-li"><a href=" ">Informatika, avtomatlashtirish va boshqaruv kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/23'}>
                                <li className="nav-ul-li"><a href=" ">Oziq-ovqat sanoati mashina va jihozlari - Mexanika asoslari kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/24'}>
                                <li className="nav-ul-li"><a href=" ">Go???sht-sut va konserva mahsulotlar texnologiyasi kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/25'}>
                                <li className="nav-ul-li"><a href=" ">Oziq-ovqat mahsulotlari texnologiyasi kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/26'}>
                                <li className="nav-ul-li"><a href=" ">Organik kimyo va og???ir organik sintez texnologiyasi kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/27'}>
                                <li className="nav-ul-li"><a href=" ">Sellyuloza va yog`ochsozlik texnologiyasi kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/28'}>
                                <li className="nav-ul-li"><a href=" ">Yuqori molekulali birikmalar va plastmassalar kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/29'}>
                                <li className="nav-ul-li"><a href=" ">Neft gazni qayta ishlash kimyoviy texnologiyasi kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/30'}>
                                <li className="nav-ul-li"><a href=" ">Oliy matematika kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/31'}>
                                <li className="nav-ul-li"><a href=" ">Silikat materiallar, nodir va kamyob metallar texnologiyasi kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/32'}>
                                <li className="nav-ul-li"><a href=" ">Analitik, fizikaviy va kolloid kimyo kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/33'}>
                                <li className="nav-ul-li"><a href=" ">Noorganik moddalar kimyoviy texnologiyasi kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/34'}>
                                <li className="nav-ul-li"><a href=" ">Kimyoviy texnologik jarayon va qurilmalar kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/36'}>
                                <li className="nav-ul-li"><a href=" ">Umumiy va noorganik kimyo kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/37'}>
                                <li className="nav-ul-li"><a href=" ">S??n????t iqtis??diyoti v?? m??n??jm??nti k??f??dr??si</a></li>
                            </Link>
                            <Link to={'/page/static/get/38'}>
                                <li className="nav-ul-li"><a href=" ">Mahsulot sifati menejmenti kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/39'}>
                                <li className="nav-ul-li"><a href=" ">Kasb ta???limi kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/40'}>
                                <li className="nav-ul-li"><a href=" ">Tillar kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/41'}>
                                <li className="nav-ul-li"><a href=" ">Xorijiy tillar kafedrasi</a></li>
                            </Link>
                            <Link to={'/page/static/get/42'}>
                                <li className="nav-ul-li"><a href=" ">Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi</a></li>
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
