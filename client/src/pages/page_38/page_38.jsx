import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/mahsulot.jpg'
import Image00 from '../../images/kafedra/mahsulot-xqida.jpg'
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
                            <h3>{context[lang].kafedra.twentyfirst}</h3>
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
                               <p>“Mahsulot sifati menejmenti” kafedrasi Toshkent kimyo texnologiya instituti qoshida 2009-yil 30-iyunda  tashkil etilgan bo‘lib, unda 5524300 – “Mahsulot sifati menejmenti” ta’lim yo‘nalishi bo‘yicha kadrlar tayyorlay boshladi. Ushbu kafedra mudiri etib, k.f.d. prof. Xamroqulov G‘. tayinlandi. </p>
                               <p>2011  yildan boshlab esa 5524300 – “Mahsulot sifati menejmenti” ta’lim yo‘nalishi yanada takomillashib 5310900-“Metrologiya, standartlashtirish va mahsulot sifati menejmenti”  yo‘nalishi bo‘yicha bakalavr talabalarni tayyorlashni boshladi.</p>
                               <p>2013-yil 4-yanvarda prof. Xamroqulov G‘. “Menejment va kasb-ta’limi” fakulteti dekani etib tayinlanishi munosabati bilan “Maxsulot sifati menejmenti” kafedrasiga k.f.n., Axunjanov K.A. mudir etib tayinlandi va xozirgi kunga qadar faoliyatini davom ettirib kelmoqda.</p>
                               <p>Xozirgi kunda kafedra yuqori malakali professor o‘qituvchilar bilan  shakllantirilgan, jumladan: t.f.d., prof.Ismatullaev P.R.,  k.f.d., prof. Hamroqulov G‘., k.f.d., prof. Raximov D.A., t.f.d. prof. Xakimov O.Sh., t.f.d., prof.Sarimsoqov A.A., t.f.d., Mo‘minov N.Sh., yu.f.n., dos.Alimbaev S.A., t.f.n., dos. Akbarxo‘jaev Z.A., b.f.n. dos. Xasanova D.Yu. va katta o‘qituvchi Kamolov U. Ismoilov A., assistentlar Nosirov A.,  Po‘latov M., Annamurodov S., Samatov A. va Rajaov A., k.i.x.i. Islomova S.T. va Xamroqulov M.lar faoliyat olib bormoqdalar.</p>
                               <p> “Mahsulot sifati menejmenti” kafedrasi mutaxassislik kafedrasi bo‘lib 5310900-“Metrologiya, standartlashtirish va mahsulot sifati menejmenti” (kimyo va oziq-ovqat) tayanch ta’lim yo‘nalishi bo‘yicha bakalavr talabalarni, 5A310901-“Mahsulotlar xavfsizligi va ularning sertifikatsiyasi” (kimyo va oziq-ovqat) tayanch mutaxassisligi va 5A310902-“Metrologiya, standartlashtirish va sifatni boshqarish” (tarmoqlari bo‘yicha) turdosh mutaxassisligi bo‘yicha magistrantlar taxsil olmoqdalar.</p>
                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>   O‘quv uslubiy ishlar</h3>
                                <p>Kafedrada 5310900 – “Metrologiya standartlashtirish va mahsulot sifati menejmenti” yo‘nalishi va  5A310901 – “Mahsulotlar xavfsizligi va ularning sertifikatsiyasi” mutaxassisligi bo‘yicha malaka talablar yaratildi. Kafedrada professor-o‘qituvchilar tomonidan yuqorida qayd etilgan ta’lim yo‘nalishlari bo‘yicha o‘qitiladigan  barcha fanlardan  namunaviy va ishchi o‘quv dasturlar tayyorlandi va o‘quv-uslubiy majmualar ishlab chiqildi. Oxirgi yillarda kafedra professor-o‘qituvchilar tomonidan 5 ta darslik va 25 tadan ortiq  o‘quv-uslubiy qo‘llanmalar chop etildi.</p>
                                <p>Hozirgi kunda 5310900 – “Metrologiya standartlashtirish va mahsulot sifati menejmenti” yo‘nalishi bo‘yicha 1-4 bosqichlarida 200 nafar talaba tahsil olmoqda. Bizning bitiruvchilarimiz Respublikamizdagi korxonalarga va setifikatlashtirish idoralariga sifat bo‘yicha menejer bo‘lib ishga joylashmoqdalar.</p>
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
                                                Yuridik fanlari  nomzodi, dotsent <br />
                                                Qabul  kunlari: Har-kun  1400-1700gacha<br />
                                                Elektron adres: akhundjanov@inbox.ru. <br />     
                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Alimboev Sobit Axmatovich</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                        <li className="nav-ul-li active"><a href="">Mahsulot sifati menejmenti kafedrasi</a></li>
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
