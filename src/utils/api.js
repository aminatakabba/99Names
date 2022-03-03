import axios from "axios"

export const getARandomName = async () => {
    const name = await axios.get("https://murmuring-inlet-80769.herokuapp.com/").then(({data}) => data ).catch((e) => e.message)
    return name
}

export const getAllNames = async () => {
    const allName = await  axios.get("https://murmuring-inlet-80769.herokuapp.com/api/names").then(({data}) => data).catch((e) => e.message)
    return allName
}

export const getSpecificName = async (id) => {
    const specificName = await  axios.get(`https://murmuring-inlet-80769.herokuapp.com/api/name/${id}`).then(({data}) => data).catch((e) => e.message)
    return specificName
}

