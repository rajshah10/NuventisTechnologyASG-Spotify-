export const getCategory = async(token) => {
    const result=await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`,{
        method:'GET',
        headers:{
            'Authorization':'Bearer' + token
        }
    })
    const data=await result.json();
    console.log(data);
    return data.categories.items
}

