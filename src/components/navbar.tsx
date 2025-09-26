"use client";
import Link from "next/link";

interface NavbarProp{
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>,
    toHero: ()=> void,
    toProjects: ()=> void,
    toTechstack: ()=> void,
    toMe: ()=> void,
}

export default function Navbar({theme, setTheme, toHero, toProjects, toTechstack, toMe}: NavbarProp){
    
    return(
        <div className="w-100 position-fixed z-2 bg-blue text-white py-2 shadow-lg" style={{zIndex: "9999999999"}}>
            <div className="container d-md-flex d-none justify-content-between align-items-center px-4">
                <div className="d-flex align-items-center gap-3 fs-6">
                    <i className="bi bi-code-slash fs-2"></i>
                    <div role="button" onClick={toHero}>Home</div>
                    <div role="button" onClick={toProjects}>Projects</div>
                    <div role="button" onClick={toTechstack}>Stack</div>
                    <div role="button" onClick={toMe}>Me</div>
                </div>
                <div className="d-flex gap-3 fs-6">
                    <Link href="https://www.facebook.com/joshua.guiritan.3/" target="_blank" className="text-decoration-none text-light"><i className="bi bi-facebook"></i></Link>
                    <Link href="https://www.instagram.com/joshua_guiritan/" target="_blank"className="text-decoration-none text-light"><i className="bi bi-instagram"></i></Link>
                    <Link href="https://x.com/JoshuaGuiritan" target="_blank" className="text-decoration-none text-light"><i className="bi bi-twitter-x"></i></Link>
                    <Link href="https://www.linkedin.com/in/joshua-guiritan-127227377/" target="_blank" className="text-decoration-none text-light"><i className="bi bi-linkedin"></i></Link>
                    <div className="border-end opacity-50"></div>
                    <i
                    className={`bi ${theme === "dark" ? "bi-moon-stars-fill" : "bi-brightness-high-fill"} cursor-pointer`}
                    onClick={() => {
                        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
                    }}
                    ></i>
                </div>
            </div>
            <div className="container-fluid d-md-none d-flex justify-content-end align-items-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <i className="bi bi-three-dots fs-2 px-2"></i>
            </div>

            <div
  className="offcanvas offcanvas-end w-50 bg-dark text-light"
  tabIndex={-1}
  id="offcanvasRight"
  aria-labelledby="offcanvasRightLabel"
>
  <div className="offcanvas-header border-secondary">
    <h5 className="offcanvas-title fw-bold" id="offcanvasRightLabel">
      <i
        className={`bi ${theme === "dark" ? "bi-moon-stars-fill" : "bi-brightness-high-fill"} cursor-pointer`}
        onClick={() => {
            setTheme((prev) => (prev === "dark" ? "light" : "dark"));
        }}
        ></i>
    </h5>
    <button
      type="button"
      className="btn-close btn-close-white"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>

  <div className="offcanvas-body">
    <nav>
      <div className="d-flex flex-column gap-3 fs-6 mb-4">
        <div role="button" onClick={toHero} className="hover-opacity">Home</div>
        <div role="button" onClick={toProjects} className="hover-opacity">Projects</div>
        <div role="button" onClick={toTechstack} className="hover-opacity">Stack</div>
        <div role="button" onClick={toMe} className="hover-opacity">Me</div>
      </div>
    </nav>
    <div className="d-flex gap-3 fs-6 mt-2">
      <Link href="https://www.facebook.com/joshua.guiritan.3/" target="_blank" className="text-light">
        <i className="bi bi-facebook"></i>
      </Link>
      <Link href="https://www.instagram.com/joshua_guiritan/" target="_blank" className="text-light">
        <i className="bi bi-instagram"></i>
      </Link>
      <Link href="https://x.com/JoshuaGuiritan" target="_blank" className="text-light">
        <i className="bi bi-twitter-x"></i>
      </Link>
      <Link href="https://www.linkedin.com/in/joshua-guiritan-127227377/" target="_blank" className="text-light">
        <i className="bi bi-linkedin"></i>
      </Link>
    </div>
  </div>
</div>

        </div>
        
    );
}