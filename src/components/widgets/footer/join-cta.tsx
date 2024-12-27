import { JOIN_LINK, PENGENALAN_LINK } from "@/constants/links";

export function JoinCta() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-atas-secondary px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tunggu apa lagi? Bergabunglah menjadi bagian dari ATAS Indonesia!
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Bergabung dengan ATAS Indonesia untuk akses pelatihan, networking
              dengan ribuan anggota, dan kesempatan pengembangan diri yang luas.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href={JOIN_LINK}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                target="_blank"
                rel="noreferrer noopener"
              >
                Gabung sekarang
              </a>
              <a
                href={PENGENALAN_LINK}
                className="text-sm/6 font-semibold text-white"
                target="_blank"
                rel="noreferrer noopener"
              >
                Pelajari lebih lanjut <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1729159838553/155e3da8-9e7c-4178-8c46-1869e655b7dc.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
