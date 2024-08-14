import { Link } from "@mui/material";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageGallerySection from "../../../section/ImageGallery";
import ImageSection from "../../../section/ImageSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../ProgramHeader";

export default function NecoPage() {

    return (<>
        <ProgramHeader name=".NET Economy (Neco)" git="https://github.com/igtampe/neco" site="https://neco.igtampe.com" />
        <ImageSection imgSrc="/images/programs/neco/main.png" title='A Complete Overhaul'>
            Neco completely overhauls ViBE's old systems, and brings a new, yet still simple model for the economy of the UMS, or any other
            model nation. Now using C#, an ASP.NET Web API, and an easily accessible ReactJS Frontend, Neco brings a completely redone
            experience with new and easier features.
        </ImageSection>
        <ImageSideSection imgSrc="/images/programs/neco/db.png" >
            <ElevatedSection title="Breaking from TEBECON">
                Neco completely breaks with the <Link href='/programs/umsweb'>Tebecon</Link> standard. Instead of storing data on separate files and folders, 
                Neco stores all data in a PostgreSQL Database. This brings drastic flexibility improvements in what we store, what services we can use to host it,
                and how we access it. It also allows us to do more with the data, like getting statistics, and more dynamic linking between bits of information.
            </ElevatedSection>
        </ImageSideSection>
        <ImageSideSection imgSrc="/images/programs/neco/account.png" right >
            <ElevatedSection title="New Features">
                Neco brings several new features compared to ViBE's set. Most notably, however, is allowing multi-owner accounts. Previously in ViBE, users
                used the KeyRing to switch between corporate and personal accounts, along with any other corporations they shared with others with shared logins.
                Neco does away with this, by moving the income type distinction to the account level, and allowing multiple ownership. Users can now have personal
                accounts, corporate accounts, and shared corporate accounts all accessed with a single user login.
            </ElevatedSection>
        </ImageSideSection>
        <ElevatedSection title='Statistics' />
        <ImageGallerySection
            bigImgSrc="/images/programs/neco/stat4.png"
            smallImages={[
                { imgSrc: '/images/programs/neco/stat1.png' },
                { imgSrc: '/images/programs/neco/stat2.png' },
                { imgSrc: '/images/programs/neco/stat3.png' }

            ]}
            right //ignore vertical
        />
        <ElevatedSection>
            Neco provides powerful statistics features for users to gain insights on wealth, transactions, income, and income items across the Neco system. This not only
            makes it easier for users to see such data, but it also integrates AsIMOV's report generating features. It also drastically speeds up the process, allowing for
            real-time analysis, compared to the several minutes it takes AsIMOV to compile and then prepare the report, which doesn't even contain graphs.
        </ElevatedSection>
        <ImageSection imgSrc="/images/programs/neco/admin.png" verticalOverride title='Ready for the Future'> 
            {/* Force vertical anyway */}
            Neco provides powerful administration tools to allow for easy integration of new states in the UMS, or be ready for other future model nations. It also allows 
            for easy creation of new banks, breaking from the three bank restriction done in TEBECON.
        </ImageSection>

    </>)

}