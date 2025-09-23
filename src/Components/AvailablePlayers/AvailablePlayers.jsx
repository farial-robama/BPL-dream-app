import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({playersPromise, setavailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers}) => {

    const playersData = use(playersPromise)
    console.log(playersData);
    

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4'>

            {
                playersData.map( player => 
                    <PlayerCard purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setavailableBalance={setavailableBalance} key={player.player_name} player = {player}></PlayerCard>
                )
            }
 
            
        </div>
    );
};

export default AvailablePlayers;