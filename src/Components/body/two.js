import { Rerousel } from 'rerousel';
import { useRef } from 'react';
import styled, { css } from 'styled-components';
import React from 'react';
import Slider from 'infinite-react-carousel';

export default function Technology() {
    const ref = useRef(null);

    const Item = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(100%/4);
      height: 100px;
      font-family: Signika;
      font-weight: bold;
      font-size: 1.5em;
      border: none;
      background-color: transparent;
      animation: moveSlideshow 12s linear infinite;
      `;

    return (
        <div className=" border-t border-gray-400 mx-12">
                <div className=" w-5/5">
                    <p className="flex justify-end w-5/5 font-sans 
                        text-black text-xl leading-none font-bold tracking-wider uppercase
                        ml-0 mr-0 pl-0 pt-14">
                        <span className="border-t-2 border-black pt-3">Technology</span>
                    </p>
                </div>
            <div className="w-5/5">
                
            </div>
            <div className="w-full grid grid-cols-8"> 
                {/* <div class="slider w-full">
                    <div class="slide-track w-full">
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

