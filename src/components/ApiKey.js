
export const apiKey='VNq7Y3Wvw1jpy05dw5wCM6wr2SK92COX'

export const peticion = fetcg(`https://api.giphy.com/v1/gifs/random?apiKey=${ apiKey }`)

peticion.then( response => response.json() )
.then( ({data}) => {
    console.log( data.images)
})

.catch( console.warn )