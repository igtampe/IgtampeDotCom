import { Divider, Grid, Link } from "@mui/material";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import Section from "../../../section/Section";
import ProgramCard from "../ProgramCard";
import ProgramHeader from "../ProgramHeader";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

export default function VibePage() {

    const {verticalMode : Vertical} = useWindowDimensions();

    return (<>
        <ProgramHeader name="Visual Basic Economy (ViBE)" git="https://github.com/igtampe/ViBE" />
        <ImageSection title="A Simple Virtual Economy" imgSrc="/images/programs/vibe/main.png" />
        <ElevatedSection>
            ViBE was designed with one thing in mind: Simplicity. Before this, users of the UMS's virtual economy had to connect
            to an <Link href='/programs/umsweb'>SSH Terminal</Link> to handle their transactions. That simply didn't cut it. As soon as I learned about VBA, I committed
            towards building a simpler replacement. The result was ViBE, a simple, but intuitive Virtual Economy program, that ran
            the economy of the <Link href='/pastimes/ums'>UMS</Link>.
        </ElevatedSection>
        <ElevatedSection>
            <ImageSection imgSrc="/images/programs/vibe/everything.png"/>
            <div style={{margin:'10px'}}></div>
            <Section title="Constantly Evolving">
                ViBE and its services were constantly evolving. I was always excited to see what else I can add to make the user 
                experience better. Near the end of its lifespan, Income reporting via EzTax (A subprogram of ViBE), received 
                the ability to upload files to the ViBE Server. This is accomplished using <Link href='https://github.com/igtampe/lbl-sender'>LBL</Link>{' '}
                (or Line by Line), a tiny file transfer protocol I made that fits neatly within the <Link href='/programs/smokesignal'>SmokeSignal</Link>{' '}
                framework. Speaking of which...
            </Section>
        </ElevatedSection>
        <ImageSection title='Powered by SmokeSignal' right imgSrc="/images/programs/vibe/server.png">
            Extensible and reliable
        </ImageSection>
        <ElevatedSection>
            The ViBE server suffered from a slight extensibility problem. Adding new commands to the server was a pain, until I reworked the server, and spun it 
            off into SmokeSignal. Now, thanks to this rework, the ViBE server is agile, and able to add new modules quickly and effortlessly. We integrated the 
            Income Management program (IMEX) into the ViBE server easily. Thanks to this, I no longer need to run IMEX via SSH, and instead can just send a 
            message to the server directly.
        </ElevatedSection>
        <ImageSection title='Other Programs' imgSrc="/images/programs/vibe/bwbg.png">
            ViBE's server also responds to a few other programs, including:
        </ImageSection>
        <Grid container spacing={3} style={{marginTop:'5px'}}>
            <Grid item xs={Vertical ? 12 : 4}> <ProgramCard name="FLoW" imgSrc="/images/programs/vibe/flow.png" git='https://github.com/igtampe/flow'>
            Fast Low-level Web access for ViBE (FLoW) is a web port of ViBE. It frankly wasn't ever that great, but it did the job. It's now offline.
          </ProgramCard> </Grid>
            <Grid item xs={Vertical ? 12 : 4}> <ProgramCard name="AsIMOV" imgSrc="/images/programs/vibe/asimov.png" git='https://github.com/igtampe/asimov'>
            Assisted Income Manager over ViBE (AsIMOV) is a program designed to manage the economy, and its users, along with generating a report on the state of the modeled economy.
          </ProgramCard> </Grid>
            <Grid item xs={Vertical ? 12 : 4}> <ProgramCard name="Bamco" imgSrc="/images/programs/vibe/bamco.png">
            Bank Management Console (BaMCo) helps bank owners see and manage their interest rates for their clients, as well as pay it out.
          </ProgramCard> </Grid>
      </Grid>
      <Divider style={{marginTop:'20px', marginBottom:'20px'}}/>
      <ElevatedSection title='End of the Road'>
        ViBE was a fantastic journey from start to finish, but as the model nation seems to be drawing to a close, so too is its development. Though a more secure version was planned, 
        it's not really necessary for the purposes of this simulation. Perhaps in the future I will finish the secure re-write (Dubbed SecuViBE), which will use SmokeSignal V7's
        new authenticated commands, but for now, the project is mostly complete.
      </ElevatedSection>
    </>)

}