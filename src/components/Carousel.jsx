import { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function Carousel({ images, autoSlide = true, autoSlideIntervel = 3000 }) {
    const [curr, setCurr] = useState(0)

    const prev = () => {
        setCurr((curr) => curr === 0 ? images.length - 1 : curr - 1)
    }

    const next = () => {
        setCurr((curr) => curr === images.length - 1 ? 0 : curr + 1)
    }

    useEffect(() => {
        if (!autoSlide) return
        const setInter = setInterval(next, autoSlideIntervel * 1000);
        return () => clearInterval(setInter)
    })

    return (
        <div className='overflow-hidden relative'>
            <div className={`flex transition-transform ease-in-out duration-700 -translate-x-[${curr * 100}%]`}
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {
                    images.map((data, index) => (
                        <img key={index} src={data} />
                    ))
                }
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button
                    onClick={prev}
                    className='flex justify-center items-center text-3xl h-10 w-10 bg-white/80 rounded-full shadow text-gray-800 hover:bg-white'>
                    <MdKeyboardArrowLeft />
                </button>
                <button
                    onClick={next}
                    className='flex justify-center items-center text-3xl h-10 w-10 bg-white/80 rounded-full shadow text-gray-800 hover:bg-white'>
                    <MdKeyboardArrowRight />
                </button>
            </div>

            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {
                        images.map((_, i) => (
                            <div
                                className={`transition-all w-2 h-2 bg-white rounded-full ${curr === i ? 'p-2' : "bg-opacity-50"}`}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
