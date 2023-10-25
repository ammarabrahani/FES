import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export default function BlogPagination() {
  const perPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const itemsForCurrentPage = blogData.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div>
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(blogData.length / perPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
}
