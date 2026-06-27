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
          sizes="(min-width: 840px) 50vw, 50vw"
          style={{ objectFit: 'cover'}}
          priority
        />
      </div>
      <p>
        I am currently a Pre-Doctoral Research Intern at the BEES Lab at the Indian 
        Institute of Science (IISc), working with Prof. Hardik J. Pandya. My research 
        focuses heavily on advanced medical electronics: from developing 
        multidirectional high-frequency TTF and Electrical Impedance Tomography (EIT) 
        systems for tissue-level glioblastoma localization. 
      </p>
      <p>
        My work moves between hardware codesign, FPGA architecture, and 
        embedded firmware. As an intern at Pragati Automation, I implemented FPGA-based 
        digital twins for power converter monitoring and developed End-of-Line testing PCBs. 
        I have also contributed to the diagnostic ecosystem through research 
        internships at IIT Guwahati and IIT Kharagpur, where I developed deep-learning 
        accelerators for EEG classification and ultrasound hardware. I earned 
        my BTech in Electrical and Electronics Engineering, during which I served as the 
        Electronics and Firmware Lead for NITKRacing. There, I led the development of 
        vehicle control units, safety systems, and a high-performance motor 
        controller for our Formula Student vehicle.
      </p>
      <p>
        Beyond the lab, I stay highly active through trekking, cycling, marathons, field hockey, handball, and tug of war.
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