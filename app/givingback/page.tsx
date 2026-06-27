import Image from 'next/image'

export const metadata = {
  title: 'Giving Back | Shrisharva Dayananda',
  description: 'Community involvement and iCare.',
}

function SectionHead({
  num,
  title,
  right,
}: {
  num: string
  title: string
  right?: string
}) {
  return (
    <div className="section-head">
      <span className="num">§ {num}</span>
      <h2>{title}</h2>
      {right && <span className="right">{right}</span>}
    </div>
  )
}

export default function GivingBackPage() {
  return (
    <>
      <section className="profile-lede">
        <div className="profile-portrait">
          {/* Add a photo of your iCare community work here */}
          <div className="w-full h-full bg-[var(--paper-2)] flex items-center justify-center text-[var(--accent)]">
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </div>
        </div>
        <p>
          Technology and engineering are only as valuable as the positive impact they create for others. I believe strongly in utilizing my time and resources to uplift the community around me.
        </p>
        <p>
          Through my involvement with iCare, I actively participate in initiatives designed to give back. [You can add 1-2 more sentences here explaining exactly what iCare does and your specific role or favorite memory working with them].
        </p>
      </section>

      <section className="section">
        <SectionHead num="01" title="iCare Initiatives" />
        <div className="exp-grid">
          <div className="exp-row">
            <div className="exp-tile">
              <span className="exp-stamp">Community</span>
              <span className="exp-meta">iCare</span>
              <h3>Volunteering & Outreach</h3>
              <p>
                Dedicated to making a tangible difference through organized community support, outreach programs, and active volunteering efforts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}