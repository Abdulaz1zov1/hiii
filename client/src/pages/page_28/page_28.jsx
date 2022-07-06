import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/molekula.jpg'
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
                            <h3>{context[lang].kafedra.eleventh}</h3>
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
                                }} id="defaultOpen">Kafedraning o'quv-uslubiy ishlari</button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">O'qitiladigon fanlar</button>
                            </div>
                            <div id="About" ref={tabOne} class="tabcontent opened">
                                <h3>Kafedra haqida</h3>
                                <p>Hozirgi kunda kafedraga texnika fanlari doktori, dotsent Teshabayeva Elmira Ubaydullayevna mudirlik qilmoqdalar.</p>
                                <p>Kafedrada turli vaqtlarda akademik Asqarov M.A., fan doktorlari professorlar Shipilevskiy B.A., Yusupbekov A.X., Ro’ziyev R., Xonxodjayeva D.A., Tadjixodjayev Z.A., fan nomzodlari, dotsentlar Markman N., Maxsudov Y.M., Toirakberova D.M., Salimsakov Y.A., Mustafin V.R., Xoshimova S.V., Shayxova B.K., Axundjanov J.B., Asqarov M.I, Sirov I.M., Tsatskin M.L., Itskovich Y.A., Mirvaliyev M., Berlyand A.M., Karimov V.S. va boshqalar faoliyat ko’rsatganlar. Hozirgi vaqtda kafedra o’quv ishlarida akademik professorlar: Abdurashidov T.R., Djalilov A.T., Magrupov F.A., Mirkomilova M.S., Ibodullayev A.S., Alimuxamedov M.G., Teshabayeva E.U., Jurayev A.B., dotsentlar va fan nomzodlari Adilov R.I., Tillayev A.T., Tadjixodjayeva U.B., Ayxodjayev B.B., Nizomov T.A., Ostonov O’.Y., katta o’qituvchi Ishmuxamedova M.G., Jumanov L., yordamchi hodimlar: lab.mudiri Abidova R., lab. Yuldasheva M., Xudayberdiev A. stajyor tadqiqotchi izlanuvchi Turaev A., Axmedova A.,  va katta ilmiy hodim-izlanuvchi Caitov B., Vapaev M., lar faol qatnashganlar va hozirda ham ulardan ko`pgina hodimlar o`z faoliyatlarini yuritib kelmoqdalar.</p>

                            </div>
                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <h3>Kafedraning o'quv-uslubiy ishlari</h3>

                                <p>Shu vaqtgacha kafedrada: Plastmassalarni qayta ishlash texnologiyasi bo’yicha – 1200 dan; Rezina texnologiyasi bo’yicha-500 dan; Kimyoviy texnologiya (yuqori molekulali birikmalar, plastmassa va elastomerlarni kimyoviy texnologiyasi bo’yicha) yo’nalishi bo’yicha - 350 ta bakalavr: Yuqori molekulali birikmalar kimyoviy texnologiyasi mutaxassisligi bo’yicha- 75 ta magistr; Kauchuk va rezina kimyoviy texnologiyasi magistratura mutaxassisligi bo’yicha 32 ta magistr tayyorlandi.</p>
                                <p>2016-2017 o’quv yilida kafedra yo’nalish va mutaxassisliklari bo’yicha – 5320400 Kimyoviy texnologiya (135 bakalavr Yuqori molekulali birikmalar, va elastomerlar); 5321800 – Rezinotexnik maxsulotlar ishlab chigarish texnologiyasi (30 bakalavr); 11 ta magistrant 5A320405 – Yuqori molekulali birikmalar kimyoviy texnologiyasi (polimerlar ishlab chigarish texnologiyasi) mutaxassisligi; 8 ta magistrant 5A321801 – Rezinotexnik maxsulotlar ishlab chigarish texnologiyasi mutaxassiligi bo’yicha ta’lim olmoqdalar.</p>

                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>O'qitiladigan fanlar</h3>
                                <p>BAKALAVRIATURADA</p>
                                <p>5320400 – Kimyoviy texnologiya (yuqori molekulali birikmalar) ta`lim yo`nalishi bo`yicha:</p>
                                <p>1. Polimer-kompozitsion materiallarni yaratish asoslari</p>
                                <p>2. Yuqori molekulali birikmalar kimyoviy texnologiyasi</p>
                                <p>3. Polimer ishlab chiqarish mashina va apparatlari</p>
                                <p>4.Polimerlarni qayta ishlash texnologiyasi</p>
                                <p>5. Poliolefinlar texnologiyasi</p>
                                <p>6. Polimer ishlab chiqarish korxonalarini loyihalash asoslari</p>
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
                                                    k.f.d., dots.
                                                    <br />
                                                    Qabul vaqti: Chorshanba (1400-1500 gacha)
                                                    <br />
                                                    telefonlar: 90 918-25-64
                                                    <br />
                                                    E-mail  khusenov_82@mail.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">   A.Sh.Xusenov</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                        <li className="nav-ul-li active"><a href="">Yuqori molekulali birikmalar va plastmassalar kafedrasi</a></li>
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
