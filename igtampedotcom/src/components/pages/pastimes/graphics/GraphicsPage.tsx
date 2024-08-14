import { Grid, Link, Typography } from "@mui/material";
import BigImageCard from "../../../imagecard/BigImageCard";
import ImageCard from "../../../imagecard/ImageCard";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../../programs/ProgramHeader";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

function Subtitle(props:{children:any}){
    return(
        <Typography variant="subtitle2" style={{textAlign:'center'}}>{props.children}</Typography>
    )
}

export default function GraphicsPage() {

    const {verticalMode : Vertical} = useWindowDimensions();

    return (<>
        <ProgramHeader name='Graphics' />
        <ImageSideSection right imgSrc="/logos/Solaris.png">
            <ElevatedSection title='Logos Galore'>
            As part of creating programs as full products, and as part of <Link href='/pastimes/ums'>The UMS's</Link> model economy
            and its corporations, we've made several logos and assets/branding relating to them. Armed only with Paint.NET and a few
            fonts, I think they've generally come out decent.  are a few examples of what we've come up with.
            </ElevatedSection>
        </ImageSideSection>

        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/ClassTrack.png'><Subtitle>ClassTrack, a Capstone curriculum tracking project</Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/Clothespin.jpg'><Subtitle>Clothespin, a clothes and closet managing app</Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/Spot.png'><Subtitle>Spot, a spot management and reservation system</Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/Landview.png'><Subtitle>Landview, a land management application for the UMS</Subtitle></ImageCard></Grid>
        </Grid>
        
        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='The Three Iterations of Neco'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/NecoV1.png'><Subtitle>Pre-Reset Logo</Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/NecoV2.jpg'><Subtitle>Current, post-reset logo</Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/NecoV3.png'><Subtitle>Alternate more professional logo</Subtitle></ImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='Class Libraries and Other Utilities'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/DOD.png'>        <Subtitle>Dictionary on Disk, a utility to store string-string dictionaries on disk.</Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/BasicRender.png'><Subtitle>The BasicRender Suite, a console graphics library    </Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/SmokeSignal.png'><Subtitle>SmokeSignal, a simple server-client framework for VB.NET   </Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/LBL.png'>        <Subtitle>Logo for the Line-By-Line File Transfer Protocol</Subtitle></ImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='ViBE and FLoW'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 6}><BigImageCard imgSrc='/logos/ViBE.png'></BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 6}><BigImageCard imgSrc='/logos/Flow.png'></BigImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='Classic UI Splash Screens'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/EzTax.png'>        <Subtitle>EzTax, a Tax and income management subprogram of ViBE </Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/Checkbook2000.png'><Subtitle>Checkbook 2000, a check and billing subprogram of ViBE</Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/ASIMoV2000.png'>   <Subtitle>Assisted Income Manager over ViBE                     </Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 3}><ImageCard imgSrc='/logos/UserTrace.png'>    <Subtitle>UserTrace, a user tree invitation visualizer          </Subtitle></ImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='UMS Banking Institutions'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/UMSNBW.png'>   <Subtitle>The UMS National Bank                        </Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/GBANK.png'>    <Subtitle>G-Bank                                       </Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/Riverside.png'><Subtitle>Riverside Bank, later replaced by new owners</Subtitle></ImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='Server Related Tools and Logos'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/UMSWEB.png'> <Subtitle>UMSWEB logo, still used to denote common authentication between services                    </Subtitle></BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/Aurora.png'> <Subtitle>The Artemis RElaunch and Outage Registry Administrator (AURORA). Monitored my server Artemis</Subtitle></BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/KnowNOW.png'><Subtitle>KnowNOW, Nexus's News Aggregator                                                            </Subtitle></BigImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='IGTNET throughout the years'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/IGTNET.png'> <Subtitle>First IGTNET logo circa 2015            </Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/IGTNET2.png'><Subtitle>Second IGTNET logo circa 2019           </Subtitle></ImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><ImageCard imgSrc='/logos/IGTNET3.png'><Subtitle>Third and current IGTNET logo circa 2022</Subtitle></ImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='UMS Corporations'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/X2.png'>       <Subtitle>X2 Corporation, a Computer and Telecom company                                </Subtitle></BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/NGB.png'>      <Subtitle>Next Generation Burger (NGB), a fast food brand                               </Subtitle></BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/Exottica.png'> <Subtitle>Exotica, a luxury make-up brand                                               </Subtitle></BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/Velvet.png'>   <Subtitle>Velvet Corporation, a conglomerate of corporations                            </Subtitle></BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/ApolloRAC.png'><Subtitle>Apollo Rent-A-Car, a budget rent-a-car corporation. Deals hotter than the sun!</Subtitle></BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/NewNando.png'> <Subtitle>Nando Communications Logo, a telecom corporation                              </Subtitle></BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/Solaris.png'>  <Subtitle>Solaris AIrlines, an airline based out of the UMS                             </Subtitle></BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/Ambrosia.png'> <Subtitle>Ambrosia Cafe, a cafe brand                                                   </Subtitle></BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 4}><BigImageCard imgSrc='/logos/Alder.png'>    <Subtitle>Alder, a healthy fast-food brand                                              </Subtitle></BigImageCard></Grid>
        </Grid>

        <div style={{marginBottom:'20px'}}/>
        <ElevatedSection title='UMS Political Campaigns'/>
        <Grid container spacing={3}>
            <Grid item xs={Vertical? 12 : 6}><BigImageCard imgSrc='/logos/EclipseTheCompetition.png'> <Subtitle>Eclipse the Competition: A simple campaign leveraging the shape of the logo I made for the Chopo nickname I have.</Subtitle></BigImageCard></Grid>
            <Grid item xs={Vertical? 12 : 6}><BigImageCard imgSrc='/logos/VoteForChopo.png'>          <Subtitle>A Vote for Chopo is: An earlier, simpler campaign with a simple message, a vote for chopo is a vote for experience, hard work, and consistency. </Subtitle></BigImageCard></Grid>
        </Grid>
    </>)

}