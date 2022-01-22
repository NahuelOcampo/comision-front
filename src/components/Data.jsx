import { useEffect, useState } from "react";
import Card from "./Card";

const Data = () => {
    const [httpError, setHttpError] = useState();
    const [info, setInfo] = useState([]);
    useEffect(() => {
        const fetchInfo = async () => {
            const response = await fetch('https://comision-api.herokuapp.com/personal')
            if (!response.ok) {
                throw new Error("algo salio mal")
            }
            const responseData = await response.json()
            setInfo(responseData)
        }
        fetchInfo().catch((err) => {
            setHttpError(err.message)
        }) 
    }, [])

    const errorMessage = <p>{httpError}</p>
    if (httpError) {
        return errorMessage
    }
    return (
        <>
            
        {
            info.map((item) => {
                return (
                <Card {...item} key = {item._id} />
            )
        }) } 
        </>
    )
}

export default Data;
