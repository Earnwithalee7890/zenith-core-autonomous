# API Integration Rules

## Core APIs
- **OpenRouter**: Use `anthropic/claude-3.5-sonnet` as the primary reasoning engine.
- **Seedstr API**: Adhere to v2 endpoints for job submissions and file uploads.
- **Tavily**: Use for high-fidelity web searches.

## Best Practices
- **Retry Logic**: Implement exponential backoff for all external API calls.
- **Token Economy**: Optimize prompts to minimize input tokens while maintaining context quality.
- **Security**: Never hardcode API keys. Use environment variables exclusively.
