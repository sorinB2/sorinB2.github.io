import gql from 'graphql-tag';

export const GET_CHARACTERS = gql`
	query ($page: Int) {
		characters(page: $page) {
			results {
				id
				name
				status
				species
				image
				origin {
					name
				}
			}
		}
	}
`;
