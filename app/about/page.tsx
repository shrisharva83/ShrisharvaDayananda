import Image from 'next/image'

export const metadata = {
  title: 'About | Shrisharva Dayananda',
  description: 'Pre Doc Research Intern at the BEES Lab, IISc.',
}

const skills: { label: string; items: string[] }[] = [
  {
    label: 'Semiconductor & Fabrication',
    items: ['Photolithography', 'CVD & Sputtering', 'Wet/Dry Etching', 'FOWLP & eSiFO', 'Thermal Compression Bonding'],
  },
  {
    label: 'Programming & RTL',
    items: ['Verilog / SystemVerilog', 'VHDL', 'C/C++', 'Embedded C', 'Python / TCL Scripting'],
  },
  {
    label: 'Engineering Tools',
    items: ['Xilinx Vivado', 'Ansys Maxwell 3D', 'CST Studio', 'CleWin', 'MATLAB & Simulink'],
  },
]

const chronology: {
  date: string
  title: string
  org: string
}[] = [
    {
      date: 'Jan 2026 - Present',
      title: 'Pre-Doctoral Research Intern',
      org: 'BEES Lab, IISc',
    },
    {
      date: 'May 2025 - Jul 2025',
      title: 'Research Intern (RF MEMS)',
      org: 'IIT Kharagpur',
    },
    {
      date: 'May 2025 - Jul 2025',
      title: 'Research Intern (FPGA Accelerators)',
      org: 'IIT Guwahati',
    },
    {
      date: 'Apr 2025 - May 2025',
      title: 'Electrical Engineering Intern',
      org: 'Pragati Automation Ltd',
    },
    {
      date: 'Oct 2024 - Apr 2025',
      title: 'Electronics & Firmware Lead',
      org: 'NITKRacing',
    },
    {
      date: 'Apr 2024 - Sep 2024',
      title: 'Research Intern',
      org: 'NITK Surathkal',
    },
    {
      date: 'Nov 2022 - Jun 2026',
      title: 'B.Tech, Electrical and Electronics',
      org: 'NITK Surathkal',
    },
        {
      date: 'Sep 2015 - Jun 2022',
      title: 'Class 10 and 12',
      org: 'JNV Bengaluru Urban',
    },
  ]
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

function Lede() {
  return (
    <section className="profile-lede">
      <div className="profile-portrait">
        <Image
          src="/about/profile.png"
          alt="Shrisharva at IISc"
          fill
          sizes="(min-width: 960px) 50vw, 100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          priority
        />
      </div>
      <p>
        I am a Pre Doc Research Intern at the BEES Lab, IISc, advised by Prof. Hardik J. Pandya. My research focuses heavily on medical technology and advanced electronic systems, ranging from multidirectional high-frequency TTF and EIT systems for glioblastoma localization to the fabrication of biocompatible piezoelectric energy harvesters. My foundation is rooted deeply in semiconductor fabrication, FPGA architecture, and hardware codesign.
      </p>
      <p>
        Whether I am working on RF MEMS planarization, developing deep-learning accelerators in Verilog, or designing 400V motor controllers for Formula Student vehicles, I bridge the gap between simulation and physical hardware. Beyond the lab, I stay highly active through half marathons, field hockey, archery, and tug of war. I am also an avid coastal photographer and traveler, exploring the shorelines of Southern India, having recently surpassed half a million photo views on Google Maps.
      </p>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHead num="01" title="Research & Industry" />
      <div className="exp-grid">
        
        {/* Row 1 — BEES Lab + NITKRacing */}
        <div className="exp-row exp-row-1-1">
          <a href="#" target="_blank" rel="noopener noreferrer" className="exp-tile">
            <span className="exp-stamp">Active</span>
            <span className="exp-meta">Pre-Doctoral Intern · IISc</span>
            <h3>The BEES Lab</h3>
            <p>
              Working under Prof. Hardik J. Pandya on EIT-kits for tissue-level glioblastoma localization, high voltage pulse generators, and fabrication of piezoelectric energy harvesters.
            </p>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="exp-tile">
            <span className="exp-stamp">Leadership</span>
            <span className="exp-meta">Firmware Lead · 2024-2025</span>
            <h3>NITKRacing</h3>
            <p>
              Led the Electronics subsystem. Designed a 400V 300A Motor Controller, CANopen protocols, and safety shutdown circuits on NXP microcontrollers.
            </p>
          </a>
        </div>

        {/* Row 2 — IIT Kharagpur + IIT Guwahati */}
        <div className="exp-row exp-row-1-1">
          <a href="#" target="_blank" rel="noopener noreferrer" className="exp-tile">
            <span className="exp-stamp">Research</span>
            <span className="exp-meta">Intern · May-Jul 2025</span>
            <h3>IIT Kharagpur</h3>
            <p>
              Advised by Prof. Anirbhan Dasgupta. Developed In-Line Wideband RF MEMS Switches integrated on PCB using BCB Planarization.
            </p>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="exp-tile">
            <span className="exp-stamp">Research</span>
            <span className="exp-meta">Intern · May-Jul 2025</span>
            <h3>IIT Guwahati</h3>
            <p>
              Advised by Prof. Anirbhan Dasgupta. Designed FPGA-based Deep-Learning Accelerators for Energy Efficient Motor Imagery EEG classification.
            </p>
          </a>
        </div>

        {/* Row 3 — Pragati Automation + NITK Research */}
        <div className="exp-row exp-row-1-1">
          <a href="#" target="_blank" rel="noopener noreferrer" className="exp-tile">
            <span className="exp-stamp">Industry</span>
            <span className="exp-meta">Intern · Apr-May 2025</span>
            <h3>Pragati Automation</h3>
            <p>
              Implemented an FPGA-Based Digital Twin for Power Converter Monitoring and engineered an End of Line (EOL) test setup PCB to streamline module testing.
            </p>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="exp-tile">
            <span className="exp-stamp">Research</span>
            <span className="exp-meta">Intern · Apr-Sep 2024</span>
            <h3>NITK Surathkal</h3>
            <p>
              Developed algorithms for Arrhythmia Detection using HRV, built flex-PCB wearable cardiac monitors, and executed FPGA-SVPWM implementations.
            </p>
          </a>
        </div>

      </div>
    </section>
  )
}

function Chronology() {
  return (
    <section className="section" id="chronology">
      <SectionHead num="02" title="Chronology" right="Selected timeline" />
      <table className="chronology-table">
        <tbody>
          {chronology.map(({ date, title, org }) => (
            <tr key={`${date}-${title}`}>
              <th scope="row">{date}</th>
              <td>
                <h3>{title}</h3>
                <p className="chronology-org">{org}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

function Tools() {
  return (
    <section className="section" id="tools">
      <SectionHead
        num="03"
        title="Tools of the Trade"
        right="Three columns"
      />
      <div className="profile-tools">
        {skills.map(({ label, items }) => (
          <div key={label} className="profile-tool">
            <span className="profile-tool-label">{label}</span>
            <ul className="profile-tool-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <>
      <Lede />
      <Experience />
      <Chronology />
      <Tools />
    </>
  )
}