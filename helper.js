function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * listPerPage;
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

// Helper function to format date to YYYY-MM-DD
function formatDate(dateString) {
  const parts = dateString.split('-');
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

module.exports = {
  getOffset,
  emptyOrRows,
  formatDate
}
