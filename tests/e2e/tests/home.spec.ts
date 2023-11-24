describe("The Home Page", () => {
	it("successfully loads", () => {
		cy.visit("/");
		cy.findByRole("heading", {
			name: /CHARACTER LIST/i,
		}).should("exist");
	});
});
