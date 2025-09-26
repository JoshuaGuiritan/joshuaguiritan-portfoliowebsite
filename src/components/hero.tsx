import Image from "next/image";
import Link from "next/link";

export default function hero({theme, targetHero}: {theme: string, targetHero: any}){
    return(
        <div
          className={`${theme === "dark" ? "bd-masthead-dark" : "bd-masthead-light"} position-relative z-1 pt-0 overflow-x-hidden`} ref={targetHero}
        ><div className="py-2">
          <div className="w-100 d-flex justify-content-between align-items-center opacity-0">
            <div className="d-flex gap-3 fs-6">
              <i className="bi bi-code-slash fs-2"></i>
              <a>Space</a>
            </div>
          </div>
        </div>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-11 d-flex flex-column align-items-center">
                <div className="bg-lightyellow shadow-sm rounded-pill py-2 px-3 text-dark fs-6 d-lg-block d-none">
                  <i className="bi bi-bell-fill"></i> Update: Busy at school
                </div>
                <small className="bg-lightyellow shadow-sm rounded-pill py-2 px-3 text-dark d-lg-none d-block">
                  <i className="bi bi-bell-fill"></i> Update: Busy at school
                </small>
                <Image
                  src="/Images/samplepic.jpg"
                  width={200}
                  height={200}
                  alt="profile"
                  className="rounded-pill shadow-lg mt-4 d-md-block d-none" 
                />
                <div className="display-lg-3 display-1 text-nowrap fw-semibold mt-3 mb-lg-0 mb-2">
                  Joshua Guiritan
                </div>
                <div className="fs-3 text-nowrap opacity-75 fw-semibold d-lg-block d-none">
                  Full-Stack Web Developer
                </div>
                <div className="fs-5 text-nowrap opacity-75 fw-semibold d-lg-none d-block">
                  Full-Stack Web Developer
                </div>
                <div className="opacity-50 fs-4 text-justify text-center mt-2 d-lg-block d-none">
                  Junior Software Developer passionate about building
                  user-friendly web apps that blend elegant design with scalable
                  back-end logic. Eager to contribute to innovative projects and
                  teams.
                </div>
                <div className="opacity-50 fs-6 text-justify text-center mt-2 d-lg-none d-block">
                  Junior Software Developer passionate about building
                  user-friendly web apps that blend elegant design with scalable
                  back-end logic. Eager to contribute to innovative projects and
                  teams.
                </div>
                <Link href="https://github.com/JoshuaGuiritan" target="_blank" className="text-decoration-none">
                <button className="btn btn-blue btn-lg mt-3 py-3 px-4 fw-semibold shadow-sm d-lg-block d-none">
                  <i className="bi bi-github me-2"></i>Explore my Github
                </button>
                </Link>
                <Link href="https://github.com/JoshuaGuiritan" target="_blank" className="text-decoration-none">
                <button className="btn btn-blue btn-sm mt-3 py-3 px-4 fw-semibold shadow-sm d-lg-none d-block">
                  <i className="bi bi-github me-2"></i>Explore my Github
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    )
}