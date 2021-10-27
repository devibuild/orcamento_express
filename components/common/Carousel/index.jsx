import { useContext, useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { CarouselButton, CarouselButtonContainer, CarouselItem, Dots } from "./styles";
import Button from '../Button'
import { Box, Flex } from "../../Containers";
import { CaretRight, CaretLeft } from 'phosphor-react'
import { ActiveIndexContext } from "../../../contexts/activeIndex";

const responsive = {
    0: { items: 1 },
    // 568: { items: 2 },
    // 1024: { items: 3 },
};

const defaultItems = [
    <CarouselItem data-value="1">1</CarouselItem>,
    <CarouselItem data-value="2">2</CarouselItem>,
    <CarouselItem data-value="3">3</CarouselItem>,
    <CarouselItem data-value="4">4</CarouselItem>,
    <CarouselItem data-value="5">5</CarouselItem>,
];

const DotsItem = ({ isActive }) => {
    return (
        <Dots isActive={isActive === "__active"} />
    )
}

// activeIndex, slidePrev, slideNext, activeIndex, setActiveIndex

const Carousel = ({
    items,
    fullScreen,
    lastSlideAction,
    page,
    // activeIndex,
    // setActiveIndex,
}) => { //, stepper, stepperSubmit, autoPlay = true, infinite


    // const syncActiveIndex = ({ item }) => setActiveIndex(item);

    // const [activeIndex, setActiveIndex] = useState(0);
    // const [items] = useState(createItems(5, [setActiveIndex]));

    const {
        activeIndex,
        setActiveIndex,
        // 
        activeIndexRecursos,
        setActiveIndexRecursos,
        activeIndexLevantamento,
        setActiveIndexLevantamento,
        activeIndexSimular,
        setActiveIndexSimular,
    } = useContext(ActiveIndexContext)

    const carouselItems = items ? items : defaultItems

    const slidePrev = () => {
        // console.log('slidePrev')
        if (currentPageIndex() > 0) {
            if (page === 'levantamento') {
                return setActiveIndexLevantamento(activeIndexLevantamento - 1);
            } else if (page === 'recursos') {
                return setActiveIndexRecursos(activeIndexRecursos - 1);
            } else if (page === 'simular') {
                return setActiveIndexSimular(activeIndexSimular - 1);
            } else {
                return setActiveIndex(activeIndex - 1);
            }
        }
    }

    const slideNext = () => {
        // console.log('slideNext')
        if (currentPageIndex() < carouselItems.length - 1) {
            if (page === 'levantamento') {
                return setActiveIndexLevantamento(activeIndexLevantamento + 1);
            } else if (page === 'recursos') {
                return setActiveIndexRecursos(activeIndexRecursos + 1);
            } else if (page === 'simular') {
                return setActiveIndexSimular(activeIndexSimular + 1);
            } else {
                return setActiveIndex(activeIndex + 1);
            }
        }
    }

    const currentPageIndex = () => {
        switch (page) {
            case 'levantamento':
                return activeIndexLevantamento
            case 'recursos':
                return activeIndexRecursos
            case 'simular':
                return activeIndexSimular
            default:
                return activeIndex
        }
    }


    // console.log(carouselItems)

    if (fullScreen) {
        return (
            <Flex
                column
                // width='calc(100% - 250px)'
                width='calc(100% - 40px)'
                maxWidth='1200px'
                margin='20px'
                // height='100vh'
                // justifyContent='flex-start'
                style={{
                    alignSelf: 'normal'
                }}
            >
                <AliceCarousel
                    // mouseTracking
                    items={carouselItems}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls //={disableDotsControls}
                    // autoPlay={autoPlay}
                    // autoPlayInterval={4000}
                    // infinite={infinite}
                    // touchMoveDefaultEvents={false}
                    activeIndex={currentPageIndex()}
                    swipeDelta={2000}
                />
                <Flex
                // justifyContent='space-between'
                // width='100%'
                // height=''
                // margin='20px 0 0'
                >
                    <CarouselButtonContainer fullScreen>
                        <CarouselButton onClick={slidePrev}>
                            <CaretLeft size={18} />
                        </CarouselButton>
                        VOLTAR
                    </CarouselButtonContainer>
                    {currentPageIndex() === carouselItems.length - 1 ? (
                        <CarouselButtonContainer fullScreen>
                            AVANÇAR
                            {lastSlideAction ? (
                                <CarouselButton onClick={lastSlideAction}
                                >
                                    <CaretRight size={18} />
                                </CarouselButton>
                            ) : (
                                <CarouselButton onClick={slideNext}
                                >
                                    <CaretRight size={18} />
                                </CarouselButton>
                            )}
                        </CarouselButtonContainer>
                    ) : (
                        <CarouselButtonContainer fullScreen>
                            AVANÇAR
                            <CarouselButton onClick={slideNext}
                            >
                                <CaretRight size={18} />
                            </CarouselButton>
                        </CarouselButtonContainer>

                    )}
                        {/* <CarouselButtonContainer fullScreen>
                            AVANÇAR
                            <CarouselButton onClick={() => {
                                console.log('fulklshcreen')
                                slideNext()
                            }}
                            >
                                <CaretRight size={18} />
                            </CarouselButton>
                        </CarouselButtonContainer> */}
                </Flex>
            </Flex>
        )
    } else {
        return (
            <Flex
                width='calc(100% - 250px)'
                // height='100%'
                style={{
                    alignSelf: 'normal'
                }}
            >
                <AliceCarousel
                    // mouseTracking
                    items={carouselItems}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls //={disableDotsControls}
                    // autoPlay={autoPlay}
                    // autoPlayInterval={4000}
                    // infinite={infinite}
                    // touchMoveDefaultEvents={false}
                    activeIndex={currentPageIndex()}
                    swipeDelta={2000}
                />
                <CarouselButtonContainer left>
                    <CarouselButton onClick={slidePrev}>
                        <CaretLeft size={18} />
                    </CarouselButton>
                    VOLTAR
                </CarouselButtonContainer>
                <CarouselButtonContainer right>
                    AVANÇAR
                    <CarouselButton onClick={currentPageIndex() === carouselItems.length - 1 ? (
                        lastSlideAction ? lastSlideAction : slideNext
                    ) : (slideNext)}
                    >
                        <CaretRight size={18} />
                    </CarouselButton>
                </CarouselButtonContainer>
            </Flex>
        )
    }

}

export default Carousel