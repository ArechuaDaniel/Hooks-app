import React from 'react'
import { useCounter } from '../hooks/useCounter';
import useFetch from '../hooks/useFetch'

const MultipleCustomHooks = () => {
   
    const {increment, counter} = useCounter();
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0]

   
  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />
        {
            (isLoading) ? 
            
                (<div className='alert alert-info text-center'>
                Loading...
                </div>)
            : (
                <blockquote className='blackquote text-end'>
            <p className='mb-10'>{quote}</p>
            <footer className='blockquote-footer' >{author}</footer>
            </blockquote>
            )

        }
        <button className='btn btn-primary'
            disabled={isLoading}
            onClick={() => increment()}
        >
            Next quote    
        </button>        
        
    </>
  )
}

export default MultipleCustomHooks