---
sidebar_position: 100
---

# Content Authoring Guide

This guide provides instructions for creating and maintaining content in the Physical AI & Humanoid Robotics Course.

## File Structure

All course content is organized in the `docs/` directory:

```
docs/
├── intro.md                 # Course introduction
├── authoring-guide.md       # This file
├── Module1/                 # Foundations module
│   ├── chapter1.md
│   ├── chapter2.md
│   ├── chapter3.md
│   └── chapter4.md
├── Module2/                 # Humanoid Robotics module
│   ├── chapter5.md
│   ├── chapter6.md
│   ├── chapter7.md
│   └── chapter8.md
└── Module3/                 # Advanced Topics module
    ├── chapter9.md
    ├── chapter10.md
    ├── chapter11.md
    └── chapter12.md
```

## Creating New Content

### Adding a New Chapter

1. Create a new `.md` file in the appropriate module directory
2. Add frontmatter with the sidebar position:

```markdown
---
sidebar_position: [number]
---

# Chapter Title
```

3. Update `sidebars.js` to include the new chapter:

```javascript
{
  type: 'doc',
  id: 'ModuleX/chapterY', // Path to your markdown file
  label: 'Chapter Y: Title'
}
```

### Frontmatter Requirements

All content files should include:

```markdown
---
sidebar_position: [number]  # Controls order in sidebar
---

# Chapter Title
```

## Content Guidelines

### Text Formatting

- Use `#`, `##`, `###` for headings
- Use `-` for unordered lists
- Use `1.`, `2.`, `3.` for ordered lists
- Use **bold** for emphasis and key terms
- Use *italics* for book titles or foreign terms

### Code Examples

Use fenced code blocks with appropriate language specification:

```markdown
\```python
def example_function():
    return "Hello, World!"
\```
```

### Images and Media

Store images in the `static/img/` directory and reference them:

```markdown
![Alt text](/img/image-name.png)
```

## Special Components

### Exercises

To add an interactive exercise, use the ExerciseTemplate component:

```jsx
import ExerciseTemplate from '@site/src/components/ExerciseTemplate';

<ExerciseTemplate
  title="Exercise Title"
  description="Brief description of the exercise"
  objectives={[
    "Objective 1",
    "Objective 2"
  ]}
  instructions={[
    "Instruction 1",
    "Instruction 2"
  ]}
  hints={[
    "Hint 1",
    "Hint 2"
  ]}
  solution="Expected solution or approach"
/>
```

### Assessments

To add a quiz or assessment, use the Assessment component:

```jsx
import Assessment from '@site/src/components/Assessment';

<Assessment
  title="Quiz Title"
  questions={[
    {
      text: "Question text?",
      options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      correctAnswer: 1  // Index of correct option (0-based)
    }
  ]}
/>
```

## Style Guidelines

### Writing Style

- Write in clear, concise language
- Define technical terms when first used
- Use active voice when possible
- Maintain consistent terminology throughout

### Content Structure

Follow this general structure for chapters:

1. **Overview** - Brief introduction to the topic
2. **Main Content** - Detailed explanation with examples
3. **Applications** - Real-world applications or use cases
4. **Summary** - Key takeaways
5. **Exercises/Assessments** - Interactive components (optional)

## Best Practices

### Accessibility

- Use descriptive alt text for images
- Maintain logical heading hierarchy
- Use sufficient color contrast
- Write meaningful link text

### SEO and Discoverability

- Include relevant keywords naturally
- Write descriptive headings
- Use proper heading hierarchy (don't skip levels)

### Maintenance

- Keep examples up-to-date
- Review content regularly for accuracy
- Update references to external resources
- Test interactive components regularly

## Publishing Workflow

1. Create or edit content in the appropriate directory
2. Test locally using `npm start`
3. Update the sidebar configuration if adding new pages
4. Commit changes with descriptive commit messages
5. Create a pull request for review (if applicable)

## Getting Help

For technical issues with the documentation platform, contact the development team. For content-related questions, consult the subject matter experts for the relevant module.