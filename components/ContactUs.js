import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Bog'lanish
          </h6>
          <h1 className="mb-5">Savol yoki taklifingizni yuboring</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <h5>Manzil</h5>
            <p className="mb-4">
              Agar saytdan qidirgan ma'lumotingizni topa olmasangiz, yoki
              qo'shimcha savol va takliflaringiz bo'lsa siz istagan usul orqali
              biz bilan bog'laning
            </p>
            <div className="d-flex align-items-center mb-3">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                style={{ width: 50, height: 50 }}
              >
                <i className="fa fa-map-marker-alt text-white" />
              </div>
              <div className="ms-3">
                <h5 className="text-primary mb-0">Ofis</h5>
                <p className="mb-0">
                  Mustaqillik ko'chasi, Marg'ilon shahar markazi, Farg'ona
                  viloyati, O'zbekiston
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                style={{ width: 50, height: 50 }}
              >
                <i className="fa fa-phone-alt text-white" />
              </div>
              <div className="ms-3">
                <h5 className="text-primary mb-0">Telefon</h5>
                <p className="mb-0">+99891 670 78 75</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                style={{ width: 50, height: 50 }}
              >
                <i className="fa fa-envelope-open text-white" />
              </div>
              <div className="ms-3">
                <h5 className="text-primary mb-0">Telegram</h5>
                <p className="mb-0">@dream5756</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5407.468328026574!2d71.72089657199648!3d40.4788343584609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1675152223681!5m2!1suz!2s"
              className="position-relative rounded w-100 h-100"
              frameBorder={0}
              style={{ minHeight: 300, border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
          <div
            className="col-lg-4 col-md-12 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <form action="https://formspree.io/f/mbjbepee" method="POST">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Ism"
                    />
                    <label htmlFor="name">Ism</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      name="phone"
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Telefon"
                    />
                    <label htmlFor="subject">Telefon</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      name="subject"
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Maqsad"
                    />
                    <label htmlFor="subject">Maqsad</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      name="message"
                      id="message"
                      style={{ height: 150 }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Xabar</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Xabarni yuborish
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
