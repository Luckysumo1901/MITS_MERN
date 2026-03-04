import Parent from "../components/Parent";


const About = () => {
    const element = <div> Hello World!!</div>
  return (
    <div>
      <p>{element}</p>
      <Parent/>
    </div>
  )
}

export default About
