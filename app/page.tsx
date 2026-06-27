import Image from 'next/image'
import Link from 'next/link'
import ComicPanel from '@/components/ComicPanel'

export const metadata = {
  title: 'Shrisharva Dayananda',
  description: 'Pre-Doctoral Research Intern at BEES Lab, IISc.',
}

export default function AboutPage() {
  return (
    <div className="comic grid grid-cols-2 md:grid-cols-3 gap-2 grid-rows-[minmax(200px,1fr)_minmax(200px,1fr)_auto_auto]">
      {/* Header Panel */}    
      <ComicPanel 
        description="Sports above all......." 
        className='col-span-2 row-span-2' 
        titlePosition='bottom-right' 
        imageSrc='/hockey.png'
      />

      <ComicPanel 
        className="col-span-2 md:col-span-1 row-span-2 h-full" 
        title="About"
        imageSrc='/child.png'
        titlePosition="top-right"
        href='/about'
        description='Who am i, finding the question in place of solution'
      />

      <ComicPanel 
        className="col-span-2 md:col-span-1 row-span-2 h-full" 
        title="Projects"
        titlePosition="top-right"
        imageSrc='/pro.png'
        href='/projects'
        description='Something which i do when i get bored'
      />

      <ComicPanel 
        className="col-span-2 md:col-span-1 row-span-1 h-full" 
        title="Publication"
        imageSrc='/puub.png'
        imagePosition='0% 90%'
        titlePosition="top-right"
        href='/publications'
        description=''
      />

      <ComicPanel 
        className="col-span-2 md:col-span-1 row-span-1 h-full" 
        title="Blog"
        imageSrc='/publications.png'
        imagePosition='10% 0%'
        titlePosition="top-right"
        href='/blog'
        description=''
      />

      <ComicPanel 
        className="col-span-2 row-span-1 h-full" 
        title="Giving Back @ Beach school and ICare"
        imageSrc='/icare1.png'
        imagePosition='0% 30%'
        titlePosition="top-left"
        href='\givingback'
        description='Priviledged that i studied, nurtured and grew in JNV, hope to give back something to society'
      />
      
      {/* Education Panel */}
      <ComicPanel 
        className="col-span-2 h-full" 
        title="High Performance Athletic Behaviour" 
        titlePosition="top-right"
        description='Trekking, Running, Cycling and Swimming..... Kristian Blummenfelt my idol'
        imageSrc='/trek.png'
        href='/active'
        imagePosition='0% 0%'
      />
      
      <ComicPanel 
        className="col-span-1" 
        imageSrc="/loco1.png" 
        title="Proud LOCO" 
        titlePosition='top-right' 
        href='https://www.instagram.com/shrisharva_18/'
        description="Lucky to be part of the greatest legacy in NITK"
      />

      <ComicPanel 
        className="row-span-1" 
        imageSrc="/lp.png" 
        title="Love is Linkin Park" 
        titlePosition='top-right' 
        href='https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz?autoplay=true'
        description="Happy....listen to LP, Sad.....listen to LP, Depressed....listen to LP"
      />

      
      <ComicPanel 
        className="col-span-2 md:col-span-1 row-span-1 h-full" 
        title="Redbull F1 Racing"
        imageSrc='/redbull.png'
        imagePosition='0% 30%'
        titlePosition="top-right"
        href='https://www.formula1.com/en/teams/red-bull-racing'
        description='Max verstappen and Sebastin Vettel greatest of all time'
      />
      
      {/* Education Panel */}
      <ComicPanel 
        className="col-span-2 md:col-span-1 row-span-1 h-full" 
        description="Kaveri to Kabini" 
        titlePosition="top-right"
        title='Born in the land of Maharaja N.Krishna Raja wadiyar'
        imageSrc='/MPalace.png'
        href='https://en.wikipedia.org/wiki/Krishna_Raja_Wadiyar_IV#Contributions'
        imagePosition='0% 0%'
      />
      
    </div>
  )
}