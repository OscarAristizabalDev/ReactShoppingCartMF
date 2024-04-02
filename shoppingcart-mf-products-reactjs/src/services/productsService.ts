import apiClient from "../utils/apiClient";

class ProductsService {
    getProducts = async (search: string) => apiClient().get("products");
}

export default new ProductsService();