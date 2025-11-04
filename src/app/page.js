import Image from "next/image";
import Heading from "../../components/Heading";
import { assets } from "../../assets/assets";
import Navbar from "../../components/Navbar";
import HeaderSlider from "../../components/HeaderSlider";
import TypeWriterEffect from "../../components/TypeWriterEffect";
import ScrollVelocityComponent from '../../components/ScrollVelocityComponent'


export default function Home() {
  return (
    <>
      <Heading />
      <TypeWriterEffect />
      <ScrollVelocityComponent />
      <Navbar />
      <HeaderSlider />
    </>
  );
}
