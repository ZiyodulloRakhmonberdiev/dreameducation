import Link from "next/link";

export default function Team() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            O'qituvchilar
          </h6>
          <h1 className="mb-5">Tajribali O'qituvchilar</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item bg-light">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-1.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-23px" }}
              >
                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                  <Link className="btn btn-sm-square btn-primary mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link className="btn btn-sm-square btn-primary mx-1" href="">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link className="btn btn-sm-square btn-primary mx-1" href="">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">O'qituvchi ismi</h5>
                <small>Ingliz tili eksperti</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-2.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-23px" }}
              >
                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                  <Link className="btn btn-sm-square btn-primary mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link className="btn btn-sm-square btn-primary mx-1" href="">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link className="btn btn-sm-square btn-primary mx-1" href="">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">O'qituvchi ismi</h5>
                <small>Ingliz tili eksperti</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item bg-light">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-23px" }}
              >
                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                  <Link className="btn btn-sm-square btn-primary mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link className="btn btn-sm-square btn-primary mx-1" href="">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link className="btn btn-sm-square btn-primary mx-1" href="">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">O'qituvchi ismi</h5>
                <small>Ingliz tili eksperti</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item bg-light">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-4.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-23px" }}
              >
                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                  <Link className="btn btn-sm-square btn-primary mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link className="btn btn-sm-square btn-primary mx-1" href="">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link className="btn btn-sm-square btn-primary mx-1" href="">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">O'qituvchi ismi</h5>
                <small>Ingliz tili eksperti</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
