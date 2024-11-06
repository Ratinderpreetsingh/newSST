// import React, { useState, useCallback, useEffect } from "react";
// import "./DropDownCss.css";
// import useDebounce from "./Debouncing";  // Assuming this is a custom hook for debouncing
// import { useGetAllShopsNameQuery } from "../redux/QueryAPi/shopApi";

// const useDropDownSearch = (setFieldValue, name) => {
//   const [searchQuery, setSearchQuery] = useState("");  // State to track input
//   const [shopId, setShopId] = useState(null);  // Selected shop ID
//   const [shopName, setShopName] = useState(null);  // Selected shop name
//   const [isFilled, setFilled] = useState(false);  // Indicates if dropdown is filled

//   // Handle input change
//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);  // Update search query when user types
//   };

//   const debouncevalue = useDebounce(searchQuery, 300);  // Debounce search input for performance

//   // Fetch shop list based on debounced search term
//   const { data: shopList, error, isLoading } = useGetAllShopsNameQuery(debouncevalue);

//   // Handle selection of a shop
//   const handleAdd = useCallback(
//     (item) => {
//       if (item) {
//         setShopId(item.psg_id);  // Set the shop ID
//         setShopName(item.shop_name);  // Set the shop name
//         setFieldValue(name, item.shop_name);  // Update Formik field value immediately
//         setSearchQuery(item.shop_name);  // Optionally update the search query with the selected shop name
//         setFilled(true);  // Mark the dropdown as filled (selected)
//       }
//     },
//     [setFieldValue, name]  // Dependencies of useCallback
//   );

//   // Handle blur event on input (when user clicks outside input)
//   const handleBlur = () => {
//     if (!searchQuery.trim()) {
//       setFilled(false);  // Close the dropdown if input is empty
//     }
//   };

//   // Return the Dropdown component
//   const DropDown = () => {
//     return (
//       <div className="dropdown-container">
//         <input
//           type="text"
//           id="searchQuery"
//           className="dropdown-search-input"
//           name="searchQuery"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           onBlur={handleBlur}  // Close dropdown when input loses focus
//           placeholder="Search shops..."
//           aria-describedby="searchQuery"
//         />

//         {/* Loading and Error states */}
//         {isLoading ? (
//           <ul className="dropdown-list">
//             <li className="dropdown-item">Loading...</li>
//           </ul>
//         ) : error ? (
//           <ul className="dropdown-list">
//             <li className="dropdown-item">Error loading results</li>
//           </ul>
//         ) : (
//           <ul
//             className="dropdown-list"
//             role="listbox"
//             aria-label="Dropdown items"
//           >
//             {shopList?.data?.length > 0 ? (
//               shopList.data.map((item, index) => (
//                 <li
//                   key={item.psg_id || index}  // Use psg_id if available for key
//                   className="dropdown-item"
//                   role="option"
//                   onClick={() => handleAdd(item)}  // Handle item selection
//                 >
//                   {item.shop_name}
//                 </li>
//               ))
//             ) : (
//               <li className="dropdown-item">No results found</li>
//             )}
//           </ul>
//         )}
//       </div>
//     );
//   };

//   return {
//     DropDown,
//     shopId,
//     shopName,
//     isFilled,
//     setFilled,
//     search: debouncevalue,  // Return the debounced value for the search query
//   };
// };

// export default useDropDownSearch;
// import { useEffect, useRef, useState } from "react";
// export const useForm = (initialValues) => {
//     const [values, setValues] = useState(initialValues);
//     const handleChange = (e) =>
//       setValues({ ...values, [e.target.name]: e.target.value });
  
//     return [values, handleChange];
//   };
// const SearchableDropdown = ({
//   options,
//   label,
//   id,
//   selectedVal,
//   handleChange
// }) => {
//   const [query, setQuery] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const inputRef = useRef(null);

//   useEffect(() => {
//     document.addEventListener("click", toggle);
//     return () => document.removeEventListener("click", toggle);
//   }, []);

//   const selectOption = (option) => {
//     setQuery(() => "");
//     handleChange(option[label]);
//     setIsOpen((isOpen) => !isOpen);
//   };

//   function toggle(e) {
//     setIsOpen(e && e.target === inputRef.current);
//   }

//   const getDisplayValue = () => {
//     if (query) return query;
//     if (selectedVal) return selectedVal;

//     return "";
//   };

//   const filter = (options) => {
//     return options.filter(
//       (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
//     );
//   };

//   return (
//     <div className="dropdown">
//       <div className="control">
//         <div className="selected-value">
//           <input
//             ref={inputRef}
//             type="text"
//             value={getDisplayValue()}
//             name="searchTerm"
//             onChange={(e) => {
//               setQuery(e.target.value);
//               handleChange(null);
//             }}
//             onClick={toggle}
//           />
//         </div>
//         <div className={`arrow ${isOpen ? "open" : ""}`}></div>
//       </div>

//       <div className={`options ${isOpen ? "open" : ""}`}>
//         {filter(options).map((option, index) => {
//           return (
//             <div
//               onClick={() => selectOption(option)}
//               className={`option ${
//                 option[label] === selectedVal ? "selected" : ""
//               }`}
//               key={`${id}-${index}`}
//             >
//               {option[label]}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SearchableDropdown;

  