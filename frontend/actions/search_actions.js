export const SEARCH_QUERY = "SEARCH_QUERY";

export const searchQuery = queryString => {
  return {
    type: SEARCH_QUERY,
    queryString
  };
};
