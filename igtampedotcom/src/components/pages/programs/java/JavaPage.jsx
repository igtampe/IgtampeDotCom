import { Link } from "@mui/material";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../ProgramHeader";

export default function JavaPage({
    Vertical = false
}) {

    return (<>

        <ImageSideSection imgSrc="/images/programs/java/latenight.png" big Vertical={Vertical} right>
            <ProgramHeader name='A Late Night Burger' git='https://github.com/igtampe/LateNightBurger' />
            <ElevatedSection>
                LNB was the second, and probably most fun project out of those for Advanced Programming. By this point, I had already familiarized myself with
                the game engine we worked under, and made several tweaks to the base game we received.

                <p>The project revolved around a Diner Dash clone, where you build burgers to serve for the clients. Two features not in the spec that I made
                    are visible in the screenshot to the left. These are the patience bar, and the dialogue the customer says upon entering.</p>

                <p>I had a lot of fun, and felt extremely accomplished when I managed to get it to work. It may not seem like much now, but it was a bit of a
                    challenge considering my inexperience at the time. I felt extremely satisfied with having gone above and beyond the work we were asked to
                    do, creating an overall better product.</p>

                <p>Thanks to this and the work of my partner, this project was commended by our professor and TA, and we were asked to present.</p>
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection imgSrc="/images/programs/java/mirror.png" big Vertical={Vertical}>
            <ProgramHeader name='MirrorHelper and RotateHelper' git='https://github.com/igtampe/MirrorHelper' />
            <ElevatedSection>
                These two utilities were the first two programs I coded in Java, just a few weeks into Advanced Programming. They are designed to help with the
                cloning of structures in Minecraft. The /clone command provided doesn't include options to mirror or rotate objects. However, with a small bit
                of computation, these two programs can prepare a set of commands that can accomplish these tasks

                <p>I considered it a bit of a challenge to design the swing interfaces and write the code. However, using my previous experience in VB.NET,
                    I was able to complete the two programs. These two utilities have since become indispensable in the construction of the <Link href='/passtimes/ums'>UMS</Link>.</p>
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection imgSrc="/images/programs/java/data.png" big Vertical={Vertical} right>
            <ProgramHeader name='Data Structures Projects' />
            <ElevatedSection>
                The Projects I took care of in Data Structures weren't graphical, so I can't really do them justice here. However, I can say they not only helped
                me grasp the structures, but also refine my coding skills in general, especially in Java. The projects are now all on my GitHub as I made the repos
                myself. These include:

                <ul>
                    <li><Link href='https://github.com/igtampe/VoteProcessor'>VoteProcessor</Link></li>
                    <li><Link href='https://github.com/igtampe/FreqFinder'>FreqFinder</Link></li>
                    <li><Link href='https://github.com/igtampe/HuffNPuff'>HuffNPuff</Link></li>
                </ul>


                <p>All of them have the specs document converted to a markdown file as their readme. </p>
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection imgSrc="/images/programs/java/magtape.png" big Vertical={Vertical}>
            <ProgramHeader name='MagTape' git='https://github.com/igtampe/MagTape' />
            <ElevatedSection>
                MagTape is a slightly modified Doubly Linked List, which keeps track of its current entry. It was made for fun, and makes little "sounds" on the console 
                as it moves along the tape. Users can "snip" in or out data, and move to any position on the tape, including fast forwarding and rewinding the tape to 
                either end instantly (Thanks to a dummy head and tail). 

                <p>MagTape is also smart enough to know if it's faster to reach one end of the tape and then move to the desired location rather than going directly. 
                    IE: If you're on position 2 of a tape of length 20 and want to get to position 19, MagTape will Fast Forward to End and then Move Back once, 
                    rather than moving forward 17 times.</p>
                
                <p>I'd like to think that MagTape is a good intermediate between an ArrayList and a LinkedList. It can add/remove values as effectively as a LinkedList, 
                    and, although not instant, has improved random access times. Not to mention, adding values in nearby positions is faster than either.</p>
            </ElevatedSection>
        </ImageSideSection>
    </>)

}