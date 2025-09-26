import Image from "next/image";

export default function aboutme({targetMe}: {targetMe: React.RefObject<HTMLDivElement | null> }){
    return(
        <>
            <div className="container" ref={targetMe}>
          <div className="row">
            <div className="col-lg-7 col-12 mb-lg-3">

          <div
              className="position-relative py-2 px-3 rounded-4 fw-bold d-inline-block mt-5"
              style={{ backgroundColor: "#0056F240" }}
            >
              <i className="bi bi-person-fill display-5 text-primary"></i>
            </div>
            <div className="display-4 fw-semibold mt-2 px-1">About Me</div>
            <div className="opacity-75 fs-5 mt-2 ps-1 d-lg-block d-none">Hi! My name is Joshua Eduard L. Guiritan, a Computer Science student at Ateneo de Zamboanga University. I’m passionate about coding, with a strong focus on web development. I enjoy working on both frontend and backend using modern technologies, especially within my chosen tech stack.

I was born on August 1, 2004, and I’m based in Zamboanga City, Philippines. My friends call me Jojot, and I’d love to connect and collaborate on exciting projects.</div>
            <div className="opacity-75 fs-6 mt-2 ps-1 d-lg-none d-block">Hi! My name is Joshua Eduard L. Guiritan, a Computer Science student at Ateneo de Zamboanga University. I’m passionate about coding, with a strong focus on web development. I enjoy working on both frontend and backend using modern technologies, especially within my chosen tech stack.

I was born on August 1, 2004, and I’m based in Zamboanga City, Philippines. My friends call me Jojot, and I’d love to connect and collaborate on exciting projects.</div>
        
        </div>
        
        </div>
          </div>
          <div className="container py-5">
            <div className="row mb-5">
              <div className="col-lg-6 col-12 pe-4">
                <i className="bi bi-laptop opacity-75 fs-2 ps-1"></i>
                <div className="fs-2 fw-semibold ps-1">Favorite Workplace</div>
                <div className="fs-6 ps-1 mt-1 row mb-4">
                  <div className="col-11">
                    <span className="fw-semibold">Figaro Zamboanga City</span> will always be my favorite spot to code and get work done. The coffee is excellent, and the workspace inside is cozy and comfortable. It’s cool, quiet, and free from distractions — making it the perfect place for productivity.
                    </div>
                  </div>
                  <div className="ms-1" style={{position: "relative", width: "100%", aspectRatio: "16/9"}}>
                <Image
                  src="/Images/figaro.png"
                  fill
                  style={{objectFit: "cover"}}
                  alt="1"
                />
                </div>
                </div>
              <div className="col-lg-6 col-12 ps-lg-4 pe-lg-0 pe-4 mt-lg-0 mt-4">
                <i className="bi bi-cup-hot opacity-75 fs-2 ps-1"></i>
                <div className="fs-2 fw-semibold ps-1">Favorite Coffee</div>
                <div className="fs-6 ps-1 mt-1 row mb-4"><div className="col-11">The <span className="fw-semibold">Caramel Latte from Kape Sur</span> will always be one of my favorites. The balance of sweetness and smooth coffee flavor makes it the perfect drink to enjoy while working or relaxing. It’s comforting, delicious, and definitely a top choice whenever I need a boost.
                </div>
                </div>
                <div className="ms-1" style={{position: "relative", width: "100%", aspectRatio: "16/9"}}>
                <Image
                  src="/Images/kapesur.png"
                  fill
                  style={{objectFit: "cover"}}
                  alt="1"
                />
                </div>
              </div>
            </div>
          </div>
        </>
    )
}