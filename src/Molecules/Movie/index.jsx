
import './index.scss'

const Movie = ({
    imdb_rating,
    thumbnail_url,
    language,
    tags,
    release_date,
    running_time,
    movie_name
}) => {
    return (
    <div className="card movie" style={{width: '15rem'}}>
        <img className="card-img-top" src={thumbnail_url} alt={movie_name} />
        <div className="card-body">
            <h5 className="card-title">{movie_name}</h5>
            <p className="card-text">
                <label>Language</label>
                <span>{language}</span>
            </p>
        </div>
    </div>)
}

export default Movie