
var search = instantsearch({
  appId: "M004F6HPRV",
  apiKey: "08dcf9f367194c4b7643e75a41613288",
  indexName: "prod_snippets",
  searchParameters: {
    hitsPerPage: 5,
    attributesToSnippet: ["content:14"],
    snippetEllipsisText: " [...]"
  },
  routing: true
});

// Uncomment the following widget to add hits list.

/* global instantsearch */

search.addWidget(instantsearch.widgets.hits({
  container: "#hits",
  templates: {
    empty: "No results found.",
    item: function item(hit) {
      return (0, hitTemplate)(hit);
    }
  }
}));

// Uncomment the following widget to add a search bar.

search.addWidget(instantsearch.widgets.searchBox({
  container: "#searchbox",
  placeholder: "Start typing to search for code snippets...",
  autofocus: false
}));

// Uncomment the following widget to add search stats.

search.addWidget(instantsearch.widgets.stats({
  container: "#stats",
  templates: {
    body: function body(hit) {
      return "<span role=\"img\" aria-label=\"emoji\">\u26A1\uFE0F</span> <strong>" + hit.nbHits + "</strong> results found " + (hit.query != "" ? "for <strong>\"" + hit.query + "\"</strong>" : "") + " in <strong>" + hit.processingTimeMS + "ms</strong>";
    }
  }
}));

// Uncomment the following widget to add categories list.

search.addWidget(instantsearch.widgets.refinementList({
  container: "#categories",
  attributeName: "category",
  limit: 50,
  sortBy: function (a, b) {
    return sortCategories(a,b);
  },
  autoHideContainer: false,
  templates: {
    header: "Topics"
  }
}));

search.addWidget(instantsearch.widgets.menu({
  container: "#subjects",
  attributeName: "subject",
  sortBy: function (a, b) {
    return sortSubjects(a,b);
  },
  // Optional parameters
  autoHideContainer: false,
  templates: {
    header: "Subjects"
  }
}));


// Uncomment the following widget to add pagination.

search.addWidget(instantsearch.widgets.pagination({
  container: "#pagination"
}));

function sortSubjects(a, b) {
  facets = ['Pandas', 'PySpark', 'Python']

  a_ind = facets.indexOf(a.name);
  b_ind = facets.indexOf(b.name);

  if (a_ind < b_ind) {
    return -1;
  } else if (a_ind > b_ind) {
    return 1;
  } else {
    return 0;
  }
}

function sortCategories(a, b) {
  facets = ['DataFrame Basics', 'Examine Data', 'Reading/Writing Files',
            'Tidy Data', 'Summarize Data', 'Select Data With .loc & .iloc',
            'Reshape Data', 'Group Data', 'Files Op. With Python', 'Time Series Data',
            'Python Basics', 'Python Strings', 'Python Lists', 'Python Dictionaries',
            'Python Lambdas', 'Python Map, Filter, Reduce']

  a_ind = facets.indexOf(a.name);
  b_ind = facets.indexOf(b.name);

  if (a_ind < b_ind) {
    return -1;
  } else if (a_ind > b_ind) {
    return 1;
  } else {
    return 0;
  }
}

search.start();
