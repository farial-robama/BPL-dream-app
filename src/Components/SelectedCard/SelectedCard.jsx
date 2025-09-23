import React from 'react';

const SelectedCard = ({player, removePlayer}) => {

    const handleRemove = () => {
        removePlayer(player)

    }
    return (
         <div className='border-2 border-gray-200 rounded-xl p-3 flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='h-[50px] w-[50px] rounded-xl' src={player.image} alt="" />
                    <div className='ml-2'>
                        <h1>{player.player_name}</h1>
                        <p className='text-xs'>{player.playing_role}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <img src="https://i.ibb.co.com/zV1jDng3/Frame.png" alt="" />
                </div>
            </div>
    );
};

export default SelectedCard;