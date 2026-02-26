import HeaderSlider from "@/components/home/HeaderSlider";
import MedicalAssistance from "@/components/home/MedicalAssistance";
import Navbar from "@/components/layout/Navbar";
import { getDictionary } from "@/lib/i18n/getDictionary";
import Excellence from '@/components/home/Excellence'
import { getDepartments } from "@/lib/queries/departments";
import DoctorMessageSection from "@/components/home/DoctorMessageSection";
import TalkToOurTeam from "@/components/home/TalkToOurTeam";
import EventsUpdatesSection from "@/components/home/EventUpdatesSection";


export default async function Home({ params }) {
 
   const { lang } = await params;
 
  const dict = await getDictionary(lang);
 const departments = await getDepartments({ limit: 6 });



  return (
    <>
      <HeaderSlider />
      <MedicalAssistance />
      <Excellence lang={lang} departments={departments} />
      <DoctorMessageSection lang={lang} />
      <EventsUpdatesSection />
      <TalkToOurTeam />
    </>
  ); 
}
