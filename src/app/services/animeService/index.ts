import { apolloClient } from '../../graphql';
import { GetAnimePage } from './__generated__/GetAnimePage';
import { GET_ANIME_PAGE } from './queries';
class AnimeService {

 async getAnimePage(page: Number, perPage = 5): Promise<GetAnimePage["Page"]>{
    try {
        const response = await apolloClient.query({  query: GET_ANIME_PAGE, variables: {page, perPage} });

        if(!response || !response.data)
        throw new Error("No Data returned from API");

        return response.data;
    } catch (err) {
        throw err;
    };
 }
}

export default new AnimeService();
