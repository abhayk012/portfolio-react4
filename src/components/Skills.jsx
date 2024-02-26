import uniqid from 'uniqid'
import './Skills.css'

const Skills = () => {
  
  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'> 
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <i class="fa-brands fa-html5"></i> HTML5
          </li>
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <i class="fa-brands fa-css3"></i> CSS
          </li>
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <i class="fa-brands fa-react"></i> React
          </li>
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <i class="fa-brands fa-js"></i> JavaScript
          </li>
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <i class="fa-brands fa-node"></i> Node JS
          </li>
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <i class="fa-brands fa-angular"></i> Angular
          </li>
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <i class="fa-brands fa-bootstrap"></i> BootStrap
          </li>
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <i class="fa-solid fa-database"></i> Mongo DB
          </li>
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <span style={{fontWeight:"lighter",fontSize:"10px"}}>Express</span><i class="fa-brands fa-js" style={{color:"yellow"}}></i> Express JS
          </li>
        
      </ul>
    </section>
  )
}

export default Skills