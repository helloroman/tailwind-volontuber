import { graphql } from 'gatsby';
import React from 'react';
import HandshakeIcon from 'assets/handshake.svg';

const HomePage = ({ data }) => {
  return (
    <div className="flex items-center justify-center bg-gray-300 h-screen">
      <div
        className="bg-white rounded-xl
     w-phone h-phone pt-2 px-8 flex flex-col items-center shadow-xl"
      >
        <img alt="" src={data.imageSharp.original.src} />
        <div className="mt-4">
          <p className="text-xs text-gray-500 font-semibold">Enjoy Coffee House</p>
          <h1 className="text-2xl font-semibold mt-1 mb-4">Big Caffè Latte 400ml</h1>
          <p className="text-sm">Taste our coffee appreciated by buyers from all over the world. Made from carefully selected finest beans.</p>
        </div>
        <div className="rounded bg-gray-100 flex justify-between items-center w-full mt-6 mb-10 px-2 py-6">
          <div>
            <div className="flex justify-start items-center">
              <HandshakeIcon />
              <span className="font-bold ml-2">2 x 175</span>
            </div>
            <span className="text-xs text-gray-500 font-semibold">You&apos;ll have 1415 left</span>
          </div>
          <div className="flex w-1/2 justify-between items-center">
            <button className="shadow-lg w-12 h-12 rounded-full bg-white text-black font-bold flex justify-center items-center text-2xl">-</button>
            <p className="text-2xl font-bold">2</p>
            <button className="shadow-lg w-12 h-12 rounded-full bg-white text-black font-bold flex justify-center items-center text-2xl">+</button>
          </div>
        </div>
        <button className="w-full py-4 bg-yellow-400 font-bold text-sm rounded-lg">Redeem 350 handshakes</button>
      </div>
    </div>
  );
};

export const query = graphql`
  query Coffee {
    imageSharp {
      original {
        src
      }
    }
  }
`;

export default HomePage;
