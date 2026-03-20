export interface Resource {
  id: number; // Unique identifier
  title: string; // Resource title
  type: string; // Type: article, video, tutorial, documentation
  url: string; // Link to the resource
  description: string; // Brief description
  createdAt: string; // Creation timestamp (ISO format)
}

const resources = [
  {
    "id": 1,
    "title": "Express.js Guide",
    "type": "documentation",
    "url": "https://expressjs.com/en/guide",
    "description": "Official Express.js documentation",
    "createdAt": "2026-05-19T09:00:00.000Z"
  },
  {
    "id": 2,
    "title": "TypeScript Basics",
    "type": "video",
    "url": "https://example.com/ts-basics",
    "description": "Introduction to TypeScript",
    "createdAt": "2026-05-19T09:00:00.000Z"
  },
  {
    "id": 3,
    "title": "REST API Design",
    "type": "article",
    "url": "https://example.com/rest-design",
    "description": "Best practices for REST API design",
    "createdAt": "2026-05-19T09:00:00.000Z"
  },
  {
    "id": 4,
    "title": "Jest Testing Tutorial",
    "type": "tutorial",
    "url": "https://example.com/jest-tutorial",
    "description": "Complete guide to testing with Jest",
    "createdAt": "2026-05-19T09:00:00.000Z"
  }
];

export default resources;