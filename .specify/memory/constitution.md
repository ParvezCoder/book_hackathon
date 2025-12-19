<!-- SYNC IMPACT REPORT:
Version change: N/A → 1.0.0
Added sections: All principles and sections specific to AI-Spec-Driven Book with Embedded RAG Chatbot project
Removed sections: Template placeholders
Templates requiring updates: N/A (this is the initial constitution)
Follow-up TODOs: None
-->
# AI-Spec-Driven Book with Embedded RAG Chatbot Constitution

## Core Principles

### Spec-First Development
All development begins with comprehensive specifications using Spec-kit Plus; Requirements must be clearly defined, testable, and traceable before implementation; Full traceability maintained between requirements, specs, and outputs

### Single Source of Truth
Book content serves as the definitive source for all information; All content must be accurate, consistent, and maintained in a centralized location; No duplicate or conflicting information across different parts of the system

### Context-Bounded Answers (NON-NEGOTIABLE)
RAG chatbot must strictly answer from indexed book content only; Selected-text mode overrides global retrieval; Explicit 'not found in context' responses required when information is unavailable

### Production-Ready Output
All deliverables must be production-quality, tested, and deployable; Code follows security best practices, performance standards, and maintainability guidelines; Reproducible builds and deployments required

### AI Workflow Integration
Full integration with Claude Code and Spec-kit Plus workflows; Automated traceability between user prompts and implementation artifacts; Prompt History Records created for all significant interactions

### Technology Stack Compliance
Must use specified technology stack: Docusaurus for book platform, FastAPI for backend, OpenAI Agents/ChatKit SDKs for LLM, Qdrant Cloud for vector database

## Technical Standards
Book Platform: Docusaurus deployed on GitHub Pages; Backend: FastAPI with proper error handling and monitoring; LLM Integration: OpenAI Agents/ChatKit SDKs with rate limiting and proper API management; Vector Database: Qdrant Cloud (Free Tier) with appropriate indexing strategies; Frontend: Developer-focused, accessible, responsive design

## Development Workflow
Spec generation before implementation; Use of Claude Code and Spec-kit Plus tools for all development tasks; PHR creation for all significant user interactions; ADR documentation for architecturally significant decisions; Small, testable changes with precise code references

## Governance
Constitution supersedes all other practices; Amendments require documentation and approval; All PRs/reviews must verify compliance with principles; Full traceability required between requirements, specs, and outputs

**Version**: 1.0.0 | **Ratified**: 2025-12-17 | **Last Amended**: 2025-12-17
