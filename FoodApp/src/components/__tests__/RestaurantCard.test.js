import { render ,screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"


it("should render Restaurant Card component with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name=screen.getByText("Kannur Food Point");

    expect(name).toBeInTheDocument();
})

it("Should load Restaurant Card with promoted lable",()=>{

    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
   
    render(<RestaurantCardPromoted resData={MOCK_DATA}/>);

    const promoted=screen.getByText("Promoted");

    expect(promoted).toBeInTheDocument();

})