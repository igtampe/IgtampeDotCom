import ImageCard from "../../imagecard/ImageCard";

export default function EndeavorCard({
    name='',
    link='',
    children,
    imgSrc=''
}){

    return(<ImageCard title={name} imgSrc={imgSrc} href={`/endeavors/${link}`}>
        <p>{children}</p>
    </ImageCard>)


}