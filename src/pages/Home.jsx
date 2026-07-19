import PageBackground from "../components/ui/PageBackground"
import Hero from "./Home/Hero";
import Stats from "./Home/Stats";
import AboutPreview from "./Home/AboutPreview";
import WhatWeDo from "./Home/WhatWeDo";
import FeaturedEvents from "./Home/FeaturedEvent";
import CTA from "./Home/CTA";

export default function Home() {

  return (

    <PageBackground>

  <Hero />

  <Stats />

  <AboutPreview />

  <WhatWeDo />

  <FeaturedEvents/>
  <CTA/>

</PageBackground>

  );

}
