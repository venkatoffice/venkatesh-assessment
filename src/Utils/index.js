export const createMovieObject = (movies) => {
    const _movies = movies || [],
     movObj = {}
     _movies.forEach(movie => {
        movObj[movie.movie_name] = movie
    })

    return movObj
}