import { Grid, Link } from "@mui/material";
import BigImageCard from "../../../imagecard/BigImageCard";
import ImageCard from "../../../imagecard/ImageCard";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../../programs/ProgramHeader";

export default function GraphicsPage({
    Vertical = false
}) {

    return (<>
        <ProgramHeader name='Graphics' />
        <ImageSideSection right imgSrc="/logos/solaris.png">
            <ElevatedSection title='Logos Galore'>
                Simple and effective
            </ElevatedSection>
        </ImageSideSection>
        <ElevatedSection>
            As part of creating programs as full products, and as part of <Link href='/passtimes/ums'>The UMS's</Link> model economy
            and its corporations, we've made several logos and assets/branding relating to them. Armed only with Paint.NET and a few
            onts, I think they've generally come out decent.  are a few examples of what we've come up with.
        </ElevatedSection>

        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/ClassTrack.png'>ClassTrack, a Capstone curriculum tracking project</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/Clothespin.jpg'>Clothespin, a clothes and closset managing app</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/Spot.png'>Spot, a spot management and reservation system</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/Landview.png'>Landview, a land management application for the UMS</ImageCard></Grid>
        </Grid>
        
        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='The Three Iterations of Neco'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/NecoV1.png'>Pre-Reset Logo</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/NecoV2.jpg'>Current, post-reset logo</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/NecoV3.png'>Alternate more professional logo</ImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='Class Libraries and Other Utilities'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/DOD.png'>ClassTrack, a Capstone curriculum tracking project</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/BasicRender.png'>Clothespin, a clothes and closset managing app</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/SmokeSignal.png'>Spot, a spot management and reservation system</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/LBL.png'>Landview, a land management application for the UMS</ImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='ViBE and FLoW'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 6}><BigImageCard imgSrc='/logos/ViBE.png'></BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 6}><BigImageCard imgSrc='/logos/FLoW.png'></BigImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='Classic UI Splash Screens'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/EzTax.png'>EzTax, a Tax and income management subprogram of ViBE</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/Checkbook2000.png'>Checkbook 2000, a check and billing subprogram of ViBE</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/Asimov2000.png'>Assisted Income Manager over ViBE</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/UserTrace.png'>UserTrace, a user tree invitation visualizer</ImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='UMS Banking Institutions'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/UMSNBW.png'>The UMS National Bank</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/GBANK.png'>G-Bank</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/Riverside.png'>Riverside Bank, latger replaced by new owners</ImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='Server Related Tools and Logos'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/UMSWEB.png'>UMSWEB logo, still used to denote common authentication between services</BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/AURORA.png'>The Artemis RElaunch and Outage Registry Administrator (AURORA). Moniored my server Artemis</BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/KnowNow.png'>KnowNOW, Nexus's News Aggregator</BigImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='IGTNET throughout the years'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/IGTNET.png'>First IGTNET logo circa 2015</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/IGTNET2.png'>Second IGTNET logo circa 2019</ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/IGTNET3.png'>Third and current IGTNET logo circa 2022</ImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='UMS Corporations'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/x2.png'>X2 Corporation, a Comptuer and Telecom company</BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/ngb.png'>Next Generation Burger (NGB), a fast food brand</BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/Exottica.png'>Exotica, a luxury make-up brand</BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/Velvet.png'>Velvet Corporation, a conglomerate of corporations</BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/ApolloRAC.png'>Apollo Rent-A-Car, a budget rent-a-car corporation. Deals hotter than the sun!</BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/NewNando.png'>Nando Communications Logo, a telecom corporation</BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/Solaris.png'>Solaris AIrlines, an airline based out of the UMS</BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/Ambrosia.png'>Ambrosia Cafe, a cafe brand</BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/Alder.png'>Alder, a healthy fast-food brand</BigImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='UMS Political Campaigns'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 6}><BigImageCard imgSrc='/logos/EclipseTheCompetition.png'> Eclipse the Competition: A simple campaign leveraging the shape of the logo I made for the Chopo nickname I have.</BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 6}><BigImageCard imgSrc='/logos/VoteForChopo.png'> A Vote for Chopo is: An earlier, simpler campaign with a simple message, a vote for chopo is a vote for experience, hard work, and consistency. </BigImageCard></Grid>
        </Grid>
    </>)

}