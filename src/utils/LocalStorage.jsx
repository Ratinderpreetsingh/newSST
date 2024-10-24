export const setLocalstorage =(name,value)=>{
    try {
        localStorage.setItem(name,JSON.stringify(value))
    } catch (error) {
        throw new error
    }
}


export const getLocalstorage =(name)=>{
    try {
    const response =  localStorage.getItem(name)
    return response ? JSON.parse(name) :null
    } catch (error) {
        return null; 
    }
}


export const removeLocalStorage = (name)=>{
    try {
        localStorage.removeItem(name)
    } catch (error) {
    }
}