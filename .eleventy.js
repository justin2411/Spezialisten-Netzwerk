module.exports = function (eleventyConfig) {
  // Statische Assets (falls später Bilder/JS ins Repo kommen) unverändert kopieren.
  // Aktuell werden Bilder noch extern geladen – Platzhalter für die Zukunft:
  // eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    // Seiten sind .html mit Front-Matter und nutzen das Nunjucks-Layout base.njk.
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
  };
};
