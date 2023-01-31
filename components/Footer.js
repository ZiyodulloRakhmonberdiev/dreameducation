import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Tezkor Linklar</h4>
              <Link className="btn btn-link" href="/about">
                Biz haqimizda
              </Link>
              <Link className="btn btn-link" href="/contact">
                Bog'lanish
              </Link>
              <Link className="btn btn-link" href="/contact">
                Privacy Policy
              </Link>
              <Link className="btn btn-link" href="/contact">
                Shartlar &amp; Vaziyatlar
              </Link>
              <Link className="btn btn-link" href="/contact">
                FAQs &amp; Yordam
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Bog'lanish</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                Farg'ona viloyati, Marg'ilon shahri, Mustaqillik ko'chasi,
                Mo'ljal Bolajon ro'parasi, Universam kiyim magazini binosi
                ostida
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +99891 670 78 75
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                Telegramda @dream5756
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Galereya</h4>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/course-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/course-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/course-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/course-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/course-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/course-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Yangiliklar</h4>
              <p>
                Yangiliklardan xabardor bo'lish uchun ijtimoiy tarmoqlarda bizga
                a'zo bo'ling
              </p>
              <div className="d-flex pt-2">
                <Link
                  className="btn btn-outline-light btn-social"
                  href="https://t.me/koreys_tili_dream"
                >
                  <i className="fa fa-paper-plane" />
                </Link>
                <Link
                  className="btn btn-outline-light btn-social"
                  href="https://www.instagram.com/azizaxon_korea_hayoti/"
                >
                  <i className="fab fa-instagram" />
                </Link>
                <Link
                  className="btn btn-outline-light btn-social"
                  href="https://t.me/Margilon_Shaxar_DREAM_EDUCATION"
                >
                  <i className="fa fa-comments" />
                </Link>
                <Link
                  className="btn btn-outline-light btn-social"
                  href="tel:998916707875"
                >
                  <i className="fa fa-phone" />
                </Link>
              </div>
              {/* <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <Link className="border-bottom" href="#">
                  Dream Education
                </Link>
                , All Right Reserved.
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By{" "}
                <Link className="border-bottom" href="https://htmlcodex.com">
                  HTML Codex
                </Link>
                <br />
                <br />
                Distributed By{" "}
                <Link className="border-bottom" href="https://themewagon.com">
                  ThemeWagon
                </Link>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link href="/">Bosh sahifa</Link>
                  <Link href="/contact">Yordam</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* JavaScript Libraries  */}
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="lib/wow/wow.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/waypoints/waypoints.min.js"></script>
      {/* <script src="lib/owlcarousel/owl.carousel.js"></script> */}
      {/* Template Javascript  */}
      <script src="js/main.js"></script>
    </>
  );
}
