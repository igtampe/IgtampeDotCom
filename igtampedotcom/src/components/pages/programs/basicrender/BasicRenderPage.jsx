import { Grid, Link } from "@mui/material";
import BigImageCard from "../../../imagecard/BigImageCard";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageGallerySection from "../../../section/ImageGallery";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../ProgramHeader";

export default function BasicRenderPage({
    Vertical = false
}) {

    return (<>
        <ProgramHeader name="BasicRender Suite" git="https://github.com/igtampe/basicrender" site="https://www.nuget.org/packages/Igtampe.BasicRender" />
        <ImageSection imgSrc="/images/programs/basicrender/hcdemo.png" Vertical={true} title='Console Graphics made Easy'>
            <p>BasicRender is a set of five different class libraries, which aim to make rendering graphics on screen a lot easier. These packages are available on NuGet.</p>
            <p>The five classes include BasicRender, BasicGraphics, BasicWindows, BasicFonts, and BasicShapes. While BasicRender gives options to render blocks, sprites,
                rows, boxes, and other small utilities, the others expand upon it to actually show primitive images, Text UIs, and geometry.</p>
        </ImageSection>
        <ImageSideSection imgSrc="/images/programs/basicrender/dfdemo.png" big Vertical={Vertical}>
            <ElevatedSection title='Primitive Images on Console'>
                BasicGraphics allows you to render actual images on the console. Using the proprietary DrawFile (DF) file, and its editor {' '}
                <Link href='https://github.com/igtampe/henja3'>Henja3</Link>, users can quickly create images to later render in any program with BasicGraphics
                (Either from a file, or as a bundled resource).
            </ElevatedSection>
        </ImageSideSection>
        <ImageSideSection imgSrc="/images/programs/basicrender/henja3.png" right big imgDesc="The BasicRender Rainbow Logo (without text) on Henja3" Vertical={Vertical}>
            <ElevatedSection title='More than 16 colors'>
                <p>Using the power of dithering, BasicGraphics can also display graphics with more than the default 16 colors. This is handled by the HiColor DrawFile format (HC). </p>

                <p>The Rainbow for the default colors of Henja3 shows around 50 colors, but technically speaking, there's a much larger amount of combinations. The HiColor spec allows
                    for 3 shades of dithering between two of the original 16 colors of the console.  Through some testing, it has been determined that about 370 colors can be displayed.</p>

                <p>In addition to allowing users to draw manually, we've created a tool (<Link href='https://github.com/igtampe/imagetobasicgraphic'>ImageToBasicGraphic</Link>)
                    to convert standard image files (IE JPEG or PNG files) to BasicGraphics. This allows users to use their prefered design tools, and then import the image to their
                    console app.</p>

                <p>This can be taken to the extreme by using a very small console font size. Below is an example.</p>
            </ElevatedSection>
        </ImageSideSection>
        <Grid container spacing={3}>
            <Grid item xs={4}><BigImageCard imgSrc="/images/programs/basicrender/color.png"> Standard Color Gradient</BigImageCard></Grid>
            <Grid item xs={4}><BigImageCard imgSrc="/images/programs/basicrender/dfcolor.png"> DrawFile (DF) Color Gradient</BigImageCard></Grid>
            <Grid item xs={4}><BigImageCard imgSrc="/images/programs/basicrender/hccolor.png"> HiColor (HC) Color Gradient</BigImageCard></Grid>
        </Grid>
        <div style={{ marginTop: '20px' }} />
        <ElevatedSection title='Additional HiColor Examples' />
        <Grid container spacing={3}>
            <Grid item xs={Vertical ? 12 : 4}><BigImageCard imgSrc="/images/programs/basicrender/hc1.jpg"></BigImageCard></Grid>
            <Grid item xs={Vertical ? 12 : 4}><BigImageCard imgSrc="/images/programs/basicrender/hc2.jpg"></BigImageCard></Grid>
            <Grid item xs={Vertical ? 12 : 4}><BigImageCard imgSrc="/images/programs/basicrender/hc3.jpg"></BigImageCard></Grid>
        </Grid>
        <div style={{ marginTop: '20px' }} />
        <ImageSideSection imgSrc="/images/programs/basicrender/hcpicker.png" big imgDesc="Henja3's custom color picker, showing sliders, graphics, labels, and buttons" Vertical={Vertical}>
            <ElevatedSection title='GUIs on  Console'>
                <p>BasicWindows allows users to build Text UIs on the console, using a variety of pre-built, or user made window elements.</p>

                <p>Essentially, BasicWindows behave like "programs" themselves, as they are "Executed".</p>

                <p>Though there is no window manager, BasicWindows can call on other Windows, and can redraw themselves when complete, giving the
                    illusion of one.  In addition, if someone wants to make one using BasicWindows i'd assume it's technically possible.</p>

                <p>Below are some other examples of windows</p>
            </ElevatedSection>
        </ImageSideSection>
        <ImageGallerySection bigImgSrc="/images/programs/basicrender/diag4.png"
            smallImages={[
                { imgSrc: '/images/programs/basicrender/diag1.png' },
                { imgSrc: '/images/programs/basicrender/diag3.png' }

            ]}
            right //ignore vertical
        />
        <ImageSideSection right imgSrc="/images/programs/basicrender/errordiag.png" big>
            <ElevatedSection title='Dynamically Sized Dialog Boxes'>
                <p>BasicWindows has been revamped with  a new FormattedText object, which allows it to accurately predict and size a text label. The result? We're now
                    able to dynamically size dialog boxes depending on their contents.</p>

                <p>Not only that, Dialogbox allows you to choose from a set of icons, and a set of button combinations, and when run, returns a result depending on which
                    button was hit.</p>

                <p>DialogBox also has a method to display an exception, along with its stacktrace. Its trimmed to fit, by removing namespace and filename path.</p>
            </ElevatedSection>
        </ImageSideSection>
        <ImageSideSection imgSrc="/images/programs/basicrender/bfonts.png" big>
            <ElevatedSection title='Dynamically Sized Dialog Boxes'>
                <p>Now with this addition to the BasicRender toolset, you can create fonts to draw big text! All of the DF files for each letter are stored in a single,
                    neatly organized <Link href='https://github.com/igtampe/dictionaryondisk'>Dictionary On Disk</Link> file, and can be drawn in any color due to the way the data is stored.</p>

                <p>Included in the package is also an editor, where anyone can create, edit, and preview a BasicFont (*.bfnt). The editor spawns a console window to render the preview.</p>
            </ElevatedSection>
        </ImageSideSection>
        <ImageSideSection imgSrc="/images/programs/basicrender/bshapes.png" big right>
            <ElevatedSection title='Geometry in BasicRender'>
                <p>The most recent addition to BasicRender is a very small package to render, and dynamically shape geometry on the console. Included are basic geometry classes for lines,
                    curves, and polygons, and functions to translate and scale them. In the future, we hope to add rotation.</p>
            </ElevatedSection>
        </ImageSideSection>
        <ImageSideSection imgSrc="/images/programs/basicrender/airportboard.png" big>
            <ElevatedSection title='Easily usable anywhere'>
                <p>BasicRender is in almost all of my console projects, just because it makes coding for the console so much easier.</p>

                <p>The example used in the Repo doesn't really do it justice. For an example of what BasicRender can do, consider seeing {' '}
                    <Link href='/programs/airportboard'>AirportBoard</Link>.</p>

                <p>AirportBoard was originally an example project for BasicRender as a VB.NET module, but has since been reworked to use the new C# class libraries. Thanks to extensive
                    backward compatability efforts, the two are functionally indistinguishable. However this leap has allowed us to make it more portable, especially by publishing it
                    to NuGet.</p>
            </ElevatedSection>
        </ImageSideSection>
    </>)

}