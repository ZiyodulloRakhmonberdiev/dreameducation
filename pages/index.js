import Link from "next/link";

import HeadItems from "./Head";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Service from "../components/Service";
import About from "../components/About";
import Team from "../components/Team";
import Courses from "../components/Courses";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeadItems />
      <Header />
      <Carousel />
      <Service />
      <About />
      <Categories />
      <Courses />
      <Team />
      <Link
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </Link>
      <Footer />
    </>
  );
}
