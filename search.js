/* jshint esversion: 11 */

const searchClient = algoliasearch('OTREKEN07W', '87b93b6f0dc0636263d5afb2e9d45888');

const search = instantsearch({
  indexName: 'test_people',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.configure({
    hitsPerPage: 40,
  }),
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search for people',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          <strong>{{firstname}} {{lastname}}</strong><br>
          Zip code: {{zip_code}}
        </div>
      `,
    },
  }),
  instantsearch.widgets.refinementList({
    container: '#zip-code-filter',
    attribute: 'zip_code',
    limit: 5,
    showMore: true,
    showMoreLimit: 900,
  }),
]);

search.start();
