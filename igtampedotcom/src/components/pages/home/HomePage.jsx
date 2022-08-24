import { Divider, Grid, Link } from "@mui/material";
import ElevatedSection from "../../section/ElevatedSection";
import ImageSection from '../../section/ImageSection'
import Section from "../../section/Section";
import ProgramCard from "../programs/ProgramCard";
import ProgramsList from './ProgramsList.json'
import EndeavorsList from './EndeavorsList.json'
import EndeavorCard from "../endeavors/EndevaorCard";
import PasstimesList from './PasstimesList.json'
import PasstimeCard from "../passtimes/PasstimeCard";

export default function Home({
  Vertical = false
}) {

  return (
    <>
      <ElevatedSection>
        Hello there! My name is Ignacio Tampe, and this is my website. I'm a software engineer who's made a few things
        maybe others can find use in. Perhaps you can use it as well, or let me help you make something even greater.
      </ElevatedSection>
      <Divider style={{ marginTop: '20px', marginBottom: '20px' }} />
      <ImageSection imgSrc="/images/20220623_123142.jpg" title='Myself' Vertical={Vertical} >
        <p>A bit about the person who's website you've stumbled into.</p>
      </ImageSection>
      <ElevatedSection>
        <Section title='A Curious Kid'>
          <p>
            Since I was a little kid, I always liked looking behind the scenes, seeing what made things tick. I started tinkering with batch files, learning along
            the way as I saw what I could make. In a few years, I made my own, albeit fake, OS called Igtampe DOS. It was all just a batch file that would pass on
            commands, but it managed to do a few things I was pretty happy with.
          </p>
          <p>
            Sure, batch wasn't the greatest of programming languages. Its restrictions, however, breeded ingenuity. I'm certain that because I started with it, I
            developed a keen ability to problem-solve, using all the tools at my disposal.
          </p>
          <p>
            This, and several other projects formed the base for larger things to come.
          </p>
        </Section>
        <br />
        <Section title='Wind in the Sails'>
          <p>
            I originally started my college career as a Computer Engineer, though when I saw my proficiency in a VBA class, I knew I had to change. I translated the skills 
            from that class to VB.NET, to make stand-alone applications. It was an easy transition, and it greatly broadened my horizons, reigniting my passion for programming. 
            This is also when I started my next project, the <Link href='/programs/vibe'>Visual Basic Economy (ViBE)</Link>.
          </p>
          <p>
            Afterwards, came Advanced Programming, and learning Java. It was an easy hop, or at least one less complex than the switch from Batch to VBA. It's comforting, and 
            I hope it's a good indication of my flexibility across programming languages.  Java allowed me to make a few small personal projects and class projects, but it was 
            really a stepping stone that brought me to C#. 
          </p>
          <p>
            After learning and making some small projects in it, my big step into C# was an internship with JP Morgan Chase. Since then, I've worked diligently, combining what I 
            learned there, what I've learned on my own, building projects like <Link href='/programs/clothespin'>Clothespin</Link> and <Link href='/programs/neco'>Neco</Link>, and 
            what I've learned on my Software Engineering courses in terms of architecture and design, to become a much more proficient engineer. It was through this that I learned 
            ReactJS, completing my journey to becoming a full-stack developer.
          </p>
        </Section>
        <br/>
        <Section title='Out in the Open Ocean'>
          <p>
          (Todo write a blurb about how we started our journey off of college)
          </p>
        </Section>
        <br/>
        <Section title='Seeking the Next Challenge'>
          <p>
            There's always something to code, in my opinion. I love making small little programs just to practice my skills, or to find out how I could make things work. My projects may 
            be small in the grand scheme of things, but they fuel my desire to learn, and to grow as a programmer. In short, I love to challenge myself with new tasks. I'd love to be a 
            part of something much greater. Perhaps I'll make another jump to another programming language, perhaps I'll continue to code great things in what I'm used to. Regardless, 
            I'm excited for my future as a software engineer, and hope to bring my skills and my knowledge to wherever they are needed.
          </p>
        </Section>
      </ElevatedSection>
      <ElevatedSection>
        <div style={{textAlign:'right'}}>
          <p>
            Find out more of my professional life on my resume, <br/>available at my <Link href="linkedin.igtampe.com">LinkedIn</Link>
          </p>
        </div>
      </ElevatedSection>
      <Divider style={{ marginTop: '20px', marginBottom: '20px' }} />
      <ImageSection right Vertical={Vertical} imgSrc="/images/CodeScreenshot.png" title='My Code'>
        <p>I've coded quite a few things. </p>
      </ImageSection>
      <Grid container spacing={3} style={{marginTop:'5px'}}>
        {
          ProgramsList.map(a=>(
            <Grid item xs={Vertical ? 12 : 6}> <ProgramCard name={a.name} git={a.git} imgSrc={a.imgSrc} site={a.site} link={a.link} >
              {a.desc}
          </ProgramCard> </Grid>
          ))
        }        
      </Grid>
      <Divider style={{ marginTop: '20px', marginBottom: '20px' }} />
      <ImageSection Vertical={Vertical} imgSrc="/images/OMTATDonation.jpg" title='My Past'>
        <p>I've done my part in a few clubs and associations. </p>
      </ImageSection>
      <Grid container spacing={3} style={{marginTop:'5px'}}>
        {
          EndeavorsList.map(a=>(
            <Grid item xs={Vertical ? 12 : 6}> <EndeavorCard name={a.name} imgSrc={a.imgSrc} link={a.link}>
              {a.desc}
          </EndeavorCard> </Grid>
          ))
        }        
      </Grid>
      <Divider style={{ marginTop: '20px', marginBottom: '20px' }} />
      <ImageSection Vertical={Vertical} imgSrc="/images/umsmap.png" title='My Free Time'>
        <p>I keep myself busy in my spare time </p>
      </ImageSection>
      <Grid container spacing={3} style={{marginTop:'5px'}}>
        {
          PasstimesList.map(a=>(
            <Grid item xs={Vertical ? 12 : 2.4}> <PasstimeCard name={a.name} imgSrc={a.imgSrc} link={a.link}>
              {a.desc}
          </PasstimeCard> </Grid>
          ))
        }        
      </Grid>

    </>
  )
}