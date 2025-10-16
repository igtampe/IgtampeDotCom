import useWindowDimensions from "../../hooks/useWindowDimensions";
import ElevatedSection from "./ElevatedSection";

export default function ImageSection(props: {
    imgSrc: string,
    title?: string,
    children?: any,
    right?: boolean
    verticalOverride?: boolean
    objectPosition?: string
}) {

    const { children, imgSrc, title, right, verticalOverride, objectPosition } = props
    const { verticalMode } = useWindowDimensions();
    const Vertical = verticalOverride !== undefined ? verticalOverride : verticalMode

    return (
        <div style={{ position: 'relative', marginBottom: '20px' }}>
            <img style={{ width: '100%', height: '300px', objectFit: 'cover', objectPosition: objectPosition }} src={imgSrc} />
            {
                (title || children)
                    ? <>
                        {Vertical
                            ? <ElevatedSection title={title}>{children}</ElevatedSection>
                            : <>
                                {right
                                    ? <div style={{ position: 'absolute', top: '10%', right: '16px', textShadow: '2px 2px 8px #000000', width: '40%' }}>
                                        <ElevatedSection title={title}>{children}</ElevatedSection>
                                    </div>
                                    : <div style={{ position: 'absolute', top: '10%', left: '16px', textShadow: '2px 2px 8px #000000', width: '40%' }}>
                                        <ElevatedSection title={title}>{children}</ElevatedSection>
                                    </div>
                                }
                            </>
                        }
                    </>
                    : <></>

            }
        </div>
    )

}