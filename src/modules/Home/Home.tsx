import React, { useRef, useState } from "react";
import Banner from "./Banner/Banner";
import Advertise from "./Advertise/Advertise";
import Divider from "./Divider/Divider";
import Testimonials from "./Testimonials/Testimonials";
import Intro from "./Intro/Intro";
import ProductList from "./ProductList/ProducttList";
import Stats from "./Stats/Stats";
import Modal from "../../componets/Modal";
import Header from "../../componets/Header";
import Footer from "../../componets/Footer";
import Chatbot from "../../componets/ChatBot";
import BackToTop from "../../componets/BackToTop";
import ScrollProgressBar from "../../componets/ScrollProgressBar";

export default function Home() {
  const courseSectionRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  const handleRegisterClick = () => {
    courseSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setShowModal(true), 600); // delay để modal xuất hiện sau khi scroll
  };
  return (
    <div>
      <Header />
      <Banner onRegisterClick={handleRegisterClick} />
      <Stats />
      <Intro />
      <div ref={courseSectionRef} className="pt-20">
        <ProductList />
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <p className="text-lg font-semibold text-center">
            Bạn vui lòng chọn khóa học để đăng ký học thử nhé !!
          </p>
        </Modal>
      )}
      <Testimonials />
      <Divider />
      <Advertise />
      <Chatbot />
      <BackToTop />
      <ScrollProgressBar />
      <Footer />
    </div>
  );
}
