import React from 'react';
import useTeam from '../../../Hooks/useTeam';
import Team from '../Team/Team';

const Teams = () => {
    const [teams] = useTeam();
    return (
        <div>
            <div className="row g-3 mb-5 mt-3">
                <h1 className='custom-whyus-heding'>Meet Our Doctors</h1>
            </div>
            <div className="row g-3 mb-5">
                {/* team mapping */}
                {
                    teams.map(team => <Team key={team.key} team={team}/>)
                }
            </div>
        </div>
    );
};

export default Teams;