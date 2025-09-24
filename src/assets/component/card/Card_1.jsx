import React from 'react';

const Card_1 = () => {
    return (
        <div>
            <div className="card-section">
          <div className="card bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-center text-white grid grid-cols-3 items-center">
              <div>
                <img src="/img/vector1.png" alt="" />
                </div>
            <div className="title">
            <p className='text-xl'>In-Progress</p>
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

export default Card_1;