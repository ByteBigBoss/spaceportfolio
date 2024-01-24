import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
        <div className='h-full wf flex flex-col md:flex-row gap-10 px-10'>
          <ProjectCard
          src='/NextWebsite.png'
          title='Modern Next.js Portfolio'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam sapiente est! Ducimus, nam ipsa eos pariatur deleniti quod velit est tempore! Vitae, a ex dicta architecto voluptatibus consequatur alias.'
          />
           <ProjectCard
          src='/CardImage.png'
          title='Interactive Website Cards'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam sapiente est! Ducimus, nam ipsa eos pariatur deleniti quod velit est tempore! Vitae, a ex dicta architecto voluptatibus consequatur alias.'
          />
           <ProjectCard
          src='/SpaceWebsite.png'
          title='Space Themed Website'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam sapiente est! Ducimus, nam ipsa eos pariatur deleniti quod velit est tempore! Vitae, a ex dicta architecto voluptatibus consequatur alias.'
          />
        </div>
    </section>
  )
}

export default Projects