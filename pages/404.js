"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import HeadItems from "./Head.js";

export default function NotFound() {
  return (
    <>
      <HeadItems />
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
              Biz haqimizda
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
                Sahifalar
              </Link>
              <div className="dropdown-menu fade-down m-0">
                <Link href="/team" className="dropdown-item">
                  Bizning jamoa
                </Link>
              </div>
            </div>
            <Link href="/contact" className="nav-item nav-link">
              Bog'lanish
            </Link>
          </div>
          <Link
            href="https://t.me/koreys_tili_dream"
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
                Sahifa topilmadi
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" href="#">
                      Bosh sahifa
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    404
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary" />
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Sahifa topilmadi</h1>
              <Link className="btn btn-primary rounded-pill py-3 px-5" href="/">
                Bosh sahifaga qaytish
              </Link>
            </div>
          </div>
        </div>
      </div>
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
