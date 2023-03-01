import React, { Component } from 'react'
import PropTypes from "prop-types";


export class card extends Component {
    static propTypes = {
        src: PropTypes.string,
        heading: PropTypes.string,
        heading2: PropTypes.string,
        button: PropTypes.string,
        width: PropTypes.string,
        btn: PropTypes.string,
        content: PropTypes.string,
        link: PropTypes.string
      };

  render() {
    return (
      <div>
        <div class={`max-w-${this.props.width} bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-3 text-center`}>
        <img class="rounded-t-lg" src={this.props.src} alt="" />
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{this.props.heading}</h5>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{this.props.heading2}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{this.props.content}</p>
        {this.props.btn=="true"?(<a href={this.props.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target="_blank">
            {this.props.button}
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>):""}
    </div>
</div>
      </div>
    )
  }
}

card.defaultProps = {
  button: "Read More",
  width: "sm"
}

export default card
