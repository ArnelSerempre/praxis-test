import { Grid } from "@mui/material";
import useControllers from "controllers";
import React, { FC } from "react";
import {  StyledWounds1Image } from "views/screens/terapeutic-number/Heridas/heridas.responsive.styles";
import useContactStyles from "../contact.style";

const Presentation: FC = (): JSX.Element => {
    // Styles
    const {
        StyledSection,
        StyledTitleSection,
        StyledTextPresentation,
        StyledButtonPresentation,
        StyledIconRight,
        StyledContainerImage
    } = useContactStyles();

    // Controllers
    const { useScreenHooks } = useControllers();
    const { useContact } = useScreenHooks();
    const { handleContact, width } = useContact();

    return (
        <React.Fragment>
            {
                width >= 1200
                    ? (
                        <StyledSection background="http://api-praxis.eml.com.co/wp-content/uploads/2022/03/fondocontacto1.png">
                            <Grid container className="items-center">
                                <StyledContainerImage item md={6}>
                                    <img src="http://api-praxis.eml.com.co/wp-content/uploads/2022/03/contacto.png" alt="Chica" />
                                </StyledContainerImage>
                                <Grid item md={6}>
                                    <Grid item lg={12} className="flex justify-center">
                                        <Grid item lg={8}>
                                            <StyledTitleSection className="text-center">Contáctese con nosotros</StyledTitleSection>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={12} className="flex justify-center">
                                        <Grid item lg={8}>
                                            <StyledTextPresentation>Praxis Pharmaceutical Colombia Ltda</StyledTextPresentation>
                                            <StyledTextPresentation>Dirección: Cr 12 A No. 83-75 OF 601</StyledTextPresentation>
                                            <StyledTextPresentation>Teléfono: 601 756 60 06</StyledTextPresentation>
                                            <StyledTextPresentation>Email: info@praxisph.com.co</StyledTextPresentation>
                                            <StyledTextPresentation>LinkedIn: Praxis Pharmaceutical</StyledTextPresentation>
                                            <Grid item lg={12} className="flex justify-center pb-16">
                                                <StyledButtonPresentation onClick={handleContact}>
                                                    Contáctenos
                                                    <StyledIconRight color="white" />
                                                </StyledButtonPresentation>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </StyledSection>
                    )
                    : (
                        // <StyledSection background="http://api-praxis.eml.com.co/wp-content/uploads/2022/04/contactomovil.png">
                        //     <Grid container>
                        //         <Grid item lg={6} xs={12}>
                        //             <Grid item lg={12} sm={12}>
                        //                 <StyledTitleFactores className="text-center" style={{ fontSize: "24px" }}>Contáctese con nosotros</StyledTitleFactores>
                        //             </Grid>
                        //             <Grid item lg={12} className="flex justify-center">
                        //                 <Grid item lg={12}>
                        //                     <StyledTextPresentation>Praxis Pharmaceutical Colombia Ltda</StyledTextPresentation>
                        //                     <StyledTextPresentation>Dirección: Cr 12 A No. 83-75 OF 601</StyledTextPresentation>
                        //                     <StyledTextPresentation>Teléfono: 601 756 60 06</StyledTextPresentation>
                        //                     <StyledTextPresentation>Email: info@praxisph.com.co</StyledTextPresentation>
                        //                     <StyledTextPresentation>LinkedIn: Praxis Pharmaceutical</StyledTextPresentation>
                        //                     <Grid item lg={12} className="flex justify-center pb-16">
                        //                         <StyledButtonPresentation onClick={handleContact}>
                        //                             Contáctenos
                        //                             <StyledIconRight color="white" />
                        //                         </StyledButtonPresentation>
                        //                     </Grid>
                        //                 </Grid>
                        //             </Grid>
                        //         </Grid>
                        //         <Grid item lg={6}>
                        //             <StyledImage src="http://api-praxis.eml.com.co/wp-content/uploads/2022/04/contactomovil.png" alt="Chica"/>
                        //         </Grid>
                        //     </Grid>
                        // </StyledSection>
                        
                        <StyledWounds1Image
                            src="http://api-praxis.eml.com.co/wp-content/uploads/2022/04/fondo-textcontacto.png" alt=""
                            className="pt-24"
                            onClick={handleContact}
                        />
                    )
            }
        </React.Fragment>
    )
}

export default Presentation;