const ProductAPI = {
    getProduct:async (url)=>{
        const data = await fetch(url,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response)=>{
            return response.json();
        })
        return data
    }
}