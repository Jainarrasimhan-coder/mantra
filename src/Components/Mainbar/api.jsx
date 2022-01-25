import axios from "axios";
const url = "https://demo7303877.mockable.io/";

const fetchData = async () => {
    try {
        const { data: { products, filters, sortOptions, totalCount } } = await axios.get(url);
        return {
            filters,
            products,
            sortOptions,
            totalCount,
        }
    }
    catch (err) {

    }
}
