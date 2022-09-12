import { Grid } from "@mui/material";
import BigImageCard from "../../../imagecard/BigImageCard";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramCard from "../ProgramCard";
import ProgramHeader from "../ProgramHeader";

export default function IgtampeDosPage({
    Vertical = false
}){

    return(<>
        <ProgramHeader name="Igtampe DOS" git="https://github.com/igtampe/igtampedos"/>
        <ImageSection title="The Big First Step" Vertical imgSrc="/images/programs/igtdos/main.png">
            Igtampe DOS was my first major project, starting from 2013 and ending in 2016 with a few last minor features. Starting only from a quick
            program to run my own commands on a restricted command line, and turning into a whole mini fake OS, complete with sounds, a small package
            manager, and even internet capabilities.
        </ImageSection>

        <ImageSideSection imgSrc="/images/programs/igtdos/ntabout.png">
            <ElevatedSection title='An extended command line'>
                IgtampeDOS brings users an expanded command line, giving convenient features like themes, logging, apps, and shortcuts to common users. 
                It also includes quirky features like secrets and easter eggs to discover with the right commands.
            </ElevatedSection>
        </ImageSideSection>
        
        <ImageSideSection imgSrc="/images/programs/igtdos/nabas.png" right>
            <ElevatedSection title='Notifications and Background Apps'>
                IgtampeDOS surpasses the single threaded limitations of batch by creating a second window running the Notification and Background 
                Application System (NABAS). NABAS Receives commands and notifications by routinely monitoring files for changed contents. NABAS also handles
                automatic update checking by routinely monitoring any drives for new install disks with higher versions, and running the Internet Update 
                Checker (IUC) on startup.
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection imgSrc="/images/programs/igtdos/internet.png">
            <ElevatedSection title='Internet Enabled'>
                Through a few extension scripts using VBS, Igtampe DOS can connect to the internet to retrieve certain files. In addition to the Internet
                Update Checker (IUC), one of the final updates to Igtampe DOS was an additional broadcast system so that I could send messages to our users
            </ElevatedSection>
        </ImageSideSection>

        <ElevatedSection title="Multiple Editions"/>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <ProgramCard imgSrc="/images/programs/igtdos/network.png" name="Network (or Cloud)">
                    Designed for network shares,  NE allows multiple users at once to use the same igtdos instance
                </ProgramCard>
            </Grid>
            <Grid item xs={4}>
                <ProgramCard imgSrc="/images/programs/igtdos/ce.png" name="Compact (or Cell)">
                    Small and compact, CE runs the bare-bones Igtampe DOS features.
                </ProgramCard>
            </Grid>
            <Grid item xs={4}>
                <ProgramCard imgSrc="/images/programs/igtdos/mcom.png" name="MiniCom">
                    A closely related sister program to Igtampe DOS that gives you a command line in 51 bytes
                </ProgramCard>
            </Grid>
        </Grid>
    </>)
    
}