import { fireEvent, render,screen } from "@testing-library/react"
const { Provider } = require("react-redux")
const { BrowserRouter } = require("react-router-dom")
const { default: appStore } = require("../../ReduxStore/appStore")
const { default: Header } = require("../Header")
import "@testing-library/jest-dom"


describe("should test header",()=>{

  // beforeAll(()=>{
  //   console.log("Before all");
  // })

  // beforeEach(()=>{
  //   console.log("before each");
  // })

  // afterAll(()=>{
  //   console.log("after all");
  // })

  // afterEach(()=>{
  //   console.log("after each");
  // })
  
    it("should render login button",()=>{

        render(
            <BrowserRouter>
              <Provider store={appStore}>
                <Header/>
              </Provider>
            </BrowserRouter>
        )

        const loginButton= screen.getByRole("button",{name:"Log in"});

        expect(loginButton).toBeInTheDocument();
    })

    it("Shold render cart by )",()=>{
        render(
            <BrowserRouter>
              <Provider store={appStore}>
                <Header/>
              </Provider>
            </BrowserRouter>
        )

        const cart=screen.getByText("0")

        expect(cart).toBeInTheDocument();
    })

    it("Should change login to logout on click",()=>{


        render(
            <BrowserRouter>
              <Provider store={appStore}>
                <Header/>
              </Provider>
            </BrowserRouter>
        )

        const loginButton=screen.getByRole("button",{name:"Log in"});

        fireEvent.click(loginButton);

        const logOutButton=screen.getByRole("button",{name:"Log out"});

        expect(logOutButton).toBeInTheDocument();

    })
})