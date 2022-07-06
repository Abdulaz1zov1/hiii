import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import ParticlesBg from 'particles-bg'
import { Context as LanguageContext } from '../../Context/Language';
import Image from '../../images/93809a2de8_1621412188.jpg'
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
                            <h3>{context[lang].centre.seventh}</h3>
                            <div class="tab">
                                <button class="tablinks" onClick={() => {
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabOne.current.classList.add("opened")
                                }} id="defaultOpen">Bo'lim haqida</button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabTwo.current.classList.add("opened")
                                }} id="defaultOpen">Bizning
                                    maqsadimiz</button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">Bizning
                                    vazifamiz</button>
                            </div>
                            <div id="About" ref={tabOne} class="tabcontent opened">
                                <h3>Bo'lim haqida</h3>
                                <p>Toshkent Kimyo-texnologiya institutining o‘quv bo‘limni asosiy  vazifalariga o‘quv jarayonini tashkil qilish, Davlat ta’lim standart­lari, namunaviy o‘quv rejalar va namunaviy o‘quv dasturlarini va boshqa me’yoriy xujjatlarni ishlab chiqish, o‘quv jarayonining grafigini, o‘quv rejalarni tuzish, mashg‘ulotlar jadvalini tuzishga rahbarlik qilish va uni fakultetlarda tuzilishini nazoratga olish, o‘quv ishlar xajmini aniqlab fakultet va kafedralar bo‘yicha shtat jadvallarini hamda soatbay yuklamalarni tuzish, o‘quv ishlarini bajarilishini tekshirish, institut yillik hisobotini tuzish, o‘quv jarayoniga reyting tizimi va yangi pedagogik texnologiyalarni joriy qilish, Davlat Attestatsiyalarni tashkil qilish va uni o‘tkazish etish, kvalifikatsion amaliyotlarni tashkil etish, semestrlar yakunidan talabalarni o‘zlashtirishini umumlashtirish, institut auditoriya fondidan foydalanishni tekshirish, mashg‘ulotlarni fan dasturlariga mos ravishda to‘liq o‘tishi va darslarga qatnashganligini tekshirish bo‘yicha dispetcherlik xizmatini tashkil qilish bilan bog‘liq bo‘lgan ishlarni o‘z ichiga oladi.</p>
                            </div>

                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <h3>Bizning maqsadimiz</h3>
                                <p> “O‘zbekiston Respublikasi kadrlar tayyorlash milliy dasturi”ni joriy etishni uchinchi bosqichida o‘quv bo‘limi – yuqori malakali mutaxassislarni tayyorlash vazifalarini bajarishida quyidagilarga asosiy e’tibor qaratadi:
                                    <br />
                                    Talabalarning bilimlarini reyting tizimi asosida nazorat qilishda, ularning mustaqil ishlarini o‘quv jarayoniga to‘g‘ri tadbiq qilish;
                                    O‘quv jarayonini tasdiqlangan o‘quv va normativhuquqiy xujjatlar asosida tashkil qilish;
                                    Professoro‘qituvchi va talabalarga yuqori darajada ishonch va e’tibor bilan ijobiy muhitni yaratish;
                                    Iqtidorli talabalarni tanlab, ularni maqsadli, kasbiy mahoratlarini oshirish;
                                    Yangi pedagogik texnologiyalarni joriy etish, professoro‘qituvchilarning pedagogik mahoratlarini oshirish, ishlab chiqarish korxonalarining yetuk mutaxassislarni o‘quv jarayoniga jalb etish;
                                    Ishlab chiqarish bilan oliy ta’lim integratsiyasini yaxshilash;
                                    O‘quvmetodik adabi         yotlar bazasini kengaytirish;
                                    O‘quv jarayonini boshqarish va uni tashkil etishda axborot texnika  komunikatsiyalariga yaqindan yondashish.
                                    O‘quv bo‘limini asosiy ish rejalari quyidagilardan iborat
                                    <br />
                                    O‘quv jarayoni grafigini tuzish (mart-aprel)
                                    Yo‘nalish va mutaxassisliklar bo‘yicha o‘quv rejalarini tuzish (mart-aprel)
                                    Yangi o‘quv yili o‘quv jarayonini rejalashtirish (aprel-avgust)
                                    O‘quv jarayonini tashkil etish va nazorat qilish (o‘quv yili davomida)
                                    Talabalar kontingenti monitoringini amalga oshirish (o‘quv yili davomida)
                                    Kvalifikatsion amaliyotlarni tashkil etish va nazorat qilish (o‘quv yili davomida)
                                    Davlat Attestatsiya yakunlarini o‘tkazilishini nazorat qilish (dekabr-yanvar, may-iyun).</p>
                            </div>


                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>Bizning vazifamiz</h3>
                                <p>Institutda o‘qitiladigan barcha bakalavriyat ta’lim yo‘nalishlari va magistratura mutaxassisliklari bo‘yicha Davlat ta’lim standartlari tuzilib Davlat Standarti tasdiqidan o‘tkazildi, Namunaviy fan dasturlari   o‘rnatilgan tartibga ko‘ra tasdiqlandi. Tasdiqlangan me’yoriy xujjatlar elektron nusxaga o‘tkazildi va ular bilan turdosh OTM ta’minlanmoqda.

                                    Tayanch xisoblangan bakalavr ta’lim yo‘nalishlari va magistratura mutaxassisliklarining asosiy fanlari bo‘yicha vazirlikning talablariga ko‘ra O‘quv uslubiy majmualar yaratilmoqda;

                                    Institutda Davlat Test Markazi tomonidan o‘tkaziladigan attestatsiyaga puxta tayyorgarlik ko‘rish maqsadida, talabalarning qoldiq bilimlarini oshirishga yo‘naltirilgan barcha fanlardan testlar sinovlari o‘tkazilmoqda;
                                    <br />
                                    Toshkent Kimyo-texnologiya institutiga turdosh bo‘lgan OTMlari bilan “Elektron o‘quv-uslubiy majmualar va ta’limni modernizatsiyalashning ustivor yo‘nalishlari” deb nomlangan ilmiy-uslubiy semenarni o‘tkazilishi may oyining oxiriga rejalashtirilgan, bu haqida Oliy ta’lim vazirligining modemnomasi yuboriladi.

                                    O‘quv uslubiy bo‘lim Respublikamizdagi quyidagi Oliy ta’lim muassasalari bilan o‘quv va o‘quv-uslubiy ishlar bo‘yicha yaqindan ijodiy ishlar olib bormoqda:

                                    O‘zMU, TDTU, QQDU, TAQI, TTESI, TIMI, And.MII, FarPI, SamDU, UrgDU, BuxMTI, QarDU, NavDKI, Qarshi MII, JizPI, ToshFarmI, NamMTI va boshqalar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-10">
                            <div class="teachers justify-content-start">
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">Bo'lim boshlig'i</span>
                                                <span class="info"> Xabibullayev Rashid Azamatovich

                                                    Xizmat telefoni: 71 244–79–34;

                                                    E-mail: rashidxabibullayev@gmail.com.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Xabibullayev Rashid Azamatovich</h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Bo`limlar</p></li>
                        <li className="nav-ul-li active"><a href="">O‘quv-uslubiy bo‘limi</a></li>
                        <Link to={'/page/static/get/8'}>
                        <li className="nav-ul-li"><a href="">Marketing va talabalar amaliyoti boʻlimi</a></li>
                        </Link>
                        <Link to={'/page/static/get/9'}>
                        <li className="nav-ul-li"><a href="">Jismoniy va yuridik shaxslarning murojaatlari bilan ishlash, nazorat va monitoring bo'limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/15'}>
                        <li className="nav-ul-li"><a href="">Xalqaro aloqalar bo`limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/13'}>
                        <li className="nav-ul-li"><a href="">Ta’lim sifatini nazorat qilish bo‘limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/7'}>
                        <li className="nav-ul-li"><a href="">Magistratura bo‘limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/4'}>
                        <li className="nav-ul-li"><a href="">Ilmiy innovatsion ishlanmalarni tijoratlashtirish bo’limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/6'}>
                        <li className="nav-ul-li"><a href="">Kadrlar bo'limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/12'}>
                        <li className="nav-ul-li"><a href="">Sirtqi bo'lim</a></li>
                        </Link>
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Markazlar</p></li>
                        <Link to={'/page/static/get/11'}>
                        <li className="nav-ul-li"><a href="">Raqamli ta'lim texnologiyalari markazi</a></li>
                        </Link>
                        <Link to={'/page/static/get/14'}>
                        <li className="nav-ul-li"><a href="">TKTI huzuridagi “Pedagogik kadrlarni qayta tayyorlash va malakasini oshirish” tarmoq markazi</a></li>
                        </Link>
                        <Link to={'/page/static/get/5'}>
                        <li className="nav-ul-li"><a href="">Innovasion markazi</a></li>
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
