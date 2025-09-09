import axios from "axios"
import type { CompanySearch } from "./company"

interface SearchResponse {
    data: CompanySearch[];

}

export const searchCompanies = async (query: string) => {
    let apiKey = import.meta.env.VITE_APP_API_KEY;
    try {
        const data = await axios.get<SearchResponse>(`https://financialmodelingprep.com/stable/search-name?query=${query}&apikey=${apiKey}`);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        }
        else {
            console.log("unexpected error: ", error);
            return "An unexpected error has occurred";
        }
    }
}
