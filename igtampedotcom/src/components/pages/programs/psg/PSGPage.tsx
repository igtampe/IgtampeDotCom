import { Grid } from "@mui/material";
import BigImageCard from "../../../imagecard/BigImageCard";
import ImageSection from "../../../section/ImageSection";
import ProgramHeader from "../ProgramHeader";

export default function PSGPage() {

    var w=4;

    return (<>
        <ProgramHeader name="Patient Strip Generator (PSG)" git="https://github.com/igtampe/PatientStripGen" />
        <ImageSection verticalOverride title='A Spec Driven Project' imgSrc="/images/programs/psg/main.png">
            I've always noticed my father used an odd method to keep track of billing, and I knew I could make it a little more manageable. The project started
            as a spur of the moment decision, but after gathering the required specifications, I eagerly got to work. The result was an easy to use, and relatively
            neat program, which will hopefully help streamline my father's and possibly other doctor's billing procedures. At the very least, it's a program that
            makes it easy to track patients, and how many times a doctor has visited them, along with basic information on their visit.

            <p>I had originally wanted to do this project in Java, but exporting the patients to the actual "strips" used for billing is much easier in Excel.</p>
        </ImageSection>
        <Grid container spacing={3}>
            <Grid item xs={w}> <BigImageCard imgSrc="/images/programs/psg/about.png" /> </Grid>
            <Grid item xs={12-w}> <BigImageCard imgSrc="/images/programs/psg/export.png">Exporting patients once complete to excel for easy printing</BigImageCard> </Grid>
        </Grid>
    </>)

}