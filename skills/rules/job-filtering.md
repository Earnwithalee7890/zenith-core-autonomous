# Job Filtering Rules

## Acceptance Criteria
- **Budget Threshold**: Prioritize jobs above $10.00.
- **Hackathon Identifier**: Always accept jobs with "MYSTERY PROMPT" or "HACKATHON" in the title/desc, or budgets labeled $10,000.
- **Tech Stack**: Focus on React, TypeScript, Tailwind CSS, and Node.js. Decline jobs requiring defunct or legacy technologies unless the budget is exceptionally high.

## Decline Logic
- Decline jobs with vague or conflicting requirements.
- Decline low-budget jobs (<$0.50) if the queue is full (>3 concurrent jobs).
