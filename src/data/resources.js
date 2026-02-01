// Resources data - cheat sheets, roadmaps, and learning materials

export const resources = [
    {
        id: "dsa-roadmap",
        title: "15-30 Days DSA Roadmap",
        subtitle: "Crack ₹10-15 LPA Offers",
        description: "A priority-based roadmap focusing on high-impact core DSA topics. Covers Tier 1-4 from fundamentals to advanced topics for dream companies.",
        link: "/resources/dsa-roadmap",
        tags: ["DSA", "Interview Prep", "Roadmap"],
        icon: "🚀",
        featured: true,
    },
    {
        id: "system-design",
        title: "System Design Primer",
        subtitle: "Coming Soon",
        description: "Learn to design scalable systems from scratch. Covers distributed systems, databases, caching, and real-world architectures.",
        link: null,
        tags: ["System Design", "Architecture", "Coming Soon"],
        icon: "🏗️",
        featured: false,
    },
];

// Full DSA Roadmap content
export const dsaRoadmap = {
    title: "🚀 15-30 Days DSA Roadmap to Crack ₹10–15 LPA Offers",
    subtitle: "Tips, Strategies, and Patterns to Solve and Identify DSA Problems",
    blogLink: "https://dev.to/ankushsinghgandhi/tips-strategies-and-patterns-to-solve-and-identify-dsa-problems-4jja",
    intro: "This roadmap helps you crack ₹10–15 LPA roles efficiently in 15-30 days by focusing on high-impact core DSA topics. For those aiming higher, Tier 4 covers advanced data structures for top-tier dream companies — which may take 3-4 months to master.",

    primer: {
        title: "🧠 Time Complexity Primer",
        description: "Before jumping into Tier 1, understand Big-O complexities. Know worst-case time complexity, choose optimal solutions, and understand space-time tradeoffs.",
        link: "https://dev.to/ankushsinghgandhi/time-complexity-primer-understand-big-o-like-a-kid-with-candies-2ih0",
    },

    tiers: [
        {
            name: "Tier 1: Must-Do",
            emoji: "🔥",
            weightage: "50-60%",
            description: "These are asked in almost every interview – master them first.",
            topics: [
                {
                    title: "Number-Based Problems & Basics",
                    percentage: "10%",
                    items: ["Palindrome, prime, factorial, Armstrong", "String manipulation & permutations", "Recursion basics (Fibonacci, pair sums)", "Lists, sets, dictionaries, sorting"],
                },
                {
                    title: "Arrays & Strings",
                    percentage: "15%",
                    items: ["Quick Sort, Merge Sort", "Sliding Window & Two-pointer", "Binary search variations", "Prefix/Suffix computations", "Frequency counting"],
                },
                {
                    title: "Linked Lists (Singly)",
                    percentage: "10%",
                    items: ["Traversal, insertion, deletion", "Reverse (iterative & recursive)", "Floyd's cycle detection", "Merge two sorted lists"],
                },
                {
                    title: "Stacks & Queues",
                    percentage: "10%",
                    items: ["Valid parentheses", "Next greater element", "Monotonic stack / Min stack", "Circular queue"],
                },
                {
                    title: "Hashing",
                    percentage: "10%",
                    items: ["Frequency counting", "Subarray with given sum", "Group anagrams", "Longest substring without repeats"],
                },
                {
                    title: "Recursion & Backtracking",
                    percentage: "5%",
                    items: ["Factorial, Fibonacci", "Subsets, combinations", "N-Queens, Permutations"],
                },
            ],
        },
        {
            name: "Tier 2: Medium Priority",
            emoji: "⚡",
            weightage: "20-25%",
            description: "Common but not always core. Do these next.",
            topics: [
                {
                    title: "Trees (Binary Trees & BST)",
                    percentage: "15%",
                    items: ["Inorder, Preorder, Postorder", "Level order (BFS)", "Height, LCA, Diameter", "Is it a BST?"],
                },
                {
                    title: "Heaps (Priority Queue)",
                    percentage: "5%",
                    items: ["K largest/smallest elements", "Sort nearly sorted array", "Min/Max Heap concepts"],
                },
                {
                    title: "Greedy Algorithms",
                    percentage: "5%",
                    items: ["Activity selection", "Kruskal's MST", "Fractional knapsack"],
                },
            ],
        },
        {
            name: "Tier 3: Optional",
            emoji: "🧊",
            weightage: "25-30%",
            description: "Only if you have time or the company asks for these.",
            topics: [
                {
                    title: "Graphs",
                    percentage: "5-8%",
                    items: ["BFS, DFS", "Cycle detection", "Dijkstra's basics", "Topological sort"],
                },
                {
                    title: "Dynamic Programming",
                    percentage: "15%",
                    items: ["Fibonacci with memoization", "0/1 Knapsack", "Longest Common Subsequence", "Tabulation vs Memoization"],
                },
                {
                    title: "Tries",
                    percentage: "2-3%",
                    items: ["Implement Trie", "Word dictionary problems", "Longest prefix matching"],
                },
            ],
        },
        {
            name: "Tier 4: Advanced",
            emoji: "🎯",
            weightage: "For Dream Companies",
            description: "Advanced concepts for top-tier companies. Takes 3-4 months.",
            topics: [
                {
                    title: "Advanced Trees",
                    percentage: "",
                    items: ["AVL Trees with rotations", "Segment Trees", "Fenwick Tree (BIT)"],
                },
                {
                    title: "Advanced Graphs",
                    percentage: "",
                    items: ["SCCs (Kosaraju/Tarjan)", "Bellman-Ford", "Network Flow"],
                },
                {
                    title: "String Algorithms",
                    percentage: "",
                    items: ["KMP, Rabin-Karp", "Z-algorithm", "Suffix Arrays"],
                },
                {
                    title: "Bit Manipulation",
                    percentage: "",
                    items: ["Common bit tricks", "XOR problems", "Bitmask DP"],
                },
            ],
        },
    ],

    practiceLinks: [
        { name: "GFG Top 50 String Questions", url: "https://www.geeksforgeeks.org/dsa/top-50-string-coding-problems-for-interviews/" },
        { name: "LeetCode 75", url: "https://leetcode.com/studyplan/leetcode-75/" },
        { name: "LeetCode 150", url: "https://leetcode.com/studyplan/top-interview-150/" },
    ],

    tips: [
        "Focus on patterns, not just isolated problems",
        "Practice LeetCode Easy/Medium per category",
        "Prioritize Tier 1 & 2 for ₹10-15 LPA roles",
        "Tier 3 & 4 for top companies",
        "You don't need to know everything — just the right things",
    ],
};

export const mysqlRoadmap = {
    title: "🐬 MySQL One-Shot",
    subtitle: "Backend Engineering",
    intro: "Master MySQL from basic queries to advanced indexing, normalization, and performance tuning for scalable backend systems.",
    isDemo: true,
    primer: {
        title: "Database Fundamentals",
        description: "Understand ACID properties, CAP theorem basics, and Relational Model concepts before diving in.",
        link: "https://dev.to/ankushsinghgandhi/database-interactions-acid-part-1-103o"
    },
    tiers: [
        {
            name: "Phase 1: The Basics (SQL)",
            emoji: "📝",
            weightage: "30%",
            description: "Core SQL syntax and operations.",
            topics: [
                { title: "DDL & DML", items: ["CREATE, ALTER, DROP", "INSERT, UPDATE, DELETE", "Constraints (PK, FK, Unique)"] },
                { title: "Basic Queries", items: ["SELECT, WHERE, LIMIT", "ORDER BY, GROUP BY, HAVING", "DISTINCT, Aliases"] },
                { title: "Joins", items: ["INNER, LEFT, RIGHT, FULL Joins", "Cross Join & Self Join", "UNION & UNION ALL"] }
            ]
        },
        {
            name: "Phase 2: Database Design",
            emoji: "📐",
            weightage: "25%",
            description: "Structuring data efficiently.",
            topics: [
                { title: "Normalization", items: ["1NF, 2NF, 3NF, BCNF", "Denormalization trade-offs"] },
                { title: "Relationships", items: ["One-to-One, One-to-Many", "Many-to-Many (Junction Tables)"] },
                { title: "ER Diagrams", items: ["Entities & Attributes", "Cardinality"] }
            ]
        },
        {
            name: "Phase 3: Performance & Internals",
            emoji: "⚡",
            weightage: "30%",
            description: "What makes or breaks a system at scale.",
            topics: [
                { title: "Indexing", items: ["B-Tree vs Hash Indexes", "Clustered vs Non-Clustered", "Composite Indexes", "Covering Indexes"] },
                { title: "Transactions", items: ["ACID Properties", "Isolation Levels", "Locks (Row vs Table)"] },
                { title: "Query Optimization", items: ["EXPLAIN ANALYZE", "Slow Query Log", "N+1 Problem"] }
            ]
        },
        {
            name: "Phase 4: Advanced",
            emoji: "🔧",
            weightage: "15%",
            description: "For high-scale systems.",
            topics: [
                { title: "Replication", items: ["Master-Slave", "Master-Master"] },
                { title: "Sharding", items: ["Horizontal vs Vertical", "Consistent Hashing"] },
                { title: "Views & Procs", items: ["Stored Procedures", "Triggers", "Views & Materialized Views"] }
            ]
        }
    ],
    cheatSheets: [
        {
            category: "Essential Commands",
            content: [
                { cmd: "SELECT * FROM table", desc: "Select all columns" },
                { cmd: "INSERT INTO table (col) VALUES (val)", desc: "Insert row" },
                { cmd: "UPDATE table SET col=val WHERE id=1", desc: "Update row" },
                { cmd: "DELETE FROM table WHERE id=1", desc: "Delete row" }
            ]
        },
        {
            category: "Joins Cheatsheet",
            content: [
                { cmd: "INNER JOIN", desc: "Matches in both tables" },
                { cmd: "LEFT JOIN", desc: "All from left, matches from right" },
                { cmd: "RIGHT JOIN", desc: "All from right, matches from left" },
                { cmd: "FULL JOIN", desc: "Matches in either table" }
            ]
        },
        {
            category: "Index & Performance",
            content: [
                { cmd: "CREATE INDEX idx_name ON table(col)", desc: "Create B-Tree index" },
                { cmd: "EXPLAIN SELECT ...", desc: "Analyze query execution plan" },
                { cmd: "SHOW PROCESSLIST", desc: "View running queries" }
            ]
        }
    ],
    practiceLinks: [
        { name: "SQLZoo", url: "https://sqlzoo.net/" },
        { name: "LeetCode Database Problems", url: "https://leetcode.com/problemset/database/" },
        { name: "MySQL Documentation", url: "https://dev.mysql.com/doc/" }
    ],
    tips: [
        "Always index columns used in WHERE, JOIN, and ORDER BY",
        "Avoid SELECT * in production",
        "Understand the difference between clustered and secondary indexes",
        "Learn how isolation levels affect concurrency"
    ]
};

export const redisRoadmap = {
    title: "⚡ Redis One-Shot",
    subtitle: "High-Performance Caching",
    intro: "Deep dive into Redis for caching, pub/sub, queues, and distributed locking to build lightning-fast applications.",
    isDemo: true,
    primer: {
        title: "Why Redis?",
        description: "Understand the difference between Disk-based DBs and In-memory stores, and when to use Redis.",
        link: "https://redis.io/docs/about/"
    },
    tiers: [
        {
            name: "Phase 1: Core Data Structures",
            emoji: "🧱",
            weightage: "40%",
            description: "Redis is more than just key-value strings.",
            topics: [
                { title: "Strings", items: ["SET, GET, INCR, DECR", "TTL (Time To Live)", "NX/XX options"] },
                { title: "Lists", items: ["LPUSH/RPUSH, LPOP/RPOP", "Blocking operations (BLPOP)", "Using as Queues"] },
                { title: "Hashes", items: ["HSET, HGET, HGETALL", "Storing objects"] },
                { title: "Sets", items: ["SADD, SREM, SISMEMBER", "Intersections & Unions"] },
                { title: "Sorted Sets", items: ["ZADD, ZRANGE, ZRANK", "Leaderboards"] }
            ]
        },
        {
            name: "Phase 2: Advanced Features",
            emoji: "🛠️",
            weightage: "30%",
            description: "Powerful patterns for real-world apps.",
            topics: [
                { title: "Pub/Sub", items: ["SUBSCRIBE, PUBLISH", "Real-time messaging"] },
                { title: "Transactions", items: ["MULTI, EXEC, DISCARD", "Optimistic locking with WATCH"] },
                { title: "Pipeling", items: ["Batching commands for performance"] }
            ]
        },
        {
            name: "Phase 3: Persistence & Scaling",
            emoji: "💾",
            weightage: "20%",
            description: "Keeping data safe and available.",
            topics: [
                { title: "Persistence", items: ["RDB (Snapshots)", "AOF (Append Only File)"] },
                { title: "Replication", items: ["Master-Replica setup"] },
                { title: "Eviction Policies", items: ["LRU, LFU, TTL", "Maxmemory settings"] }
            ]
        },
        {
            name: "Phase 4: Use Cases",
            emoji: "💡",
            weightage: "10%",
            description: "Where to actually use it.",
            topics: [
                { title: "Caching", items: ["Cache-aside pattern", "Write-through/Write-back"] },
                { title: "Session Store", items: ["Managing user sessions"] },
                { title: "Rate Limiting", items: ["Fixed Window", "Sliding Window"] },
                { title: "Distributed Locks", items: ["Redlock algorithm"] }
            ]
        }
    ],
    cheatSheets: [
        {
            category: "String Commands",
            content: [
                { cmd: "SET key value [EX seconds]", desc: "Set key with optional expiry" },
                { cmd: "GET key", desc: "Get value" },
                { cmd: "INCR key", desc: "Increment integer value" }
            ]
        },
        {
            category: "List & Hash Commands",
            content: [
                { cmd: "LPUSH key value", desc: "Push to left of list" },
                { cmd: "RPOP key", desc: "Pop from right of list" },
                { cmd: "HSET key field value", desc: "Set hash field" },
                { cmd: "HGETALL key", desc: "Get all fields in hash" }
            ]
        },
        {
            category: "Set & Sorted Set",
            content: [
                { cmd: "SADD key member", desc: "Add to set" },
                { cmd: "SMEMBERS key", desc: "List all set members" },
                { cmd: "ZADD key score member", desc: "Add to sorted set" },
                { cmd: "ZRANGE key 0 -1", desc: "Get all members by rank" }
            ]
        }
    ],
    practiceLinks: [
        { name: "Try Redis", url: "https://try.redis.io/" },
        { name: "Redis Patterns", url: "https://redis.io/docs/manual/patterns/" }
    ],
    tips: [
        "Redis is single-threaded; avoid slow O(N) commands like KEYS *",
        "Use Hashes to save memory over simple keys",
        "Always set TTLs for cache data to avoid memory leaks",
        "Understand eventual consistency in replication"
    ]
};

export const djangoRoadmap = {
    title: "🎸 Django ORM One-Shot",
    subtitle: "Advanced Querying",
    intro: "Master the Django Object-Relational Mapper to write efficient, clean, and optimized database queries.",
    isDemo: true,
    primer: {
        title: "Django Models",
        description: "Review model definition, fields, and Meta options.",
        link: "https://docs.djangoproject.com/en/stable/topics/db/models/"
    },
    tiers: [
        {
            name: "Phase 1: Basic Querying",
            emoji: "🔍",
            weightage: "30%",
            description: "Fetching standard data.",
            topics: [
                { title: "Methods", items: ["filter(), exclude(), get()", "all(), count(), exists()"] },
                { title: "Lookups", items: ["__exact, __icontains", "__gt, __lt, __range", "__isnull"] },
                { title: "Slicing", items: ["Limiting QuerySets (LIMIT/OFFSET)"] }
            ]
        },
        {
            name: "Phase 2: Relationships",
            emoji: "🔗",
            weightage: "25%",
            description: "Working with related data.",
            topics: [
                { title: "Spanning Relationships", items: ["Filtering across FKs (author__name)"] },
                { title: "Reverse Lookups", items: ["_set (author.book_set.all)"] },
                { title: "Related Managers", items: ["add(), create(), remove()"] }
            ]
        },
        {
            name: "Phase 3: Optimization (Vital)",
            emoji: "🚀",
            weightage: "30%",
            description: "Avoiding the N+1 problem.",
            topics: [
                { title: "select_related", items: ["For FK and OneToOne (SQL JOIN)"] },
                { title: "prefetch_related", items: ["For ManyToMany and Reverse FK (Python Join)"] },
                { title: "values() & values_list()", items: ["Fetching only needed columns"] },
                { title: "iterator()", items: ["Memory efficient iteration"] }
            ]
        },
        {
            name: "Phase 4: Advanced Tools",
            emoji: "🛠️",
            weightage: "15%",
            description: "Complex aggregations.",
            topics: [
                { title: "Aggregation", items: ["Annotate vs Aggregate", "Sum, Avg, Count, Max"] },
                { title: "Q Objects", items: ["Complex OR queries (Q(a)|Q(b))"] },
                { title: "F Expressions", items: ["Referencing fields in validation/updates"] },
                { title: "Raw SQL", items: ["Manager.raw()", "cursor.execute()"] }
            ]
        }
    ],
    cheatSheets: [
        {
            category: "QuerySet Methods",
            content: [
                { cmd: "Model.objects.filter(x=1)", desc: "Return matching objects" },
                { cmd: "Model.objects.get(id=1)", desc: "Return single object (or error)" },
                { cmd: "Model.objects.create(x=1)", desc: "Create and save object" },
                { cmd: "Model.objects.all().order_by('-date')", desc: "Sort results" }
            ]
        },
        {
            category: "Field Lookups",
            content: [
                { cmd: "name__icontains='john'", desc: "Case-insensitive contains" },
                { cmd: "age__gte=18", desc: "Greater than or equal to" },
                { cmd: "date__year=2023", desc: "Date part matching" },
                { cmd: "category__in=[1, 2]", desc: "Check if in list" }
            ]
        },
        {
            category: "Optimization Tools",
            content: [
                { cmd: "select_related('author')", desc: "Optimize Forward FK" },
                { cmd: "prefetch_related('tags')", desc: "Optimize Reverse/M2M" },
                { cmd: "only('name', 'id')", desc: "Fetch specific columns" },
                { cmd: "defer('large_text_field')", desc: "Don't fetch column" }
            ]
        }
    ],
    practiceLinks: [
        { name: "Django Database API", url: "https://docs.djangoproject.com/en/stable/topics/db/queries/" },
        { name: "Optimization Guide", url: "https://docs.djangoproject.com/en/stable/topics/db/optimization/" }
    ],
    tips: [
        "Use select_related/prefetch_related to kill N+1 problems",
        "Use index_together or unique_together in Meta",
        "Check query performance with django-debug-toolbar",
        "Don't use len(queryset); use queryset.count()"
    ]
};

export const systemDesignRoadmap = {
    title: "🏗️ System Design Primer",
    subtitle: "Scalable Architecture",
    intro: "A crash course on designing large-scale distributed systems. Essential for SDE-2+ interviews.",
    isDemo: true,
    primer: {
        title: "Scale Cube",
        description: "Understanding X, Y, and Z axis scaling.",
        link: "https://en.wikipedia.org/wiki/Scale_cube"
    },
    tiers: [
        {
            name: "Phase 1: Core Concepts",
            emoji: "🧱",
            weightage: "25%",
            description: "The vocabulary of systems.",
            topics: [
                { title: "Scaling", items: ["Vertical vs Horizontal Scaling"] },
                { title: "Load Balancing", items: ["L4 vs L7 LB", "Algorithms (Round Robin, etc.)"] },
                { title: "CAP Theorem", items: ["Consistency, Availability, Partition Tolerance"] }
            ]
        },
        {
            name: "Phase 2: Data Handling",
            emoji: "💾",
            weightage: "30%",
            description: "Managing data at scale.",
            topics: [
                { title: "Databases", items: ["SQL vs NoSQL (Document, Column, K-V)"] },
                { title: "Replication", items: ["Master-Slave, Multi-Master"] },
                { title: "Sharding", items: ["Partitioning strategies", "Consistent Hashing"] },
                { title: "Caching", items: ["CDN, Redis/Memcached", "Eviction policies"] }
            ]
        },
        {
            name: "Phase 3: Communication",
            emoji: "📡",
            weightage: "20%",
            description: "How services talk.",
            topics: [
                { title: "Protocols", items: ["REST, GraphQL, gRPC", "WebSockets"] },
                { title: "Message Queues", items: ["Kafka, RabbitMQ", "Pub/Sub models"] },
                { title: "Polling", items: ["Short Polling, Long Polling, SSE"] }
            ]
        },
        {
            name: "Phase 4: Common Problems",
            emoji: "🧩",
            weightage: "25%",
            description: "Standard interview questions.",
            topics: [
                { title: "URL Shortener", items: ["Unique ID generation", "Redirection"] },
                { title: "Rate Limited", items: ["Algorithms, Distributed counting"] },
                { title: "Chat System", items: ["Real-time delivery, Presence"] },
                { title: "Unique IDs", items: ["Snowflake ID, UUID"] }
            ]
        }
    ],
    cheatSheets: [
        {
            category: "Numbers to Know",
            content: [
                { cmd: "L1 cache ref", desc: "0.5 ns" },
                { cmd: "Main memory ref", desc: "100 ns" },
                { cmd: "Send 1KB over 1Gbps", desc: "10 us" },
                { cmd: "Disk seek", desc: "10 ms (SLOW!)" }
            ]
        },
        {
            category: "Availability",
            content: [
                { cmd: "99% (Two 9s)", desc: "3.65 days downtime/year" },
                { cmd: "99.9% (Three 9s)", desc: "8.77 hours downtime/year" },
                { cmd: "99.99% (Four 9s)", desc: "52.6 minutes downtime/year" },
                { cmd: "99.999% (Five 9s)", desc: "5.26 mins downtime/year" }
            ]
        },
        {
            category: "Back of Envelope",
            content: [
                { cmd: "DAU to Request/sec", desc: "DAU * req_per_user / 86400" },
                { cmd: "Storage Est.", desc: "write_per_sec * size * retention" },
                { cmd: "Bandwidth Est.", desc: "req_per_sec * req_size" }
            ]
        }
    ],
    practiceLinks: [
        { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
        { name: "Grokking System Design", url: "https://www.educative.io/courses/grokking-the-system-design-interview" }
    ],
    tips: [
        "Always start with requirements (Functional & Non-Functional)",
        "Back of the envelope calculations are crucial",
        "Discuss trade-offs; there is no perfect system",
        "Start simple, then identify bottlenecks and scale"
    ]
};
