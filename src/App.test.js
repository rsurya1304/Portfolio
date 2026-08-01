import { render, screen } from "@testing-library/react";
import Resume from "./components/Resume";

test("renders local resume download and preview", () => {
  render(<Resume />);

  const downloadLink = screen.getByRole("link", {
    name: /download resume/i,
  });

  expect(downloadLink).toHaveAttribute("href", "/resume.pdf");
  expect(downloadLink).toHaveAttribute("download");

  const previewFrame = screen.getByTitle("Resume");

  expect(previewFrame).toHaveAttribute("src", "/resume.pdf");
  expect(previewFrame).toHaveClass("resume__frame");
});
