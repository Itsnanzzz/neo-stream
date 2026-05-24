const CACHE_KEY = 'movies_cache';
const CACHE_TIME_KEY = 'movies_cache_time';
const CACHE_DURATION = 5 * 60 * 1000; // 5 menit

async function fetchMoviesData() {
    const cached = sessionStorage.getItem(CACHE_KEY);
    const cachedTime = sessionStorage.getItem(CACHE_TIME_KEY);

    if (cached && cachedTime && (Date.now() - Number(cachedTime) < CACHE_DURATION)) {
        return JSON.parse(cached);
    }

    const response = await fetch('/api/movies');
    if (!response.ok) throw new Error('Gagal mengambil data film');

    const rows = await response.json();

    const movies = rows
        .map(row => ({
            nama: row.nama || '',
            stream_url: row.streamUrl || '',
            thumbnail: row.thumbnail || ''
        }))
        .filter(movie => movie.nama.trim() !== '');

    sessionStorage.setItem(CACHE_KEY, JSON.stringify(movies));
    sessionStorage.setItem(CACHE_TIME_KEY, Date.now().toString());

    return movies;
}