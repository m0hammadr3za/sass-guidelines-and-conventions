import { render, screen } from "@testing-library/react";
import HorizontalCard from "../components/HorizontalCard";

const mockData = {
    imageSrc: "horizontal-card-image.jpg",
    title: "Horizontal Card Title",
    description: "Horizontal Card Description",
};

const renderHorizontalCard = () => {
    render(
        <HorizontalCard imageSrc={mockData.imageSrc} title={mockData.title} description={mockData.description} hideInfoOnLarge={false} />
    );
};

// Smoking test
it("should redner without any errors", renderHorizontalCard);

// Unit and integration tests
describe("HorizontalCard", () => {
    beforeEach(renderHorizontalCard);

    it("should have the right src value in img tag", () => {
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src", mockData.imageSrc);
    });

    it("should have the right title", () => {
        const title = screen.getByText(mockData.title);
        expect(title).toBeInTheDocument();
    });

    it("should have the right description", () => {
        const description = screen.getByText(mockData.description);
        expect(description).toBeInTheDocument();
    });

    it("should NOT have the related ClassNames that hides info when hideInfoOnLarge is false", () => {
        const infoElement = screen.getByTestId("horizontal-card-info");
        expect(infoElement).not.toHaveClass("horizontal-card__info--hide-on-large");
    });
});

it("should have the related ClassNames that hides info when hideInfoOnLarge is true", () => {
    render(
        <HorizontalCard imageSrc={mockData.imageSrc} title={mockData.title} description={mockData.description} hideInfoOnLarge={true} />
    );
    const infoElement = screen.getByTestId("horizontal-card-info");
    expect(infoElement).toHaveClass("horizontal-card__info--hide-on-large");
});
