import nodeFetch from "node-fetch";
import { logger } from "../utils/logger.js";

/**
 * BrowserTool - Fetches character content from a URL
 */
export async function fetchPageContent(url: string): Promise<string> {
    logger.tool("browser", "start", `Fetching: ${url}`);
    try {
        const response = await nodeFetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        const text = await response.text();

        // Simple text extraction - remove script and style tags
        const cleanText = text
            .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gim, "")
            .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gim, "")
            .replace(/<[^>]+>/g, " ")
            .replace(/\s+/g, " ")
            .trim();

        logger.tool("browser", "success", `Fetched ${cleanText.length} characters`);
        return cleanText.substring(0, 10000); // Return first 10k chars
    } catch (error) {
        logger.tool("browser", "error", String(error));
        throw error;
    }
}

export default fetchPageContent;
