import Link from "next/link";

export default function contact({theme}: {theme: string}){
    return(
        <div className="px-5 mt-5 pb-lg-0 pb-5 overflow-x-hidden" style={{backgroundColor: theme === "dark" ? "#2B3035" : "#e9ecef", minHeight:"400px", height: "auto"}}>
            <div className="row h-100 pt-5">
              <div className="col-lg-3 col-12 h-100 d-flex flex-column justify-content-start align-items-start pt-lg-5 pt-2 px-lg-5 pe-5">
                <div className="fs-3">Contact Me</div>
                <div className="small opacity-75">Reach out anytime through my socials, work account, or direct line — I’m always open to connect and collaborate.</div>
              </div>
              <div className="col-lg-9 col-12 h-100">
                <div className="row h-100 text-nowrap"> 
                  <div className="col-lg-3 col-6 h-100 pt-5 ps-lg-5">
                    <div className="fs-6 mb-1">Social Medias</div>
                    <Link href="https://www.facebook.com/joshua.guiritan.3/" target="_blank" className={`text-decoration-none ${theme === "dark" ? "text-light" : "text-dark"}`}><div className="small mb-1 opacity-75">Facebook</div></Link>
                    <Link href="https://x.com/JoshuaGuiritan" target="_blank" className={`text-decoration-none ${theme === "dark" ? "text-light" : "text-dark"}`}><div className="small mb-1 opacity-75">Twitter</div></Link>
                    <Link href="https://www.instagram.com/joshua_guiritan/" target="_blank" className={`text-decoration-none ${theme === "dark" ? "text-light" : "text-dark"}`}><div className="small mb-1 opacity-75">Instagram</div></Link>
                  </div>
                  <div className="col-lg-3 col-6 h-100 pt-5 ps-lg-5">
                    <div className="fs-6 mb-1">Working Account</div>
                    <Link href="https://www.linkedin.com/in/joshua-guiritan-127227377/" target="_blank" className={`text-decoration-none ${theme === "dark" ? "text-light" : "text-dark"}`}><div className="small mb-1 opacity-75">LinkedIn</div></Link>
                    <Link href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRmVPSqRQSjclqxMcXGsqLJGkzGhtNbnVXkqLrGjGmCbGprNJVmHKvMNtzXSfnRrKWtZjCq" target="_blank" className={`text-decoration-none ${theme === "dark" ? "text-light" : "text-dark"}`}><div className="small mb-1 opacity-75">Gmail</div></Link>
                    <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftMNgCMMZVRKNnJkHjsBGNMcxpzrldsZJqclCRccGwVNKwBnFVgNQbnBVtbxxnhxrfqtL" target="_blank" className={`text-decoration-none ${theme === "dark" ? "text-light" : "text-dark"}`}><div className="small mb-1 opacity-75">School Email</div></Link>
                  </div>
                  <div className="col-lg-3 col-6 h-100 pt-5 ps-lg-5">
                    <div className="fs-6 mb-1">Developer Account</div>
                    <Link href="https://github.com/JoshuaGuiritan" target="_blank" className={`text-decoration-none ${theme === "dark" ? "text-light" : "text-dark"}`}><div className="small mb-1 opacity-75">Github</div></Link>
                  </div>
                  <div className="col-lg-3 col-6 h-100 pt-5 ps-lg-5">
                    <div className="fs-6 mb-1">Contact Number</div>
                    <Link href="tel:+639164803448" target="_blank" className={`text-decoration-none ${theme === "dark" ? "text-light" : "text-dark"}`}><div className="small mb-1 opacity-75">0916-480-3448</div></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}