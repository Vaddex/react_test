// src/App.jsx

// import { Product } from '../components/Product';
import { FavouriteBooks } from '../components/FavouriteBooks';
import { BookList } from '../components/BookList';

// export default function App() {
//     return (
//         <div>
//             <h1>Best selling</h1>

//             <Product
//                 name="Tacos With Lime"
//                 imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//                 price={10.99}
//             />
//             <Product
//                 name="Fries and Burger"
//                 imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//                 price={14.29}
//             />
//         </div>
//     );
// }

export const App = () => {
    return (
        <>
            <h1>Books of the week</h1>
            <BookList books={FavouriteBooks} />
        </>
    );
};
