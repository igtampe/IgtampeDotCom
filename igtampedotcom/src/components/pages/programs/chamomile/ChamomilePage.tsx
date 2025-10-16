import { Grid } from "@mui/material";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import Section from "../../../section/Section";
import ProgramHeader from "../ProgramHeader";
import ImageCard from "../../../imagecard/ImageCard";

export default function ChamomilePage() {

    const { verticalMode } = useWindowDimensions();
    const addtlFeaturesGridXs = verticalMode ? 6 : 4

    return (<>
        <ProgramHeader name="Chamomile" git="https://github.com/GooeyAvocado/Chamomile" site="https://hub.docker.com/r/gooeyavocado/chamomile" />
        <ImageSection imgSrc="/images/programs/chamomile/demo.png" title='A1111 Made Easy' objectPosition="top" right>
            Automatic1111 is a mess of text boxes, dials, sliders and dropdowns. Chamomile abstracts and hides the complexities,
            allowing beginners to focus on bringing their visions to life.
        </ImageSection>
        <ImageSideSection imgSrc="/images/programs/chamomile/brewingsampler.png" big >
            <ElevatedSection title='Easily Organized Generation Options'>
                <p>
                    Chamomile tucks away additional more advanced options under a collapsible accordion. When expanded, we show
                    more relevant options in a succinct and sensible order, including negative prompt, size (with selectable presets),
                    sampler (with user friendly descriptions), steps, CFG scale, seed (with randomizer), and amount of images to generate.
                </p>
                <p>
                    All of these options have defaults configurable in the app's settings page, meaning the user may not even have to expand
                    these options at all while generating, allowing them to focus on their prompt.
                </p>
            </ElevatedSection>
        </ImageSideSection>
        <ImageSideSection imgSrc="/images/programs/chamomile/gallery.png" big right >
            <ElevatedSection title='Integrated Image Gallery'>
                <p>
                    Chamomile also has an integrated gallery to make it easy to view and search for previously generated images. Each image is
                    saved to a Postgres DB, storing prompt, base prompt (before removing comments, and infilling wildcards/overrides), negative
                    prompt, checkpoint and LoRAs used, notes, and image source.
                </p>
                <p>
                    All of these fields are searchable. We've worked to especially make searching for prompt text as easy as possible, adding
                    Full Text Search support on DB with TsQueries. Additionally we hash prompts on a separate columns to find similar images by
                    prompt.
                </p>
            </ElevatedSection>
        </ImageSideSection>
        <ElevatedSection title="Additional features" />
        <Grid container spacing={3} style={{ marginBottom: "20px" }}>
            <Grid item xs={addtlFeaturesGridXs}><ImageCard imgSrc="/images/programs/chamomile/collections.png" objectPosition="top">
                <Section title="Collections" headerSize="1em">
                    <div style={{ fontSize: ".8em" }}>Images can be added manually, or automatically by saved TsQuery to collections. These can also be hidden from the home page</div>
                </Section>
            </ImageCard></Grid>
            <Grid item xs={addtlFeaturesGridXs}><ImageCard imgSrc="/images/programs/chamomile/grid.png" objectPosition="top">
                <Section title="Grids" headerSize="1em">
                    <div style={{ fontSize: ".8em" }}>Users can create X/Y grids based on a variety of criteria for each cell, allowing them to test subtle changes in their prompts</div>
                </Section>
            </ImageCard></Grid>
            <Grid item xs={addtlFeaturesGridXs}><ImageCard imgSrc="/images/programs/chamomile/autocomplete.png" objectPosition="top">
                <Section title="Auto-complete" headerSize="1em">
                    <div style={{ fontSize: ".8em" }}>The prompt box is more than just a textbox. Chamomile monitors the input to autocomplete LoRAs, dynamic prompt variables, and (if available) wildcards.</div>
                </Section>
            </ImageCard></Grid>
            <Grid item xs={addtlFeaturesGridXs}><ImageCard imgSrc="/images/programs/chamomile/queue.png" objectPosition="top">
                <Section title="Queue management" headerSize="1em">
                    <div style={{ fontSize: ".8em" }}>One of A1111's biggest pain points is the lack of a manageable queue. Chamomile allows you to view what's on queue, and cancel orders you've changed your mind on.</div>
                </Section>
            </ImageCard></Grid>
            <Grid item xs={addtlFeaturesGridXs}><ImageCard imgSrc="/images/programs/chamomile/savedprompt.png" objectPosition="top">
                <Section title="Saved prompts" headerSize="1em">
                    <div style={{ fontSize: ".8em" }}>
                        Chamomile allows users to save "recipes" for quick and easy re-ordering. This works especially well with wildcards, overrides, or switching checkpoints.
                    </div>
                </Section>
            </ImageCard></Grid>
            <Grid item xs={addtlFeaturesGridXs}><ImageCard imgSrc="/images/programs/chamomile/stats.png" objectPosition="top">
                <Section title="Statistics" headerSize="1em">
                    <div style={{ fontSize: ".8em" }}>Chamomile allows you to explore your generation habits, including checkpoint, LoRA, and keyword usage, prompt source, and more general overall statistics</div>
                </Section>
            </ImageCard></Grid>

        </Grid>

        <ImageSideSection imgSrc="/images/programs/chamomile/help.png" objectPosition="top">
            <ElevatedSection title='Extensive Documentation'>
                <p>
                    None of this capability is of any use to our users if they do not understand it. While we've done our
                    best to make Chamomile as easy and intuitive as possible, we've also included rich documentation within
                    the app to help users find their way.
                </p>
            </ElevatedSection>
        </ImageSideSection>

    </>)
}