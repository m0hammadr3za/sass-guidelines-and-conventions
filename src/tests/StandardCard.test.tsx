import { render, screen } from "@testing-library/react";
import StandardCard from "../components/StandardCard";

const mockData = {
    imageSrc: "standard-card-image.jpg",
    title: "Standard Card Title",
    description: "Standard Card Description",
};

const renderStandardCard = () => {
    render(<StandardCard imageSrc={mockData.imageSrc} title={mockData.title} description={mockData.description} />);
};

// Smoking test
it("should redner without any errors", renderStandardCard);

// Unit and integration tests
describe("StandardCard", () => {
    beforeEach(renderStandardCard);

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
});
