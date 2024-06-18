import Blogs from "../components/Blogs";
import Header from "../components/Header"
import { useLocation, useNavigation } from "react-router-dom"
import Pagination from "../components/Pagination";
const CategoryPage = ()=>{
    const navigation = useNavigation();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    return(
        <div>
            <Header/>
            <div>
                <button onClick={() => navigation(-1)}
                >
                    back
                </button>
                <h2>
                    Blogs On <span>{category}</span>
                </h2>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    )
}
export default CategoryPage;