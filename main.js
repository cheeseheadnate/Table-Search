document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".search-input").forEach((inputField) => {
    const tableRows = inputField.closest("table").querySelectorAll("tbody tr");

    const headerCell = inputField.closest("th");

    const otherHeaderCells = inputField.closest("tr").querySelectorAll("th");

    const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell);

    const searchableCells = Array.from(tableRows).map(
      (row) => row.querySelectorAll("td")[columnIndex]
    );

    inputField.addEventListener("input", () => {
      const searchQuery = inputField.value.toLowerCase();

      for (const tableCell of searchableCells) {
        const row = tableCell.closest("tr");
        const value = tableCell.textContent.toLowerCase().replace(",", ""); // $1,241 => $1241

        row.style.visibility = null;

        if (value.search(searchQuery) === -1) {
          row.style.visibility = "collapse";
        }
      }
    });

    console.log(tableRows);
    console.log(headerCell);
    console.log(otherHeaderCells);
    console.log(columnIndex);
    console.log(searchableCells);
  });
});
