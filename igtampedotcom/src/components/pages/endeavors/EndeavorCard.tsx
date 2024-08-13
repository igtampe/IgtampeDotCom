import ImageCard from "../../imagecard/ImageCard";

export default function EndeavorCard(props : {
    name:string,
    link:string,
    children:any,
    imgSrc:string
}){

    const {children,imgSrc,link,name} = props

    return(<ImageCard title={name} imgSrc={imgSrc} href={`/endeavors/${link}`}>
        {children}
    </ImageCard>)


}