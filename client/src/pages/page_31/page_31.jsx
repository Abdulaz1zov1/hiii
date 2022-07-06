import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/silikat.jpg'
import Image00 from '../../images/kafedra/silikat-xaq.jpg'
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
                            <h3>{context[lang].kafedra.fourteenth}</h3>
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
                                }} id="defaultOpen">Kafedraning ilmiy-tadqiqot faoliyatining ustuvor yo’nalishlari</button>
                            </div>
                            <div id="About" ref={tabOne} class="tabcontent opened">
                                <h3>Kafedra haqida</h3>
                                <p>Ilk bor O’rta Osiyo Davlat universiteti qoshidagi “Texnikaviy kimyo” tahsilg’ohida 1929-1940 yillar davomida “Keramika va o’tga chidamli materiallar” xamda “Bog’lovchi moddalar texnologiyasi” mutaxassisliklari bo’yicha 18 kishi bitirgan. Silikat texnologiyasi sohasi bo’yicha muxandis-kimyogarlar tayyorlash 1940 yili O’rta Osiyo Industrial institutiga o’tkazildi. Bu erda “Silikatlar texnologiyasi” kafedrasi barpo etildi va unga muxandis S.P.Tarnovskiy mudir etib tayinlandi. 1941 yildan kafedrani prof. A.N.Tsepin, 1944 yildan k.f.n., dotsent I.S. Kantsepolskiy boshqardi.</p>
                                <p>1947 yildan boshlab kafedraga t.f.d., professor, O’zbekistonda xizmat ko’rsatgan fan arbobi F.X.Tojiev raxbarlik qila boshladi va u kafedrani qariyib 50 yil davomida boshqardi. 1961 yil O’rta Osiyo politexnika institutining nomi Toshkent politexnika institutiga o’zgartirildi va taxsilgoh ikki yo’nalish bo’yicha, ya’ni “Keramika va o’tga chidamli materiallar kimyoviy texnologiyasi” va “Bog’lovchi moddalar kimyoviy texnologiyasi” mutaxassisliklari bo’yicha muxandislar chiqara boshladi. 1983 yilga kelib kafedra shu mutaxassiliklar bo’yicha ikkiga ajraldi. Ularga t.f.d., prof. F.X.Tojiev va k.f.d., prof. A.A.Ismatov rahbarlik qila boshladilar.</p>
                                <p>1991 yili kafedralarning nomi va ularni boshqarishda o’zgarishlar ro’y berdi. “Keramika va shishalar texnologiyasi” kafedrasining mudirligiga k.f.d., prof. A.A.Ismatov, “Bog’lovchi moddalar texnologiyasi” kafedrasi mudirligiga t.f.d., prof. T.A.Otaquzievlar tayinlandi. 1999 yildan ikkala kafedra birlashtirildi va unga “Silikat moddalar texnologiyasi” nomi berildi, kafedra mudiri etib prof. A.A.Ismatov belgilandi. 2001 yildan boshlab kafedraga t.f.d., prof. A.M.Eminov raxbarlik qildi,  2002 yildan 2010 yilgacha prof. A.A.Ismatov rahbarlik qildilar.</p>

                            </div>

                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <h3>Kafedira tarixi</h3>
                                <p>2010 yildan boshlab hozirgi kunga qadar “Silikat moddalar texnologiyasi” kafedrasi mudiri lavozimida prof. M.X.Aripova faoliyat ko’rsatib kelmoqda. Shu yilda “Silikat moddalar texnologiyasi” va “Analitik kimyo va nodir metallar texnologiyasi” kafedralari birlashtirildi.</p>
                                <p>2011 yilda kafedraga “Silikat materiallar va nodir, kamyob metallar texnologiyasi” deb nom berildi.</p>
                                <p>Kafedra o’qituvchilaridan besh nafari yuksak Davlat mukofotlari– prof. Otaqo’ziev T.A. “Ulug’ xizmatlari uchun” ordeni va prof. Ismatov A.A., prof. Aripova M.X., dots. Babaxanova Z.A. va dots. Sadikov I.I.lar “Shuxrat” medali bilan taqdirlangan. </p>
                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>Kafedraning ilmiy-tadqiqot faoliyatining ustuvor yo’nalishlari</h3>
                                <p>Kafedrada olib borilayotgan ilmiy-tadqiqot ishlarida mahalliy xom-ash’yolar va sanoat chiqindilari asosida keramika, chinni-fayans, kislota-bardosh materiallar, shisha va shishakristall materiallar, bog’lovchi moddalar olish yo’llarini o’rganilmoqda. Kafedra professori Aripova M.X. raxbarligida suyak nuqsonlaridagi mavjud osteosintezni jadallashtiruvchi, suyak o’rnini bosuvchi sun’iy materiallarni yaratish, hossa va hususiyatlarini o’rganish borasida ham ishlar olib borilmoqda. Bir qator ishlar fosfogipsni qayta ishlash, ulardan  kislota va tsement olishga qaratilgan.</p>
                                <p>Kafedrada sanoat kurilish materiallari ishlab chikaruvchi korxonalar bilan xamkorlikka jiddiy e’tibor beriladi, jumladan:</p>
                                <p>1. Maxalliy xom ashyolar asosida keramik koshinlar ishlab chiqarish texnologiyasi, keramik massa va fritta tarkiblari qo’llash uchun  “Art Gloss Galery” korxonasida joriy etildi. 2015 yilda “Art Gloss Galery” korxonasi bilan  ishlab chiqarilgan maxsulot bo’yicha 4ta «Ishlab chiqarishga joriy etish aktlari» tuzildi.</p>
                                <p>2. T.f.d., professor  Aripova M.X.ning Davlat granti asosida olib borilgan ilmiy tadqiqot ishlar natijalari Toshkent travmatologiya institutida joriy qilindi.</p>
                                <p>3. T.f.n., dots.Abdusattarov Sh.M. tomonidan “Maxalliy xom-ash’yo asosida qurilish g’ishti tarkibini yaratish” mavzusi bo’yicha  olingan ilmiy natijalar  2015-2016 y.y. Navoiy shaxrida g’isht ishlab chiqaruvchi korxonasiga joriy etildi.</p>
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
                                                    texnika fanlari doktori, professor <br />
                                                    Tel.: +998-71- 244-92-48 <br />
                                                    Fax.: +998-71- 244-92-48 <br />
                                                    e-mail: aripova1957@yandex.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal"> Aripova Mastura Xikmatovna</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                        <li className="nav-ul-li active"><a href="">Silikat materiallar, nodir va kamyob metallar texnologiyasi kafedrasi</a></li>
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
