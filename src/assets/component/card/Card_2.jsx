import React from 'react';

const Card_2 = () => {
    return (
        <div>
             <div className="card-section">
          <div className="card bg-linear-to-r from-[#54CF68] to-[#00827A] text-center text-white grid grid-cols-3 items-center">
             <div>
                <img src="/img/vector1.png" alt="" />
                </div>
            <div className="title">
            <p className='text-xl'>Resolved</p>
            <h1 className='text-[60px]'>0</h1>
            </div>
            <div className="transform scale-x-[-1]"> 
              <img src="/img/vector1.png" alt="" />
              </div>
          </div>
          <div className="card"></div>
        </div>
        </div>
    );
};

export default Card_2;