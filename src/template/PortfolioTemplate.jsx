import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioTemplate = ({image, github, demo}) => {
  return (
    <main>
        <section className='flex flex-col gap-4'>
            <span className='project-image'>
                <img src={image} alt="project" />
            </span>
            <article className='flex gap-4 items-center'>
                <Link to={github} className='btn btn-dark' target='_blank' rel='noopener noreferrer'>Github</Link>
                <Link to={demo} className='btn btn-portfolio' target='_blank' rel='noopener noreferrer'>Live Demo</Link>
            </article>
        </section>
    </main>
  )
}

export default PortfolioTemplate