export const SEARCH_QUERY = "SEARCH_QUERY";
export const FILTER_BY_TAG = "FILTER_BY_TAG";

export const searchQuery = queryString => {
  return {
    type: SEARCH_QUERY,
    queryString
  };
};

export const filterByTag = tag => {
  return {
    type: FILTER_BY_TAG,
    tagId: tag.id
  };
};
