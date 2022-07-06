import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/neft.jpg'
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
                            <h3>{context[lang].kafedra.twelveth}</h3>
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
                                }} id="defaultOpen">O'qitiladigan fanlar</button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">Kafedra ilmiy ishlari</button>
                            </div>
                            <div id="About" ref={tabOne} class="tabcontent opened">
                                <h4>Kafedra haqida</h4>
                                <p> Mazkur kafedrani tashkil topishida O‘zbekiston Fanlar akademiyasi muxbir a’zosi, O‘zbekistonda xizmat ko‘rsatgan fan va texnika arbobi, kimyo fanlari doktori, professor Abdulla Sultonov (marhum) ning xizmatlari katta bo‘ldi. A.S.Sultonov kafedrani boshqargan birinchi mudirdir. U kishi kafedrani boshqarish bilan birga, 1964-1974 yillarda O‘rta Osiyo neftni qayta ishlash ilmiy tadqiqot instituti (hozirgi A.Sultonov nomidagi O‘zKFITI instituti)da direktor lavozimida ishladi. 1969 yilda, birinchi marta, 17 ta talaba “Asosiy organik va neft-kimyo sintezi texnologiyasi” ta’lim yo‘nalishi bo‘yicha muhandis-texnolog darajasini oldi.</p>
                                <p>1971 yil aprel oyidan boshlab kafedraga O‘zbekistonda xizmat ko‘rsatgan ixtirochi, kimyo fanlari doktori, professor O.S.Safayev mudir etib tayinlandi. Kafedrada shu yildan e’tiboran dotsent A.Qodirov, dotsent X.K.Salimova, assistentlar J.Saydaliyev va O.G‘.Azimov o‘qituvchi lavozimida ish boshladilar. O‘zbekistonda neft va gazni qayta ishlash sanoati rivojlanib borishi bois 1985 yildan boshlab kafedrada “Neft va gazni qayta ishlash texnologiyasi” ta’lim yo‘nalishi bo‘yicha kadrlar ham tayyorlash yo‘lga qo‘yildi. 1986-1996 yillarda kafedraga kimyo fanlar nomzodi, dotsent A.Q.Qodirov boshchilik qildi.</p>
                                <p>1996 yildan 1997 yilgacha kafedrada kimyo fanlari nomzodi, dotsent Sh.F.Nurullayev, 1997 yildan 2011 yilgacha kimyo fanlari nomzodi, dotsent D.N.Ismatov, 2011 yildan 2012 yilgacha kimyo fanlari nomzodi, dotsent E.U.Teshabayeva, 2012 yildan 2017 yil may oyigacha kimyo fanlari nomzodi, dotsent O.E.Ziyadullayev, 2017 yildan 2019 yilgacha texnika fanlari doktori, professor A.S.Ibadullayev mudirlik qilib kelganlar. 2019 yil sentyabr-oktyabr oyidan boshlab kafedraga texnika fanlari bo’yicha falsafa doktori (PhD) Aripdjanov Oybek Yusupdjanovich mudirlik qilib kelmoqda.</p>
                            </div>

                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <h3>O'qitiladigan fanlar</h3>
                                <p>Bakalavriatura bo‘yicha o‘qitiladigan fanlar:</p>
                                <p>5321300 – Neft va neft-gazni qayta ishlash texnologiyasi</p>
                                <p>– neft – gaz kimyosi va fizikasi</p>
                                <p>– neft – gazni qayta ishlash texnologiyasi;</p>
                                <p>– neft – gazni qayta ishlash korxonalari jihozlari va uskunalari;</p>
                                <p>– neft mahsulotlarini texnik tadqiq qilish;</p>
                                <p>– neft va gazni qayta ishlashda chiqindisiz texnologiyalar;</p>
                                <p>– neft va gaz sanoat katalizi;</p>
                                <p>– ixtisoslikka kirish.</p>
                                <p>5321400 – Neft-gaz-kimyo sanoati texnologiyasi</p>
                                <p>– neft va gaz kimyosi va fizikasi;</p>
                                <p>– neft va gazni qayta ishlash sanoati texnologiyasi va kimyosi;</p>
                                <p>– gazdan sun’iy yoqilg‘i olish texnologiyasi;</p>
                                <p>– neft va gaz kimyo sanoati katalizi.</p>
                                <p>5322200 – Gazni chuqur qayta ishlash texnologiyasi yo‘nalishi</p>
                                <p>– gazni qayta ishlash sanoatida kataliz;</p>
                                <p>– gazni qayta ishlash texnologiyasi;</p>
                                <p>– gazni qayta ishlash jihozlari va uskunalari;</p>
                                <p>– uglevodorodli gazlarni qayta ishlashga tayyorlash;</p>
                                <p>– gazdan sun’iy yoqilg’i olish texnologiyasi;</p>
                                <p>– ixtisoslikka kirish.</p>

                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>Kafedra ilmiy ishlari</h3>
                                <p>1. Iqtidorli talabalar bilan ishlash: </p>
                                <p>II-IV kurs talabalari va I-II kurs magistrantlari orasidan bir qator talabalar kafedrada tashkil etilgan “Neft va gaz kimyogarlari” to‘garagiga a’zodirlar. Ularga ilmiy mavzular va ilmiy rahbarlar tayinlanib, kafedra laboratoriyasida o‘z ilmiy ishlarini olib bormoqdalar. Olib borgan ilmiy tadqiqot ishlari yuzasidan bir qator ilmiy-texnikaviy anjumanlarda faol qatnashadilar, ilmiy maqolalari to‘plamlarda chop etiladi.</p>
                                <p>2. Ilmiy tadqiqot faoliyatining ustuvor yo‘nalishlari:</p>
                                <p>Kafedrada asosan neft va tabiiy gazning tarkibi, ularning kimyosi va fizikasi neft va gazni qayta ishlashdagi texnologik jarayonlar, ularni boshqarish, nazorat qilish, neft va neft mahsulotlarini qayta ishlashda boradigan qo‘shimcha reaksiyalar, jarayonlar asosida hosil bo‘ladigan asosiy va oraliq mahsulotlar, ularni ajratib olish, tozalash, ekologik jihatdan toza, yangi texnologiyalarni yaratish, neft va gazdan yangi organik birikmalarni sintez qilish usullari va texnologiyasini topish, ularni ishlab chiqarishga joriy qilish, iqtisodiy jihatdan arzon texnologiyalarni yaratish ustida ilmiy-amaliy tadqiqotlar olib boriladi. Bundan tashqari, neft, neft mahsulotlari va tabiiy gazni qayta ishlashda qo‘llaniladigan qurilmalar, jihozlar, asbob-uskunalar va loyihalar ustida ko‘plab ilmiy izlanishlar tadbiq qilinmoqda.</p>
                                <p>3. Iqtisodiyotning tegishli sohalariga oid korxona va tashkilotlar bilan hamkorlikda bajarilayotgan xo‘jalik shartnomalarining natijalari:</p>
                                <p>Kafedra professor-o‘qituvchilari tomonidan neft va gaz sanoati muammolari, yangi zamonaviy texnologiyalari bo‘yicha xo‘jalik shartnomalari ustida ish olib bormoqdalar.</p>
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
                                                    Texnika fanlari bo’yicha falsafa doktori (PhD)
                                                    <br />
                                                    Qabul kunlari:   Seshanba,Payshanba 14:00-16:00
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">  Aripdjanov Oybek Yusupdjanovich</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                        <li className="nav-ul-li active"><a href="">Neft gazni qayta ishlash kimyoviy texnologiyasi kafedrasi</a></li>
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
