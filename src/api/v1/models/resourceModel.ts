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
    "description": "Official Express.js documentation"
  },
  {
    "id": 2,
    "title": "TypeScript Basics",
    "type": "video",
    "url": "https://example.com/ts-basics",
    "description": "Introduction to TypeScript"
  },
  {
    "id": 3,
    "title": "REST API Design",
    "type": "article",
    "url": "https://example.com/rest-design",
    "description": "Best practices for REST API design"
  },
  {
    "id": 4,
    "title": "Jest Testing Tutorial",
    "type": "tutorial",
    "url": "https://example.com/jest-tutorial",
    "description": "Complete guide to testing with Jest"
  }
];

export default resources;