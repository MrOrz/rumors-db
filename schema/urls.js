export default {
  properties: {
    url: { type: 'keyword' }, // exact URL found in the articles
    canonical: { type: 'keyword' }, // The canonical URL fetched from the page
    title: { type: 'text', analyzer: 'cjk' },
    summary: { type: 'text', analyzer: 'cjk' }, // Extracted summary text
    html: { type: 'keyword', index: false, doc_values: false }, // Fetched raw html input.
    // We disables html's indexing and doc_values because html would be super long and cause
    // "DocValuesField is too large" error when indexed or sorted.

    topImageUrl: { type: 'keyword', index: false, doc_values: false }, // Image URL for preview
    // We disables topImageUrls's indexing and doc_values because it could be base64 string,
    // which can be too long to be indexed or sorted.

    fetchedAt: { type: 'date' },
    status: { type: 'short' }, // status code of the response
    error: { type: 'keyword' }, // error returned by cofacts-url-resolver

    isReferenced: { type: 'boolean' }, // rumors-api cleanupUrls.js script flag field
  },
};
