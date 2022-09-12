import { Grid, Link } from '@mui/material'
import ElevatedSection from '../../../section/ElevatedSection'
import ImageSection from '../../../section/ImageSection'
import ProgramHeader from '../../programs/ProgramHeader'
import VideoCard from './VideoCard'
import VideoList from './VideoList.json'

export default function VideosPage({
    Vertical = false
}){

    return(<>
        <ProgramHeader name='Videos'/>
        <ImageSection imgSrc='/images/passtimes/videos/main.png' title='Effective Editing'>
            A skill that's come in handy many a time
        </ImageSection>
        <ElevatedSection>
            Editing has come in handy quite a few times when we've had to make videos for courses, and I do make a few on my spare time. 
            Below are some samples. See more on my <Link href='https://youtube.com/c/igtampe'>YouTube Channel</Link>.
        </ElevatedSection>
        <Grid container spacing={2}>
            {VideoList.map(a=>(
                <Grid item xs={Vertical ? 12 : 6}><VideoCard title={a.title} ytCode={a.ytCode}>{a.desc}</VideoCard></Grid>
            ))}
        </Grid>
    </>)
    
}