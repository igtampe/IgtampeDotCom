import ElevatedSection from "../../section/ElevatedSection";
import ImageSection from "../../section/ImageSection";
import ProgramHeader from "../programs/ProgramHeader";

export default function AvocadoPage() {

  return (
    <>
        <ProgramHeader name="An Avocado in a Guacamole World"/>
        <ImageSection title="What does it mean?" imgSrc="/images/guacamole.gif" >
             What does it truly mean to be an avocado in a guacamole world?
        </ImageSection>
        <ElevatedSection>
             Nobody knows. I made this quote up. Maybe it means to be resilient in the face of danger. Maybe it means you are yet to be squashed by the world
             around you. Maybe you believe yourself to be an avocado, while you're only really already guacamole. Maybe we're all guacamole in a guacamole world,
             and I am no different. Regardless, perhaps its an inspirational quote I actually managed to come up with. Let's see if this reaches the google result for
             "Avocado in a Guacamole World". We shall see.    
        </ElevatedSection>
   </>
  )
}