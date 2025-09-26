import Image from "next/image";

export default function techstack({targetTechstack}: {targetTechstack: React.RefObject<HTMLDivElement | null>}){
    return(
        <div className="container py-3 d-flex justify-content-center align-items-center flex-column mb-5" ref={targetTechstack}>
          <div className="fs-3 fw-semibold">My Skills</div>
          <div className="opacity-75 mt-1 text-lg-start text-center">
            Skilled in building and delivering modern, efficient, and scalable web applications using a diverse set of technologies
          </div>
          <div className="d-lg-flex d-none gap-3 justify-content-center align-items-center mt-4">
            <div className="d-flex flex-column align-items-center">
              <Image src="/Images/typescript.png" width={65} height={65} alt="typescript"/>
              <div className="small opacity-75 mt-2 text-center">Typescript</div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <Image src="/Images/nextjs-icon.png" width={65} height={65} alt="nextjs"/>
              <div className="small opacity-75 mt-2 text-center">NextJS</div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <Image src="/Images/supabase.png" width={65} height={65} alt="nextjs"/>
              <div className="small opacity-75 mt-2 text-center">Supabase</div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <Image src="/Images/postgresql.png" width={65} height={65} alt="nextjs"/>
              <div className="small opacity-75 mt-2 text-center">PostgreSQL</div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <Image src="/Images/vercel.png" width={65} height={65} alt="nextjs"/>
              <div className="small opacity-75 mt-2 text-center">Vercel</div>
            </div>
          </div>
          <div className="d-lg-none d-flex gap-3 justify-content-center align-items-center mt-4">
            <div className="d-flex flex-column align-items-center">
              <Image src="/Images/typescript.png" width={50} height={50} alt="typescript"/>
              <div className="small opacity-75 mt-2 text-center">Typescript</div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <Image src="/Images/nextjs-icon.png" width={50} height={50} alt="nextjs"/>
              <div className="small opacity-75 mt-2 text-center">NextJS</div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <Image src="/Images/supabase.png" width={50} height={50} alt="nextjs"/>
              <div className="small opacity-75 mt-2 text-center">Supabase</div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <Image src="/Images/postgresql.png" width={50} height={50} alt="nextjs"/>
              <div className="small opacity-75 mt-2 text-center">PostgreSQL</div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <Image src="/Images/vercel.png" width={50} height={50} alt="nextjs"/>
              <div className="small opacity-75 mt-2 text-center">Vercel</div>
            </div>
          </div>
        </div>
    )
}