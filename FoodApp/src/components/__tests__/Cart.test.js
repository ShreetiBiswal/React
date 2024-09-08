import { act } from "react";
import MOCK_DATA from "../mocks/mockResMenu.json"
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../ReduxStore/appStore";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";

global.fetch=()=>{
    return Promise.resolve(
        {
            json:()=>{
                return Promise.resolve(MOCK_DATA);
            }
        }
    )
}

describe("Checking the various function in a restaurant menu",()=>{

    it("Should render items list when clicked on accordian header",async()=>{

        await act(async()=>{
            render(<Provider store={appStore}>
                <RestaurantMenu/>
            </Provider>)
        })

        let accordianHeader=screen.getByText("Starters(45)");

        expect(accordianHeader).toBeInTheDocument();

        fireEvent.click(accordianHeader);

        let items=screen.getAllByTestId("item");

        expect(items.length).toBe(45);
        
        accordianHeader=screen.getByText("Pastas(4)");

        fireEvent.click(accordianHeader);

        items=screen.getAllByTestId("item");

        expect(items.length).toBe(4);
        
    })

    it("Should update cart number", async()=>{

        await act(async()=>{

            render(<BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
            </BrowserRouter>)
        })

        let cartItems=screen.getByText("0");
        
        expect(cartItems).toBeInTheDocument();
        const pastas=screen.getByText("Pastas(4)");
        fireEvent.click(pastas);
        
        const addBtns=screen.getAllByRole("button",{name:"+Add"});
        fireEvent.click(addBtns[0]);

        fireEvent.click(addBtns[1]);
        cartItems=screen.getByText("2");

        expect(cartItems).toBeInTheDocument();
    })

    it("Should render items onto cart and remove also update cart no",async()=>{

        await act(async()=>{
            render(<BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
                </Provider></BrowserRouter>)
        })

        fireEvent.click(screen.getByRole("button",{name:"Empty cart"}))
        expect(screen.getByText("0")).toBeInTheDocument();
        const accordianHeader=screen.getByText("Egg Preparations(3)");
        fireEvent.click(accordianHeader);
        let items=screen.getAllByTestId("item");
        expect(items.length).toBe(3);
        const addBtns=screen.getAllByRole("button",{name:"+Add"});
        fireEvent.click(addBtns[0]);
        fireEvent.click(addBtns[1]);
        items=screen.getAllByTestId("item");
        expect(items.length).toBe(5);
        expect(screen.getByText("2")).toBeInTheDocument();
        const removeBtns=screen.getAllByRole("button",{name:"-Remove item"})      
        expect(removeBtns.length).toBe(2);
        fireEvent.click(removeBtns[0]);
        expect(screen.getByText("1")).toBeInTheDocument();
        items=screen.getAllByTestId("item");
        expect(items.length).toBe(4);
    })

})