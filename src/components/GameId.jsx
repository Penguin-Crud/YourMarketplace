import { useParams } from "react-router-dom";

export function GameId () {
    
    let { id } = useParams();

    return <p>{id}</p>;
}