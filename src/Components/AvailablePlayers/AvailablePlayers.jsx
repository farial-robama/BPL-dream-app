import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({playersPromise, setavailableBalance, availableBalance}) => {

    const playersData = use(playersPromise)
    console.log(playersData);
    

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4'>

            {
                playersData.map( player => 
                    <PlayerCard availableBalance={availableBalance} setavailableBalance={setavailableBalance} key={player.player_name} player = {player}></PlayerCard>
                )
            }
 
            
        </div>
    );
};

export default AvailablePlayers;