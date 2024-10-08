const API_KEY = process.env.API_KEY;

import Results from '@/components/Results';
import React from 'react'

const  page = async ({searchParams}) => {

  const genre = searchParams.genre || 'fetchTrending';
//  const res = await fetch(`https://api.themoviedb.org/3/discover/${genre==='fetchTopRated' ? `/movie/top-rated` : `/trending/all/week`}?api_key=${API_KEY}`);
  const res = await fetch(`https://api.themoviedb.org/3${genre==='fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await res.json();
 
  if(!res.ok){
    throw new Error('Failed to fetch data.');
  }
    const results = data.results;
    // console.log(results);
    // results.forEach(movie => {
    //   console.log(movie.title); // Use 'title' for the movie's title
    // });


  return (
    <>
      <div>
        <Results results={results} />
      </div>
    </>
  )
}

export default page