import React, { useState } from 'react';
import userImg  from "../../assets/images/user-1.png";
import flagImg from "../../assets/images/Vector.png";

const PlayerCard = ({player, setAvailableBalance, availableBalance, purchasedPlayers,setPurchasedPlayers}) => {
    const [isSelected, setIsSelected] = useState(false)

const handleSelected = (playerData) =>{
    const playerPrice = parseInt(playerData.price_usd.split("USD").join("").split(",").join(""))
                if (availableBalance<playerPrice) {
                    alert("Not Enough Coins")
                    return
                }
                setIsSelected(true)
                setAvailableBalance(availableBalance-playerPrice)
                setPurchasedPlayers([...purchasedPlayers,playerData])
        }
    return (
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
                <button disabled={isSelected} onClick={() =>{handleSelected(player)} } className="btn p-1">{isSelected === true ? "Selected" : "Choose Player"}</button>
            </div>
          </div>
        </div>
    );
};

export default PlayerCard;