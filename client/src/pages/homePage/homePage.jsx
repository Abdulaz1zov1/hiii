import Header from '../../components/header/header'
import MainSlider from '../../components/main_slider/main_slieder'
import Filter from '../../components/filter/filter'
import News from '../../components/news_list/news_list'
import Announcements from '../../components/announcements/announcements'
import About_us from '../../components/about_us/about_us'
import UsefulLinks from '../../components/useful_links/usefulLinks'
import Footer from '../../components/footer/footer'
import ParticlesBg from 'particles-bg'

function HomePage() {
  return (
    <div className='wrapped'>
      <ParticlesBg color="#307ec7" type="cobweb" num={200} bg={true} />
      <Header />
      <MainSlider />
      <Filter />
      <News />
      <Announcements />
      <About_us />
      <UsefulLinks />
      <Footer />
    </div>
  );
}

export default HomePage;