import Image from 'next/image'

export const metadata = {
  title: 'Active Life | Shrisharva Dayananda',
  description: 'Marathons, Trekking, and Expeditions.',
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

export default function ActivePage() {
  return (
    <>
      <section className="profile-lede">
        <div className="profile-portrait">
          <div className="w-full h-full bg-[var(--paper-2)] flex items-center justify-center text-[var(--accent)]">
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
          </div>
        </div>
        <p>
          Research and hardware prototyping require long hours at the desk, so I balance it by pushing my physical limits. I am a frequent half-marathon runner, constantly training to improve my endurance and pace on the pavement. 
        </p>
        <p>
          When I am not running, I am exploring the outdoors. I trek frequently, navigating rolling hills and scenic landscapes across Southern India—from scaling spots like Inam Dattathreya Peeta to exploring the coastal terrain. Whether it is a long-distance run or a steep ascent, the discipline required on the trail directly fuels my focus in the lab.
        </p>
      </section>

      <section className="section">
        <SectionHead num="01" title="Beyond the Desk" right="The Physical Logbook" />
        <div className="exp-grid">
          
          {/* Row 1: Marathon & Narsimha Parvatha */}
          <div className="exp-row exp-row-1-1">
            <a className="exp-big">
              <div className="exp-big-photo">
                <Image
                  src="/active/marathon.jpg"
                  alt="Half Marathon Run"
                  fill
                  sizes="(min-width: 960px) 50vw, 100vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span className="exp-stamp">Running</span>
              <span className="exp-meta">Time: 1:59 hr · Distance: 21.1 km</span>
              <h3>Half Marathon</h3>
              <p>
                Pushing endurance on the pavement. A solid sub-2-hour finish that sets the benchmark for the next race.
              </p>
            </a>
            
            <a className="exp-big">
              <div className="exp-big-photo">
                <Image
                  src="/active/narsimha.jpg"
                  alt="Narsimha Parvatha Trek"
                  fill
                  sizes="(min-width: 960px) 50vw, 100vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span className="exp-stamp">Outdoors</span>
              <span className="exp-meta">Trekking · High Altitude</span>
              <h3>Narsimha Parvatha</h3>
              <p>
                Navigating the dense trails and steep ascents of the Western Ghats to reach the highest peak in the Agumbe region.
              </p>
            </a>
          </div>

          {/* Row 2: Gadaikallu & Moodbidre Cycling */}
          <div className="exp-row exp-row-1-1">
            <a className="exp-big">
              <div className="exp-big-photo">
                <Image
                  src="/active/gadaikallu.jpg"
                  alt="Gadaikallu Trek"
                  fill
                  sizes="(min-width: 960px) 50vw, 100vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span className="exp-stamp">Outdoors</span>
              <span className="exp-meta">Trekking · Elevation</span>
              <h3>Gadaikallu</h3>
              <p>
                A demanding hike up the massive monolithic rock formation, testing stamina and focus on the steep incline.
              </p>
            </a>
            
            <a className="exp-big">
              <div className="exp-big-photo">
                <Image
                  src="/active/moodbidre.jpg"
                  alt="Cycling to Moodbidre"
                  fill
                  sizes="(min-width: 960px) 50vw, 100vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span className="exp-stamp">Cycling</span>
              <span className="exp-meta">Distance: 80 km · Endurance</span>
              <h3>Moodbidre Route</h3>
              <p>
                A long-distance cycling expedition pushing through rolling hills and coastal humidity across the 80km stretch.
              </p>
            </a>
          </div>

          {/* Row 3: Manchanbele Dam Cycling */}
          <div className="exp-row">
            <a className="exp-big">
              <div className="exp-big-photo">
                <Image
                  src="/active/manchanbele.jpg"
                  alt="Cycling to Manchanbele Dam"
                  fill
                  sizes="(min-width: 960px) 100vw, 100vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span className="exp-stamp">Cycling</span>
              <span className="exp-meta">Distance: 60 km · Scenic Route</span>
              <h3>Manchanbele Dam</h3>
              <p>
                Riding the 60km circuit out to the reservoir, balancing rigorous physical exertion with incredible natural landscapes.
              </p>
            </a>
          </div>
          
        </div>
      </section>
    </>
  )
}