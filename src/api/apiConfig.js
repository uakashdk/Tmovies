const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '630e96607ca64cfa3dea31932d106994',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;