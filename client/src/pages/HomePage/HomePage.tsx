import { useState } from 'react';
import Pagination from "@mui/material/Pagination";
import {
  useFilterProductsByCategoryQuery,
  useGetCategoriesQuery,
} from '../../store/products/products.api'
import ProductsList from "../../components/ProductsList/ProductsList";
import './HomePage.scss'
import { LIMIT } from "../../constants";
import SidebarCategories from "../../components/SidebarCategories/SidebarCategories";
import { Autocomplete, TextField } from "@mui/material";

const HomePage = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [catName, setCatName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { isFetching, data: products } = useFilterProductsByCategoryQuery({ catName: catName, pageNumber: pageNumber });
  let filteredProducts = products?.data || [];

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const TOTAL_COUNT = products?.totalCount || 0;
  let countOfPages = TOTAL_COUNT && Math.ceil(Number(TOTAL_COUNT) / LIMIT);
  const { data: categories = [] } = useGetCategoriesQuery(null, { refetchOnMountOrArgChange: true });
  const [selectedOption, setSelectedOption] = useState(null);
  const sortingOptions = [
    { label: 'Name', name: 'name' },
    { label: 'Price', name: 'price' },
    { label: 'Date', name: 'dateAdded' },
  ];

  const handleSortChange = (event, value) => {
    setSelectedOption(value);
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedOption?.name === 'name') {
      return a.title.localeCompare(b.title);
    } else if (selectedOption?.name === 'price') {
      return a.price - b.price;
    } else {
      return 0;
    }
  });

  return (
      <main className='homePage'>
        <div className='homePage__inner'>
          <SidebarCategories
              categories={categories}
              catName={catName}
              setCatName={setCatName}
              setPageNumber={setPageNumber}
          />

          {isFetching ? (
              <h2>Loading...</h2>
          ) : (
              <div className='homePage__list'>
                <div className='homePage__inputs'>
                  <div className='homePage__search'>
                    <TextField
                        id="search"
                        label="Search"
                        variant="outlined"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className='homePage__sort'>
                    <Autocomplete
                        disablePortal
                        id="sort"
                        options={sortingOptions}
                        onChange={handleSortChange}
                        value={selectedOption}
                        getOptionLabel={(option) => option.label}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Sort by..." />}
                    />
                  </div>
                </div>

                <ProductsList
                    productsState={sortedProducts}
                    setCatName={setCatName}
                    setPageNumber={setPageNumber}
                />

                {countOfPages && (
                    <Pagination
                        className='pagination'
                        count={Number(countOfPages)}
                        size="large"
                        page={pageNumber}
                        onChange={(event, value) => setPageNumber(value)}
                    />
                )}
              </div>
          )}
        </div>
      </main>
  );
};

export default HomePage;
