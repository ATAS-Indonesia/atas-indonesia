// @ts-ignore
export function parseCSV(csvText, headersRow = 0) {
  const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
  
  // if headersRow is 0, select the first row, else do a loop to select all first `headersRow` rows
  let headers = [];
  if (headersRow > 0) {
    const headerRows = rows.slice(0, headersRow);
    for (const h of headerRows) {
      headers.push(...h.split(",").map((header: string) => cleanHeader(header)));
    }
  } else {
    headers = rows[0].split(",").map((header: string) => cleanHeader(header));
  }

  const data = []; // Initialize an array to store parsed data
  for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split(","); // Split the row, handling '\r' characters
    const rowObject = {};
    for (let j = 0; j < headers.length; j++) {
      // @ts-ignore
      rowObject[headers[j]] = rowData[j];
    }
    data.push(rowObject);
  }
  return data;
}

// @ts-ignore
export function parseTSV(tsvText, headersRow = 0) {
  const rows = tsvText.split(/\r?\n/);
  
  let headers = [];
  if (headersRow > 0) {
    const headerRows = rows.slice(0, headersRow);
    for (const h of headerRows) {
      headers.push(...h.split("\t").map((header: string) => cleanHeader(header)));
    }
  } else {
    headers = rows[0].split("\t").map((header: string) => cleanHeader(header));
  }

  const data = [];
  for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split("\t");
    const rowObject = {};
    for (let j = 0; j < headers.length; j++) {
      // @ts-ignore
      rowObject[headers[j]] = rowData[j];
    }
    data.push(rowObject);
  }
  return data;
}

function cleanHeader(header: string) {
  return header.trim().replace(/^"+|"+$/g, "").replace(/^\s+|\s+$/g, "");
}