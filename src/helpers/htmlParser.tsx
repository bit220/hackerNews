import { DOMNode, Element, HTMLReactParserOptions } from 'html-react-parser'

export const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
        if (
            domNode instanceof Element &&
            domNode.attribs &&
            domNode.attribs.class === 'remove'
        ) {
            return <></>
        }
    },
}
