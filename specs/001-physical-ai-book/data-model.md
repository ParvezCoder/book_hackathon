# Data Model: Physical AI & Humanoid Robotics Course Book

## Core Entities

### CourseChapter
Represents individual chapters within the course structure (e.g., Introduction to Physical AI, Bipedal Locomotion, etc.), each with title, content, and learning objectives.

**Attributes:**
- id: string (unique identifier)
- title: string (chapter title)
- content: string (Markdown content)
- position: number (order in the course)
- module: string (which module the chapter belongs to)
- learningObjectives: string[] (list of learning objectives)
- duration: number (estimated reading time in minutes)
- prerequisites: string[] (required knowledge before reading)
- tags: string[] (relevant topics/tags)

**Relationships:**
- Belongs to one CourseModule
- Can reference multiple LearningResources

### CourseModule
Represents major parts of the course (Part 1: Foundations, Part 2: Humanoid Robotics, Part 3: Advanced Topics), grouping related chapters.

**Attributes:**
- id: string (unique identifier)
- title: string (module title)
- description: string (brief description)
- position: number (order in the course)
- category: string (Foundations, Humanoid Robotics, Advanced Topics)
- estimatedDuration: number (total time for module in minutes)

**Relationships:**
- Contains multiple CourseChapters
- Can reference multiple LearningResources

### LearningResource
Represents supplementary materials such as code examples, exercises, videos, and images that enhance the educational content.

**Attributes:**
- id: string (unique identifier)
- title: string (resource title)
- type: string (code, exercise, video, image, document)
- content: string (resource content or URL)
- description: string (brief description)
- difficulty: string (beginner, intermediate, advanced)
- relatedChapters: string[] (IDs of related chapters)

**Relationships:**
- Can be referenced by multiple CourseChapters
- Can be referenced by multiple CourseModules

## Content Structure

### Course Structure
```
Course: Physical AI & Humanoid Robotics
├── Module 1: Foundations
│   ├── Chapter 1: Introduction to Physical AI
│   ├── Chapter 2: Robotics Fundamentals
│   └── Chapter 3: Sensors and Actuators
├── Module 2: Humanoid Robotics
│   ├── Chapter 4: Bipedal Locomotion
│   ├── Chapter 5: Motion Planning
│   ├── Chapter 6: Computer Vision for Robotics
│   └── Chapter 7: Human-Robot Interaction
└── Module 3: Advanced Topics
    ├── Chapter 8: Deep Learning for Robotics
    ├── Chapter 9: Reinforcement Learning Applications
    ├── Chapter 10: Real-world Deployments
    └── Chapter 11: Ethics and Safety
```

## Navigation Model

### NavigationNode
Represents a node in the course navigation structure.

**Attributes:**
- id: string (unique identifier)
- label: string (display name)
- type: string (module, chapter, resource, external-link)
- path: string (URL path)
- position: number (order in navigation)
- parentId: string (ID of parent node, null for root nodes)
- children: string[] (IDs of child nodes)

## Content Metadata

### ChapterMetadata
Additional metadata for each chapter to support search and discovery.

**Attributes:**
- chapterId: string (reference to CourseChapter)
- keywords: string[] (search keywords)
- summary: string (brief summary of content)
- difficulty: string (beginner, intermediate, advanced)
- prerequisites: string[] (required prior knowledge)
- learningOutcomes: string[] (what user should know after reading)
- relatedTopics: string[] (related subjects)
- lastUpdated: Date (when content was last modified)