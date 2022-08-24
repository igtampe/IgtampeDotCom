import { Grid } from "@mui/material";

/**
 * Generates  a left right grid with the left element taking up 40% and the right element taking up the rest of the space
 */
export default function LRGrid({
    Left = '',
    Right = '',
    flipElements = false,
    Vertical = false,
    half=false
}) {
    
    
    if (Vertical) {

        return (
            <>
                {Left}
                <div style={{ margin: '10px' }} />
                {Right}
            </>
        )
    }

    var smallWidth=half? 6 : 4.8
    var bigWidth=12-smallWidth

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={flipElements ? bigWidth : smallWidth}>
                    {flipElements ? <>{Right}</> : <>{Left}</>}
                </Grid>
                <Grid item xs={flipElements ? smallWidth : bigWidth}>
                    {flipElements ? <>{Left}</> : <>{Right}</>}
                </Grid>
            </Grid>
        </>
    )

}