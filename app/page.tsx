import Banner from './components/Banner';
import Features from './components/Services';
import Cook from './components/Work';
import Expert from './components/Team';
import Gallery from './components/Feedback';
import Newsletter from './components/Newsletter';



export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Cook />
      <Expert />
      <Gallery />
      <Newsletter />
    </main>
  )
}
