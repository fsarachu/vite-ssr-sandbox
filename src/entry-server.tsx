import React from 'react'
import {type RenderToPipeableStreamOptions, renderToPipeableStream} from 'react-dom/server'
import App from './App'

export function render(_url: string, _ssrManifest?: string, options?: RenderToPipeableStreamOptions, pageData?: Record<string, unknown>) {
    console.log('Hello from server')

    return renderToPipeableStream(
        <React.StrictMode>
            <App pageData={pageData}/>
        </React.StrictMode>,
        options
    )
}
