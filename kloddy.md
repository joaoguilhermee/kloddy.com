O Gemini disse
Kloddy is a robust and flexible infrastructure for prompt engineering, model evaluation, and AI governance, designed for teams that treat AI as a strategic system requiring structure and measurable quality. The platform transforms informal experimentation into a structured engineering workflow by turning prompts into versioned, auditable assets.

1. Multi-Level Workspace Hierarchy
The system supports a scalable structure to manage AI development across different departments or clients:

Organizations: The top-level container (e.g., Acme Corp) allows for the separation of teams and centralized control.

Features: Within an organization, prompts are grouped into "Features" such as Code Review or Email Assistant for better discoverability.

Prompts: Individual templates are created within these features, supporting dynamic inputs.

2. Structured Prompt Engineering & Versioning
Every prompt is managed in an advanced editor designed for serious iteration and control:

Immutable Versioning: Users can "Publish" specific versions (e.g., v1, v2) with mandatory changelogs to track modifications.

Side-by-Side Comparison: Users can perform a direct "Diff" comparison between versions to see exactly what text was changed.

Instant Restore: The platform allows users to instantly roll back to a historical version, which then updates the current draft.

Variable Management: Users can define and manage dynamic variables using {{variable}} syntax to test different scenarios.

3. Built-in Evaluation Framework (LLM-as-a-Judge)
Kloddy shifts quality control from subjective review to data-driven pipelines:

Judge Configuration: Users select specific models (e.g., GPT-4o, Claude Sonnet 4, or Gemini 1.5 Pro) to act as a judge.

Custom Criteria: Teams can define acceptance criteria and "Critical Failure Conditions" (e.g., "The % should not be different than 50%") to automate testing.

Scoring Pillars: The system provides scores for Accuracy, Completeness, Formatting, and Safety.

Logic & Reasoning: The judge provides a step-by-step breakdown of why a prompt passed or failed based on set thresholds.

4. Model & Version Benchmarking
The platform enables rigorous benchmarking to determine the best model or prompt for a task:

Model Comparison: Run a single prompt against two different models (e.g., GPT-4o vs. Claude) to compare output quality side-by-side.

Version Benchmarking: Compare two different prompt versions using the same model to see if instructions improved the result.

Automated Verdicts: The system provides a final "Verdict" (e.g., "No Clear Winner / Tie") after analyzing both outputs against the defined criteria.

5. Collaboration, Governance & Audit
Built for teams, the platform ensures full traceability and accountability:

Member Management: Admins can invite and manage team members, controlling access within the organization.

Complete Audit Trail: A detailed audit log records every action, including saved drafts, published versions, and member invitations.

Diff Visibility: Every audit event includes a "View diff" link to see the exact changes made during that specific event.

6. Debugging, Observability & Cost Tracking
Kloddy provides deep technical insights into model behavior and operational efficiency:

RAW Debug Info: Developers can inspect the full JSON response payload, metadata, and provider-specific details (e.g., modelId, itemId).

Variable Analysis: Inspect how variable substitutions affect inputs and diagnose unexpected behavior systematically.

Financial Visibility: Each execution tracks token usage, execution time (latency), and the precise cost in USD.

Historical Archive: Access a history of all past evaluations to track quality trends and perform regression analysis.