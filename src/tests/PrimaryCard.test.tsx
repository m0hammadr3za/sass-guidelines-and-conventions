import { render, screen } from "@testing-library/react";
import PrimaryCard from "../components/PrimaryCard";

const mockData = {
    imageSrc: "primary-card-image.jpg",
    title: "Primary Card Title",
    description: "Primary Card Description",
};

const renderPrimaryCard = () => {
    render(<PrimaryCard imageSrc={mockData.imageSrc} title={mockData.title} description={mockData.description} />);
};

// Smoking test
it("should redner without any errors", renderPrimaryCard);

// Unit tests
describe("PrimaryCard", () => {
    beforeEach(renderPrimaryCard);

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
