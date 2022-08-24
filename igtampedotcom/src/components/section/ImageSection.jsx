import ElevatedSection from "./ElevatedSection";

export default function ImageSection({
    imgSrc = '', title = '', children, right = false, Vertical = false
}) {

    return (
        <div style={{ position: 'relative', marginBottom:'20px' }}>
            <img style={{ width: '100%', height: '300px', objectFit: 'cover' }} src={imgSrc} />
            {
                (title !== '' || children !== undefined)
                    ? <>
                        {Vertical
                            ? <ElevatedSection title={title}>{children}</ElevatedSection>
                            : <>
                                {right
                                    ? <div style={{ position: 'absolute', top: '10%', right: '16px', textShadow: '2px 2px 8px #000000', width:'40%' }}>
                                        <ElevatedSection title={title}>{children}</ElevatedSection>
                                    </div>
                                    : <div style={{ position: 'absolute', top: '10%', left: '16px', textShadow: '2px 2px 8px #000000',  width:'40%' }}>
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