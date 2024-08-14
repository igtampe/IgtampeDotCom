import BigImageCard from "../imagecard/BigImageCard";
import ImageCard from "../imagecard/ImageCard";
import LRGrid from "../lrgrid/LRGrid";

export default function ImageSideSection(props: {
    imgSrc: string,
    imgDesc?: string,
    href?: string,
    children?: any,
    right?: boolean,
    big?: boolean
}) {

    const { children, href, imgDesc, imgSrc, big, right } = props

    const ICard = big ? BigImageCard : ImageCard

    return (
        <div style={{ marginBottom: '20px' }}>
            <LRGrid

                Left={
                    <ICard imgSrc={imgSrc} href={href}>
                        {imgDesc === undefined || imgDesc === '' ? undefined : imgDesc}
                    </ICard>
                }

                Right={children}
                flipElements={!right}

            />
        </div>
    )
}