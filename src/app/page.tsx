import FacilitiesComponent from "@/components/FacilitiesComponent"
import FacultyHighlight from "@/components/FacultyHighlight"
import HomeComponent from "@/components/HomeComponent"
import NewsSection from "@/components/NewsSection"
import Question from "@/components/Question"
import ShortWelcomeTextComponent from "@/components/ShortWelcomeTextComponent"
import SamacosLead from "@/components/SamacosLead"


const HomePage = () => {

  return (
    <div className="max-w-screen min-h-screen mt-12 sm:mt-20">

      <HomeComponent />

      <ShortWelcomeTextComponent />

      <FacultyHighlight />

      <SamacosLead />

      <NewsSection />

      <FacilitiesComponent />

      <Question />


    </div>
  )
}

export default HomePage