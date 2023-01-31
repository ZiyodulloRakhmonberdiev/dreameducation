import Link from "next/link";
import Image from "next/image";
export default function index() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Dream Education</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="" name="keywords" />
      <meta content="" name="description" />
      {/* Favicon */}
      <link href="img/favicon.ico" rel="icon" />
      {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap"
        rel="stylesheet"
      />
      {/* Icon Font Stylesheet */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      {/* Libraries Stylesheet */}
      <link href="lib/animate/animate.min.css" rel="stylesheet" />
      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      {/* Customized Bootstrap Stylesheet */}
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      {/* Template Stylesheet */}
      <link href="css/style.css" rel="stylesheet" />
      {/* Spinner Start */}
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* Spinner End */}
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <i className="fa fa-book me-3" />
            Dream Education
          </h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link href="/" className="nav-item nav-link">
              Bosh sahifa
            </Link>
            <Link href="/about" className="nav-item nav-link">
              About
            </Link>
            <Link href="/courses" className="nav-item nav-link">
              Kurslar
            </Link>
            <div className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle active"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu fade-down m-0">
                <Link href="/team" className="dropdown-item">
                  Our Team
                </Link>
                <Link href="testimonial.html" className="dropdown-item active">
                  Testimonial
                </Link>
                <Link href="404.html" className="dropdown-item">
                  404 Page
                </Link>
              </div>
            </div>
            <Link href="/contact" className="nav-item nav-link">
              Bog'lanish
            </Link>
          </div>
          <Link
            href=""
            className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >
            Bizga qo'shiling
            <i className="fa fa-arrow-right ms-3" />
          </Link>
        </div>
      </nav>
      {/* Navbar End */}
      {/* Header Start */}
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Testimonial
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" href="/">
                      Bosh sahifa
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link className="text-white" href="/">
                      Pages
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Testimonial
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Students Say!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel position-relative">
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src="img/testimonial-1.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src="img/testimonial-2.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src="img/testimonial-3.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src="img/testimonial-4.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Quick Link</h4>
              <Link className="btn btn-link" href="">
                Biz haqimizda
              </Link>
              <Link className="btn btn-link" href="">
                Bog'lanish Us
              </Link>
              <Link className="btn btn-link" href="">
                Privacy Policy
              </Link>
              <Link className="btn btn-link" href="">
                Terms &amp; Condition
              </Link>
              <Link className="btn btn-link" href="">
                FAQs &amp; Help
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Bog'lanish</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                info@example.com
              </p>
              <div className="d-flex pt-2">
                <Link className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter" />
                </Link>
                <Link className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube" />
                </Link>
                <Link className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
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
              <h4 className="text-white mb-3">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
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
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <Link className="border-bottom" href="#">
                  Your Site Name
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
                  <Link href="">Bosh sahifa</Link>
                  <Link href="">Cookies</Link>
                  <Link href="">Help</Link>
                  <Link href="">FQAs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <Link
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </Link>
      {/* JavaScript Libraries */}
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="lib/wow/wow.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/waypoints/waypoints.min.js"></script>
      {/* <script src="lib/owlcarousel/owl.carousel.min.js"></script> */}
      {/* Template Javascript */}
      <script src="js/main.js"></script>
    </>
  );
}
