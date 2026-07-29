---
title: "Example open project"
description: "A complete sample collection article for testing headings, media, math, code, tables, and long-form prose."
pubDate: 2026-04-24
platform: "GitHub"
tags: ["Project", "Template", "Demo"]
image: /assets/cards/collection-photo.jpeg
githubUrl: "https://github.com/choucisan"
---

# Field Notes for an Open Project

This article is a layout stress test for a collection detail page. It includes paragraphs, headings, images, formulas, code blocks, lists, quotes, and tables so we can see how the front end behaves when a real project write-up becomes more complex than a short placeholder.

The imagined project is a small research toolkit called **Open Garden**, designed to help researchers collect notes, run experiments, and publish reproducible artifacts. The project is intentionally simple, but the article structure is close to what a real collection page may need.

![A sample project cover image](/assets/cards/collection-photo.jpeg)

## Why This Project Exists

A project page should answer three questions quickly: what the project is, why it matters, and how someone can use it. The visual design can be gentle and editorial, but the information still needs a clear hierarchy.

Good collection pages often include:

- a short motivation section;
- a concise feature list;
- installation or usage instructions;
- visual examples;
- a reproducibility note;
- links to GitHub, Hugging Face, datasets, or demos.

> A useful project page should feel like a map: friendly enough to enter, structured enough to follow, and complete enough to revisit later.

## Main Idea

Open Garden treats each research artifact as a living object. A note, a dataset, a figure, and a model checkpoint are different kinds of seeds. The toolkit stores metadata for each seed and connects it to a public page.

The simplest representation is:

<div class="math-display">A = {m, c, r, t}</div>

where <em>m</em> is metadata, <em>c</em> is content, <em>r</em> is a reproducibility record, and <em>t</em> is a set of tags.

### Design Goals

The project follows three principles.

1. **Readable by default.** The project should be understandable without opening the source code.
2. **Reproducible by habit.** Each result should point to data, code, configuration, and environment notes.
3. **Small enough to maintain.** The system should avoid becoming a second research project.

### A Smaller Heading for Dense Notes

Sometimes a page needs a compact subsection for implementation details. This heading level helps separate deeper technical notes without breaking the narrative rhythm.

#### Implementation Detail

Each artifact receives a stable identifier generated from its title and date. The identifier is not meant to be cryptographically unique; it is meant to be human-readable and stable in URLs.

```ts
export function createArtifactId(title: string, date: string) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return `${date}-${slug}`;
}
```

## Example Usage

A user can create a new artifact by writing a small configuration file. The project then renders the artifact into a public-facing page.

```yaml
title: "Motion Perception Notes"
type: "dataset"
tags:
  - embodied-ai
  - perception
  - benchmark
links:
  github: "https://github.com/example/open-garden"
  huggingface: "https://huggingface.co/datasets/example/open-garden"
```

The command-line interface could look like this:

```bash
open-garden create artifact.yaml
open-garden build --out public
open-garden check --strict
```

## A Simple Scoring Formula

For a project archive, we may want a lightweight completeness score. One possible score combines documentation, data availability, code availability, and reproducibility notes.

<div class="math-display">S = 0.25D + 0.25C + 0.25R + 0.25L</div>

Here <em>D</em> means documentation, <em>C</em> means code, <em>R</em> means reproducibility records, and <em>L</em> means external links. The formula is not a scientific metric; it is a reminder that a project is more than a repository.

## Visual Example

Images inside the article should be able to sit comfortably between paragraphs. They may be diagrams, screenshots, dataset samples, or generated previews.

![A second sample image for testing article flow](/assets/cards/publication-sky.png)

The caption is written as normal prose for now. If we later want formal captions, we can add a custom MDX component or style image-adjacent paragraphs differently.

## Comparison Table

Tables are common in project documentation. This one checks how the article handles structured information.

| Feature | Current status | Notes |
| --- | --- | --- |
| Metadata schema | Ready | Supports title, tags, links, and dates |
| Static rendering | Ready | Works well with GitHub Pages |
| Dataset card | Planned | Could link to Hugging Face |
| Search index | Experimental | Useful when collections grow |

## Python Example

Some project pages need longer code examples. The block below tests indentation, comments, and line length.

```python
from dataclasses import dataclass
from pathlib import Path

@dataclass
class Artifact:
    title: str
    kind: str
    path: Path
    tags: list[str]

    def summary(self) -> str:
        tag_text = ', '.join(self.tags) if self.tags else 'untagged'
        return f'{self.title} ({self.kind}) - {tag_text}'

artifact = Artifact(
    title='Motion Perception Notes',
    kind='dataset',
    path=Path('data/motion-notes.jsonl'),
    tags=['embodied-ai', 'perception'],
)

print(artifact.summary())
```

## What Should Be Checked Before Release?

Before publishing a real collection entry, I would check the following:

- The GitHub or Hugging Face links work.
- The cover image has enough resolution and does not crop important content.
- The first paragraph explains the project without jargon.
- Code snippets are short enough to read on mobile.
- Formulas render correctly after build.
- The page still feels calm after adding many sections.

## Closing Note

This sample is intentionally rich. If the typography, spacing, image behavior, math, tables, and code blocks all feel good here, the template should be ready for real collections.
