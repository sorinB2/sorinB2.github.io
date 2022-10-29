import { useQuery } from 'react-query';
import request, { RequestDocument } from 'graphql-request';

interface QueryRequestProps {
	api: string;
	key: string;
	query: RequestDocument;
	variables?: any;
	config?: any;
}

export const useGQLQuery = ({ api, key, query, variables, config = {} }: QueryRequestProps) => {
	const fetchData = async () => await request(api, query, variables);

	return useQuery(key, fetchData, config);
};
