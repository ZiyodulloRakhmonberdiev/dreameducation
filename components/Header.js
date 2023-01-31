import Link from "next/link";

export default function Header() {
  return (
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
          <Link href="/" className="nav-item nav-link active">
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
              className="nav-link dropdown-toggle"
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
  );
}
