import Image from "next/image";
import Link from "next/link";

export default function Project({targetProjects}: {targetProjects: React.RefObject<HTMLDivElement | null>}){
    return(
        <>
            <div className="container py-5" ref={targetProjects}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div
              className="position-relative py-2 px-3 rounded-4 fw-bold"
              style={{ backgroundColor: "#0056F240" }}
            >
              <i className="bi bi-code fs-1 text-primary"></i>
            </div>
            <div className="display-5 fw-semibold mt-4">My Projects</div>
            <div className="fs-5 mt-2 opacity-75 text-center d-lg-block d-none">
              Highlights of my work in web development
            </div>
            <div className="fs-6 mt-2 opacity-75 text-center d-lg-none d-block">
              Highlights of my work in web development
            </div>
            <div className="d-lg-flex d-none gap-2 align-items-center fs-5 mt-2 fw-semibold">
              <Link
                href="https://getbootstrap.com/"
                target="_blank"
                className="text-linkblue"
              >
                Reverse-engineered design reference{" "}
              </Link>
              <i className="bi bi-arrow-right text-linkblue"></i>
            </div>
            <div className="d-lg-none d-flex gap-2 align-items-center fs-6 mt-2 fw-semibold">
              <Link
                href="https://getbootstrap.com/"
                target="_blank"
                className="text-linkblue"
              >
                Reverse-engineered design...{" "}
              </Link>
              <i className="bi bi-arrow-right text-linkblue"></i>
            </div>
          </div>
        </div>
        <div className="container py-4 position-relative" style={{zIndex: "1"}}>
          <div className="row">
            {/* PROJECT 1 */}
            <div className="col-lg-6 col-12 px-4 pb-lg-0 pb-4">
              <i className="bi bi-shield-lock opacity-75 fs-2"></i>
              <div className="fs-4 fw-semibold mt-1">
                AdZU Formation System - Security System
              </div>
              <div className="opacity-75 mt-1 pe-5">
                This ongoing project is built with a custom security system that
                uses JWT authentication, cookies, and middleware to protect
                routes, with encrypted admin data for added safety and
                validation.
              </div>
              <div className="mt-3 pe-lg-4">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="3000"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        src="/Images/adzuformation.png"
                        width={0}
                        height={0}
                        sizes="vw-100"
                        className="w-100 d-block h-auto"
                        alt="1"
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/Images/adzuformation2.png"
                        width={0}
                        height={0}
                        sizes="vw-100"
                        className="w-100 d-block h-auto"
                        alt="2"
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/Images/adzuformation3.png"
                        width={0}
                        height={0}
                        sizes="vw-100"
                        className="w-100 d-block h-auto"
                        alt="3"
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/Images/adzuformation4.png"
                        width={0}
                        height={0}
                        sizes="vw-100"
                        className="w-100 d-block h-auto"
                        alt="4"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="col-lg-6 col-12 border-lg-start border-secondary ps-lg-5 px-4 pb-lg-5 pb-4">
              <i className="bi bi-mortarboard opacity-75 fs-2"></i>
              <div className="fs-4 fw-semibold mt-1">
                AdZU Toga System - Inventory System
              </div>
              <div className="opacity-75 mt-1 pe-5">
                As part of the team, I helped develop the inventory system now
                used during graduations to manage toga orders and transactions
                across Ateneo de Zamboanga University Department of Education.
              </div>

              <div className="mt-3">
                <div
                  id="carouselExampleIndicators2"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="3000"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators2"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators2"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        src="/Images/togatrack2.png"
                        width={0}
                        height={0}
                        sizes="vw-100"
                        className="h-auto d-block w-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/Images/togatrack1.png"
                        width={0}
                        height={0}
                        sizes="vw-100"
                        className="h-auto d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            {/* PROJECT 3 */}
            <div className="col-lg-6 col-12 px-4 pb-lg-0 pb-4">
              <i className="bi bi-geo-alt opacity-75 fs-2"></i>
              <div className="fs-4 fw-semibold mt-1">
                CityAid - Emergency Web-App
              </div>
              <div className="opacity-75 mt-1 pe-5">
                It is a smart, location-based hospital directory built for my LITMIN project. With just a single button click, it detects the user&apos;s city, region, and country using GeoJS, then fetches local hospitals from OpenStreetMap using the Overpass API.
              </div>
              <div className="mt-3 pe-lg-4">
                <div
                    id="carouselExampleIndicators3"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="3000"
                >
                    <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators3"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators3"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    </div>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image
                        src="/Images/cityaid2.png"
                        width={0}
                        height={0}
                        sizes="vw-100"
                        className="w-100 d-block h-auto"
                        alt="1"
                        />
                    </div>
                    <div className="carousel-item">
                        <Image
                        src="/Images/cityaid1.png"
                        width={0}
                        height={0}
                        sizes="vw-100"
                        className="w-100 d-block h-auto"
                        alt="2"
                        />
                    </div>
                    </div>
                    <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators3"
                    data-bs-slide="prev"
                    >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators3"
                    data-bs-slide="next"
                    >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
            </div>






            <div className="col-lg-6 col-12 border-lg-start border-secondary ps-lg-5 px-4 pb-5">
              <i className="bi bi-rainbow opacity-75 fs-2"></i>
              <div className="fs-4 fw-semibold mt-1">
                Mujer Org - Informative Website
              </div>
              <div className="opacity-75 mt-1 pe-5">
                As one of the developers in the group, I contributed to building this website, which highlights Mujer Org’s vision and mission, showcases the services they provide, and serves as a platform to connect and inform everyone in the community.
              </div>

              <div className="mt-3">
                <div
                  id="carouselExampleIndicators4"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="3000"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators4"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators4"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators4"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        src="/Images/mujer1.png"
                        width={0}
                        height={0}
                        sizes="vw-100"
                        className="h-auto d-block w-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/Images/mujer2.png"
                        width={0}
                        height={0}
                        sizes="vw-100"
                        className="h-auto d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/Images/mujer3.png"
                        width={0}
                        height={0}
                        sizes="vw-100"
                        className="h-auto d-block w-100"
                        alt="Slide 3"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators4"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators4"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}