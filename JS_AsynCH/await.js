async function fetchAlbums(){
    try{
        //success
        const albums = await fetch('https://jsonplaceholder.typicode.com/albums');
        console.log(albums);
    }catch(error){
        // if fail
        console.log(error);
    }
}
fetchAlbums();