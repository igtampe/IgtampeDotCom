import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export default function NotFoundPage() {

    const {verticalMode} = useWindowDimensions();

    useEffect(() => {
        document.title = "Ignacio Tampe - 404"
      },[]);    

    return (<Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '50vh' }}>
        <Grid item xs={12} style={verticalMode ? { width: '100%' } : { width: '75%', maxWidth: '800px' }}>
            <Card style={{ width: '100%' }}>
                <img src='/images/deepthink.gif' style={{width:'100%', maxHeight:'200px', objectFit:'cover'}}/>
                <CardContent>
                    <Typography fontFamily='Orbitron' fontWeight='800' fontSize='20px' style={{textAlign:'center'}}>How did we get here?</Typography>
                    <Divider/>
                    <div style={{textAlign:'center', marginTop:'10px'}}>It appears we cannot find this page</div>
                </CardContent>
            </Card>
        </Grid>
    </Grid>)
}