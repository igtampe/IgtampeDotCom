import { Divider } from "@mui/material";
import ElevatedSection from "../../../section/ElevatedSection";
import ImageSideSection from "../../../section/ImageSideSection";
import ProgramHeader from "../ProgramHeader";

export default function InsoPage() {

    return (<>
        <ImageSideSection imgSrc="/images/programs/inso/classtrack.png" right big>
            <ProgramHeader name='ClassTrack' git='https://github.com/class-Track' />
            <ElevatedSection>
                ClassTrack was our Capstone project. Built with a team of 4 students on a Python-Flask backend and ReactJS frontend, ClassTrack aims to help students stay On Track
                with their curriculum. With either a university provided curriculum, or a custom curriculum a student made, students can track what classes they've taken, and have
                yet to take, to ensure their path to graduation
            </ElevatedSection>
        </ImageSideSection>

        <Divider style={{ marginBottom: '20px' }} />

        <ElevatedSection>
            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/bwPpFNU-xYc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </ElevatedSection>

        <Divider style={{ marginBottom: '20px' }} />

        <ImageSideSection imgSrc="/images/programs/inso/spot.png" big>
            <ProgramHeader name='Spots' git='https://github.com/uprm-inso-4116-2021-2022-s1/semester-project-omega-team' />
            <ElevatedSection>
                Built on C#/ASP.NET/EF and React.JS, Spots was another booking system we designed for the Software Design course. Although it shared a similar purpose to
                AMIE, Spots was designed for individual spots. It was done with a group with 2 other students.

                <p>I primarily worked backend for this project, as usual, and worked to flex my acquired skills with EF Core which I learned over the summer at an
                    internship. This meant a very quick turnaround time for requested features and API routes.</p>
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection imgSrc="/images/programs/inso/amie.png" big right>
            <ProgramHeader name='AMIE Booking System' git='https://github.com/CIIC4060-ICOM5016-FALL-2021/booking-system-project-aiem' />
            <ElevatedSection>
                Built this time on Python-Flask and React.JS, The AMIE booking system was designed for the Databases INSO Course. Everyone in the course was tasked with creating
                a booking system, using nothing but Heroku PostgreSQL. Our group of 4 succeeded in doing so, designing tables and queries needed to execute CRUDs, and get
                statistics on booking data. In addition, we all collaborated on designing the frontend using the provided libraries.
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection imgSrc="/images/programs/inso/pistachio.png" big>
            <ProgramHeader name='Pistachio' git='https://github.com/uprm-inso-4115-2020-2021-s2/semester-project-mk-ii-almond-software-llc/tree/staging' />
            <ElevatedSection>
                Built again on Java-Springboot and React.JS, Pistachio was our second INSO project, for the  Requirements and Testing course. Built with a team of 8, Pistachio
                was pitched as a Pokemon GO competitor, and the team did manage to deliver on some parts. Our project scope was rather large, and some elements needed to be
                cut, but in the end we were satisfied with our product.

                <p>I worked backend again, and primarily worked on extensive unit testing of the components we developed, along with load testing with Gatling to test the
                    backend for resiliency.  </p>
            </ElevatedSection>
        </ImageSideSection>

        <ImageSideSection right imgSrc="/images/programs/inso/macademia.png" big>
            <ProgramHeader name='Macademia' git='https://github.com/igtampe/Macademia' />
            <ElevatedSection>
                Built on Java-Springboot and React.JS, Macademia was our first INSO project, for the Intro to Software Engineering course. Built in a team of 7 people,
                Macademia's end goal was to provide students an easier way to enroll college courses for their upcoming semester, and see previously enrolled courses.

                <p>I worked backend for this project, primarily the database handling interface. My table and SQL knowledge was limited at the time, but I managed
                    to make a decent enough handler, and a great first start into databases in a more professional setting.   </p>
            </ElevatedSection>
        </ImageSideSection>

    </>)

}