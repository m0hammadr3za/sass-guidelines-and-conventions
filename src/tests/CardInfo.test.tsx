import { render, screen } from "@testing-library/react";
import CardInfo from "../components/CardInfo";

const mockData = {
    title: "Card Info Title",
    description: "Card Info Description",
};

const renderCardInfo = () => {
    render(<CardInfo title={mockData.title} description={mockData.description} />);
};

// Smoking test
it("should redner without any errors", renderCardInfo);

// Unit tests
describe("CardInfo", () => {
    beforeEach(renderCardInfo);

    it("should have the right title", () => {
        const title = screen.getByText(mockData.title);
        expect(title).toBeInTheDocument();
    });

    it("should have the right description", () => {
        const description = screen.getByText(mockData.description);
        expect(description).toBeInTheDocument();
    });
});
