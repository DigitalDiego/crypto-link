import React from 'react'
import Crypto from "../Images/crypto.png"
import Blockchain from "../Images/blockchain.png"
const Blocks = () => {
  const data = [
      {title:"What is Crypto?", image:Crypto, text:"Crypto is the digital form of currentcy. What makes crypto so fascinating is the fact that no one entity controls it, therefore making it decentralized. Making transaction does not require banks and any one can send or receive payments.", classSelf:"self-end", classMargin:"mr-20"},
      {title:"What is the Blockchain?", image:Blockchain, text:"The blockchain is a distributed database that is run by a system of connected users. It stores information of transasctions. It is highly trusted and highly secure as well.", classSelf:"self-start", classMargin:"ml-20"},
  ]
  return (
    <div className='w-full'>
        {data.map((block, index) => (
            <div key={index} className="flex justify-center items-center flex-col w-full md:flex-row md:last-of-type:flex-row-reverse">
                <div className='w-full h-10vh grid place-items-center md:hidden'>
                    <h1 className='text-2xl text-cyan-800 font-bold inline after:content[""] after:block after:w-full after:h-1px after:bg-cyan-800'>{block.title}</h1>
                </div>
                <div className='w-full h-30vh grid place-items-center my-4 md:w-1/2 md:h-90vh'>
                    <div className='w-3/5 h-full border-4 border-cyan-800 border-solid rounded-lg overflow-hidden md:h-50vh 2xl:h-2/5'>
                        <img src={block.image} alt={block.image === Crypto ? "Crypto" : "Blockchain"} className='w-full h-full object-contain'/>
                    </div>
                </div>
                <div className='w-full h-20vh grid place-items-center md:w-1/2 md:flex md:flex-col md:justify-center md:items-center md:h-90vh'>
                    <h1 className={`hidden md:inline text-4xl mb-8 after:content[""] after:block after:w-full after:h-1px after:bg-cyan-800 text-cyan-800 font-bold ${block.classSelf} ${block.classMargin}`}>{block.title}</h1>
                    <p className='text-cyan-800 text-center w-4/5 text-sm md:text-base font-bold 2xl:text-lg'>{block.text}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Blocks