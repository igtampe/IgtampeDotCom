import { Divider, Grid, Link } from "@mui/material";
import ElevatedSection from "../../section/ElevatedSection";
import ImageSection from '../../section/ImageSection'
import Section from "../../section/Section";
import ProgramCard from "../programs/ProgramCard";
import ProgramsList from './ProgramsList.json'
import EndeavorsList from './EndeavorsList.json'
import EndeavorCard from "../endeavors/EndeavorCard";
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
            the way as I saw what I could make. In a few years, I made my own, albeit fake, OS called <Link href='/programs/batch'>Igtampe DOS</Link>. 
            It was all just a batch file that would pass on commands, but it managed to do a few things I was pretty happy with.
          </p>
          <p>
            Sure, batch wasn't the greatest of programming languages. Its restrictions, however, bred ingenuity. I'm certain that because I started with it, I
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
            learned there, what I've learned on my own with projects like <Link href='/programs/clothespin'>Clothespin</Link> and <Link href='/programs/neco'>Neco</Link>, and 
            what I've learned in my Software Engineering architecture and design courses. It is thanks to this that I have become a much more proficient engineer. It's also thanks to
            this that I learned ReactJS, completing my journey to becoming a full-stack developer.
          </p>
        </Section>
        <br/>
        <Section title='Out in the Open Ocean'>
          <p>
            It wasn't long after this internship, that I set sail. By the next summer, I completed college. It's an odd feeling to leave your homeland behind, but I decided to go forth
            to the open ocean (or well, the mainland US). Now in Delaware, I've begun my professional career as a Software Engineer. Now with more responsibilities, I assume my time of
            writing personal projects will be a lot more limited. Still, I try to make a few projects on the side. Most notably on the horizon is IRED/IDACRA, a class library containing
            a bunch of common classes, interfaces, and utilities for my ASP.NET web development.  
          </p>
          <p>
            In terms of the rest of our journey, however, we'll have to see. Maybe I'll move somewhere else in the US. Maybe I'll get a remote job and work out of a small town. Maybe I'll
            bite the bullet and move to a big city. I just hope there's always something to code, some new challenge to overcome, some new way to help people out through programming. I'm 
            excited for my future as a professional software engineer, and hope to bring my skills and my knowledge to wherever they are needed.
          </p>
        </Section>
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
            <Grid item xs={Vertical ? 12 : 3}> <PasstimeCard name={a.name} imgSrc={a.imgSrc} link={a.link}>
              {a.desc}
          </PasstimeCard> </Grid>
          ))
        }        
      </Grid>

    </>
  )
}