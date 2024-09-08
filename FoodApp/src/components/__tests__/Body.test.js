import { act } from "react";
import MOCK_DATA from "../mocks/mockResList.json"
import { fireEvent, render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import "@testing-library/jest-dom"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../ReduxStore/appStore";

global.fetch=jest.fn(()=>{
    return Promise.resolve(
       {
        json:()=>{
          return  Promise.resolve(MOCK_DATA);
        }
       }
    )
})

it("Should search res list for search of burger",async ()=>{

    await act(async()=>{

        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        )

    })

    
    const cardsBeforeFilter=screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(25);

    const searchBtn=screen.getByRole("button",{name:"Search"});

    const searchInput=screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target:{value:"sweet"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch=screen.getAllByTestId("resCard");

    expect(cardsAfterSearch?.length).toBe(2);

 
})

it("Should show 20 top rated restaurants on click of top rated button",async()=>{

    await act(async()=>{
        render(<BrowserRouter>
        <Body/>
        </BrowserRouter>)
    })

    const topRatedBtn=screen.getByRole("button",{name:"Top Rated"});

    fireEvent.click(topRatedBtn);
    const cardsAfterClick=screen.getAllByTestId("resCard");

    expect(cardsAfterClick?.length).toBe(22);
})

