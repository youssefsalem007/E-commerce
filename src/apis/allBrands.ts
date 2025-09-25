export async function getAllBrands(){
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/brands?limit=10`)
    const {data} = await response.json()
    return data
    

}
    
