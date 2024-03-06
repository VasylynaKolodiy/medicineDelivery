import './SidebarCategories.scss'
import {ICategories} from "../../models/Interfaces";
import {FC} from "react";

interface ISidebarCategories {
  categories: ICategories[],
  setCatName: (name: string) => void,
  catName: string,
  setPageNumber: (page: number) => void,
}

const SidebarCategories: FC<ISidebarCategories> = ({categories, catName, setCatName, setPageNumber}) => {

  const changeCategory = (category: string) => {
    setPageNumber(1);
    setCatName(category)
  }

  return (
    <aside className='sidebar'>
      <h4 className='sidebar__title'>Categories:</h4>
      {categories.map((category) =>
        <div
          className={`sidebar__category ${catName === category.name ? 'active' : ''}`}
          onClick={() => changeCategory(category.name)}
          key={category._id}
        >
          {category.name !== '' ? category.name : 'all products'}
        </div>
      )}
    </aside>
  );
};

export default SidebarCategories;