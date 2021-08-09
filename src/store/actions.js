import axiosInstance from "../plugins/axios";
export default {
    async Ha({ query, api_key }) {
        try {
            var config = {
                params: {
                    query,
                    api_key
                }
            }
            var result = await axiosInstance.get('weather?q=' + config.query + '&appid=' + config.api_key);
            console.log(result);

        } catch (error) {
            console.log("error", error);

        }
    }
}