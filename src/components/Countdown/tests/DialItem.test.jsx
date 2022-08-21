import DialItem from "../DialItem"
import { render, screen } from "@testing-library/react"

describe('DialItem', () => { 
    it('should match snapshot',() => {
        render( <DialItem title="test" numbers={5} /> )

        expect(screen.getByRole("dialitem")).toMatchSnapshot();
    })

    it('should render string "05"', () =>{
        render( <DialItem title="test" numbers={5}/> )

        expect(screen.getByRole("dialitem")).toHaveTextContent('05');
    })

    it('should render title "test"',() => {
        render( <DialItem title="test" numbers={5}/> )

        expect(screen.getByRole("dialitem")).toHaveTextContent('test');
    })

    it('should have extra classes for isLast = false',() => {   
        render( <DialItem title="test" numbers={5}/> )

        expect(screen.getByRole("dialitem")).toHaveClass("after:absolute after:text-2xl after:content-[':'] after:absolute after:right-0 after:bottom-0 relative")
    })
    
    it('should not have extra classes for isLast = true',() => {
        render( <DialItem title="test" numbers={5} isLast={true}/> )

        expect(screen.getByRole("dialitem")).not.toHaveClass("after:absolute after:text-2xl after:content-[':'] after:absolute after:right-0 after:bottom-0 relative")        
    })
 })