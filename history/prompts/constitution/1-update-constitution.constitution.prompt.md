---
id: 1
title: Update Constitution
stage: constitution
date: 2025-12-17
surface: agent
model: claude-haiku-4-5-20251001
feature: none
branch: master
user: Admin
command: /sp.constitution
labels: [constitution, spec-kit-plus, ai-book, rag-chatbot]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

```
/sp.constitution

Project: AI-Spec–Driven Book with Embedded RAG Chatbot

Objective:
Create and deploy a technical book using Claude Code + Spec-kit Plus, published via Docusaurus on GitHub Pages, with an embedded RAG chatbot that answers questions strictly from the book content, including user-selected text.

Core Principles:
- Spec-first, AI-driven development
- Book content as single source of truth
- Context-bounded answers (selected-text aware)
- Production-ready, reproducible output

Standards:

Book:
- Platform: Docusaurus
- Style: Clear, developer-focused
- Structure: TOC, consistent chapters, accurate examples

AI Workflow:
- Specs generated before implementation
- Full traceability between requirements, specs, and outputs

RAG Chatbot:
- Backend: FastAPI
- LLM: OpenAI Agents / ChatKit SDKs
- Vector DB: Qdrant Cloud (Free Tier)
- Retrieval strictly limited to indexed book content
- Selected-text mode must override global retrieval
- Explicit "not found in context" responses when applicable

Int
```

## Response snapshot

The constitution file has been successfully updated with project-specific details for the AI-Spec-Driven Book with Embedded RAG Chatbot project. The updated constitution includes:

- Core Principles: Spec-First Development, Single Source of Truth, Context-Bounded Answers (NON-NEGOTIABLE), Production-Ready Output, AI Workflow Integration, and Technology Stack Compliance
- Technical Standards: Docusaurus platform, FastAPI backend, OpenAI integration, Qdrant Cloud vector DB
- Development Workflow: Spec generation before implementation, Claude Code integration, PHR creation, ADR documentation
- Governance: Constitution supersedes other practices, amendment procedures, compliance verification

## Outcome

- ✅ Impact: Created project-specific constitution replacing template placeholders
- 🧪 Tests: No tests required for constitution update
- 📁 Files: Updated .specify/memory/constitution.md with project-specific content
- 🔁 Next prompts: Ready to proceed with feature specification and implementation
- 🧠 Reflection: Constitution now serves as authoritative guide for project development

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin feature specification based on updated constitution