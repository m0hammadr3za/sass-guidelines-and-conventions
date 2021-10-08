import { render, screen } from "@testing-library/react";
import SectionTitle from "../components/SectionTitle";

const mockData = {
    title: "Section Title",
    description: "Section Description",
};

const renderSectionTitle = () => {
    render(<SectionTitle title={mockData.title} description={mockData.description} />);
};

// Smoking test
it("should redner without any errors", renderSectionTitle);

// Unit tests
describe("SectionTitle", () => {
    beforeEach(renderSectionTitle);

    it("should have the right title", () => {
        const title = screen.getByRole("heading");
        expect(title.textContent).toBe(mockData.title);
    });

    it("should have the right description", () => {
        const description = screen.getByText(mockData.description);
        expect(description).toBeInTheDocument();
    });
});
