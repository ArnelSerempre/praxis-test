import useControllers from "controllers";
import {FC, Fragment, useState} from "react";
import useComponents from "views/components";
import _ from "lodash";
import {IAccordion} from "views/components/Accordion/Accordion.interfaces";
import {StyledContainerDiabetes} from "./Diabetes.styles";
import useTerapeuticNumberStyles from "../terapeutic-number.style";

const Diabetes: FC = () => {
    /** Components */
    const {Accordion} = useComponents();

    /** States */
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [expanded, setExpanded] = useState<string | false>(false);

    /** Listeners */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /** Controllers */
    const {useScreenHooks} = useControllers();
    const {useTerapeuticNumber} = useScreenHooks();
    const {useDiabetes, useHeridas} = useTerapeuticNumber();
    const {woundsAssets} = useHeridas();
    const {diabetesContent} = useDiabetes(width, woundsAssets);

    /** Styles */
    const {
        StyledImage
    } = useTerapeuticNumberStyles();

    return (
        <Fragment>
            <StyledContainerDiabetes>
                {/* Principal Banner */}
                {woundsAssets.diabetes_banner_1 !== undefined && (
                    <StyledImage
                        src={
                            woundsAssets.diabetes_banner_1 !== undefined &&
                            woundsAssets.diabetes_banner_1.content
                        }
                        alt={
                            woundsAssets.diabetes_banner_1 !== undefined &&
                            woundsAssets.diabetes_banner_1.alt
                        }
                    />
                )}

                {/* Description */}


                {/* Accordions */}
                <div id="accordions" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    {_.map(diabetesContent, (item: IAccordion, index: number) => (
                        <Accordion
                            title={item.title}
                            id={item.id}
                            name={item.name}
                            expanded={expanded}
                            setExpanded={setExpanded}
                            key={index}
                        >
                            {item.children}
                        </Accordion>
                    ))}
                </div>

            </StyledContainerDiabetes>
        </Fragment>
    );
};

export default Diabetes;
