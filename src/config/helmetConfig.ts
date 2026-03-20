import helmet from "helmet";

export const getHelmetConfig = () => {
    const isDevelopment = process.env.NODE_ENV === "development";

    // Base configuration for APIs
    const baseConfig = {
        contentSecurityPolicy: false, // Disable for JSON APIs since no XSS can occur because there isn't any HTML
        hidePoweredBy: true, // Always hide server info, this also hides the tech stack we use so attackers can't target vulnerable parts of our app
        noSniff: true, // Always prevent MIME sniffing
    };

    if (isDevelopment) {
        return helmet({
            ...baseConfig,
            hsts: false, // No HTTPS enforcement in development
        });
    }

    // Production gets full security
    return helmet({
        ...baseConfig,
        hsts: {
            maxAge: 31536000,
            includeSubDomains: true,
            preload: true,
        },
        frameguard: { action: "deny" }, // Prevents clickjacking in our app
        referrerPolicy: { policy: "no-referrer" },
    });
};