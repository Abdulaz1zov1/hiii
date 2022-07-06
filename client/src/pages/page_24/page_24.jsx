import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/gosh-sut.jpg'
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
                            <h3>{context[lang].kafedra.seventh}</h3>
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
                                }} id="defaultOpen">Ilmiy yo'nalishlar</button>
                            </div>
                            <div id="About" ref={tabOne} class="tabcontent opened">
                                <h4>Kafedra haqida</h4>
                                <p>1991 yilning 24 avgustida, TKTI tashkil topganidan so’ng, «Go’sht va sut mahsulotlari texnologiyasi» yo’nalishi bo’yicha mustaqil kafedra tashkil etildi.</p>
                                <p>1994 yilda texnika fanlari doktori M.M. Vakilni institut rahbariyati «Konservalangan oziq-ovqat mahsulotlari texnologiyasi» yo’nalishga rahbar qilib tayinlandi. Shundan so’ng kafedra mustaqil faoliyat ko’rsata boshladi.</p>
                                <p>1999 yilning sentyabr oyidan boshlab, «Go’sht va sut mahsulotlari texnologiyasi» kafedrasi «Konservalangan oziq-ovqat mahsulotlari  texnologiyasi» kafedrasi bilan birlashdi va «Go’sht, sut, baliq va konservalangan mahsulotlar texnologiyasi» kafedrasi deb yuritila boshlandi. 2005 yilning sentyabr oyidan kafedraning nomi «Konservalangan oziq-ovqat mahsulotlari texnologiyasi» deb ataldi va t.f.d. Dodaev Q.O. uning mudiri etib tayinlandi.</p>
                                <p>2011 yilning sentyabr oyida «Konservalangan oziq-ovqat mahsulotlari texnologiyasi»  kafedrasi bazasida «Oziq-ovqat xavfsizligi» kafedrasi tashkil etildi. 2011 yilning noyabridan K.O.Dodaev tanlov asosida ushbu kafedra mudirligi vazifaga saylandi.</p>
                                <p>2014 yilning sentyabr oyida t.f.n., dots. A.J.Choriev kafedra mudiri etib tayinlandi va shu lavozimda 2020 yilning 2 noyabrigacha faoliyat yuritdi.</p>
                                <p>2020 yilning 1 iyulidan boshlab, kafedrani nomi “Go’sht, sut va konserva mahsulotlari texnologiyasi” deb ataldi.</p>
                                <p>2020 yilning 1 dekabridan t.f.b.f.d. F.X. Eshmatov kafedra mudiri etib tayinlandi va hozirgi kungacha shu lavozimda faoliyat olib bormoqda.</p>
                                <p>Kafedrada yuqori malakali professor-o’qituvchilar t.f.d., prof. Dodaev Q.O.,  prof.v.v.b., i.f.n., dots. Axrarov U.B., t.f.n., dots. Maksumova D.Q., k.f.n. Azizov O.T., k.f.n., dots. S.Q.Atxamova, t.f.n., dots. Choriev A.J., t.f.b.f.d., dots. Zokirova M.S., t.f.b.f.d. Usmonjonova X.U., katta o’qituvchilar: Zununova D.E., A.G’. Ibragimov, Sh.Q. To’xtaevlar, assistentlar: Samadov O.B., Suyundikov U.A., Niyozov X.N., Ataxadjaeva I.D., G’afforova Z.A., R.Sh. Ernazarovalar  faoliyat ko’rsatib kelmoqda.</p>
                                <p>Bundan tashqari O’zR FA “Bioorganik kimyo”, O’zR FA “O’simlik moddalari kimyosi”, O’zR FA “Mikrobiologiya” va boshqa nufuzli ilmiy-tadqiqot institutlaridan professor-o’qituvuchilar o’rindoshlik asosida ishlab kelmoqdalar.</p>
                                <p>«Go’sht, sut va konserva mahsulotlari texnologiyasi» kafedrasi o’zining ta’lim va fan sohasidagi faoliyatini dunyodagi yetakchi oliy ta’lim muassasalari va ilmiy guruhlari tomonidan foydalanib kelinayotgan samarador usullar asosida olib boradi. Bu esa o’z navbatida, dunyoning yetakchi oliy ta’lim muassasalari (OTM), ilmiy tadqiqot institutlari (ITI) va ishlab chiqarish korporasiyalari bilan uzviy munosabatda bo’lishini ta’minlaydi. Kafedrada bakalavr, magistratura, tayanch doktorantura (PhD) va doktorantura (DSc) bosqichlarida kadrlar tayyorlanadi.</p>
                                <p>Innovatsion ta’lim va fan texnologiyalari qo’llanilib va doimiy ravishda yangilanib, shuning bilan birgalikda kafedrada mavjud ilmiy yo’nalishlar muntazam rivojlantirilib kelinmoqda. Ishlab chiqarish va tegishli sanoat korxonalari bilan doimiy hamkorlik yuqori ilmiy salohiyatga ega bo’lgan yosh kadrlarni yetishtirishda muhim omillardan biri hisoblanib, hozirgi kunda kafedra Respublikamizdagi barcha hududlardagi zamonaviy korxonalar bilan bir qatorda xorijiy OTMlar bilan ham aloqalarni yo’lga qo’ygan.</p>
                            </div>

                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <h4>Kadrlar tayyorlash</h4>
                                <p>Hozirgi kunda «Go’sht, sut va konserva mahsulotlari texnologiyasi» kafedrasi bakalavr va magistrantlar mutaxassis sifatida tayyorlanib kelinmoqda:</p>
                                <p>Ushbu bakalavr yo’nalishi va magistratura mutaxassisligi zamon bilan hamnafas, ilg’or rivojlanayotgan yo’nalishlardan biri bo’lib, bu sohani tamomlagan kadrlar
                                    Bizning talabalarimiz ishlab chiqarish jarayonlarida mavjud jarayonlarni o'rganish uchun eng zamonaviy sharoitlarga ega ta’lim va fan uyg’unlashgan laboratoriya xonalarida mashg’ulotlar olib boradilar. Tegishli mutaxassislik fanlaridan a’lo baholarga o’qiydigan haqiqiy iqtidorli va bilimli talabalar muntazam ravishda rag’batlantirilib boriladi.
                                    Talabalar haftasiga 30 soatlik auditoriya mashg’ulotlariga ega bo’lib, baholash har semestrning oxirida amalga oshiriladi. O’qitish ma’ruza, amaliyot, laboratoriya va mustaqil ta’lim shaklida olib boriladi. Talabalarga har bir bosqich uchun ajratilgan fanlar mavjud bo’lib, ular quyidagicha taqsimlanadi:</p>
                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>Ilmiy yo'nalishlar</h3>
                                <p>Ilmiy-tadqiqot faoliyatining ustuvor yo’nalishlari
                                    Kafedrada olib borilayotgan ilmiy-tadqiqot ishlari qator muammolarni xal qilishga  bag’ishlangan bo’lib, ular asosan, mahalliy xom ashyo asosida yangi mahsulot, oziq-ovqat qo’shimchalari ishlab chiqish, go’sht, sut konservalangan oziq-ovqat mahsulotlari texnologiyasini takomillashtirishga yo’naltirilgan.</p>
                                <p>2. Iqtisodiyotning tegishli sohalariga oid korxona va tashkilotlar bilan hamkorlikda bajarilayotgan xo’jalik shartnomalarining natijalari

                                    2018-2019 o’quv yillarida kafedraning professor-o’qituvchilari t.f.d., professor Dodaev Q.O., PhD,  katta ilmiy xodim Zokirova M.S., k.f.n., katta ilmiy xodim Atxamova S.Q., PhD, dots., katta ilmiy xodim Maksumova D.K.,</p>
                                <p>PhD, katta ilmiy xodim Eshmatov F.X.,   «Oziq-ovqat sanoati uchun fruktozali sirop asosida parhezbop qandolat ahsulotlari texnologiyasini ishlab chiqish» ilmiy loyixada qatnashdilar</p>
                                <p>3. Nomzodlik va doktorlik dissertatsiyalari himoyasi

                                    Kafedra professor-o’qituvchilari katta o’qituvchi F.X. Eshmatov  o’zining «Anor sharbati kislotaliligini rostlash va xiralik ko’rsatkichlarini pasaytirish texnologiyasini ishlab chiqarish» katta o’qituvchi B.M. Jumaev Meva-sabzavot mahsulotlarini quritish jarayonini infraqizil konvektiv qurilma yordamida jadallashtirish X.U. Umonjonova O’simlik xom ashyosidan tabiy oziq-ovqat bo’yoqlari olish texnologiyasini takomillashtirish mavzusidagi nomzodlik dissertatsiya ishini yakunlab, himoya qildilar .

                                    Kafedra professor-o’qituvchilar katta o’qituvchisi Sh.Q.To’xtaev  o’zining «Qovoqdan ozuqaviy qo’shimcha olish va uni kolbasa mahsulotlarida qo’llash texnologiyasini takomillashtirish» U.A.Suyundikov «Anor po’stlog’idan oshlovchi moddalarni olishni samarali usulini qo’llash va oziq-ovqat sanoatida foydalanish texnologiyasini takomillashtirish» texnika  fanlari doktori (Phd) ilmiy darajasini olish uchun dissertatsiya ishini olib bormoqda.

                                    Kafedra professor-o’qituvchilardan kat.o’q. F.X. Eshmatov  ass.U.A.Suyundikovlar Belorussiya respublikasining Belorussiya davlat oziq-ovqat va kimyoviy texnologiyalar universitetida malakasini oshirib keldi</p>
                                <p>4. Iqtidorlik talabalar bilan ishlash

                                    Kafedrada 2-4 kurs talabalari va 1-2 kurs magistrantlari safidan qator iqtidorlilari kafedrada tashkil etilgan “Sharbat” va «Sertifikat-servis» to’garaklariga faoliyat ko’rsatadilar. Ularga ilmiy mavzular berilgan, ilmiy rahbarlar tayinlangan, kafedra laboratoriyalarida ilmiy ishlarini olib borishmoqda. Olib borgan ilmiy-tadqiqot ishlari natijalari ilmiy-texnikaviy anjumanlar maqolalari to’plamlarida chop etilgan.

                                    Kafedra qoshida 2021 yilning 3 sentyabridan boshlab 05.18.07 – «Oziq-ovqat mahsulotlari» biotexnologiyasi ixtisosligi bo’yicha Doktarantura bo’limi mavjud bo’lib, unda hozir N.X.Niyozov, D.I. Qoraboev, Mustaqil izlanuvchi Sh.R. Ernazarova, va  erkin izlanuvchi Z. G’afforovalar ilmiy-tadqiqot ishlarini olib bomoqdalar.

                                    Kafedra a’zolaridan prof. K.O.Dodaev, dots. R.R. Akromova, dots. D.Q.maksumova, dots A.J., Chorievlar doktorantura, mustaqil izlanuvchi va erkin izlanuvchilarga  ilmiy rahbarlik qilmoqdalar.</p>
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
                                                    Kafedra mudiri, t.f.n. dotsent
                                                    <br />
                                                    Qabul kunlari: Chorshanba Juma  1400-1800
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">  Eshmatov Fozil Xidirovich</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                        <li className="nav-ul-li active"><a href="">Go’sht-sut va konserva mahsulotlar texnologiyasi kafedrasi</a></li>
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
