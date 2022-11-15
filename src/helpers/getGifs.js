export const getGifs =  async (category)=>{
    const url= `https://api.giphy.com/v1/gifs/search?q=${ category }&api_key=z7ZoPxSvg9wMzphfzUTd9mRk2ISne2Yo&limit=5`;
    const resp = await fetch(url);
    

    const { data } = await resp.json();
    const gifs = data.map( e=> {
        return {
            id: e.id,
            title: e.title,
            url: e.images.downsized_medium.url}
    })
    //console.log(gifs);
    return gifs;
}
