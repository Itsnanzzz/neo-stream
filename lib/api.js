// --- KONFIGURASI SUPABASE ---
async function fetchMoviesData() {
    // Ambil konfigurasi dari backend server yang membaca .env
    const configResponse = await fetch('/api/config');
    const { SUPABASE_URL, SUPABASE_ANON_KEY } = await configResponse.json();

    const response = await fetch(`${SUPABASE_URL}/rest/v1/Data_Film?select=*`, {
        headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
    });

    if (!response.ok) {
        throw new Error('Gagal mengambil data dari Supabase');
    }

    const rows = await response.json();

    return rows.map(row => ({
        nama: row.nama || '',
        stream_url: row.streamUrl || '',
        thumbnail: row.thumbnail || ''
    })).filter(movie => movie.nama.trim() !== '');
}
