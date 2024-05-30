import React, { MouseEvent, useEffect, useState } from 'react'

const dataCarousel: Carousel[] = [
    {
        id: 1,
        url: 'https://http2.mlstatic.com/D_NQ_653490-MLA75826386427_042024-OO.webp'
    },
    {
        id: 2,
        url: 'https://http2.mlstatic.com/D_NQ_731636-MLA75591283996_042024-OO.webp'
    },
    {
        id: 3,
        url: 'https://http2.mlstatic.com/D_NQ_619869-MLA76689490915_052024-OO.webp'
    },
    {
        id: 4,
        url: 'https://http2.mlstatic.com/D_NQ_983742-MLA76450050500_052024-OO.webp'
    }
]

type Carousel = {
    id: number,
    url: string
}



export const CarouselOffers = () => {

    const [positionCarouselActive, setPositionCarouselActive] = useState<number>(0);
    const [carouselActive, setCarouselActive] = useState<Carousel | undefined>(dataCarousel.at(positionCarouselActive));

    useEffect(() => {
        setCarouselActive(dataCarousel.at(positionCarouselActive));
    }, [positionCarouselActive])

    const onHandlePrevious = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (positionCarouselActive == 0) return setPositionCarouselActive(dataCarousel.length - 1)
        return setPositionCarouselActive(positionCarouselActive - 1)
    }

    const onHandleNext = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (positionCarouselActive == (dataCarousel.length - 1)) return setPositionCarouselActive(0)
        return setPositionCarouselActive(positionCarouselActive + 1)
    }

    return (
        <>
            <div className="relative w-screen bg-gray-200" data-carousel="static">
                {/* Carousel wrapper */}
                <section className="relative block">

                    {
                        <div key={carouselActive?.id} >
                            <img src={carouselActive?.url} className='block w-full object-scale-down"' />
                        </div>
                    }

                    <button
                        onClick={onHandlePrevious}
                        type="button" className="absolute flex justify-center items-center start-0 xl:top-44 sm:top-20 top-14 xl:w-16 xl:h-16 md:w-12 md:h-12 w-8 h-8 bg-white"
                        style={{
                            'borderBottomRightRadius': '64px',
                            'borderTopRightRadius': '64px'
                        }}
                        data-carousel-prev>
                        <span className="flex">
                            <svg className="w-4 h-4 fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10">
                                <path d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>

                    <button
                        onClick={onHandleNext}
                        type="button" className="absolute flex justify-center items-center end-0 xl:top-44 sm:top-20 top-14 xl:w-16 xl:h-16 md:w-12 md:h-12 w-8 h-8 right-0 bg-white"
                        style={{
                            'borderBottomLeftRadius': '64px',
                            'borderTopLeftRadius': '64px'
                        }}
                        data-carousel-prev>
                        <span className="flex">
                            <svg className="w-4 h-4 fill-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10">
                                <path d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                </section>
            </div>
            {/* Slider controls */}
            {/* <button type="button" className="absolute flex h-16 justify-center items-center" data-carousel-prev>
                <span className="">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button> */}
            {/* <button type="button" className="absolute" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button> */}
        </>
    )
}
