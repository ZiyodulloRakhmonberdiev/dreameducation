import Link from "next/link";
export default function Carousel() {
  return (
    <div className="p-0 mb-5 d-flex justify-content-center">
      <div className="position-relative">
        <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{ background: "rgba(24, 29, 56, .7)" }}
        >
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-sm-10 col-lg-8">
                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                  Uzoq yillik tajribaga ega
                </h5>
                <h1 className="display-3 text-white animated slideInDown">
                  Dream Education
                </h1>
                <p className="fs-5 text-white mb-4 pb-2">
                  Janubiy Koreya va Yevropadagi top universitetlar talabasiga
                  aylaning
                </p>
                <Link
                  href="/about"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Batafsil
                </Link>
                <Link
                  href="https://t.me/koreys_tili_dream"
                  className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                >
                  Bizga qo'shiling
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
