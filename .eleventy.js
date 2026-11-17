module.exports = function (eleventyConfig) {
  // Bilder, Logo, Favicon liegen im Repo und werden unverändert kopiert.
  eleventyConfig.addPassthroughCopy("assets");

  // Andere Themen als das aktuelle (für Querverweise), max. n Stück.
  eleventyConfig.addFilter("otherThemes", (themen, key, n) =>
    themen.filter((t) => t.key !== key).slice(0, n || 4)
  );

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    // Seiten sind .html mit Front-Matter und nutzen das Nunjucks-Layout base.njk.
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
  };
};
