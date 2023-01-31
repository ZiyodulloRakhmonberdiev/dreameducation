import Link from "next/link";

export default function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: 400 }}
          >
            <div className="position-relative h-100">
              <picture>
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="img/about.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </picture>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              Biz haqimizda
            </h6>
            <h1 className="mb-4">
              Dream Education o'quv markaziga xush kelibsiz
            </h1>
            <p className="mb-4">
              Biz 5 yildan ortiq vaqt davomida bilim berib kelamiz va biz bu
              vaqt davomida yuzlab o'quvchilarga chet tillarini o'rgatishga
              erishdik
            </p>
            <p className="mb-4">
              Farg'ona viloyati Marg'ilon shahri markazida joylashgan Dream
              Education o'quv markazi shahardagi qariyb eng birinchi o'qitish
              maskanlaridan biri hisoblanadi. U chet el davlatlari, xususan,
              Janubiy Koreya Respublikasining nufuzli universitetlari bilan
              tuzgan shatnomalari orqali boshqa o'quv markazlaridan yaqqol
              ajralib turadi. Turli viza va imtihon masalalarida markaz sizga
              yaqindan yordam beradi. Bunga isbot qilib, bizning ko'mak orqali
              Janubiy Koreya davlatiga o'qish va ish uchun ketgan o'nlab
              mijozlarimizni misol qilib keltirish mumkin. Biz bilan bo'ling,
              zero "Teran o'tmish - kuchli kelajak"
            </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Tajribali mutaxassislar
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Sifatli darslar
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Sertifikatlar
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Viza masalalari
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  IELTS ga tayyorlov kurslari
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  TOPIC ga tayyorlov kurslari
                </p>
              </div>
            </div>
            <Link className="btn btn-primary py-3 px-5 mt-2" href="/about">
              Batafsil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
