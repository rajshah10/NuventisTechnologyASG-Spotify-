export const getPlayListByCategory =async(token,category_id) => {
    const result=await fetch(`https://api.spotify.com/v1/browse/categories/${category_id}/playlists`,{
        method:"GET",
        headers:{
            'Authorization':'Bearer' + token
        }
    })
    const data=await result.json();
    return data.playlists.items    
}


