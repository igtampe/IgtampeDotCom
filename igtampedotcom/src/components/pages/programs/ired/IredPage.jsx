import ElevatedSection from "../../../section/ElevatedSection";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../ProgramHeader";

export default function IredPage({
    Vertical = false
}){

    return(<>
        <ProgramHeader name="Igtampe Redistributables (IRED)" git='https://github.com/igtampe/Igtampe.Redistributables' site="https://www.nuget.org/profiles/igtampe"/>
        <ImageSection title='All you need for an API' imgSrc="https://raw.githubusercontent.com/igtampe/Igtampe.Redistributables/master/Images/Diagram%20(Horiz).png" Vertical>
            The Igtampe Redistributables package and it's Igtampe DbContext ActionAgent Controller Reusable Architecture make it easy to hit the ground running,
            and go from zero to a fully functional API in just a few hours. Bundled with tools and common elements including User and Session Management, and even
            image uploading and hosting, IRED/IDACRA lets you focus on what you need to build for your application, and nothing else.
        </ImageSection>
        <ImageSideSection Vertical={Vertical} right big imgSrc="https://raw.githubusercontent.com/igtampe/Igtampe.Redistributables/master/Images/idacra_server.png"
        imgDesc="IDACRA Launcher">
            <ElevatedSection title="Out of the box">
                IRED/IDACRA Gets you started and organized with the following packages:
                <ul>
                    <li>Redistributables: Common objects (Like Chopo Auth and the Chopo Session Manager), and several interfaces <br/><br/></li>
                    <li>DbContexts: Interfaces for DbContexts for Actions, and the ever useful PostgresContext for Heroku or other PostgresSQL DBs<br/><br/></li>
                    <li>Actions: Agents to handle Users, Notifications, Images, and more<br/><br/></li>
                    <li>Controllers: Bases for your controllers, and reusable ones for IRED entities<br/><br/></li>
                    <li>Launch: A Launcher with simplified, easy to setup, common instructions</li>
                </ul>
            </ElevatedSection>
        </ImageSideSection>
        <ImageSideSection imgSrc="http://localhost:3000/images/programs/neco/main.png">
            <ElevatedSection title="Trusted Base">
                IRED/IDACRA is based on practices and tools that have been in development since Neco, and continue to power it, Atlas, and other minor projects.
                Their reusability and adaptability have only been accentuated with their release as NuGet packages available now!
            </ElevatedSection>
        </ImageSideSection>
        <ImageSideSection right big imgSrc="https://raw.githubusercontent.com/igtampe/Igtampe.Redistributables/master/Images/toffee_server.png">
            <ElevatedSection title="Ready for anything">
                IRED/IDACRA has been built for the future, with highly configurable, highly generic, but highly useful implementations that make it easy to add
                your code on top. Focus on your vision, we'll handle the rest.
            </ElevatedSection>
        </ImageSideSection>
    </>)
    
}