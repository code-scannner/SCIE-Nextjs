import React, { Component } from 'react'
import PropTypes from "prop-types";


export class card extends Component {
    static propTypes = {
        name: PropTypes.string
      };
  render() {
    return (
      <div>
<div class="container mt-32 mx-auto p-4 md:p-0">
  
  <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
    
    <div class="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative" style={{backgroundImage:`url("https://images.unsplash.com/photo-1588856122867-363b0aa7f598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3RhcnR1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`}}>
      <div class="absolute text-xl">
        <i class="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
      </div>
    </div>
    
    <div class="bg-white w-full md:w-2/3">
      <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
        <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
          <div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
            <h3 className='font-bold uppercase'>{this.props.name}</h3>
            <p class="mb-0 mt-3 text-grey-dark text-sm italic">NIT Delhi</p>
            <hr class="w-1/4 md:ml-0 mt-4  border lg:hidden"/>
          </div>
          
          <div class="w-full lg:w-3/5 lg:px-3">
            <p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, ipsa! Saepe, alias minus! Odit, ullam! Nisi beatae, iure, veniam in libero provident possimus omnis assumenda incidunt laudantium quia iusto? Excepturi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, ipsa! Saepe, alias minus! Odit, ullam! Nisi beatae, iure, veniam in libero provident possimus omnis assumenda incidunt laudantium quia iusto? Excepturi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, ipsa! Saepe, alias minus! Odit, ullam! Nisi beatae, iure, veniam in libero provident possimus omnis assumenda incidunt laudantium quia iusto? Excepturi.
            </p>
          </div>
          
          <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
            <button class="bg-white hover:bg-gray-400 border border-solid border-grey w-1/3 lg:w-full py-2">Visit now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}

export default card