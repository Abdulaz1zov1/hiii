import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/oziq-1.jpg'
import Image2 from '../../images/kafedra/oziq-2.jpg'
import Image3 from '../../images/kafedra/oziq-3.jpg'
import Image4 from '../../images/kafedra/oziq-4.jpg'
import Image5 from '../../images/kafedra/oziq-5.jpg'
import Image6 from '../../images/kafedra/oziq-6.jpg'
import Image7 from '../../images/kafedra/oziq-7.jpg'
import Image8 from '../../images/kafedra/oziq-8.jpg'
import Image9 from '../../images/kafedra/oziq-9.jpg'
import Image10 from '../../images/kafedra/oziq-10.jpg'
import Image11 from '../../images/kafedra/oziq-11.jpg'
// import Image12 from '../../images/kafedra/oziq-12.jpg'
import Image13 from '../../images/kafedra/oziq-13.jpg'
import Image14 from '../../images/kafedra/oziq-14.jpg'
import Image15 from '../../images/kafedra/oziq-15.jpg'
import Image16 from '../../images/kafedra/oziq-16.jpg'
import Image17 from '../../images/kafedra/oziq-17.jpg'
import Image18 from '../../images/kafedra/oziq-18.jpg'
import Image19 from '../../images/kafedra/oziq-19.jpg'
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
                            <h3>{context[lang].kafedra.eighth}</h3>
                            <div class="tab">
                                <button class="tablinks" onClick={() => {
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabOne.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf1.p10}
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
                                <h4>{context[lang].kaf1.p10}</h4>
                                <p> “Oziq-ovqat mahsulotlari texnologiyasi” kafedrasi o’zining ta’lim va fan sohasidagi faoliyatini dunyodagi yetakchi oliy ta’lim muassasalari va ilmiy guruhlari tomonidan foydalanib kelinayotgan samarador usullar asosida olib boradi. Bu esa o’z navbatida, dunyoning yetakchi oliy ta’lim muassasalari (OTM), ilmiy tadqiqot institutlari (ITI) va ishlab chiqarish korporasiyalari bilan uzviy munosabatda bo’lishini ta’minlaydi. Kafedrada bakalavr, magistratura, tayanch doktorantura (PhD) va doktorantura (DSc) bosqichlarida kadrlar tayyorlanadi.
                                    Innovatsion ta’lim va fan texnologiyalari qo’llanilib va doimiy ravishda yangilanib, shuning bilan birgalikda kafedrada mavjud ilmiy yo’nalishlar muntazam rivojlantirilib kelinmoqda. Ishlab chiqarish va tegishli sanoat korxonalari bilan doimiy hamkorlik yuqori ilmiy salohiyatga ega bo’lgan yosh kadrlarni yetishtirishda muhim omillardan biri hisoblanib, hozirgi kunda kafedra Respublikamizdagi barcha hududlardagi zamonaviy korxonalar bilan bir qatorda xorijiy OTMlar bilan ham aloqalarni yo’lga qo’ygan.
                                </p>
                            </div>

                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <h4>Kadrelar tayyorlash</h4>
                                <p> Ushbu bakalavr yo’nalishi va magistratura mutaxassisligi zamon bilan hamnafas, ilg’or rivojlanayotgan yo’nalishlardan biri bo’lib, bu sohani tamomlagan kadrlar O’simlik moylarini ishalab chiqarish, yog’larni qayta ishalsh , don va don mahsulotlarini  ilmlari kabi zarur bilim va ko’nikmalarga ega bo’ladilar hamda sanoatning  oziq-ovqat, ilmiy muamolarni xal qilishdagi ko’nikmalar va shu kabi ko’plab boshqa sektorlarida o’z faoliyatlarini davom ettira oladilar.
                                    Bizning talabalarimiz ishlab chiqarish jarayonlarida mavjud jarayonlarni o'rganish uchun eng zamonaviy sharoitlarga ega ta’lim va fan uyg’unlashgan laboratoriya xonalarida mashg’ulotlar olib boradilar. Tegishli mutaxassislik fanlaridan a’lo baholarga o’qiydigan haqiqiy iqtidorli va bilimli talabalar muntazam ravishda rag’batlantirilib boriladi.
                                </p>
                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h4>Ilmiy yo'nalishlar</h4>
                                <p> Kafedra professor-oʼqituvchilari malakali muhandis-texnologlar tayyorlash bilan bir qatorda keng koʼlamli ilmiy tadqiqot ishlarini olib bormoqdalar.
                                </p>
                                <p>Yogʼ-moy texnologiyasi yoʼnalishi:
                                    Paxta, soya va raps moylarini gidrogenlash, paxta chigitini qayta ishlash jarayonida gossipolni zararsizlantirish, paxta moyini tozalash texnologiyalarini takomillashtirish boʼyicha bajarilgan ilmiy tadqiqot ishlari natijalari Toshkent yogʼ-moy kombinatida va Qarshi, Koson moy-ekstraktsiya zavodlarida sanoatga tadbiq etilgan.
                                </p>
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
                                                    Ilmiy nashrlari *: 2 ta monografiya 3 ta darslik, 2-o’quv qo’llanma  40 ta ilmiy maqolalar
                                                    <br />
                                                    Qabul kunlari *: Har kuni 1400-1600
                                                    <br />
                                                    Elektron manzil *: Akbar216@mail.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal"> Ro‘ziboev Akbarali Tursunboevich</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image2} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">kafedrasi dotsenti, t.f.n., dotsent</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 15 ta uslubiy ko‘rsatma, 2 ta darslik, 150 ta ortiq ilmiy maqolalar
                                                    <br />
                                                    Qabul kunlari *:  dushanba ,chorshanba, juma 1400-1600
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">  Ilxomjonov Po‘lat Ilxomjonovich</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image3} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">kafedrasi t.f.d.  dotsenti</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 6 ta uslubiy ko‘rsatma, 50 ta ilmiy maqolalar
                                                    <br />
                                                    Qabul kunlari *:   Shanba
                                                    <br />
                                                    Elektron manzil *: Axror_86_249@mail.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal"> Абдурахимов Ахрор Анварович</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image4} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree"> kafedrasi dotsent</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 5 ta uslubiy ko‘rsatma, 40 ta ilmiy maqolalar, 1 monografiya
                                                    <br />
                                                    Qabul kunlari *:   xar kun 1400-1600
                                                    <br />
                                                    Elektron manzil *: Rano-akr-1976@mail.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">  Akramova Ra’no Ramziddinovna</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image5} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">kafedrasi PhD, dotsent</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 2 ta uslubiy ko‘rsatma, 45 ta ilmiy maqolalar,
                                                    <br />
                                                    Qabul kunlari *:   xar kun 1400-1600
                                                    <br />
                                                    Elektron manzil *: Abbos.x@mail.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">  Hasanov Abbos Hasanovich</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image6} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">kafedrasi assistent</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 2 ta uslubiy ko‘rsatma, 35 ta ilmiy maqolalar, 1 ta monografiya
                                                    <br />
                                                    Qabul kunlari *:   xar kun 1400-1600
                                                    <br />Elektron manzil *: vip.asliddin@mail.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">  Fayzullayev Asliddin Zuvaydulloyevich</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image7} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">kafedrasi PhD kat.o’q</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 2 ta uslubiy ko‘rsatma, 43 ta ilmiy maqolalar, 3 ta monografiya
                                                    <br />
                                                    Qabul kunlari *:   xar kun 1400-1600
                                                    <br />
                                                    Elektron manzil *: dakn3s_93@mail.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal"> Xodjayev Sarvar Faxriddinovich</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image8} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree"> kafedrasi PhD, v.b.dots.</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 22 ta ilmiy maqolalar, 1 ta monografiya
                                                    <br />
                                                    Qabul kunlari *:   xar kun 1400-1600
                                                    <br />
                                                    Elektron manzil *: Rahimov1984@list.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">  Raximov Dilshod Pulatovich</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image9} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">kafedrasi PhD , kat.o'q</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 22 ta ilmiy maqolalar, 1 ta monografiya
                                                    <br />
                                                    Qabul kunlari *:   dushanbadan jumagacha 1400-1600
                                                    <br />
                                                    Elektron manzil *: avliyoxonova@bk.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Salijonova Shaxnozaxon Dilmurodovna</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image10} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">kafedrasi katta o’qituvchi</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 10 ilmiy maqolalar
                                                    <br />
                                                    Qabul kunlari *:   dushanba, chorshanba, juma 1400-1600
                                                    <br />
                                                    Elektron manzil *: muslimgul@mail.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal"> Ashurmatova Gulchexra  Isamidinovna</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image11} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">kafedrasi dotsenti, t.f.n., dotsent</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 35 ta uslubiy ko‘rsatma, 100 ta ilmiy maqolalar,
                                                    <br />
                                                    Qabul kunlari *:   Dushanba, chorshanba va juma1400-1600
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal"> Ayxodjaeva Nodira Karimullaevna</h6>
                                </div>
                                {/* <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image12} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">kafedrasi dotsenti, t.f.n., dotsent</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: , 25 та ilmiy maqolalar
                                                    <br />
                                                    Qabul kunlari *:   seshanba 1400-1600
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal"> Agzamov Xurshid  Kazimovich</h6>
                                </div> */}
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image13} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">kafedrasi PhD dostent</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 30 ta uslubiy qo’llanmalar, 6 ta darslik, 80 ta ilmiy maqolalar,  2 ta monografiya, 2 ta patent ,
                                                    <br />
                                                    Elektron manzil *: Djaxongirova. 77@mail.ru

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Djaxangirova Gulnoza Zinatullayevna</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image14} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">kafedrasi PhD dostent</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 10 ta uslubiy ko‘rsatma, 50 ta ilmiy maqolalar, 3ta patent
                                                    <br />
                                                    Qabul kunlari *:   har kuni  1400-1600
                                                    <br />
                                                    Elektron manzil *: ulug85bek77@mail.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal"> Baltaboev Ulug’bek Norboyevich</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image15} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree"> kafedrasi PhD dostent</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 2 ta uslubiy ko‘rsatma, 55 ta ilmiy maqolalar,  1ta patent
                                                    <br />
                                                    Qabul kunlari *:   shanba 1400-1600
                                                    <br />
                                                    Elektron manzil *: Anvar8184@mail.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal"> Normatov Anvar Mirzayevich</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image16} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">kafedrasi katta o’qiruvchi</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 10 ta uslubiy ko‘rsatma, 16 ta ilmiy maqolalar, 1 ta darslik, 1ta monografiya
                                                    <br />
                                                    Qabul kunlari *:   shanba 1400-1600
                                                    <br />
                                                    Elektron manzil *: Tkti.dildora@mail.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">  Махмудова Дилдора Хасановна</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image17} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">kafedrasi  assistent</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: 7 ta uslubiy ko‘rsatma, 10 ta ilmiy maqolalar,
                                                    <br />
                                                    Qabul kunlari *:   har kuni 1400-1600
                                                    <br />
                                                    Elektron manzil *: miralimovaaziza@gmail.com
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal"> Mirolimova Aziza Isamutdinovna</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image18} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">kafedrasi  katta o’qiruvchi</span>
                                                <span class="info">
                                                    Ilmiy nashrlari *: , 33 ta ilmiy maqolalar,
                                                    <br />
                                                    Qabul kunlari *:   har kuni1400-1600
                                                    <br />
                                                    Elektron manzil *: sarbolayev_f@mail.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal"> Сарбалаев Фаррух  Набиевич</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image19} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree"> PhD,v.b.dotsent</span>
                                                <span class="info">
                                                    Qabul kunlari *:   har kuni  1400-1600
                                                    <br />
                                                    Elektron manzil *: Soypro.uz@mail.ru
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">  Санаев Эрмат Шерматович</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Kafedralar</p></li>
                        <li className="nav-ul-li active"><a href="">Oziq-ovqat mahsulotlari texnologiyasi kafedrasi</a></li>
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
