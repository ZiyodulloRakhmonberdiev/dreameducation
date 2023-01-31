import Link from "next/link";
export default function Carousel() {
  return (
    <>
      <div className="container-fluid bg-primary py-24 mb-5 page-header-one">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-10 text-left">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-sm-10 col-lg-8">
                    <h5 className="text-primary text-uppercase mb-2 animated slideInDown">
                      Uzoq yillik tajribaga ega
                    </h5>
                    <h1 className="display-3 text-white animated slideInDown">
                      Dream Education
                    </h1>
                    <p className="fs-5 text-white mb-4 pb-2 text-uppercase">
                      O'quv markazi bilan Janubiy Koreya va boshqa dunyoning top
                      universitetlari talabasiga aylaning
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                      <Link
                        href="/about"
                        className="btn btn-primary py-md-3 px-md-5 animated slideInLeft"
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
        </div>
      </div>
    </>
  );
}
