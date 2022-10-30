import gql from 'graphql-tag';

export const GET_CHARACTERS = gql`
	query ($filter: FilterCharacter, $page: Int) {
		characters(filter: $filter, page: $page) {
			info {
				count
				pages
				next
				prev
			}
			results {
				id
				name
				status
				species
				gender
				image
				origin {
					name
				}
			}
		}
	}
`;

export const GET_CHARACTER_DETAILS = gql`
	query ($id: ID!) {
		character(id: $id) {
			id
			name
			status
			species
			gender
			image
			origin {
				name
			}
			location {
				name
			}
			episode {
				name
				air_date
				episode
				id
			}
		}
	}
`;
