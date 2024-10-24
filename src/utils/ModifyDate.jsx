// export const ModifyDate =(deliveryDate)=>{
//     const delivery_date_m = deliveryDate.split('-').reverse();
//     const modify = deliveryDate ? delivery_date_m[1]+ '/'+ delivery_date_m[0] + '/'+ delivery_date_m[2] : ''
//    return modify


// }
export const ModifyDate = (deliveryDate) => {
    if (!deliveryDate) return '';
    
    const [year, month, day] = deliveryDate.split('-');
    return `${month}/${day}/${year}`; // MM/DD/YYYY format
};



// const useFormattedDate = (deliveryDate) => {
//     const [formattedDate, setFormattedDate] = useState('');

//     useEffect(() => {
//         if (deliveryDate) {
//             const dateObj = new Date(deliveryDate);
//             const mm = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-based
//             const dd = String(dateObj.getDate()).padStart(2, '0');
//             const yyyy = dateObj.getFullYear();
//             setFormattedDate(`${mm}/${dd}/${yyyy}`);
//         } else {
//             setFormattedDate('');
//         }
//     }, [deliveryDate]);

//     return formattedDate;
// };

// export default useFormattedDate;
