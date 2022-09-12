import { useState } from "react";
import { useRef } from "react"
import { useLayoutEffect } from "react"

export const Quote = ({author,quote}) => {

    const pRef = useRef();
    const [boxSixe, setBoxSixe] = useState({width: 0, height:0,})

    useLayoutEffect(() => {
      const {width,height} = pRef.current.getBoundingClientRect();
      setBoxSixe({height, width})
    }, [quote])
    return (
        
            <>
                <blockquote className='blackquote text-end'
                style={{display: 'flex'}}
            >
                <p ref={pRef} className='mb-10'>{quote}</p>
                <footer className='blockquote-footer' >{author}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSixe)}</code>
            </>
        
    )
}
