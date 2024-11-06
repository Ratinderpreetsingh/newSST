import moment from "moment";

export const ModifyDate = (deliveryDate) => {
    if (!deliveryDate) return '';
    
    const [year, month, day] = deliveryDate.split('-');
    return `${month}/${day}/${year}`; // MM/DD/YYYY format
};

export const ChangeDate = (deliveryDate) => {
    console.log(deliveryDate)
    return moment(deliveryDate).format('YYYY-MM-DD')
};
