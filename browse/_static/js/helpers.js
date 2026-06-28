function hitTemplate(hit) {
  return `
    <div>
      <article>
        <div class="post-content">
          <h2 class="entry-title">
            ${hit._highlightResult.title.value}
          </h2>
          <div class="post-excerpt">
            ${hit._highlightResult.snippet.value}
          </div>
          <div class="entry-meta clear">
            <div class="entry-author-content">
              <div class="post-meta-info">
                ${hit.subject} / ${hit.category}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>`;
}
