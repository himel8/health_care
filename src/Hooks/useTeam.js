import { useEffect, useState } from "react";

const useTeam = () =>{
    const [teams, setTeams] = useState([]);

    useEffect( ()=>{
        fetch('/teammembers.json')
        .then(res => res.json())
        .then(data => setTeams(data))
    } , []);
    return [teams];
}

export default useTeam;