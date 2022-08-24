import ImageCard from "../../imagecard/ImageCard";

export default function PasstimeCard({
    name='',
    children,
    link='',
    imgSrc=''
}){

    return(<ImageCard title={name} imgSrc={imgSrc} href={`/passtimes/${link}`}>
        <p>{children}</p>
    </ImageCard>)


}