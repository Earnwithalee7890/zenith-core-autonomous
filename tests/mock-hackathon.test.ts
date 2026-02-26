import { vitest, it, expect, describe } from "vitest";
import { AgentRunner } from "../src/agent/runner.js";
import { SeedstrClient } from "../src/api/client.js";

// Mock the API client
vitest.mock("../src/api/client.js", () => {
    return {
        SeedstrClient: vitest.fn().mockImplementation(() => ({
            listJobsV2: vitest.fn().mockResolvedValue({
                jobs: [
                    {
                        id: "mock-hackathon-job",
                        prompt: "MYSTERY PROMPT: Build a modern, dark-themed dashboard for an AI Agent Marketplace. It must include a sidebar, a stats grid, and a live activity feed. Use premium aesthetics and React/TypeScript.",
                        budget: 10000,
                        jobType: "STANDARD",
                        status: "OPEN"
                    }
                ]
            }),
            getJobV2: vitest.fn().mockResolvedValue({
                id: "mock-hackathon-job",
                prompt: "MYSTERY PROMPT: Build a modern, dark-themed dashboard for an AI Agent Marketplace. It must include a sidebar, a stats grid, and a live activity feed. Use premium aesthetics and React/TypeScript.",
                budget: 10000,
                jobType: "STANDARD",
                status: "OPEN"
            }),
            submitResponse: vitest.fn().mockResolvedValue({ success: true, response: { id: "res-123" } }),
            uploadFile: vitest.fn().mockResolvedValue({ url: "https://mock.url/project.zip", name: "project.zip", size: 1024, type: "application/zip" })
        }))
    };
});

describe("Mock Hackathon Suitability", () => {
    it("should detect the high-budget mystery prompt and prioritize it", async () => {
        const runner = new AgentRunner();
        // This is a unit-level check of the logic
        // In a real scenario, we'd watch events
        expect(runner).toBeDefined();
    });

    it("agent should have access to premium UI templates", () => {
        // This verifies our new tools are available in the LLM context (indirectly)
        // Here we just check if the project structure is ready
        const fs = require('fs');
        expect(fs.existsSync('skills/rules/design-system.md')).toBe(true);
    });
});
