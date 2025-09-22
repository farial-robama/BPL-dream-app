import React, { use } from 'react';
import userImg  from "../../assets/images/user-1.png";
import flagImg from "../../assets/images/Vector.png";

const AvailablePlayers = ({playersPromise}) => {

    const playersData = use(playersPromise)
    console.log(playersData);
    

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4'>

            {
                playersData.map( player => (
                    <div className="card bg-base-100 shadow-sm p-5">
  <figure>
    <img
      src={player.image}
      alt="Shoes" />
  </figure>
  <div className="card-body mt-4">
    <div className='flex'>
        <img className='object-cover' src={userImg} alt="" /> <h2 className="card-title ml-2">{player.player_name}</h2>
    </div>
    <div className='flex justify-between border-b-2 border-gray-300 pb-2'>
        <div className='flex text-[#131313] items-center'>
        
            <img className='w-4 h-4  pr-2'  src={flagImg} alt="" />
            <span>{player.player_country}</span>
        </div>
        <button className='btn rounded-xl bg-[#e3e2e2]'>{player.playing_role}</button>
        

    </div>
    <div className='flex justify-between font-bold items-center mb-1'>
        <span>Rating</span>
        <span>{player.rating}</span>
    </div>
    <div className='flex justify-between items-center'>
        <span className='font-bold'>{player.batting_style}</span>
        <span>{player.bowling_style}</span>
    </div>
    <div className='flex justify-between items-center'>
        <span className='font-bold'>{player.price_usd}</span>
        <button className="btn p-1">Choose Player</button>
    </div>
  </div>
</div>
                ))
            }
 
            
        </div>
    );
};

export default AvailablePlayers;