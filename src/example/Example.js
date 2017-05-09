import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactHover from '..'
import HoverComponent from './HoverComponent'
import TriggerComponent from './TriggerComponent'
import cssStyles from './Example.css';

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0
}

class App extends Component {

  render () {

     if (!document.getElementsByTagName('head')[0].querySelector('style[id="react-hover-example"]')) {
      // insert the style into the head
      let tag = document.createElement('style')
      tag.id = 'react-hover-example'
      tag.innerHTML = cssStyles
      document.getElementsByTagName('head')[0].appendChild(tag)
    }

    return (
      <div>
        <section className='react-hover-example'>
          <h4 className='title'>React Hover</h4>
          <div className='demonstration'>
            <ReactHover
              options={optionsCursorTrueWithMargin}>
              <ReactHover.Trigger>
                ◕‿‿◕
              </ReactHover.Trigger>
              <ReactHover.Hover>
                <span>Hello<br />multiline<br />tooltip</span>
              </ReactHover.Hover>
            </ReactHover>
          </div>
          <pre style={{margin: '0 auto'}}>{`
            <ReactHover
              options={optionsCursorTrueWithMargin}>
              <ReactHover.Trigger>
                <TriggerComponent />
              </ReactHover.Trigger>
              <ReactHover.Hover>
                <HoverComponent />
              </ReactHover.Hover>
              </ReactHover>`}
          </pre>
          <ReactHover
            options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger>
              <TriggerComponent />
            </ReactHover.Trigger>
            <ReactHover.Hover>
              <HoverComponent />
            </ReactHover.Hover>
          </ReactHover>
        </section>

        <p style={{margin: '0 auto'}}> 2. Use HTML as trigger and hover </p>
        <pre style={{margin: '0 auto'}}>{`
          <ReactHover
            options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger>
              <h1 style={{background: '#abbcf1', width: '200px'}}> Hover on me </h1>
            </ReactHover.Trigger>
            <ReactHover.Hover>
              <h1> I am hover HTML </h1>
            </ReactHover.Hover>
          </ReactHover>`}
        </pre>
        <ReactHover
          options={optionsCursorTrueWithMargin}>
          <ReactHover.Trigger>
            <h1 style={{background: '#abbcf1', width: '200px'}}> Hover on me </h1>
          </ReactHover.Trigger>
          <ReactHover.Hover>
            <h1> I am hover HTML </h1>
          </ReactHover.Hover>
        </ReactHover>

      </div>
    )
  }
}

const appRoot = document.createElement('div')
appRoot.id = 'app'
document.body.appendChild(appRoot)

render(<App />, appRoot)
