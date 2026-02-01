export default function CertificationBar() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-slate-600">
          Our Tradespeople Hold Certifications From:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {/* Gas Safe */}
          <div className="grayscale transition hover:grayscale-0">
            <div className="flex h-12 items-center">
              <div className="rounded bg-white px-4 py-2 shadow-sm">
                <span className="font-bold text-[#003da5]" style={{ fontSize: '14px' }}>
                  GAS SAFE
                </span>
              </div>
            </div>
          </div>

          {/* NICEIC */}
          <div className="grayscale transition hover:grayscale-0">
            <div className="flex h-12 items-center">
              <div className="rounded bg-white px-4 py-2 shadow-sm">
                <span className="font-bold text-[#e30613]" style={{ fontSize: '14px' }}>
                  NICEIC
                </span>
              </div>
            </div>
          </div>

          {/* TrustMark */}
          <div className="grayscale transition hover:grayscale-0">
            <div className="flex h-12 items-center">
              <div className="rounded bg-white px-4 py-2 shadow-sm">
                <span className="font-bold text-[#00a0df]" style={{ fontSize: '14px' }}>
                  TRUSTMARK
                </span>
              </div>
            </div>
          </div>

          {/* Which? */}
          <div className="grayscale transition hover:grayscale-0">
            <div className="flex h-12 items-center">
              <div className="rounded bg-white px-4 py-2 shadow-sm">
                <span className="font-bold text-red-600" style={{ fontSize: '14px' }}>
                  WHICH?
                </span>
              </div>
            </div>
          </div>

          {/* FMB */}
          <div className="grayscale transition hover:grayscale-0">
            <div className="flex h-12 items-center">
              <div className="rounded bg-white px-4 py-2 shadow-sm">
                <span className="font-bold text-navy-900" style={{ fontSize: '14px' }}>
                  FMB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
