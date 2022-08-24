import BigImageCard from "../imagecard/BigImageCard";
import ImageCard from "../imagecard/ImageCard";
import LRGrid from "../lrgrid/LRGrid";

export default function ImageSideSection({
    imgSrc = '', imgDesc='', href = "",
    children,
    right = false, Vertical=false, big=false
}){

    const ICard = big ? BigImageCard : ImageCard

    return(
        <div style={{marginBottom:'20px'}}>
        <LRGrid

        Left={
            <ICard imgSrc={imgSrc} href={href}>
                {imgDesc===undefined || imgDesc==='' ? undefined : imgDesc}
            </ICard>
        }

        Right={children}
        flipElements={!right}
        Vertical={Vertical}

        />
        </div>
    )
}