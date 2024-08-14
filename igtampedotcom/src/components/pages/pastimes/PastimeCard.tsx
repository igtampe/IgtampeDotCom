import ImageCard from "../../imagecard/ImageCard";

export default function PastimeCard(props : {
    name: string,
    children : any,
    link:string,
    imgSrc:string
}){

    const {children,imgSrc,link,name} = props

    return(<ImageCard title={name} imgSrc={imgSrc} href={`/pastimes/${link}`}>
        {children}
    </ImageCard>)


}