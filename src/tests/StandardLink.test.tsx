import { render, screen } from "@testing-library/react";
import StandardLink from "../components/StandardLink";

const mockData = {
    href: "standard-link.com",
    text: "Standar Link Text",
};

const renderStandardLink = () => {
    render(<StandardLink href={mockData.href} text={mockData.text} />);
};

// Smoking test
it("should redner without any errors", renderStandardLink);

// Unit tests
describe("StandardLink", () => {
    beforeEach(renderStandardLink);

    it("should have the right href value in a tag", () => {
        const image = screen.getByRole("link");
        expect(image).toHaveAttribute("href", mockData.href);
    });

    it("should have the right text", () => {
        const title = screen.getByText(mockData.text);
        expect(title).toBeInTheDocument();
    });
});
