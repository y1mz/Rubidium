import { readConfig } from "@/libs/readConfig"

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/'
        },
        sitemap: `https://${readConfig().siteURL}/sitemap.xml`
    }
}