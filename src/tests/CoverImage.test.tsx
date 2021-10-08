import { render, screen } from "@testing-library/react";
import CoverImage from "../components/CoverImage";

const mockData = {
    src: "cover-imgage.jpg",
    alt: "Cover Image Alternative Text",
};

const renderCoverImage = () => {
    render(<CoverImage src={mockData.src} alt={mockData.alt} />);
};

// Smoking test
it("should redner without any errors", renderCoverImage);

// Unit tests
describe("CoverImage", () => {
    beforeEach(renderCoverImage);

    it("should have the right src value in img tag", () => {
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src", mockData.src);
    });

    it("should have the right alt value in img tag", () => {
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("alt", mockData.alt);
    });
});
