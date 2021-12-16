export const addLineNumbers = (block) => {
  const codeEl = block.children;

  if (!codeEl) {
    return block;
  }

  const tableEl = document.createElement("table");
  tableEl.classList.add("code-block");

  Array.from(codeEl).forEach((line, i, arr) => {
    if (i === arr.length - 1 && !line.textContent) return;

    const trEl = document.createElement("tr");
    const numberCell = document.createElement("td");
    const codeCell = document.createElement("td");

    numberCell.textContent = i + 1;
    codeCell.append(line);
    trEl.appendChild(numberCell);
    trEl.appendChild(codeCell);

    tableEl.appendChild(trEl);
  });

  return tableEl;
};
