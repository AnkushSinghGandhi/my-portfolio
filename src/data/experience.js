import desiDiariesLogo from "@/assets/logos/desi-diaries.png";

export const experiences = [
    {
        id: "LOG_01",
        role: "Software Development Engineer",
        company: "Desi Diaries",
        logo: desiDiariesLogo,
        period: "May 2023 – Present",
        location: "Remote",
        details: [
            "Developed and maintained financial microservices using Flask, Django, REST APIs, Python, and MongoDB for real-time trading analytics, stock market data processing, and portfolio management systems.",
            "Integrated Global Data Feeds APIs, WebSockets, JSON, RESTful services, and third-party APIs to deliver live ATM price, VIX, PCR, options chain, and market depth data, improving data freshness by 40%.",
            "Engineered role-based portfolio and user management modules using Django and MySQL, and database optimization, reducing data inconsistencies by 25%.",
            "Implemented Redis caching, Celery task queues, JWT authentication, OAuth2, Docker, Kubernetes, Nginx, and microservices architecture to boost scalability, speed, and security.",
            "Automated CI/CD pipelines using GitHub Actions, Jenkins, Docker Compose, and AWS (EC2, S3, Lambda, RDS, EKS, ECS), reducing deployment time by 50%.",
            "Designed interactive dashboards and real-time market monitoring tools using Plotly, Matplotlib, Pandas, NumPy, and ETL pipelines, improving trader decision-making.",
        ],
    },
    {
        id: "LOG_02",
        role: "Flutter Developer",
        company: "Desi Diaries",
        logo: desiDiariesLogo,
        period: "Dec 2022 – May 2023",
        location: "Remote",
        details: [
            "Developed and maintained cross-platform mobile applications using Flutter, Dart, Android, iOS, and Firebase with responsive UI/UX and optimized performance.",
            "Built reusable Flutter widgets, custom animations, and implemented state management (Provider, Riverpod, GetX, Bloc).",
            "Integrated REST APIs, GraphQL, Laravel APIs, MySQL, and Firebase Firestore for real-time data sync, notifications, authentication, and chat modules.",
            "Collaborated with backend team on secure APIs (Laravel, PHP, MySQL, JWT), optimizing queries and response times.",
            "Worked on payment gateways (Razorpay, PayPal, Stripe), Google Maps, social media login, and third-party SDKs.",
            "Debugged and optimized apps using Flutter DevTools, Android Studio, Xcode, and Gradle, reducing crashes and improving stability.",
        ],
    },
];
